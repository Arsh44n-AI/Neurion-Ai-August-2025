import React, { useEffect, useState } from 'react';

interface Connection {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  opacity: number;
}

export const NeonConnections: React.FC = () => {
  const [connections, setConnections] = useState<Connection[]>([]);

  useEffect(() => {
    const generateConnections = () => {
      const newConnections: Connection[] = [];
      const numConnections = 8;

      for (let i = 0; i < numConnections; i++) {
        newConnections.push({
          id: `connection-${i}`,
          x1: Math.random() * window.innerWidth,
          y1: Math.random() * window.innerHeight,
          x2: Math.random() * window.innerWidth,
          y2: Math.random() * window.innerHeight,
          opacity: Math.random() * 0.3 + 0.1
        });
      }

      setConnections(newConnections);
    };

    generateConnections();
    const interval = setInterval(generateConnections, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      <svg className="w-full h-full">
        <defs>
          <linearGradient id="matrixNeonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0, 255, 255, 0.4)" />
            <stop offset="50%" stopColor="rgba(0, 255, 65, 0.4)" />
            <stop offset="100%" stopColor="rgba(0, 255, 255, 0.4)" />
          </linearGradient>
          <filter id="matrixGlow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        {connections.map(connection => (
          <line
            key={connection.id}
            x1={connection.x1}
            y1={connection.y1}
            x2={connection.x2}
            y2={connection.y2}
            stroke="url(#matrixNeonGradient)"
            strokeWidth="1"
            opacity={connection.opacity}
            filter="url(#matrixGlow)"
            className="animate-pulse"
          />
        ))}
      </svg>
    </div>
  );
};