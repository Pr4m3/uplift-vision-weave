import { Users, Target, Zap, Award } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Projects Delivered", value: "500+" },
    { label: "Happy Clients", value: "200+" },
    { label: "Team Members", value: "50+" },
    { label: "Countries Served", value: "25+" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to delivering innovative solutions that create lasting impact.",
    },
    {
      icon: Zap,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies to solve complex challenges.",
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our success. We build partnerships, not just products.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality and delivery.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Uplyft</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're a team of passionate technologists dedicated to building software that transforms businesses and improves lives
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card/50 backdrop-blur rounded-xl border border-border hover:border-primary transition-all hover:shadow-glow-primary animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card/50 backdrop-blur border border-border rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2018, Uplyft emerged from a simple vision: to bridge the gap between cutting-edge technology and real-world business challenges. Our founders, seasoned software engineers with decades of combined experience, recognized that many businesses struggled to leverage modern technology effectively.
              </p>
              <p>
                Today, we're proud to have grown into a full-service software development company with a talented team of engineers, designers, and strategists. We've delivered hundreds of successful projects across industries including finance, healthcare, e-commerce, and more.
              </p>
              <p>
                What sets us apart is our commitment to not just building software, but building relationships. We take the time to understand your business, your challenges, and your goals. Then we craft solutions that don't just meet requirements—they exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our <span className="bg-gradient-accent bg-clip-text text-transparent">Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 bg-card/50 backdrop-blur rounded-xl border border-border hover:border-primary transition-all hover:shadow-glow-primary animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-primary">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center bg-card/50 backdrop-blur border border-border rounded-2xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">
            Join Our <span className="bg-gradient-primary bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented individuals who share our passion for technology and innovation
          </p>
          <button className="px-8 py-3 bg-gradient-accent rounded-lg font-semibold hover:shadow-glow-accent transition-all">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
