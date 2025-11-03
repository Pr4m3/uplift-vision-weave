import { Users, Target, Zap, Award, Rocket, Heart, Code, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeArrow from "@/components/DecorativeArrow";
import GlobeIcon from "@/components/GlobeIcon";

const About = () => {
  const stats = [
    { label: "Projects Delivered", value: "50+" },
    { label: "Happy Clients", value: "30+" },
    { label: "Team Members", value: "10+" },
    { label: "Year Strong", value: "1" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering innovative solutions that create lasting impact and drive meaningful change.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and methodologies to solve complex challenges creatively.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build long-term partnerships, not just products.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, security, and delivery across all projects.",
    },
  ];

  const team = [
    { role: "Engineers", count: 6, icon: Code },
    { role: "Designers", count: 2, icon: Globe },
    { role: "Product Managers", count: 1, icon: Target },
    { role: "DevOps", count: 1, icon: Rocket },
  ];

  const milestones = [
    { year: "2025", event: "Uplyft Founded", description: "Born from a vision to uplift the Lebanese software market" },
    { year: "2025", event: "Speed Internship Program", description: "Launched intensive program to train the next generation of developers" },
    { year: "Future", event: "Future Forward", description: "Continuing to build production-grade solutions and empower talent" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="relative">
          <GlobeIcon className="absolute -top-10 right-10 w-20 h-20 text-orange opacity-20" />
          <ScrollReveal animation="fade-slide">
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-orange/50">
                <span className="text-sm text-orange">Our Story</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                About <span className="text-cyan">Uplyft</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                We're a team of passionate technologists dedicated to building software that transforms businesses and improves lives
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-32">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={index}
              animation="scale"
              delay={index * 0.1}
            >
              <div className="text-center p-6 bg-card/50 backdrop-blur rounded-xl border border-border hover:border-cyan transition-all hover:shadow-glow-primary group">
                <div className="text-4xl md:text-5xl font-bold text-cyan mb-2 group-hover:text-purple transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Our Story */}
        <section className="mb-32 relative">
          <DecorativeArrow color="purple" className="absolute -top-10 right-0" />
          <div className="max-w-4xl mx-auto">
            <ScrollReveal animation="slide-right">
              <div className="bg-card/50 backdrop-blur border border-border rounded-3xl p-8 md:p-12">
                <h2 className="text-4xl font-bold mb-8 text-purple">Our Story</h2>
                <div className="space-y-6 text-muted-foreground text-lg">
                  <p>
                    Founded in 2025, <span className="text-cyan font-semibold">Uplyft</span> emerged from a vision to uplift the Lebanese software market. Our founders noticed a gap in the quality of software development and took matters into their own hands—reaching out to the best talent in their network and mapping out a mission, vision, and goals to transform the industry.
                  </p>
                  <p>
                    We specialize in building <span className="text-orange font-semibold">production-grade web and mobile solutions</span>, e-commerce websites, automations, and ERPs, delivered by agile teams with long-term support. Our approach is noted for a strong UX focus, offering UX consultations, and for owning products from <span className="text-purple font-semibold">0 to 1</span> (idea → launch) and from <span className="text-cyan font-semibold">1 to ∞</span> (scaling, road-mapping, and continual improvement).
                  </p>
                  <p>
                    Whether through <span className="text-purple font-semibold">product ownership</span>, <span className="text-cyan font-semibold">UX consultations</span>, or <span className="text-orange font-semibold">revamping and boosting user experiences</span>, our work serves both internal operations and public platforms with real user bases that struggle to translate their missions into clear, actionable objectives through their platforms.
                  </p>
                  <p className="text-cyan italic">
                    — often attributive ("an Uplyft build," "Uplyft standards")
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <ScrollReveal animation="slide-right">
              <div className="bg-card/50 backdrop-blur border border-cyan rounded-2xl p-10 h-full">
                <Target className="w-16 h-16 text-cyan mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-cyan">Our Mission</h3>
                <p className="text-muted-foreground text-lg">
                  To uplift the Lebanese software market by delivering production-grade solutions with a strong UX focus, owning products from idea to launch and beyond, helping businesses translate their missions into clear, actionable objectives.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal animation="slide-left" delay={0.2}>
              <div className="bg-card/50 backdrop-blur border border-purple rounded-2xl p-10 h-full">
                <Rocket className="w-16 h-16 text-purple mb-6" />
                <h3 className="text-3xl font-bold mb-4 text-purple">Our Vision</h3>
                <p className="text-muted-foreground text-lg">
                  To be recognized for "Uplyft standards" – synonymous with exceptional quality, transforming how businesses approach software development through product ownership, UX excellence, and continuous improvement.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="text-orange">Values</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="slide-up"
                  delay={index * 0.1}
                >
                  <div className="text-center p-8 bg-card/50 backdrop-blur rounded-2xl border border-border hover:border-orange transition-all hover:shadow-glow-accent group h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-gradient-accent rounded-xl flex items-center justify-center shadow-glow-accent group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-orange">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="mb-32 bg-card/30 rounded-3xl p-12 md:p-16">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our <span className="text-cyan">Team</span>
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => {
              const Icon = member.icon;
              return (
                <ScrollReveal key={index} animation="scale" delay={index * 0.1}>
                  <div className="text-center p-6 bg-card/50 backdrop-blur border border-border rounded-xl hover:border-purple transition-all group">
                    <Icon className="w-12 h-12 mx-auto mb-4 text-purple group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-purple mb-2">{member.count}</div>
                    <div className="text-sm text-muted-foreground">{member.role}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-32">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-20">
              Our <span className="text-purple">Journey</span>
            </h2>
          </ScrollReveal>
          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan via-purple to-orange"></div>
            
            {milestones.map((milestone, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
                <div className={`flex items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'} pl-16 md:pl-0`}>
                    <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:border-cyan transition-all">
                      <div className="text-2xl font-bold text-cyan mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-semibold mb-2 text-purple">{milestone.event}</h4>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cyan rounded-full transform -translate-x-1/2 border-4 border-background"></div>
                  <div className="w-full md:w-1/2"></div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal animation="scale">
          <div className="text-center bg-card/50 backdrop-blur border border-border rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <Heart className="absolute top-4 right-4 w-12 h-12 text-orange opacity-20" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Our <span className="text-cyan">Journey</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals who share our passion for technology and innovation
            </p>
            <button className="px-8 py-3 bg-gradient-accent rounded-lg font-semibold hover:shadow-glow-accent transition-all">
              View Open Positions
            </button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default About;
