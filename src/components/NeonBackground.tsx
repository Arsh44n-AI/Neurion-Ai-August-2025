import React from 'react';

interface NeonBackgroundProps {
  variant?: 'hero' | 'services' | 'cases' | 'testimonials' | 'pricing' | 'protocols' | 'contact';
}

export const NeonBackground: React.FC<NeonBackgroundProps> = ({ variant = 'hero' }) => {
  const getGradientColors = () => {
    switch (variant) {
      case 'services':
        return 'from-cyan-500/20 via-black to-green-500/20';
      case 'cases':
        return 'from-green-500/20 via-black to-cyan-500/20';
      case 'testimonials':
        return 'from-purple-500/20 via-black to-cyan-500/20';
      case 'pricing':
        return 'from-blue-500/20 via-black to-green-500/20';
      case 'protocols':
        return 'from-red-500/20 via-black to-cyan-500/20';
      case 'contact':
        return 'from-green-500/20 via-black to-blue-500/20';
      default:
        return 'from-cyan-500/25 via-black to-green-500/25';
    }
  };

  const getParticleCount = () => {
    switch (variant) {
      case 'hero':
        return 30;
      default:
        return 20;
    }
  };

  const getAccentColor = () => {
    switch (variant) {
      case 'services':
        return '#00ff65';
      case 'cases':
        return '#00ff41';
      case 'testimonials':
        return '#8a2be2';
      case 'pricing':
        return '#0080ff';
      case 'protocols':
        return '#ff4444';
      case 'contact':
        return '#00ff80';
      default:
        return '#00ffff';
    }
  };

  return (
    <>
      {/* Main gradient background with enhanced neon effect */}
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColors()}`}></div>
      <div className="absolute inset-0 bg-black/80"></div>
      
      {/* Enhanced neon grid overlay */}
      <div className="absolute inset-0 opacity-15">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(${getAccentColor()}40 1px, transparent 1px),
            linear-gradient(90deg, ${getAccentColor()}40 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          filter: 'drop-shadow(0 0 2px ' + getAccentColor() + ')'
        }}></div>
      </div>

      {/* Floating neon particles with glow */}
      <div className="absolute inset-0">
        {[...Array(getParticleCount())].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-bounce"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: '2px',
              height: '2px',
              backgroundColor: getAccentColor(),
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
              boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}80, 0 0 12px ${getAccentColor()}40`,
              opacity: 0.8
            }}
          ></div>
        ))}
      </div>

      {/* Neon scan lines with enhanced glow */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px animate-pulse"
            style={{
              top: `${i * 16.67}%`,
              width: '100%',
              background: `linear-gradient(90deg, transparent, ${getAccentColor()}80, transparent)`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: '4s',
              boxShadow: `0 0 4px ${getAccentColor()}`,
              filter: `drop-shadow(0 0 2px ${getAccentColor()})`
            }}
          ></div>
        ))}
      </div>

      {/* Enhanced neon corner accents */}
      <div className="absolute top-0 left-0 w-40 h-40 opacity-40">
        <div 
          className="absolute top-0 left-0 w-full h-0.5 animate-pulse"
          style={{
            background: `linear-gradient(90deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`
          }}
        ></div>
        <div 
          className="absolute top-0 left-0 w-0.5 h-full animate-pulse"
          style={{
            background: `linear-gradient(180deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '0.5s'
          }}
        ></div>
      </div>
      
      <div className="absolute top-0 right-0 w-40 h-40 opacity-40">
        <div 
          className="absolute top-0 right-0 w-full h-0.5 animate-pulse"
          style={{
            background: `linear-gradient(270deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '1s'
          }}
        ></div>
        <div 
          className="absolute top-0 right-0 w-0.5 h-full animate-pulse"
          style={{
            background: `linear-gradient(180deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '1.5s'
          }}
        ></div>
      </div>

      <div className="absolute bottom-0 left-0 w-40 h-40 opacity-40">
        <div 
          className="absolute bottom-0 left-0 w-full h-0.5 animate-pulse"
          style={{
            background: `linear-gradient(90deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute bottom-0 left-0 w-0.5 h-full animate-pulse"
          style={{
            background: `linear-gradient(0deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '2.5s'
          }}
        ></div>
      </div>

      <div className="absolute bottom-0 right-0 w-40 h-40 opacity-40">
        <div 
          className="absolute bottom-0 right-0 w-full h-0.5 animate-pulse"
          style={{
            background: `linear-gradient(270deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '3s'
          }}
        ></div>
        <div 
          className="absolute bottom-0 right-0 w-0.5 h-full animate-pulse"
          style={{
            background: `linear-gradient(0deg, ${getAccentColor()}, transparent)`,
            boxShadow: `0 0 4px ${getAccentColor()}, 0 0 8px ${getAccentColor()}60`,
            animationDelay: '3.5s'
          }}
        ></div>
      </div>

      {/* Central neon pulse effect */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10">
        <div 
          className="w-96 h-96 rounded-full animate-pulse"
          style={{
            background: `radial-gradient(circle, ${getAccentColor()}20 0%, transparent 70%)`,
            animationDuration: '6s'
          }}
        ></div>
      </div>
    </>
  );
};