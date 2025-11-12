import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, Mail, Phone, Building2, CheckCircle2 } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number is too long"),
  company: z.string().trim().max(100, "Company name must be less than 100 characters").optional(),
  service: z.string().min(1, "Please select a service"),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters"),
});

const BookConsultation = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Form submitted:", values);
      
      setIsSubmitted(true);
      toast({
        title: "Consultation Booked!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <ScrollReveal animation="scale">
            <div className="text-center bg-card/50 backdrop-blur border border-cyan rounded-3xl p-12">
              <CheckCircle2 className="w-20 h-20 text-cyan mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Thank You!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Your consultation request has been received. Our team will contact you within 24 hours to schedule a meeting.
              </p>
              <Button 
                onClick={() => window.location.href = '/'}
                className="bg-gradient-primary hover:shadow-glow-primary"
              >
                Return to Home
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <ScrollReveal animation="fade-slide">
          <div className="text-center mb-12">
            <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-cyan/50">
              <span className="text-sm text-cyan">Let's Talk</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Book a <span className="text-cyan">Consultation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Schedule a free consultation with our team to discuss your project requirements and explore how we can help transform your business
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="slide-up" delay={0.2}>
          <div className="bg-card/50 backdrop-blur border border-border rounded-3xl p-8 md:p-12">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name *</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Mail className="w-4 h-4" />
                          Email *
                        </FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="john@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Phone className="w-4 h-4" />
                          Phone Number *
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="+961 70 123 456" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Building2 className="w-4 h-4" />
                          Company (Optional)
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Your Company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        Service of Interest *
                      </FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="custom-software">Custom Software Development</SelectItem>
                          <SelectItem value="ai-ml">AI & Machine Learning</SelectItem>
                          <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                          <SelectItem value="cloud">Cloud Solutions</SelectItem>
                          <SelectItem value="cybersecurity">Cybersecurity</SelectItem>
                          <SelectItem value="devops">DevOps & Automation</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Details *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                          className="min-h-[150px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow-primary text-lg py-6"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Schedule Consultation"}
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
};

export default BookConsultation;
