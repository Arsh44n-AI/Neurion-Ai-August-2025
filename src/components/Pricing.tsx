import React from 'react';
import { Check, Star, Zap } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';

export const Pricing: React.FC = () => {
  const plans = [
    {
      name: "STARTER",
      price: "$2,999",
      period: "one-time",
      description: "Perfect for small businesses looking to automate basic processes",
      features: [
        "AI Chatbot Implementation",
        "Basic Lead Capture",
        "Email Automation (up to 1,000 contacts)",
        "Standard Analytics Dashboard",
        "Email Support",
        "30-day Implementation"
      ],
      popular: false,
      cta: "INITIALIZE"
    },
    {
      name: "PROFESSIONAL",
      price: "$7,999",
      period: "one-time",
      description: "Comprehensive AI automation for growing businesses",
      features: [
        "Advanced AI Chatbot with NLP",
        "Intelligent Lead Scoring",
        "Email Automation (up to 10,000 contacts)",
        "Smart Scheduling System",
        "Custom Analytics Dashboard",
        "Social Media Automation",
        "Priority Support",
        "60-day Implementation",
        "Training & Onboarding"
      ],
      popular: true,
      cta: "MOST POPULAR"
    },
    {
      name: "ENTERPRISE",
      price: "CUSTOM",
      period: "pricing",
      description: "Full-scale AI transformation for large organizations",
      features: [
        "Complete AI Automation Suite",
        "Custom AI Model Development",
        "Unlimited Contacts & Automation",
        "Advanced Predictive Analytics",
        "Multi-platform Integration",
        "Dedicated Account Manager",
        "24/7 Priority Support",
        "Custom Implementation Timeline",
        "Ongoing Optimization",
        "White-label Options"
      ],
      popular: false,
      cta: "CONTACT SALES"
    }
  ];

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <NeonBackground variant="pricing" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> PRICING PROTOCOLS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
            <TypewriterText text="CHOOSE YOUR AI SOLUTION" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
            <TypewriterText 
              text="Transparent pricing with no hidden fees. All plans include implementation, training, and ongoing support."
              speed={40}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative bg-black/80 backdrop-blur-sm rounded-2xl p-8 border transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl ${
                plan.popular 
                  ? 'border-cyan-400 shadow-xl shadow-cyan-500/30' 
                  : 'border-cyan-400/40 hover:border-cyan-400 hover:shadow-cyan-400/30'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-400 to-green-400 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center font-mono border border-cyan-400 shadow-lg shadow-cyan-400/50">
                    <Star className="w-4 h-4 mr-1" />
                    MOST POPULAR
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2 font-mono" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}>
                  {plan.name}
                </h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-cyan-400 font-mono" style={{ textShadow: '0 0 20px rgba(0, 255, 255, 0.6)' }}>
                    {plan.price}
                  </span>
                  <span className="text-green-300 ml-2 font-mono">
                    {plan.period}
                  </span>
                </div>
                <p className="text-green-300 font-mono text-sm" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)' }}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-green-300 font-mono text-sm" style={{ textShadow: '0 0 5px rgba(0, 200, 50, 0.4)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-4 px-6 rounded-lg font-bold transition-all duration-300 font-mono hover:scale-105 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-400 to-green-400 text-black hover:shadow-lg hover:shadow-cyan-500/50 border border-cyan-400'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400/20'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};