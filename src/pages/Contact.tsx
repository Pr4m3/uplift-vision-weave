import { useState } from "react";
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import DecorativeArrow from "@/components/DecorativeArrow";
import GlobeIcon from "@/components/GlobeIcon";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@uplyft.dev",
      link: "mailto:hello@uplyft.dev",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: null,
    },
  ];

  const offices = [
    { city: "San Francisco", country: "USA", timezone: "PST" },
    { city: "London", country: "UK", timezone: "GMT" },
    { city: "Singapore", country: "Singapore", timezone: "SGT" },
    { city: "Dubai", country: "UAE", timezone: "GST" },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="relative">
          <GlobeIcon className="absolute -top-10 right-10 w-20 h-20 text-cyan opacity-20 animate-float" />
          <DecorativeArrow color="orange" className="absolute top-0 left-0" />
          
          <ScrollReveal animation="fade-slide">
            <div className="text-center mb-20">
              <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-cyan/50">
                <span className="text-sm text-cyan">Let's Connect</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Get In <span className="text-cyan">Touch</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Have a project in mind? Let's discuss how we can help bring your vision to life
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20">
          {/* Contact Form */}
          <ScrollReveal animation="slide-right" className="lg:col-span-2">
            <div className="bg-card/50 backdrop-blur border border-border rounded-3xl p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan">Name</label>
                    <Input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      required
                      className="bg-background/50 border-border focus:border-cyan"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-cyan">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@example.com"
                      required
                      className="bg-background/50 border-border focus:border-cyan"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cyan">Subject</label>
                  <Input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Project Inquiry"
                    required
                    className="bg-background/50 border-border focus:border-cyan"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-cyan">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    required
                    rows={6}
                    className="bg-background/50 resize-none border-border focus:border-cyan"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-primary text-black hover:shadow-glow-primary font-bold text-lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </ScrollReveal>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <ScrollReveal
                  key={index}
                  animation="slide-left"
                  delay={index * 0.1}
                >
                  <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:border-cyan transition-all hover:shadow-glow-primary group">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{info.label}</div>
                        {info.link ? (
                          <a
                            href={info.link}
                            className="text-foreground hover:text-cyan transition-colors font-medium"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <div className="text-foreground font-medium">{info.value}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}

            <ScrollReveal animation="slide-left" delay={0.3}>
              <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-6 h-6 text-purple" />
                  <h3 className="text-xl font-semibold text-purple">Business Hours</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="font-medium">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="font-medium text-orange">Closed</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={0.4}>
              <div className="bg-card/50 backdrop-blur border border-orange rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="w-6 h-6 text-orange" />
                  <h3 className="text-xl font-semibold text-orange">Live Chat</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Need immediate assistance? Our AI assistant is available 24/7
                </p>
                <Button variant="outline" className="w-full border-orange text-orange hover:bg-orange/10">
                  Start Chat
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Global Offices */}
        <section className="mb-20">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
              Our Global <span className="text-purple">Presence</span>
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <ScrollReveal key={index} animation="scale" delay={index * 0.1}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 text-center hover:border-purple transition-all group">
                  <Globe className="w-12 h-12 mx-auto mb-4 text-purple group-hover:scale-110 transition-transform" />
                  <h4 className="text-xl font-bold mb-1 text-cyan">{office.city}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{office.country}</p>
                  <div className="text-xs text-orange">{office.timezone}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-20 bg-card/30 rounded-3xl p-12">
          <ScrollReveal animation="fade-slide">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Frequently Asked <span className="text-cyan">Questions</span>
            </h2>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: "What's your typical project timeline?",
                a: "Project timelines vary based on complexity, but most projects take 8-16 weeks from kickoff to launch. We provide detailed timelines during the planning phase.",
              },
              {
                q: "Do you offer ongoing support and maintenance?",
                a: "Yes! We provide comprehensive post-launch support, including bug fixes, updates, and feature enhancements. Support packages can be customized to your needs.",
              },
              {
                q: "What's your development process?",
                a: "We follow an agile methodology with 2-week sprints, regular check-ins, and continuous feedback loops to ensure alignment with your vision.",
              },
              {
                q: "Can you work with our existing team?",
                a: "Absolutely! We can augment your team with our developers or collaborate seamlessly with your in-house technical staff.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={index} animation="slide-up" delay={index * 0.1}>
                <div className="bg-card/50 backdrop-blur border border-border rounded-xl p-6 hover:border-cyan transition-all">
                  <h4 className="font-bold text-lg mb-2 text-cyan">{faq.q}</h4>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal animation="scale">
          <div className="text-center bg-card/50 backdrop-blur border border-purple rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your <span className="text-orange">Project</span>?
            </h2>
            <p className="text-muted-foreground mb-8">
              Schedule a free consultation to discuss your needs and explore solutions
            </p>
            <Button className="bg-gradient-accent hover:shadow-glow-accent text-lg px-8 py-3">
              Schedule Free Consultation
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default Contact;
