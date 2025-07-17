import { Zap, ShoppingBag, Code, ArrowRight, CheckCircle, Settings, Globe, Smartphone } from 'lucide-react';
import Card from '../ui/Card';
import Button from '../ui/Button';

export default function ServicesSection() {
  const services = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Process Automation",
      description: "Transform manual processes into efficient, AI-powered workflows using cutting-edge platforms like Make.ai and n8n",
      features: [
        "Custom automation solutions",
        "AI-enhanced workflows", 
        "Integration with existing tools",
        "Scalable process optimization"
      ],
      technologies: ["Make.ai", "n8n", "Zapier", "Custom APIs"],
      color: "primary"
    },
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "E-commerce Excellence", 
      description: "From large-scale Magento to Shopify migrations to custom applications that scale and convert",
      features: [
        "Shopify store development",
        "Custom app creation",
        "Platform migrations",
        "Performance optimization"
      ],
      technologies: ["Shopify", "Magento", "WooCommerce", "Custom Solutions"],
      color: "secondary"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Full-Stack Development",
      description: "Complete web development from concept to deployment with ongoing optimization",
      features: [
        "Web applications",
        "Mobile app development", 
        "Custom software solutions",
        "API development"
      ],
      technologies: ["React", "Next.js", "Node.js", "TypeScript"],
      color: "accent"
    }
  ];

  return (
    <section id="services" className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              <Settings className="w-4 h-4 mr-2" />
              Our Expertise
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            We deliver proven solutions that{' '}
            <span className="text-primary">drive results</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                         Our methodology transforms business operations with measurable outcomes. 
             We&apos;ve automated over 500 processes for companies ranging from startups to unicorns.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              variant="surface" 
              hover 
              padding="lg"
              className="h-full border border-primary/10"
            >
              <div className="flex flex-col h-full">
                {/* Service Header */}
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-${service.color} rounded-xl flex items-center justify-center mb-4 text-white`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="mb-6 flex-grow">
                  <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-text-secondary">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-semibold text-text-primary mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <Button variant="outline" size="sm" className="group mt-auto">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom Stats/Proof Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Automation Stats */}
          <Card variant="dark" className="text-center bg-gradient-to-br from-dark-background to-dark-surface">
            <div className="mb-4">
              <Zap className="w-8 h-8 text-dark-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-dark-text-primary">500+</div>
              <div className="text-sm text-dark-text-secondary">Automated Processes</div>
            </div>
            <p className="text-xs text-dark-text-secondary">
              Developed automations for unicorn companies
            </p>
          </Card>

          {/* E-commerce Stats */}
          <Card variant="surface" className="text-center border border-primary/20">
            <div className="mb-4">
              <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-text-primary">40%</div>
              <div className="text-sm text-text-secondary">Productivity Boost</div>
            </div>
            <p className="text-xs text-text-secondary">
              Custom Jira and Slack integrations
            </p>
          </Card>

          {/* Development Stats */}
          <Card variant="surface" className="text-center border border-secondary/20">
            <div className="mb-4">
              <Smartphone className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-text-primary">1000s</div>
              <div className="text-sm text-text-secondary">User Interactions</div>
            </div>
            <p className="text-xs text-text-secondary">
              AI-powered tool gaining followers daily
            </p>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-text-primary mb-4">
            Ready to transform your business operations?
          </h3>
                     <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
             Let&apos;s discuss how our proven methodology can streamline your processes 
             and boost your team&apos;s productivity.
          </p>
          <Button size="lg" variant="primary" className="group">
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
} 