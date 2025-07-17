import { ArrowRight, Zap, Target, Rocket } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-primary/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
                <Zap className="w-4 h-4 mr-2" />
                Automation & Development Experts
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-6">
              We transform your{' '}
              <span className="text-primary">business operations</span> with intelligent automation
            </h1>

            <p className="text-xl text-text-secondary mb-8 max-w-2xl leading-relaxed">
              No politics, no delays – just results. We deliver proven automation solutions, 
              e-commerce excellence, and full-stack development that drives measurable business growth.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="primary" className="group">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>Trusted by unicorn companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-primary" />
                <span>500+ automated processes</span>
              </div>
            </div>
          </div>

          {/* Right column - Visual elements */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Main card - Automation */}
              <Card 
                variant="surface" 
                hover 
                className="col-span-2 bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-text-primary">Process Automation</h3>
                    <p className="text-sm text-text-secondary">AI-powered workflows</p>
                  </div>
                </div>
                <p className="text-sm text-text-secondary">
                  Transform manual processes into efficient, automated systems using Make.ai and n8n
                </p>
              </Card>

              {/* E-commerce card */}
              <Card variant="surface" hover className="bg-gradient-to-br from-secondary/5 to-secondary/10">
                <div className="mb-3">
                  <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white text-sm font-bold">E</span>
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm">E-commerce</h4>
                </div>
                <p className="text-xs text-text-secondary">
                  Shopify migrations & custom apps
                </p>
              </Card>

              {/* Development card */}
              <Card variant="surface" hover className="bg-gradient-to-br from-accent/5 to-accent/10">
                <div className="mb-3">
                  <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center mb-3">
                    <span className="text-white text-sm font-bold">&lt;/&gt;</span>
                  </div>
                  <h4 className="font-semibold text-text-primary text-sm">Full-Stack</h4>
                </div>
                <p className="text-xs text-text-secondary">
                  Web & mobile development
                </p>
              </Card>

              {/* Stats card */}
              <Card 
                variant="dark" 
                className="col-span-2 bg-gradient-to-r from-dark-background to-dark-surface"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-2xl font-bold text-dark-text-primary">40%</div>
                    <div className="text-sm text-dark-text-secondary">Productivity boost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-text-primary">500+</div>
                    <div className="text-sm text-dark-text-secondary">Processes automated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-dark-text-primary">99%</div>
                    <div className="text-sm text-dark-text-secondary">Client satisfaction</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 