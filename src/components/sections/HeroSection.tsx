import { ArrowRight, Zap, Target, Rocket, Code2, Workflow, ShoppingCart, Settings, Sparkles, Star, ChevronRight, Database, BarChart3, FileText, CheckCircle, Package, Smartphone, Monitor, DollarSign, ArrowRight as ArrowRightIcon, Layers, Palette, Globe } from 'lucide-react';
import Button from '../ui/Button';
import Card from '../ui/Card';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden pt-16">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Content */}
          <div className="text-center lg:text-left">
            <div className="mb-8">
              <span className="inline-flex items-center px-6 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20">
                <Zap className="w-4 h-4 mr-2" />
                No Politics • Just Results
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary leading-tight mb-8">
              WE BUILD{' '}
              <span className="text-primary">AUTOMATIONS</span>{' '}
              THAT{' '}
              <span className="">WORK</span>
            </h1>

            <p className="text-xl text-text-secondary mb-10 max-w-2xl leading-relaxed">
              We&apos;ve boosted productivity by 40% for unicorn companies using Make.ai, n8n, and custom integrations. 
              Fast delivery, proven results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" variant="primary" className="group bg-text-primary text-white hover:bg-text-primary/90">
                Get Our Hands Dirty
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="border-text-primary text-text-primary hover:bg-text-primary hover:text-white">
                View Our Methodology
              </Button>
            </div>

            {/* Client Logos - Social Proof */}
            <div className="mb-12">
              <p className="text-sm text-text-secondary mb-6 text-center lg:text-left">
                Trusted by leading brands:
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 opacity-70">
                {/* Printify Logo Placeholder */}
                <div className="flex items-center justify-center bg-surface rounded-lg px-6 py-3 border border-primary/10">
                  <span className="text-sm font-medium text-text-secondary">Printify</span>
                </div>
                
                {/* Nic Ozols Logo Placeholder */}
                <div className="flex items-center justify-center bg-surface rounded-lg px-6 py-3 border border-secondary/10">
                  <span className="text-sm font-medium text-text-secondary">Nic Ozols</span>
                </div>
                
                {/* Madara Cosmetics Logo Placeholder */}
                <div className="flex items-center justify-center bg-surface rounded-lg px-6 py-3 border border-accent/10">
                  <span className="text-sm font-medium text-text-secondary">Madara Cosmetics</span>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-primary" />
                <span>Developed automations for unicorn companies</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 text-primary" />
                <span>500+ processes automated</span>
              </div>
            </div>
          </div>

          {/* Right column - Enhanced Service Visualizations */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              {/* Process Automation - Step-by-step Animation */}
              <Card 
                variant="surface" 
                hover 
                className="col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 relative overflow-hidden group"
                padding="lg"
              >
                <div className="absolute top-4 right-4">
                  <div className="w-3 h-3 bg-primary/50 rounded-full animate-pulse"></div>
                </div>
                
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shadow-lg">
                    <Workflow className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-text-primary mb-2">Process Automation</h3>
                    <p className="text-sm text-text-secondary">Boost productivity by 40% with AI-powered workflows using cutting-edge platforms</p>
                  </div>
                </div>

                {/* Automation Steps Animation */}
                <div className="relative h-20 mb-4 bg-white/50 rounded-lg p-3 overflow-hidden">
                  <div className="flex items-center justify-between h-full">
                    {/* Step 1: Data Endpoints */}
                    <div className="flex flex-col items-center opacity-60 group-hover:opacity-100 transition-all duration-1000">
                      <Database className="w-6 h-6 text-primary mb-1 animate-automation-step-1" />
                      <span className="text-xs text-primary font-medium">Connect</span>
                    </div>
                    
                    {/* Arrow 1 */}
                    <ArrowRightIcon className="w-4 h-4 text-primary/60 animate-automation-arrow-1" />
                    
                    {/* Step 2: Gathering Data */}
                    <div className="flex flex-col items-center opacity-60 group-hover:opacity-100 transition-all duration-1000 delay-1000">
                      <BarChart3 className="w-6 h-6 text-primary mb-1 animate-automation-step-2" />
                      <span className="text-xs text-primary font-medium">Gather</span>
                    </div>
                    
                    {/* Arrow 2 */}
                    <ArrowRightIcon className="w-4 h-4 text-primary/60 animate-automation-arrow-2" />
                    
                    {/* Step 3: Compiling */}
                    <div className="flex flex-col items-center opacity-60 group-hover:opacity-100 transition-all duration-1000 delay-2000">
                      <Settings className="w-6 h-6 text-primary mb-1 animate-automation-step-3" />
                      <span className="text-xs text-primary font-medium">Process</span>
                    </div>
                    
                    {/* Arrow 3 */}
                    <ArrowRightIcon className="w-4 h-4 text-primary/60 animate-automation-arrow-3" />
                    
                    {/* Step 4: Report Generated */}
                    <div className="flex flex-col items-center opacity-60 group-hover:opacity-100 transition-all duration-1000 delay-3000">
                      <CheckCircle className="w-6 h-6 text-green-500 mb-1 animate-automation-step-4" />
                      <span className="text-xs text-green-600 font-medium">Complete</span>
                    </div>
                  </div>
                  
                  {/* Progress bar */}
                  <div className="absolute bottom-1 left-3 right-3 h-1 bg-primary/20 rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full animate-automation-progress"></div>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-primary font-medium">
                  <span>Make.ai & n8n Integration</span>
                  <ChevronRight className="w-3 h-3 ml-auto" />
                </div>
              </Card>

              {/* E-commerce Excellence - Migration & Building Animation */}
              <Card 
                variant="surface" 
                hover 
                className="bg-gradient-to-br from-secondary/10 to-secondary/5 border border-secondary/20 relative group overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 bg-secondary/50 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                </div>
                
                <div className="mb-4">
                  <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-text-primary text-sm mb-2">E-commerce Excellence</h4>
                  <p className="text-xs text-text-secondary mb-3">
                    Large-scale migrations that scale and convert
                  </p>
                </div>

                {/* E-commerce Animation */}
                <div className="relative h-16 mb-3 bg-white/50 rounded-lg p-2 overflow-hidden">
                  <div className="flex items-center justify-between h-full">
                    {/* Platform A */}
                    <div className="flex flex-col items-center">
                      <Package className="w-5 h-5 text-secondary animate-ecommerce-platform-out" />
                      <span className="text-xs text-secondary/70 mt-1">Old</span>
                    </div>
                    
                    {/* Migration Arrow */}
                    <div className="flex-1 flex items-center justify-center relative">
                      <ArrowRightIcon className="w-4 h-4 text-secondary animate-ecommerce-migration" />
                      <div className="absolute w-2 h-2 bg-secondary rounded-full animate-ecommerce-data-flow"></div>
                    </div>
                    
                    {/* Platform B Building */}
                    <div className="flex flex-col items-center relative">
                      <Layers className="w-5 h-5 text-secondary animate-ecommerce-building" />
                      <span className="text-xs text-secondary/70 mt-1">New</span>
                      
                      {/* Money indicator */}
                      <DollarSign className="w-3 h-3 text-green-500 absolute -top-1 -right-1 animate-ecommerce-money" />
                    </div>
                  </div>
                </div>

                <div className="text-xs text-secondary font-medium">
                  Magento to Shopify
                </div>
              </Card>

              {/* Full-Stack Development - App Building Animation */}
              <Card 
                variant="surface" 
                hover 
                className="bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 relative group overflow-hidden"
              >
                <div className="absolute top-3 right-3">
                  <div className="w-2 h-2 bg-accent/50 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>
                
                <div className="mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center mb-3 shadow-md">
                    <Code2 className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-text-primary text-sm mb-2">Full-Stack Development</h4>
                  <p className="text-xs text-text-secondary mb-3">
                    Complete solutions from concept to deployment
                  </p>
                </div>

                {/* Full-Stack Building Animation */}
                <div className="relative h-16 mb-3 bg-white/50 rounded-lg p-2 overflow-hidden">
                  <div className="flex items-center justify-between h-full">
                    {/* Design Phase */}
                    <div className="flex flex-col items-center">
                      <Palette className="w-4 h-4 text-accent animate-fullstack-design" />
                      <span className="text-xs text-accent/70 mt-1">Design</span>
                    </div>
                    
                    {/* Building Blocks */}
                    <div className="flex flex-col items-center relative">
                      <div className="relative">
                        <Monitor className="w-5 h-5 text-accent animate-fullstack-web" />
                        <Smartphone className="w-3 h-3 text-accent absolute -bottom-1 -right-1 animate-fullstack-mobile" />
                      </div>
                      <span className="text-xs text-accent/70 mt-1">Build</span>
                    </div>
                    
                    {/* Deployment */}
                    <div className="flex flex-col items-center">
                      <Globe className="w-4 h-4 text-accent animate-fullstack-deploy" />
                      <span className="text-xs text-accent/70 mt-1">Deploy</span>
                    </div>
                  </div>
                  
                  {/* Code lines effect */}
                  <div className="absolute bottom-2 left-2 right-2 h-0.5 bg-accent/30 rounded-full">
                    <div className="h-full bg-accent rounded-full animate-fullstack-code-progress"></div>
                  </div>
                </div>

                <div className="text-xs text-accent font-medium">
                  Custom Jira & Slack
                </div>
              </Card>

              {/* Performance Stats */}
              <Card 
                variant="dark" 
                className="col-span-2 bg-gradient-to-r from-text-primary via-text-primary/90 to-text-primary/80 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
                <div className="relative grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">40%</div>
                    <div className="text-xs text-white/70">Productivity Boost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">500+</div>
                    <div className="text-xs text-white/70">Processes Automated</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white mb-1">Zero</div>
                    <div className="text-xs text-white/70">Migration Downtime</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Technology Partners/Platforms */}
        <div className="mt-20 pt-12 border-t border-surface">
          <div className="text-center mb-8">
            <p className="text-sm text-text-secondary font-medium">We deliver proven results using cutting-edge platforms</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* Platform badges */}
            <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-secondary">
              Make.ai
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-secondary">
              n8n
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-secondary">
              Shopify
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-secondary">
              React
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-secondary">
              Next.js
            </div>
            <div className="px-4 py-2 bg-surface rounded-lg text-sm font-medium text-text-secondary">
              TypeScript
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}