import { Code2, Brain, Smartphone, Cloud, Shield, Rocket } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs with cutting-edge technologies.",
      color: "text-primary",
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Leverage the power of AI to automate processes and gain intelligent insights from your data.",
      color: "text-secondary",
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      color: "text-accent",
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services for modern, distributed systems.",
      color: "text-primary",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and user data.",
      color: "text-secondary",
    },
    {
      icon: Rocket,
      title: "DevOps & Automation",
      description: "Streamlined development pipelines and automated deployment for faster delivery.",
      color: "text-accent",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive software solutions designed to transform your business and drive innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:shadow-glow-primary transition-all`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">
              Ready to <span className="bg-gradient-accent bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="px-8 py-3 bg-gradient-primary rounded-lg font-semibold hover:shadow-glow-primary transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
