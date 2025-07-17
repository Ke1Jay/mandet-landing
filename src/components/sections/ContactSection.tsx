'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after success message
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "hello@mandet.co",
      link: "mailto:hello@mandet.co"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+371 XXXX XXXX",
      link: "tel:+371XXXXXXXX"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Riga, Latvia",
      link: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              <Send className="w-4 h-4 mr-2" />
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Ready to{' '}
            <span className="text-primary">transform your business</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Let&apos;s discuss how our proven methodology can streamline your processes 
            and boost your team&apos;s productivity. No politics, just results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card variant="surface" padding="lg" className="border border-primary/10">
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Start Your Project
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-text-primary mb-2">
                  Thank you for your message!
                </h4>
                <p className="text-text-secondary">
                  We&apos;ll get back to you within 24 hours with next steps.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary"
                      placeholder="your@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-primary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-background text-text-primary resize-none"
                    placeholder="Tell us about your automation, e-commerce, or development needs..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  fullWidth 
                  loading={isSubmitting}
                  variant="primary"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            )}
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-text-primary mb-6">
                Let&apos;s Talk Business
              </h3>
              <p className="text-text-secondary mb-8">
                Whether you need process automation, e-commerce development, or full-stack solutions, 
                we&apos;re here to help. Our team responds quickly and gets straight to the point.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary">{item.title}</h4>
                    {item.link ? (
                      <a 
                        href={item.link}
                        className="text-text-secondary hover:text-primary transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-text-secondary">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time Card */}
            <Card variant="dark" padding="md" className="bg-gradient-to-br from-dark-background to-dark-surface">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-dark-text-primary mb-1">
                    Quick Response Time
                  </h4>
                  <p className="text-sm text-dark-text-secondary">
                    We typically respond within 2-4 hours during business days
                  </p>
                </div>
              </div>
            </Card>

            {/* What to Expect */}
            <Card variant="surface" padding="md" className="border border-primary/10">
              <h4 className="font-semibold text-text-primary mb-3">What happens next?</h4>
              <ul className="space-y-2 text-sm text-text-secondary">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  We&apos;ll review your project details
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Schedule a discovery call within 24 hours
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                  Provide a detailed proposal and timeline
                </li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
} 