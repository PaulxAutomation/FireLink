import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function BackgroundEffects() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const particleIdRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;
      const rect = glowRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      glowRef.current.style.setProperty('--mouse-x', `${x}px`);
      glowRef.current.style.setProperty('--mouse-y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const createParticle = () => {
      const id = particleIdRef.current++;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const size = Math.random() * 3 + 1;
      const duration = Math.random() * 15000 + 10000;
      const delay = Math.random() * 500;

      setParticles(prev => [...prev, { id, x, y, size, duration, delay }]);

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id));
      }, duration + delay);
    };

    for (let i = 0; i < 150; i++) {
      createParticle();
    }

    const interval = setInterval(() => {
      if (particles.length < 200) {
        createParticle();
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black" />
      <div className="noise absolute inset-0 opacity-50" />
      <div className="glow-points">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="glow-point"
            style={{
              '--x': `${(i % 4) * 33}%`,
              '--y': `${Math.floor(i / 4) * 33}%`,
              '--opacity': `${0.05 + (i * 0.005)}`,
              '--scale': `${1 + (i * 0.1)}`,
              '--delay': `${i * 2}s`
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div 
        ref={glowRef}
        className="mouse-glow"
      />
      <div className="ambient-light" />
      <div className="particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              '--x': `${particle.x}%`,
              '--y': `${particle.y}%`,
              '--size': `${particle.size}px`,
              '--duration': `${particle.duration}ms`,
              '--delay': `${particle.delay}ms`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="vignette" />
    </div>
  );
}