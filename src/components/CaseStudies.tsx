import React from 'react';
import { TrendingUp, Users, Clock, DollarSign } from 'lucide-react';
import { TypewriterText } from './TypewriterText';
import { NeonBackground } from './NeonBackground';

export const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      company: "TechCorp Solutions",
      industry: "Software Development",
      challenge: "Manual lead qualification consuming 40+ hours weekly",
      solution: "AI Lead Generation & Qualification System",
      results: [
        { metric: "300%", label: "ROI Increase", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "85%", label: "Time Saved", icon: <Clock className="w-4 h-4" /> },
        { metric: "250%", label: "Lead Quality", icon: <Users className="w-4 h-4" /> },
        { metric: "$2.4M", label: "Revenue Growth", icon: <DollarSign className="w-4 h-4" /> }
      ],
      testimonial: "Neurion AI transformed our lead generation process. We're now closing 3x more deals with half the effort.",
      author: "Sarah Chen, CEO"
    },
    {
      company: "RetailMax",
      industry: "E-commerce",
      challenge: "Customer service bottlenecks during peak seasons",
      solution: "Intelligent Chatbot & Automation Suite",
      results: [
        { metric: "60%", label: "Cost Reduction", icon: <DollarSign className="w-4 h-4" /> },
        { metric: "24/7", label: "Availability", icon: <Clock className="w-4 h-4" /> },
        { metric: "95%", label: "Customer Satisfaction", icon: <Users className="w-4 h-4" /> },
        { metric: "40%", label: "Response Time", icon: <TrendingUp className="w-4 h-4" /> }
      ],
      testimonial: "Our customer satisfaction scores increased by 95% while reducing operational costs significantly.",
      author: "Michael Rodriguez, COO"
    },
    {
      company: "HealthFirst Clinic",
      industry: "Healthcare",
      challenge: "Appointment scheduling inefficiencies and no-shows",
      solution: "Smart Scheduling & Patient Communication AI",
      results: [
        { metric: "75%", label: "No-show Reduction", icon: <TrendingUp className="w-4 h-4" /> },
        { metric: "90%", label: "Scheduling Efficiency", icon: <Clock className="w-4 h-4" /> },
        { metric: "200%", label: "Patient Throughput", icon: <Users className="w-4 h-4" /> },
        { metric: "$500K", label: "Annual Savings", icon: <DollarSign className="w-4 h-4" /> }
      ],
      testimonial: "The AI scheduling system revolutionized our operations. We're serving twice as many patients with the same staff.",
      author: "Dr. Emily Watson, Director"
    }
  ];

  return (
    <section id="case-studies" className="py-20 relative overflow-hidden">
      <NeonBackground variant="cases" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="text-cyan-400 font-semibold text-sm tracking-wide uppercase mb-4 font-mono">
            <TypewriterText text=">>> SUCCESS PROTOCOLS" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
            <TypewriterText text="REAL RESULTS FROM TOP CLIENTS" />
          </h2>
          <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
            <TypewriterText 
              text="See how businesses across industries have achieved remarkable growth with Neurion AI solutions."
              speed={40}
            />
          </p>
        </div>

        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/40 hover:border-cyan-400 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-400/30 hover:transform hover:-translate-y-1">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Company Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 font-mono" style={{ textShadow: '0 0 20px rgba(255, 255, 255, 0.4)' }}>
                      {study.company}
                    </h3>
                    <p className="text-cyan-400 font-semibold font-mono" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }}>
                      {study.industry}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-mono">CHALLENGE:</h4>
                    <p className="text-green-300 text-sm font-mono leading-relaxed" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)', wordSpacing: 'normal', letterSpacing: '0.025em' }}>
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-2 font-mono">SOLUTION:</h4>
                    <p className="text-green-300 text-sm font-mono leading-relaxed" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)', wordSpacing: 'normal', letterSpacing: '0.025em' }}>
                      {study.solution}
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="font-semibold text-white mb-4 font-mono">RESULTS:</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center p-3 bg-black/60 rounded-lg border border-cyan-400/40 hover:border-cyan-400/60 transition-colors">
                        <div className="text-cyan-400 mb-1 flex justify-center">
                          {result.icon}
                        </div>
                        <div className="text-2xl font-bold text-green-400 font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
                          {result.metric}
                        </div>
                        <div className="text-xs text-cyan-300 font-mono">
                          {result.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="space-y-4">
                  <h4 className="font-semibold text-white font-mono">TESTIMONIAL:</h4>
                  <blockquote className="text-green-300 italic font-mono leading-relaxed" style={{ textShadow: '0 0 8px rgba(0, 200, 50, 0.5)', wordSpacing: 'normal', letterSpacing: '0.025em' }}>
                    "{study.testimonial}"
                  </blockquote>
                  <p className="text-sm font-semibold text-cyan-400 font-mono" style={{ textShadow: '0 0 10px rgba(0, 255, 255, 0.6)' }}>
                    — {study.author}
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