import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useMediaQuery } from 'react-responsive';

const LetterAnimation = ({ 
  children, 
  index, 
  wordIndex, 
  isGlowing, 
  initialAnimationComplete 
}: { 
  children: string;
  index: number;
  wordIndex: number;
  isGlowing: boolean;
  initialAnimationComplete: boolean;
}) => {
  const delay = (wordIndex * 0.25 + index * 0.025);

  return (
    <motion.span
      className="relative inline-block"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.15,
        delay,
        ease: "easeOut"
      }}
    >
      <motion.span 
        className="relative z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.15,
          delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 z-0"
        initial={{ opacity: 0 }}
        animate={!initialAnimationComplete ? { opacity: [0, 1, 0] } : { opacity: isGlowing ? 1 : 0 }}
        transition={!initialAnimationComplete ? {
          duration: 0.3,
          delay,
          ease: "easeOut"
        } : {
          duration: 0.3,
          ease: "easeInOut"
        }}
        style={{
          textShadow: '0 0 20px rgba(255,255,255,0.8), 0 0 40px rgba(255,255,255,0.4)'
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  );
};

export default function Home() {
  const heroTextDesktop = [
    "Your",
    "Partner",
    "in",
    "Sales",
    "Automation"
  ];

  const heroTextMobile = [
    "Your",
    "Partner",
    "in",
    "Sales",
    "Automation"
  ];

  const isMobile = useMediaQuery({ query: '(max-width: 640px)' });
  const heroText = isMobile ? heroTextMobile : heroTextDesktop;

  const [initialAnimationComplete, setInitialAnimationComplete] = useState(false);
  const [currentGlowIndex, setCurrentGlowIndex] = useState(-1);
  const totalLetters = heroText.join('').length;

  useEffect(() => {
    const totalWords = heroText.length;
    const lastWordLength = heroText[totalWords - 1].length;
    const totalAnimationTime = 
      (totalWords * 0.25) + // Word delays
      (lastWordLength * 0.025) + // Last word's letters
      0.15 + // Last letter animation duration
      0.1; // Buffer

    const timer = setTimeout(() => {
      setInitialAnimationComplete(true);
    }, totalAnimationTime * 1000);

    return () => clearTimeout(timer);
  }, [heroText]);

  useEffect(() => {
    if (!initialAnimationComplete) return;

    const interval = setInterval(() => {
      setCurrentGlowIndex(prev => {
        if (prev >= totalLetters - 1) {
          return -1; // Reset to start after pause
        }
        return prev + 1;
      });
    }, 150); // Slightly faster pace (0.15s per letter)

    return () => clearInterval(interval);
  }, [initialAnimationComplete, totalLetters]);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    button.style.setProperty('--mouse-x', `${x}%`);
    button.style.setProperty('--mouse-y', `${y}%`);
  };

  const handleConnectClick = () => {
    const formElement = document.querySelector('[data-tally-src]');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  let globalLetterIndex = -1;

  return (
    <section className="relative flex min-h-screen items-center justify-center px-6 py-32 lg:px-8">
      <div className="depth-gradient" />
      <div className="noise absolute inset-0" />
      
      <div className="relative z-10 mx-auto text-center">
        <div className="space-y-12 select-none">
          <h1 className={`relative mx-auto ${isMobile ? 'max-w-[40rem] text-5xl leading-[1.3] tracking-[-0.01em]' : 'max-w-[95rem] text-6xl leading-[1.15] tracking-[0.02em]'} font-sans font-bold sm:text-7xl lg:text-8xl`}>
            {heroText.map((word, wordIndex) => (
              <React.Fragment key={wordIndex}>
                <span className="inline-block mx-[0.08em]">
                  {word.split('').map((letter, letterIndex) => {
                    globalLetterIndex++;
                    return (
                      <LetterAnimation 
                        key={letterIndex} 
                        index={letterIndex} 
                        wordIndex={wordIndex}
                        isGlowing={initialAnimationComplete && globalLetterIndex === currentGlowIndex}
                        initialAnimationComplete={initialAnimationComplete}
                      >
                        {letter}
                      </LetterAnimation>
                    );
                  })}
                </span>
                {' '}
                {(wordIndex === 3 && !isMobile) && <br className="hidden sm:block" />}
              </React.Fragment>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.25, duration: 0.8 }}
            className="mx-auto max-w-4xl text-xl sm:text-2xl text-white/70 leading-relaxed"
          >
            {isMobile 
              ? "Scale faster, smarter, and more efficiently by integrating with Firelink's AI-powered sales systems, specifically designed to supercharge your team's results."
              : "Scale faster, smarter, and more efficiently by integrating with Firelink's AI-powered sales systems, specifically designed to supercharge your team's results."
            }
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.35, duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.button 
              onClick={handleConnectClick}
              onMouseMove={handleMouseMove}
              className="button-primary text-lg px-10 py-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="flex items-center gap-2">
                Let's Connect <ArrowRight className="h-5 w-5" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}