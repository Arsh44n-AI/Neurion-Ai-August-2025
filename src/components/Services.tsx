import React from 'react';
import { Bot, Users, Calendar, Globe, Brain, Mail, Share2, Database } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';

export const Services: React.FC = () => {
  const services = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "AI Lead Generation",
      description: "Intelligent lead capture and qualification systems that identify high-value prospects automatically.",
      features: ["Behavioral Analysis", "Lead Scoring", "Auto-Qualification", "CRM Integration"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Intelligent Chatbots",
      description: "Advanced conversational AI that handles customer inquiries with human-like understanding.",
      features: ["Natural Language Processing", "Multi-language Support", "24/7 Availability", "Learning Algorithms"],
      color: "from-green-500 to-cyan-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Smart Scheduling",
      description: "AI-powered appointment scheduling that optimizes calendars and reduces no-shows.",
      features: ["Calendar Optimization", "Automated Reminders", "Conflict Resolution", "Time Zone Management"],
      color: "from-yellow-500 to-green-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "AI Web Development",
      description: "Automated website creation and optimization using machine learning algorithms.",
      features: ["Responsive Design", "SEO Optimization", "Performance Analytics", "A/B Testing"],
      color: "from-red-500 to-yellow-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Strategy Consulting",
      description: "Expert guidance on implementing AI solutions tailored to your business needs.",
      features: ["Process Analysis", "ROI Forecasting", "Implementation Planning", "Training Programs"],
      color: "from-purple-500 to-cyan-500"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Automation",
      description: "Personalized email campaigns powered by machine learning for maximum engagement.",
      features: ["Personalization", "Send-time Optimization", "Content Generation", "Performance Tracking"],
      color: "from-cyan-500 to-green-500"
    },
    {
      icon: <Share2 className="w-8 h-8" />,
      title: "Social Media AI",
      description: "Automated social media management with intelligent content creation and scheduling.",
      features: ["Content Creation", "Optimal Posting Times", "Engagement Analysis", "Trend Monitoring"],
      color: "from-pink-500 to-cyan-500"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Analytics",
      description: "Advanced analytics and insights to drive data-driven decision making.",
      features: ["Predictive Analytics", "Real-time Dashboards", "Custom Reports", "Data Visualization"],
      color: "from-blue-500 to-purple-500"
    }
  ];

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <NeonBackground variant="services" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> AVAILABLE PROTOCOLS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
            <TypewriterText text="AI-POWERED SERVICES" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
            <TypewriterText 
              text="Comprehensive AI automation solutions designed to transform your business operations and drive measurable growth."
              speed={40}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-400 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/30"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/60 shadow-lg shadow-cyan-400/40`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
                {service.title}
              </h3>
              <p className="text-green-300 mb-4 leading-relaxed font-mono text-sm" style={{ textShadow: '0 0 10px rgba(0, 200, 50, 0.5)', wordSpacing: 'normal', letterSpacing: '0.025em' }}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-cyan-300 font-mono" style={{ wordSpacing: 'normal', letterSpacing: '0.025em' }}>
                    <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3 flex-shrink-0 shadow-sm shadow-cyan-400/60"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};