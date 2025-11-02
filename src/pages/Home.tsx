import { ArrowRight, Sparkles, Zap, Shield, Code, Palette, Rocket, Users, Globe, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeArrow from "@/components/DecorativeArrow";
import GlobeIcon from "@/components/GlobeIcon";

const Home = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Solutions",
      description: "Leverage cutting-edge AI to automate and optimize your business processes",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Built with performance in mind, delivering exceptional speed and reliability",
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-grade security protocols to protect your data and users",
    },
  ];

  const tracks = [
    {
      title: "Web Development",
      description: "Master modern web technologies, frameworks, and best practices",
      color: "text-purple",
      tools: ["React", "Node.js", "TypeScript", "Next.js"],
    },
    {
      title: "Mobile App Dev",
      description: "Build native and cross-platform mobile applications",
      color: "text-cyan",
      tools: ["React Native", "Flutter", "Swift", "Kotlin"],
    },
    {
      title: "Social Media",
      description: "Create engaging content and manage digital presence",
      color: "text-orange",
      tools: ["Content Strategy", "Analytics", "Design", "Marketing"],
    },
  ];

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "AI/ML" },
    { name: "TensorFlow", category: "AI/ML" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
    { name: "PostgreSQL", category: "Database" },
    { name: "GraphQL", category: "API" },
  ];

  const achievements = [
    { number: "500+", label: "Projects Delivered", icon: Rocket },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "98%", label: "Success Rate", icon: Trophy },
    { number: "25+", label: "Countries", icon: Globe },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="absolute top-20 right-10">
          <GlobeIcon className="w-12 h-12 text-orange animate-float" />
        </div>
        
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="fade-slide">
            <div className="max-w-4xl mx-auto">
              <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-primary/50">
                <span className="text-sm text-cyan">🚀 Building the Future of Software</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
                Transform Your
                <br />
                <span className="text-cyan animate-glow">
                  Digital Vision
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
                We craft exceptional software experiences that drive innovation and accelerate growth for forward-thinking companies
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-gradient-primary hover:shadow-glow-primary text-lg px-8 py-6 text-black font-bold">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to="/projects">
                  <Button variant="outline" className="text-lg px-8 py-6 border-cyan hover:bg-cyan/10 text-cyan">
                    View Our Work
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        <DecorativeArrow color="purple" size="lg" className="absolute top-1/3 right-10 animate-float" />
      </section>

      {/* Features Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-bold mb-4">
                Why Choose <span className="text-purple">Uplyft</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                We combine innovation with reliability to deliver exceptional results
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 0.2}>
                  <div className="group relative p-8 bg-card/50 backdrop-blur rounded-2xl border border-border hover:border-cyan transition-all hover:shadow-glow-primary">
                    <div className="w-16 h-16 mb-6 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3 text-cyan">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Speed Internship Program Section */}
      <section className="py-32 relative bg-card/30">
        <div className="absolute top-10 left-10">
          <GlobeIcon className="w-16 h-16 text-orange opacity-20" />
        </div>
        <DecorativeArrow color="orange" size="lg" className="absolute top-20 right-20" />
        
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h2 className="text-5xl md:text-7xl font-bold mb-6">
                Uplyft's <span className="text-orange">Speed</span>
                <br />
                <span className="text-cyan">Internship Program</span>
              </h2>
              <p className="text-xl text-muted-foreground italic">
                (Your great grandma can use, to build web apps)
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="slide-up" delay={0.2}>
            <div className="max-w-4xl mx-auto bg-card/50 backdrop-blur border border-border rounded-3xl p-12 mb-12">
              <p className="text-lg text-muted-foreground mb-8">
                Join our intensive internship program designed to transform aspiring developers into industry-ready professionals. 
                Choose your track, learn from real projects, and build a portfolio that stands out.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <span className="px-6 py-2 bg-cyan/20 border border-cyan rounded-full text-cyan">Fast-Track Learning</span>
                <span className="px-6 py-2 bg-purple/20 border border-purple rounded-full text-purple">Real Projects</span>
                <span className="px-6 py-2 bg-orange/20 border border-orange rounded-full text-orange">Expert Mentorship</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Different Tracks */}
          <ScrollReveal animation="fade-slide" delay={0.3}>
            <h3 className="text-4xl font-bold text-center mb-12">
              <span className="text-cyan">Different</span> Tracks
            </h3>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tracks.map((track, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 0.15}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8 hover:border-cyan transition-all group relative overflow-hidden">
                  <DecorativeArrow 
                    color={track.color.replace('text-', '') as "cyan" | "purple" | "orange"} 
                    className="absolute -top-4 -right-4" 
                  />
                  <h4 className={`text-2xl font-bold mb-4 ${track.color}`}>{track.title}</h4>
                  <p className="text-muted-foreground mb-6">{track.description}</p>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-cyan mb-2">Tools & Technologies:</p>
                    {track.tools.map((tool, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-cyan" />
                        <span className="text-sm text-muted-foreground">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade" delay={0.5}>
            <div className="text-center mt-16">
              <p className="text-lg text-orange mb-6 font-medium">
                NOTE: The developer with the nicest design wins an internship in that domain
              </p>
              <Link to="/contact">
                <Button className="bg-gradient-accent hover:shadow-glow-accent text-lg px-8 py-6">
                  Apply for Internship
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-5xl md:text-6xl font-bold text-center mb-16">
              <span className="text-cyan">7 Vibe</span> <span className="text-purple">Coding</span> <span className="text-white">Tools</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {technologies.map((tech, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:border-purple transition-all text-center group">
                  <Code className="w-12 h-12 mx-auto mb-4 text-cyan group-hover:text-purple transition-colors" />
                  <h4 className="font-bold text-lg mb-1">{tech.name}</h4>
                  <p className="text-sm text-muted-foreground">{tech.category}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-32 bg-card/30">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="text-orange">Impact</span> in Numbers
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
                  <div className="text-center p-8 bg-card/50 backdrop-blur rounded-2xl border border-border hover:border-cyan transition-all group">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-cyan group-hover:scale-110 transition-transform" />
                    <div className="text-5xl font-bold mb-2 text-cyan group-hover:text-purple transition-colors">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <DecorativeArrow color="cyan" size="lg" className="absolute top-10 left-10" />
        <DecorativeArrow color="orange" size="md" className="absolute bottom-10 right-10" />
        
        <div className="container mx-auto px-4">
          <ScrollReveal animation="scale">
            <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur border border-cyan rounded-3xl p-12 md:p-16 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">
                  Ready to Build Something
                  <br />
                  <span className="text-orange">
                    Extraordinary?
                  </span>
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Let's discuss your project and explore how we can help you achieve your goals
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-accent hover:shadow-glow-accent text-lg px-8 py-6">
                    Get Started Today
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;
