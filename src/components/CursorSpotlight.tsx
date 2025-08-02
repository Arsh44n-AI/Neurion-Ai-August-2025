import React, { useEffect, useState, useCallback, useRef } from 'react';

export const CursorSpotlight: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const lastUpdateRef = useRef(0);

  const updatePosition = useCallback((e: MouseEvent) => {
    const now = performance.now();
    if (now - lastUpdateRef.current < 16) return; // 60fps throttle
    
    lastUpdateRef.current = now;
    setMousePosition({ x: e.clientX, y: e.clientY });
    setIsVisible(true);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updatePosition, { passive: true });
    document.addEventListener('mouseleave', () => setIsVisible(false));
    
    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', () => setIsVisible(false));
    };
  }, [updatePosition]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main spotlight */}
      <div
        className="fixed pointer-events-none z-30"
        style={{
          left: mousePosition.x - 150,
          top: mousePosition.y - 150,
          width: '300px',
          height: '300px',
          background: `radial-gradient(circle, 
            rgba(0, 255, 255, 0.2) 0%, 
            rgba(0, 200, 50, 0.15) 30%, 
            rgba(0, 255, 255, 0.1) 50%,
            transparent 70%)`,
          borderRadius: '50%',
          filter: 'blur(0.5px)',
          mixBlendMode: 'screen',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
      
      {/* Inner core */}
      <div
        className="fixed pointer-events-none z-31"
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: '100px',
          height: '100px',
          background: `radial-gradient(circle, 
            rgba(0, 255, 255, 0.4) 0%, 
            rgba(0, 200, 50, 0.3) 40%, 
            transparent 70%)`,
          borderRadius: '50%',
          mixBlendMode: 'screen',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
        }}
      />
    </>
  );
};