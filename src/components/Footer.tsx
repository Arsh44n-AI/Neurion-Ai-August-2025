import React from 'react';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = {
    services: [
      { name: 'AI Lead Generation', href: '#services' },
      { name: 'Intelligent Chatbots', href: '#services' },
      { name: 'Smart Scheduling', href: '#services' },
      { name: 'AI Web Development', href: '#services' },
      { name: 'Email Automation', href: '#services' },
      { name: 'Social Media AI', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Case Studies', href: '#case-studies' },
      { name: 'Testimonials', href: '#testimonials' },
      { name: 'Careers', href: '#' },
      { name: 'Blog', href: '#' },
      { name: 'Press', href: '#' }
    ],
    resources: [
      { name: 'Documentation', href: '#documentation' },
      { name: 'API Reference', href: '#documentation' },
      { name: 'Support Center', href: '#' },
      { name: 'ROI Calculator', href: '#' },
      { name: 'Webinars', href: '#' },
      { name: 'White Papers', href: '#' }
    ],
    legal: [
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' },
      { name: 'Cookie Policy', href: '#' },
      { name: 'GDPR Compliance', href: '#' },
      { name: 'Security', href: '#' },
      { name: 'SLA', href: '#' }
    ]
  };

  const socialLinks = [
    { icon: <Linkedin className="w-5 h-5" />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
    { icon: <Github className="w-5 h-5" />, href: '#', label: 'GitHub' }
  ];

  return (
    <footer className="bg-black border-t border-cyan-400/40 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* COMMENTED OUT: Get in Touch Section */}
          {/*
          <div className="lg:col-span-4">
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 font-mono" style={{ textShadow: '0 0 30px rgba(255, 255, 255, 0.5)' }}>
                GET IN TOUCH
              </h3>
              <p className="text-xl text-green-300 max-w-3xl mx-auto font-mono" style={{ textShadow: '0 0 15px rgba(0, 200, 50, 0.7)' }}>
                Connect with our AI specialists and start your transformation journey today.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-400 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/60 shadow-lg shadow-cyan-400/40">
                  <Mail className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
                  Email Us
                </h4>
                <p className="text-cyan-400 font-medium mb-3 font-mono text-lg" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}>
                  hello@neurionai.com
                </p>
                <p className="text-green-300 leading-relaxed font-mono text-sm" style={{ textShadow: '0 0 10px rgba(0, 200, 50, 0.5)' }}>
                  Get in touch for general inquiries
                </p>
              </div>

              <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-400 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/60 shadow-lg shadow-cyan-400/40">
                  <Phone className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
                  Call Us
                </h4>
                <p className="text-cyan-400 font-medium mb-3 font-mono text-lg" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}>
                  +1 (555) 123-4567
                </p>
                <p className="text-green-300 leading-relaxed font-mono text-sm" style={{ textShadow: '0 0 10px rgba(0, 200, 50, 0.5)' }}>
                  Speak with our AI specialists
                </p>
              </div>

              <div className="group bg-black/80 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-400 cursor-pointer transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/30">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-green-400 rounded-xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform duration-300 border border-cyan-400/60 shadow-lg shadow-cyan-400/40">
                  <MapPin className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors font-mono" style={{ textShadow: '0 0 15px rgba(255, 255, 255, 0.4)' }}>
                  Visit Us
                </h4>
                <p className="text-cyan-400 font-medium mb-3 font-mono text-lg" style={{ textShadow: '0 0 15px rgba(0, 255, 255, 0.7)' }}>
                  San Francisco, CA
                </p>
                <p className="text-green-300 leading-relaxed font-mono text-sm" style={{ textShadow: '0 0 10px rgba(0, 200, 50, 0.5)' }}>
                  Schedule an in-person consultation
                </p>
              </div>
            </div>
          </div>
          */}

          {/* COMMENTED OUT: Services Section */}
          {/*
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">SERVICES</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Company - Commented out for now */}
          {/*
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">COMPANY</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Resources - Commented out for now */}
          {/*
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">RESOURCES</h3>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}

          {/* Legal - Commented out for now */}
          {/*
          <div>
            <h3 className="text-lg font-semibold mb-4 text-cyan-400 font-mono">LEGAL</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-green-400 hover:text-cyan-400 transition-colors text-sm font-mono"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          */}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyan-400/40 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-green-400 text-sm mb-4 md:mb-0 font-mono">
            &copy; 2025 Neurion AI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="text-green-400 hover:text-cyan-400 transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};