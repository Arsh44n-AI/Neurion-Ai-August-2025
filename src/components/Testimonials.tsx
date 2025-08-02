import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechCorp Solutions",
      content: "Neurion AI's automation solutions transformed our business operations. We achieved 300% ROI within 90 days and significantly improved our customer satisfaction rates.",
      rating: 5,
      avatar: "SC",
      company: "TechCorp Solutions"
    },
    {
      name: "Michael Rodriguez",
      role: "COO, RetailMax",
      content: "The intelligent chatbot system reduced our customer service costs by 60% while maintaining 95% customer satisfaction. Exceptional results and professional service.",
      rating: 4.5,
      avatar: "MR",
      company: "RetailMax"
    },
    {
      name: "Dr. Emily Watson",
      role: "Director, HealthFirst Clinic",
      content: "The smart scheduling system revolutionized our patient management. We're now serving 200% more patients with the same staff and reduced no-shows by 75%.",
      rating: 4.7,
      avatar: "EW",
      company: "HealthFirst Clinic"
    },
    {
      name: "David Kim",
      role: "Marketing Director, GrowthCo",
      content: "Neurion AI's lead generation system identified high-quality prospects we never would have found manually. Our conversion rates increased by 250%.",
      rating: 5,
      avatar: "DK",
      company: "GrowthCo"
    },
    {
      name: "Lisa Thompson",
      role: "Operations Manager, ServicePro",
      content: "The email automation platform personalized our communications at scale. We saw a 180% increase in engagement rates and 40% boost in sales.",
      rating: 4.2,
      avatar: "LT",
      company: "ServicePro"
    },
    {
      name: "James Wilson",
      role: "CTO, InnovateTech",
      content: "Working with Neurion AI was seamless. Their team understood our technical requirements and delivered a solution that exceeded our expectations.",
      rating: 4.1,
      avatar: "JW",
      company: "InnovateTech"
    }
  ];

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      <NeonBackground variant="testimonials" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> CLIENT TESTIMONIALS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
            <TypewriterText text="WHAT OUR CLIENTS SAY" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
            <TypewriterText 
              text="Hear from business leaders who have transformed their operations with Neurion AI solutions."
              speed={40}
            />
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-400 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/30">
              <div className="flex items-center mb-4">
                <Quote className="w-8 h-8 text-cyan-400 opacity-60" />
              </div>
              
              <div className="flex mb-4">
                {[...Array(Math.round(testimonial.rating))].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-green-300 mb-6 leading-relaxed font-mono text-sm" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)' }}>
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full flex items-center justify-center text-black font-bold mr-4 border border-cyan-400 shadow-lg shadow-cyan-400/40">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-white font-mono" style={{ textShadow: '0 0 10px rgba(255, 255, 255, 0.4)' }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-green-300 font-mono">
                    {testimonial.role}
                  </p>
                  <p className="text-xs text-cyan-400 font-mono" style={{ textShadow: '0 0 8px rgba(0, 255, 255, 0.6)' }}>
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};