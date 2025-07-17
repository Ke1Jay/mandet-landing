'use client';

import { Mail, MapPin, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerLinks = {
    services: [
      { name: 'Process Automation', href: '#services' },
      { name: 'E-commerce Development', href: '#services' },
      { name: 'Full-Stack Development', href: '#services' },
      { name: 'Custom Integrations', href: '#services' }
    ],
    company: [
      { name: 'About Us', href: '#about' },
      { name: 'Our Methodology', href: '#about' },
      { name: 'Contact', href: '#contact' },
      { name: 'Get Started', href: '#contact' }
    ],
    technologies: [
      { name: 'Make.ai & n8n', href: '#services' },
      { name: 'Shopify Development', href: '#services' },
      { name: 'React & Next.js', href: '#services' },
      { name: 'Custom APIs', href: '#services' }
    ]
  };

  return (
    <footer className="bg-dark-background text-dark-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-dark-text-primary mb-4">
                  Mandet.co
                </h3>
                <p className="text-dark-text-secondary mb-6">
                  We transform your business operations with intelligent automation 
                  and custom development that drives measurable growth.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-dark-text-secondary">
                  <Mail className="w-4 h-4 text-dark-primary" />
                  <a 
                    href="mailto:hello@mandet.co" 
                    className="hover:text-dark-text-primary transition-colors"
                  >
                    hello@mandet.co
                  </a>
                </div>
                <div className="flex items-center gap-3 text-dark-text-secondary">
                  <MapPin className="w-4 h-4 text-dark-primary" />
                  <span>Riga, Latvia</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-semibold text-dark-text-primary mb-4">Services</h4>
              <ul className="space-y-2">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-dark-text-secondary hover:text-dark-text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold text-dark-text-primary mb-4">Company</h4>
              <ul className="space-y-2">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-dark-text-secondary hover:text-dark-text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="font-semibold text-dark-text-primary mb-4">Technologies</h4>
              <ul className="space-y-2">
                {footerLinks.technologies.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-dark-text-secondary hover:text-dark-text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-dark-secondary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-dark-text-secondary">
              © {new Date().getFullYear()} Mandet.co. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-sm text-dark-text-secondary">
                Built with Next.js 15 & TypeScript
              </div>
              
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-dark-primary rounded-full flex items-center justify-center text-white hover:bg-opacity-90 transition-all"
                aria-label="Scroll to top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="border-t border-dark-secondary/20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-dark-text-secondary">
            <div className="flex items-center gap-6">
              <span>🔒 Secure & Reliable</span>
              <span>⚡ Fast Response Time</span>
              <span>🎯 Results-Oriented</span>
            </div>
            <div>
              Trusted by startups to unicorn companies
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 