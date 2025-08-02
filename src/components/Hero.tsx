import React from 'react';
import { ArrowRight, Zap, Shield, TrendingUp, Brain, Cpu, Network } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';

export const Hero: React.FC = () => {
  const metrics = [
    { value: "300%", label: "ROI Increase", icon: <TrendingUp className="w-5 h-5" /> },
    { value: "40%", label: "Cost Reduction", icon: <Shield className="w-5 h-5" /> },
    { value: "85%", label: "Automation Efficiency", icon: <Zap className="w-5 h-5" /> },
    { value: "60%", label: "Faster Processing", icon: <ArrowRight className="w-5 h-5" /> }
  ];

  return (
    <section className="pt-24 pb-20 relative overflow-hidden">
      <NeonBackground variant="hero" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase font-mono">
                <TypewriterText text=">>> ADVANCED AI AUTOMATION PROTOCOL INITIATED" delay={500} />
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white font-mono">
                <TypewriterText 
                  text="TRANSFORM YOUR BUSINESS WITH " 
                  delay={2000}
                  speed={80}
                />
                <br />
                <span 
                  className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-500 bg-clip-text text-transparent font-black tracking-wider"
                  style={{ 
                    textShadow: '0 0 30px rgba(0, 255, 255, 0.8), 0 0 60px rgba(0, 255, 255, 0.4), 0 0 90px rgba(0, 255, 255, 0.2)',
                    filter: 'contrast(1.3) brightness(1.2) saturate(1.4)',
                    WebkitTextStroke: '1px rgba(0, 255, 255, 0.3)',
                    fontSize: '1.1em',
                    letterSpacing: '0.05em'
                  }}
                >
                  <TypewriterText 
                    text="NEURION AI" 
                    delay={4500}
                    speed={120}
                  />
                </span>
              </h1>
              <p className="text-xl text-green-400 leading-relaxed font-mono font-medium" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7), 0 0 30px rgba(0, 200, 50, 0.3)' }}>
                <TypewriterText 
                  text="Deploy intelligent automation systems that deliver measurable results. Achieve up to 300% ROI within 90 days with our proven AI solutions."
                  delay={6000}
                  speed={30}
                />
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-black/80 backdrop-blur-sm rounded-lg p-4 text-center border border-cyan-400/40 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/30">
                  <div className="text-cyan-400 mb-2 flex justify-center">
                    {metric.icon}
                  </div>
                  <div className="text-2xl font-bold text-green-400 font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>{metric.value}</div>
                  <div className="text-xs text-cyan-300 font-mono">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-green-500 text-black px-8 py-4 rounded-lg text-lg font-bold flex items-center justify-center group hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 font-mono border border-cyan-400 hover:scale-105"
                style={{ textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}
              >
                INITIATE AI PROTOCOL
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-bold hover:bg-cyan-400/20 transition-all duration-300 font-mono hover:scale-105"
                style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}
              >
                EXPLORE MATRIX
              </a>
            </div>
          </div>

          {/* Right Column - 3D Matrix Animation */}
          <div className="relative h-96 lg:h-[600px] w-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-green-500/30 rounded-2xl blur-xl"></div>
            
            {/* 3D AI Brain Animation */}
            <div className="w-full h-full rounded-2xl relative z-10 bg-black/60 backdrop-blur-sm border border-cyan-400/60 flex items-center justify-center overflow-hidden">
              <div className="relative w-80 h-80">
                {/* Central Brain Icon */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-500 rounded-full flex items-center justify-center animate-pulse border-2 border-cyan-400 shadow-lg shadow-cyan-400/60">
                    <Brain className="w-8 h-8 text-black" />
                  </div>
                </div>

                {/* Orbiting Elements */}
                <div className="absolute inset-0 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center opacity-90 border border-cyan-400 shadow-lg shadow-cyan-400/40">
                      <Cpu className="w-6 h-6 text-black" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-400 rounded-full flex items-center justify-center opacity-80 border border-green-500 shadow-lg shadow-green-500/40">
                      <Network className="w-5 h-5 text-black" />
                    </div>
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-green-500 rounded-full flex items-center justify-center opacity-70 border border-yellow-400 shadow-lg shadow-yellow-400/40">
                      <Zap className="w-4 h-4 text-black" />
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2">
                    <div className="w-14 h-14 bg-gradient-to-r from-red-400 to-cyan-400 rounded-full flex items-center justify-center opacity-85 border border-red-400 shadow-lg shadow-red-400/40">
                      <Shield className="w-7 h-7 text-black" />
                    </div>
                  </div>
                </div>

                {/* Counter-rotating ring */}
                <div className="absolute inset-4 animate-spin opacity-60" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                  <div className="w-full h-full border-2 border-dashed border-cyan-400 rounded-full shadow-lg shadow-cyan-400/30"></div>
                </div>

                {/* Matrix-style floating particles */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-2 h-2 bg-green-500 rounded-full opacity-70 animate-bounce border border-green-500 shadow-sm shadow-green-500/60"
                      style={{
                        left: `${15 + (i * 7)}%`,
                        top: `${10 + (i * 6)}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '3s'
                      }}
                    ></div>
                  ))}
                </div>

                {/* Matrix connecting lines */}
                <div className="absolute inset-0 opacity-50">
                  <svg className="w-full h-full" viewBox="0 0 320 320">
                    <defs>
                      <linearGradient id="matrixLineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00ffff" />
                        <stop offset="50%" stopColor="#00c832" />
                        <stop offset="100%" stopColor="#00ffff" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M160,160 L160,40 M160,160 L280,160 M160,160 L160,280 M160,160 L40,160 M160,160 L240,80 M160,160 L240,240 M160,160 L80,240 M160,160 L80,80"
                      stroke="url(#matrixLineGradient)"
                      strokeWidth="2"
                      fill="none"
                      className="animate-pulse"
                      filter="drop-shadow(0 0 5px #00ffff)"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};