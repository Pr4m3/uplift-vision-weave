import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Star, TrendingUp } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeArrow from "@/components/DecorativeArrow";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "FinTech AI Platform",
      description: "AI-powered financial analytics platform processing millions of transactions daily with real-time fraud detection",
      category: "AI & ML",
      tags: ["Python", "TensorFlow", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      stats: { users: "50K+", uptime: "99.9%", transactions: "5M/day" },
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management system with HIPAA compliance, telemedicine, and real-time data synchronization",
      category: "Web Development",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
      stats: { hospitals: "25", patients: "100K+", satisfaction: "98%" },
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform shopping app with real-time inventory, AR try-on, and personalized recommendations",
      category: "Mobile",
      tags: ["React Native", "Firebase", "Stripe", "ARKit"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
      stats: { downloads: "500K+", rating: "4.8★", orders: "2M+" },
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT infrastructure managing 10,000+ devices for urban optimization, traffic management, and energy efficiency",
      category: "Cloud & IoT",
      tags: ["Python", "Azure IoT", "React", "TimescaleDB"],
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
      stats: { devices: "10K+", cities: "5", efficiency: "+35%" },
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain tracking using blockchain technology for food safety and authenticity verification",
      category: "Blockchain",
      tags: ["Ethereum", "Solidity", "React", "Web3.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
      stats: { transactions: "1M+", partners: "150", transparency: "100%" },
    },
    {
      title: "AI Video Analytics",
      description: "Real-time video processing with object detection, tracking, and behavioral analysis for security systems",
      category: "AI & ML",
      tags: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
      stats: { cameras: "5K+", accuracy: "96%", fps: "30" },
    },
    {
      title: "Social Media Analytics Dashboard",
      description: "Real-time social media monitoring and analytics platform with sentiment analysis and trend prediction",
      category: "Web Development",
      tags: ["React", "Node.js", "MongoDB", "D3.js"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      stats: { brands: "500+", posts: "10M/day", insights: "Real-time" },
    },
    {
      title: "EdTech Learning Platform",
      description: "Interactive learning platform with AI tutoring, progress tracking, and gamification for K-12 students",
      category: "Mobile",
      tags: ["Flutter", "Firebase", "TensorFlow", "WebRTC"],
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600&h=400&fit=crop",
      stats: { students: "200K+", courses: "500+", completion: "85%" },
    },
    {
      title: "Autonomous Drone Fleet",
      description: "Drone fleet management system with AI-powered autonomous navigation and real-time monitoring",
      category: "AI & ML",
      tags: ["ROS", "Python", "Computer Vision", "AWS"],
      image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&h=400&fit=crop",
      stats: { drones: "100+", flights: "50K+", coverage: "1000 km²" },
    },
  ];

  const categories = ["all", "AI & ML", "Web Development", "Mobile", "Cloud & IoT", "Blockchain"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <ScrollReveal animation="fade-slide">
          <div className="text-center mb-20">
            <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-purple/50">
              <span className="text-sm text-purple">Portfolio Showcase</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Our <span className="text-cyan">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Showcasing innovative solutions that drive real-world impact across industries
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal animation="fade-slide">
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  filter === category
                    ? "bg-gradient-primary text-black shadow-glow-primary"
                    : "bg-card border border-border hover:border-cyan text-cyan"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 relative">
          <DecorativeArrow color="cyan" className="absolute -top-20 right-0" />
          {filteredProjects.map((project, index) => (
            <ScrollReveal
              key={index}
              animation="slide-up"
              delay={index * 0.1}
            >
              <Card className="group bg-card/50 backdrop-blur border-border hover:border-purple transition-all duration-300 hover:shadow-glow-secondary hover:-translate-y-2 overflow-hidden h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-2 rounded-lg bg-card/80 backdrop-blur hover:bg-cyan/20 transition-colors">
                      <Github className="w-4 h-4 text-cyan" />
                    </button>
                    <button className="p-2 rounded-lg bg-card/80 backdrop-blur hover:bg-purple/20 transition-colors">
                      <ExternalLink className="w-4 h-4 text-purple" />
                    </button>
                  </div>
                </div>
                <CardHeader className="flex-grow">
                  <div className="flex items-start justify-between mb-2">
                    <Badge variant="secondary" className="bg-purple/20 text-purple border-purple/50">
                      {project.category}
                    </Badge>
                    <Star className="w-5 h-5 text-yellow fill-yellow" />
                  </div>
                  <CardTitle className="text-xl mb-2 text-cyan group-hover:text-purple transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground mb-4">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4 p-3 bg-muted/30 rounded-lg">
                    {Object.entries(project.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-sm font-bold text-cyan">{value}</div>
                        <div className="text-xs text-muted-foreground capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full bg-muted/50 border border-border hover:border-cyan transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>

        {/* Success Stories */}
        <section className="mb-20">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              <span className="text-orange">Success</span> Stories
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { metric: "10M+", label: "Users Impacted", icon: TrendingUp },
              { metric: "$50M+", label: "Revenue Generated", icon: Star },
              { metric: "99.9%", label: "Average Uptime", icon: TrendingUp },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={index} animation="scale" delay={index * 0.15}>
                  <div className="text-center p-8 bg-card/50 backdrop-blur border border-border rounded-2xl hover:border-orange transition-all group">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-orange group-hover:scale-110 transition-transform" />
                    <div className="text-5xl font-bold text-orange mb-2">{stat.metric}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal animation="scale">
          <div className="text-center bg-card/50 backdrop-blur border border-purple rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to See <span className="text-purple">Your Project</span> Here?
            </h2>
            <p className="text-muted-foreground mb-8">
              Let's build something amazing together
            </p>
            <button className="px-8 py-3 bg-gradient-accent text-black rounded-lg font-semibold hover:shadow-glow-accent transition-all">
              Start Your Project
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Projects;
