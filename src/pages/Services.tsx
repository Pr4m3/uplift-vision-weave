import { Code2, Brain, Smartphone, Cloud, Shield, Rocket, Palette, Database, Zap, Users, Globe, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeArrow from "@/components/DecorativeArrow";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs with cutting-edge technologies.",
      features: ["Full-Stack Development", "API Integration", "Legacy System Modernization", "Microservices Architecture"],
      color: "cyan",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leverage the power of AI to automate processes and gain intelligent insights from your data.",
      features: ["Predictive Analytics", "Natural Language Processing", "Computer Vision", "ML Model Training"],
      color: "purple",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter Apps"],
      color: "orange",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern, distributed systems.",
      features: ["AWS & Azure Setup", "Cloud Migration", "Serverless Architecture", "Auto-Scaling Solutions"],
      color: "cyan",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and user data.",
      features: ["Penetration Testing", "Security Audits", "Compliance Management", "Threat Monitoring"],
      color: "purple",
    },
    {
      icon: Rocket,
      title: "DevOps & Automation",
      description: "Streamlined development pipelines and automated deployment for faster delivery.",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging"],
      color: "orange",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We dive deep into your business needs, goals, and challenges",
      icon: Globe,
    },
    {
      number: "02",
      title: "Planning",
      description: "Strategic roadmap with timelines, milestones, and resource allocation",
      icon: Palette,
    },
    {
      number: "03",
      title: "Development",
      description: "Agile development process with regular updates and feedback loops",
      icon: Code2,
    },
    {
      number: "04",
      title: "Testing",
      description: "Rigorous QA testing to ensure quality, security, and performance",
      icon: Shield,
    },
    {
      number: "05",
      title: "Deployment",
      description: "Smooth launch with monitoring and immediate support",
      icon: Rocket,
    },
    {
      number: "06",
      title: "Support",
      description: "Ongoing maintenance, updates, and optimization services",
      icon: Users,
    },
  ];

  const industries = [
    { name: "FinTech", icon: Database, projects: 45 },
    { name: "Healthcare", icon: Brain, projects: 38 },
    { name: "E-Commerce", icon: Smartphone, projects: 67 },
    { name: "Education", icon: Users, projects: 29 },
    { name: "SaaS", icon: Cloud, projects: 52 },
    { name: "Enterprise", icon: Award, projects: 41 },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <ScrollReveal animation="fade-slide">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-cyan/50">
              <span className="text-sm text-cyan">Full-Stack Solutions</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-cyan">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive software solutions designed to transform your business and drive innovation through cutting-edge technology
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 relative">
          <DecorativeArrow color="purple" className="absolute -top-10 right-0" />
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <ScrollReveal
                key={index}
                animation="slide-up"
                delay={index * 0.1}
              >
                <Card className="group bg-card/50 backdrop-blur border-border hover:border-cyan transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2 h-full">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all group-hover:scale-110`}>
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <CardTitle className="text-2xl mb-2 text-cyan group-hover:text-purple transition-colors">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground mb-4">
                      {service.description}
                    </CardDescription>
                    <div className="space-y-2">
                      {service.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <Zap className="w-4 h-4 text-cyan" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Development Process */}
        <section className="mb-32">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="text-purple">Development</span> Process
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <ScrollReveal key={index} animation="scale" delay={index * 0.1}>
                  <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-8 hover:border-purple transition-all group relative overflow-hidden">
                    <div className="text-6xl font-bold text-purple/20 mb-4">{step.number}</div>
                    <Icon className="w-12 h-12 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-bold mb-3 text-cyan">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="mb-32 bg-card/30 rounded-3xl p-12 md:p-16 relative">
          <DecorativeArrow color="orange" className="absolute top-4 right-4" />
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Industries We <span className="text-orange">Serve</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
                  <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 text-center hover:border-cyan transition-all group">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-cyan group-hover:scale-110 transition-transform" />
                    <h4 className="font-bold mb-2">{industry.name}</h4>
                    <p className="text-sm text-muted-foreground">{industry.projects} projects</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Tech Stack */}
        <section className="mb-20">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="text-cyan">Technology</span> Stack
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "React", "Node.js", "Python", "TypeScript",
                "AWS", "Docker", "Kubernetes", "PostgreSQL",
                "MongoDB", "GraphQL", "TensorFlow", "React Native",
              ].map((tech, index) => (
                <ScrollReveal key={index} animation="fade" delay={index * 0.05}>
                  <div className="bg-card/50 backdrop-blur border border-border rounded-lg p-4 text-center hover:border-purple transition-all">
                    <span className="font-medium">{tech}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <ScrollReveal animation="scale">
          <div className="text-center bg-card/50 backdrop-blur border border-border rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-accent opacity-5" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to <span className="text-orange">Transform</span> Your Business?
              </h2>
              <p className="text-muted-foreground mb-8">
                Let's discuss how our services can help you achieve your goals
              </p>
              <button className="px-8 py-3 bg-gradient-primary text-black rounded-lg font-semibold hover:shadow-glow-primary transition-all">
                Schedule a Consultation
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Services;
