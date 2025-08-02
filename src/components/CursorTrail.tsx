import React, { useEffect, useState, useCallback, useRef } from 'react';

interface TrailPoint {
  x: number;
  y: number;
  id: number;
  timestamp: number;
  velocity: number;
}

export const CursorTrail: React.FC = () => {
  const [trail, setTrail] = useState<TrailPoint[]>([]);
  const lastPositionRef = useRef({ x: 0, y: 0, timestamp: 0 });
  const animationFrameRef = useRef<number>();
  const pointIdRef = useRef(0);
  const trailRef = useRef<TrailPoint[]>([]);

  const updateTrail = useCallback((e: MouseEvent) => {
    const now = performance.now();
    const timeDelta = now - lastPositionRef.current.timestamp;
    
    if (timeDelta < 16) return; // Throttle to ~60fps
    
    const velocity = Math.sqrt(
      Math.pow(e.clientX - lastPositionRef.current.x, 2) + 
      Math.pow(e.clientY - lastPositionRef.current.y, 2)
    ) / Math.max(timeDelta, 1);

    const newPoint: TrailPoint = {
      x: e.clientX,
      y: e.clientY,
      id: pointIdRef.current++,
      timestamp: now,
      velocity: Math.min(velocity * 10, 20) // Normalize velocity
    };

    lastPositionRef.current = { x: e.clientX, y: e.clientY, timestamp: now };
    
    // Update ref immediately for smooth animation
    trailRef.current = [...trailRef.current.slice(-12), newPoint];
    setTrail(trailRef.current);
  }, []);

  const animate = useCallback(() => {
    const now = performance.now();
    const filtered = trailRef.current.filter(point => now - point.timestamp < 600);
    
    if (filtered.length !== trailRef.current.length) {
      trailRef.current = filtered;
      setTrail(filtered);
    }
    
    animationFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    document.addEventListener('mousemove', updateTrail, { passive: true });
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', updateTrail);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [updateTrail, animate]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <svg className="w-full h-full" style={{ willChange: 'transform' }}>
        <defs>
          <linearGradient id="smoothTrailGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0)" />
            <stop offset="20%" stopColor="rgba(0, 255, 255, 0.8)" />
            <stop offset="50%" stopColor="rgba(0, 200, 50, 1)" />
            <stop offset="80%" stopColor="rgba(0, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0)" />
          </linearGradient>
          <filter id="smoothGlow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main trail lines */}
        {trail.map((point, index) => {
          if (index === 0) return null;
          const prevPoint = trail[index - 1];
          const opacity = Math.pow((trail.length - index) / trail.length, 0.6);
          const strokeWidth = Math.min(3, Math.max(0.5, point.velocity * 0.3)) * opacity;
          
          return (
            <line
              key={point.id}
              x1={prevPoint.x}
              y1={prevPoint.y}
              x2={point.x}
              y2={point.y}
              stroke="url(#smoothTrailGradient)"
              strokeWidth={strokeWidth}
              opacity={opacity}
              filter="url(#smoothGlow)"
              strokeLinecap="round"
              style={{ willChange: 'opacity' }}
            />
          );
        })}

        {/* Core particles */}
        {trail.slice(-6).map((point, index) => {
          const opacity = Math.pow((6 - index) / 6, 0.8);
          const size = 1 + opacity * 2;
          
          return (
            <circle
              key={`particle-${point.id}`}
              cx={point.x}
              cy={point.y}
              r={size}
              fill="rgba(0, 255, 255, 0.9)"
              opacity={opacity}
              filter="url(#smoothGlow)"
              style={{ willChange: 'opacity' }}
            />
          );
        })}
      </svg>
    </div>
  );
};