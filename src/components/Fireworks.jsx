import React, { useRef, useEffect } from 'react';
import confetti from 'canvas-confetti';

const Fireworks = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const myConfetti = confetti.create(canvasRef.current, {
      resize: true,
      useWorker: true,
    });

    myConfetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    return () => {
      myConfetti.reset();
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }} />;
};

export default Fireworks;
