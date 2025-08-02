import React, { useEffect, useRef } from 'react';

export const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = Math.max(window.innerHeight, document.documentElement.scrollHeight);
    };

    resizeCanvas();

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = Math.random() * -100;
    }

    const draw = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + 'px JetBrains Mono, monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        
        // Create gradient effect for each character
        const gradient = ctx.createLinearGradient(0, drops[i] * fontSize - 20, 0, drops[i] * fontSize + 20);
        gradient.addColorStop(0, 'rgba(0, 255, 65, 0.1)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 65, 0.8)');
        gradient.addColorStop(1, 'rgba(0, 255, 65, 0.1)');
        
        ctx.fillStyle = gradient;
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Add glow effect for leading characters
        if (Math.random() > 0.98) {
          ctx.shadowColor = '#00ff41';
          ctx.shadowBlur = 10;
          ctx.fillStyle = '#00ff41';
          ctx.fillText(text, i * fontSize, drops[i] * fontSize);
          ctx.shadowBlur = 0;
        }

        // Reset drops when they reach bottom or randomly
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = Math.random() * -100;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      resizeCanvas();
      // Recalculate columns when window resizes
      const newColumns = Math.floor(canvas.width / fontSize);
      if (newColumns !== columns) {
        drops.length = 0;
        for (let x = 0; x < newColumns; x++) {
          drops[x] = Math.random() * -100;
        }
      }
    };

    const handleScroll = () => {
      // Update canvas height on scroll to cover entire document
      const newHeight = Math.max(window.innerHeight, document.documentElement.scrollHeight);
      if (canvas.height !== newHeight) {
        canvas.height = newHeight;
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-0 opacity-15"
      style={{ 
        background: 'transparent',
        width: '100vw',
        minHeight: '100vh'
      }}
    />
  );
};