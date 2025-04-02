import { useCallback } from "react";
import type { Container, Engine } from "@tsparticles/engine";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="fireParticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: "#00FFB2"
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "out"
            },
            random: true,
            speed: 0.5,
            straight: false
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 80
          },
          opacity: {
            value: 0.3,
            animation: {
              enable: true,
              speed: 0.5,
              minimumValue: 0.1
            }
          },
          size: {
            value: { min: 1, max: 3 },
            animation: {
              enable: true,
              speed: 2,
              minimumValue: 0.1
            }
          }
        },
        background: {
          color: {
            value: "transparent"
          }
        },
        detectRetina: true
      }}
    />
  );
}