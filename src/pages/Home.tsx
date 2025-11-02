import { ArrowRight, Sparkles, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-primary/50">
              <span className="text-sm text-primary">🚀 Building the Future of Software</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Transform Your
              <br />
              <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                Digital Vision
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              We craft exceptional software experiences that drive innovation and accelerate growth for forward-thinking companies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-gradient-primary hover:shadow-glow-primary text-lg px-8 py-6">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button variant="outline" className="text-lg px-8 py-6 border-primary hover:bg-primary/10">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </section>

      {/* Features Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-accent bg-clip-text text-transparent">Uplyft</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We combine innovation with reliability to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 bg-card/50 backdrop-blur rounded-2xl border border-border hover:border-primary transition-all hover:shadow-glow-primary animate-fade-in"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="w-16 h-16 mb-6 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur border border-border rounded-3xl p-12 md:p-16 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-primary opacity-5" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Build Something
                <br />
                <span className="bg-gradient-accent bg-clip-text text-transparent">
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
        </div>
      </section>
    </div>
  );
};

export default Home;
