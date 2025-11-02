import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "FinTech AI Platform",
      description: "AI-powered financial analytics platform processing millions of transactions daily",
      category: "AI & ML",
      tags: ["Python", "TensorFlow", "React", "AWS"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    },
    {
      title: "Healthcare Management System",
      description: "Comprehensive patient management system with HIPAA compliance",
      category: "Web Development",
      tags: ["React", "Node.js", "PostgreSQL", "Docker"],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop",
    },
    {
      title: "E-Commerce Mobile App",
      description: "Cross-platform shopping app with real-time inventory and AR try-on",
      category: "Mobile",
      tags: ["React Native", "Firebase", "Stripe", "ARKit"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600&h=400&fit=crop",
    },
    {
      title: "Smart City IoT Platform",
      description: "IoT infrastructure managing 10,000+ devices for urban optimization",
      category: "Cloud & IoT",
      tags: ["Python", "Azure IoT", "React", "TimescaleDB"],
      image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?w=600&h=400&fit=crop",
    },
    {
      title: "Blockchain Supply Chain",
      description: "Transparent supply chain tracking using blockchain technology",
      category: "Blockchain",
      tags: ["Ethereum", "Solidity", "React", "Web3.js"],
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
    },
    {
      title: "AI Video Analytics",
      description: "Real-time video processing with object detection and tracking",
      category: "AI & ML",
      tags: ["Python", "OpenCV", "PyTorch", "FastAPI"],
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600&h=400&fit=crop",
    },
  ];

  const categories = ["all", "AI & ML", "Web Development", "Mobile", "Cloud & IoT", "Blockchain"];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing innovative solutions that drive real-world impact
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === category
                  ? "bg-gradient-primary shadow-glow-primary"
                  : "bg-card border border-border hover:border-primary"
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={index}
              className="group bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:shadow-glow-primary hover:-translate-y-2 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
              </div>
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary" className="bg-secondary/20">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2">
                    <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <Github className="w-4 h-4" />
                    </button>
                    <button className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 rounded-full bg-muted/50 border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
