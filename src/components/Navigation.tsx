import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X } from 'lucide-react';

/**
 * Responsive Navigation Bar Component
 * 
 * Features:
 * - 5 navigation items as specified: Home, Testimonials, Pricing, Advanced Protocols, Initialize
 * - Active page indicator with green glowing effect
 * - Smooth hover transitions
 * - Full responsive design (desktop, tablet, mobile)
 * - Accessibility features (ARIA labels, keyboard navigation)
 * - Semantic HTML5 structure
 */
export const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  /**
   * Navigation items configuration
   * Each item includes href, label, and type for proper routing
   */
  const navItems = [
    { href: '/', label: 'Home', type: 'route' },
    { href: '/testimonials', label: 'Testimonials', type: 'route' },
    { href: '/pricing', label: 'Pricing', type: 'route' },
    { href: '/advanced-protocols', label: 'Advanced Protocols', type: 'route' },
    { href: '/contact', label: 'Initialize', type: 'contact' } // Connected to contact form
  ];

  /**
   * Determines if a navigation item is currently active
   * @param href - The navigation item's href
   * @returns boolean indicating if the item is active
   */
  const isActiveItem = (href: string): boolean => {
    return location.pathname === href;
  };

  /**
   * Handles mobile menu toggle
   */
  const toggleMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Closes mobile menu when navigation item is clicked
   */
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav 
      className="fixed top-0 w-full bg-black/95 backdrop-blur-xl z-50 border-b border-cyan-400/40 transition-all duration-300"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo Section */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            aria-label="Neurion AI Homepage"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-green-500 rounded-lg flex items-center justify-center border border-cyan-400 shadow-lg shadow-cyan-400/60">
              <Brain className="w-6 h-6 text-black" />
            </div>
            <span 
              className="text-xl font-bold text-white font-mono tracking-wider neurion-brand"
              style={{ 
                textShadow: '0 0 20px rgba(0, 255, 255, 0.8), 0 0 40px rgba(0, 255, 255, 0.4)',
                filter: 'contrast(1.2) brightness(1.1)',
                WebkitTextStroke: '0.5px rgba(0, 255, 255, 0.2)'
              }}
            >
              NEURION_AI
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex items-center space-x-8" role="menubar">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    to={item.href}
                    className={`
                      nav-item font-mono font-medium text-sm tracking-wider transition-all duration-300 px-3 py-2 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
                      ${isActiveItem(item.href) 
                        ? 'text-cyan-400 nav-item-active' 
                        : 'text-green-400 hover:text-cyan-400 nav-item-hover'
                      }
                      ${item.type === 'contact' ? 'nav-item-cta' : ''}
                    `}
                    role="menuitem"
                    aria-current={isActiveItem(item.href) ? 'page' : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className="text-cyan-400 hover:text-green-400 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
              onClick={toggleMobileMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-black/95 backdrop-blur-xl border-t border-cyan-400/40"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="px-4 py-6 space-y-4">
            <ul className="space-y-4" role="none">
              {navItems.map((item) => (
                <li key={item.href} role="none">
                  <Link
                    to={item.href}
                    className={`
                      block nav-item font-mono font-medium transition-all duration-300 px-3 py-2 rounded-lg
                      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-black
                      ${isActiveItem(item.href) 
                        ? 'text-cyan-400 nav-item-active' 
                        : 'text-green-400 hover:text-cyan-400 nav-item-hover'
                      }
                      ${item.type === 'contact' ? 'nav-item-cta' : ''}
                    `}
                    role="menuitem"
                    aria-current={isActiveItem(item.href) ? 'page' : undefined}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};