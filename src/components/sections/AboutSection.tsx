import { Award, Users, TrendingUp, CheckCircle, Star, Building } from 'lucide-react';
import Card from '../ui/Card';

export default function AboutSection() {
  const achievements = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Enterprise Automation",
      description: "Developed automations for unicorn companies",
      highlight: "Proven at scale"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Large-Scale Migrations", 
      description: "Successful Magento to Shopify migrations",
      highlight: "Zero downtime"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Team Productivity",
      description: "Custom Jira and Slack integrations",
      highlight: "40% boost"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "AI Social Media Tool",
      description: "Built tool gaining thousands of followers",
      highlight: "Organic growth"
    }
  ];

  const values = [
    "Efficient work that saves time and resources",
    "Fast delivery without sacrificing quality", 
    "Politics-free approach with honest communication",
    "Results-oriented action with hands-on involvement"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full">
              <Award className="w-4 h-4 mr-2" />
              Who We Are
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            We get our hands dirty and{' '}
            <span className="text-primary">deliver results</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            At Mandet, we build technology solutions that drive measurable business growth. 
            No politics, just results - that&apos;s our refreshingly honest approach.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left column - Story and Values */}
          <div>
            <h3 className="text-2xl font-bold text-text-primary mb-6">
              Technology solutions that work
            </h3>
            <div className="space-y-4 text-text-secondary mb-8">
              <p>
                We transform business operations with intelligent automation and custom development. 
                Our proven methodology has helped companies ranging from startups to unicorns 
                streamline their processes and boost productivity.
              </p>
              <p>
                From enterprise automation to large-scale e-commerce migrations, we deliver 
                solutions that generate measurable ROI. Our team gets hands-on with every project, 
                ensuring quality outcomes without unnecessary delays.
              </p>
            </div>

            <h4 className="text-lg font-semibold text-text-primary mb-4">What drives us:</h4>
            <ul className="space-y-3">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-text-secondary">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right column - Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                variant="surface" 
                hover 
                padding="md"
                className="border border-primary/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                    {achievement.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-text-primary text-sm mb-1">
                      {achievement.title}
                    </h4>
                    <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">
                      {achievement.highlight}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-text-secondary">
                  {achievement.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="grid md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-text-secondary">Automated Processes</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">40%</div>
            <div className="text-sm text-text-secondary">Average Productivity Boost</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-text-secondary">Migration Success Rate</div>
          </div>
          
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1000s</div>
            <div className="text-sm text-text-secondary">Daily User Interactions</div>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="mt-20">
          <Card variant="dark" padding="lg" className="bg-gradient-to-r from-dark-background to-dark-surface">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-dark-text-primary mb-4">
                Our Methodology
              </h3>
              <p className="text-dark-text-secondary max-w-3xl mx-auto mb-8">
                We follow a proven approach that delivers measurable results: understand your challenges, 
                design efficient solutions, implement with precision, and optimize for performance.
              </p>
              
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    1
                  </div>
                  <h4 className="font-semibold text-dark-text-primary mb-2">Analyze</h4>
                  <p className="text-sm text-dark-text-secondary">Understand processes</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    2
                  </div>
                  <h4 className="font-semibold text-dark-text-primary mb-2">Design</h4>
                  <p className="text-sm text-dark-text-secondary">Create efficient solutions</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    3
                  </div>
                  <h4 className="font-semibold text-dark-text-primary mb-2">Implement</h4>
                  <p className="text-sm text-dark-text-secondary">Deploy with precision</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-dark-primary rounded-full flex items-center justify-center text-white font-bold mx-auto mb-3">
                    4
                  </div>
                  <h4 className="font-semibold text-dark-text-primary mb-2">Optimize</h4>
                  <p className="text-sm text-dark-text-secondary">Ensure peak performance</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
} 