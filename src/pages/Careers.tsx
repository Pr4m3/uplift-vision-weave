import { Briefcase, MapPin, Clock, ArrowRight, Users, Zap, Heart, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeArrow from "@/components/DecorativeArrow";
import GlobeIcon from "@/components/GlobeIcon";

const Careers = () => {
  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Beirut, Lebanon",
      type: "Full-time",
      description: "Build production-grade web and mobile solutions with our agile team",
      skills: ["React", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Beirut, Lebanon",
      type: "Full-time",
      description: "Create exceptional user experiences for our client projects",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Beirut, Lebanon",
      type: "Full-time",
      description: "Own products from 0 to 1 and scale them to infinity",
      skills: ["Product Strategy", "Agile", "User Stories", "Analytics"],
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Beirut, Lebanon",
      type: "Full-time",
      description: "Maintain and scale our infrastructure for production environments",
      skills: ["AWS", "Docker", "CI/CD", "Kubernetes"],
    },
  ];

  const benefits = [
    {
      icon: Zap,
      title: "Fast-Paced Growth",
      description: "Work on real production projects that impact users directly",
    },
    {
      icon: Users,
      title: "Collaborative Team",
      description: "Join a network of the best talent in Lebanon's tech scene",
    },
    {
      icon: Trophy,
      title: "Learn & Excel",
      description: "Access to mentorship, training, and continuous improvement",
    },
    {
      icon: Heart,
      title: "Work-Life Balance",
      description: "Flexible hours and a supportive work environment",
    },
  ];

  const internshipTracks = [
    {
      title: "Web Development",
      color: "text-purple",
      description: "Master modern web technologies and frameworks",
    },
    {
      title: "Mobile App Development",
      color: "text-cyan",
      description: "Build native and cross-platform mobile applications",
    },
    {
      title: "Social Media & Content",
      color: "text-orange",
      description: "Create engaging content and manage digital presence",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute top-0 right-10">
          <GlobeIcon className="w-16 h-16 text-cyan opacity-20" />
        </div>
        <DecorativeArrow color="orange" size="lg" className="absolute top-20 left-10" />
        
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-cyan/50">
                <span className="text-sm text-cyan">Join Our Team</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Build Your <span className="text-cyan">Career</span>
                <br />
                at <span className="text-orange">Uplyft</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Be part of a team that's uplifting Lebanon's software market with production-grade solutions and Uplyft standards
              </p>
            </div>
          </ScrollReveal>

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
                  <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:border-cyan transition-all group">
                    <Icon className="w-12 h-12 text-cyan mb-4 group-hover:scale-110 transition-transform" />
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Open <span className="text-purple">Positions</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Join us in building the future of software development in Lebanon
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-8 hover:border-purple transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-gradient-primary hover:shadow-glow-primary">
                        Apply Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                  <p className="text-muted-foreground mb-4">{position.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cyan/20 border border-cyan rounded-full text-xs text-cyan"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Speed Internship Program */}
      <section className="py-20 relative">
        <DecorativeArrow color="cyan" className="absolute top-10 right-20" />
        
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-orange">Speed</span> Internship Program
              </h2>
              <p className="text-xl text-muted-foreground">
                Fast-track your career with our intensive internship program designed to transform aspiring developers into industry-ready professionals
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {internshipTracks.map((track, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 0.15}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8 hover:border-cyan transition-all group text-center">
                  <h3 className={`text-2xl font-bold mb-4 ${track.color}`}>
                    {track.title}
                  </h3>
                  <p className="text-muted-foreground">{track.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal animation="fade" delay={0.3}>
            <div className="text-center">
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

      {/* Culture Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fade-slide">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                Our <span className="text-cyan">Culture</span>
              </h2>
              <div className="bg-card/50 backdrop-blur border border-border rounded-3xl p-8 md:p-12">
                <p className="text-lg text-muted-foreground mb-6">
                  At Uplyft, we believe in building more than just software—we build careers, relationships, and a community 
                  of excellence. Our culture is rooted in collaboration, continuous learning, and a shared commitment to 
                  uplifting the Lebanese tech ecosystem.
                </p>
                <p className="text-lg text-muted-foreground">
                  We value strong UX focus, product ownership, and the ability to translate complex missions into clear, 
                  actionable objectives. Join us in creating "Uplyft standards" that define quality in the industry.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="scale">
            <div className="max-w-4xl mx-auto text-center bg-card/50 backdrop-blur border border-cyan rounded-3xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-primary opacity-5" />
              <div className="relative z-10">
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Ready to Join <span className="text-orange">Uplyft</span>?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Don't see a position that fits? Send us your resume anyway—we're always looking for exceptional talent
                </p>
                <Link to="/contact">
                  <Button className="bg-gradient-accent hover:shadow-glow-accent text-lg px-8 py-6">
                    Get in Touch
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

export default Careers;
