import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import { Mail, Phone, LinkedinIcon, GithubIcon, FileText, CheckCircle2, Upload } from "lucide-react";

const formSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(8, "Please enter a valid phone number").max(20, "Phone number is too long"),
  position: z.string().min(1, "Please select a position"),
  linkedin: z.string().trim().url("Please enter a valid URL").max(500, "URL is too long").optional().or(z.literal("")),
  github: z.string().trim().url("Please enter a valid URL").max(500, "URL is too long").optional().or(z.literal("")),
  portfolio: z.string().trim().url("Please enter a valid URL").max(500, "URL is too long").optional().or(z.literal("")),
  experience: z.string().min(1, "Please select your experience level"),
  coverLetter: z.string().trim().min(50, "Cover letter must be at least 50 characters").max(2000, "Cover letter must be less than 2000 characters"),
});

const Apply = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [searchParams] = useSearchParams();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      position: "",
      linkedin: "",
      github: "",
      portfolio: "",
      experience: "",
      coverLetter: "",
    },
  });

  useEffect(() => {
    const positionParam = searchParams.get("position");
    if (positionParam) {
      form.setValue("position", positionParam);
    }
  }, [searchParams, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      // Here you would typically send the data to your backend
      console.log("Application submitted:", values);
      
      setIsSubmitted(true);
      toast({
        title: "Application Submitted!",
        description: "We'll review your application and get back to you soon.",
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
                Application <span className="text-purple">Received</span>!
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Thank you for applying to Uplyft! We'll carefully review your application and reach out to you if we see a great fit.
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
            <div className="inline-block mb-6 px-4 py-2 bg-card/50 backdrop-blur rounded-full border border-purple/50">
              <span className="text-sm text-purple">Join Our Team</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Apply for a <span className="text-purple">Position</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Take the first step towards building your career at Uplyft. Fill out the application below and we'll be in touch
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
                    name="position"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <FileText className="w-4 h-4" />
                          Position *
                        </FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a position" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="senior-fullstack">Senior Full Stack Developer</SelectItem>
                            <SelectItem value="ux-ui-designer">UX/UI Designer</SelectItem>
                            <SelectItem value="product-manager">Product Manager</SelectItem>
                            <SelectItem value="devops-engineer">DevOps Engineer</SelectItem>
                            <SelectItem value="internship-web">Speed Internship - Web Development</SelectItem>
                            <SelectItem value="internship-mobile">Speed Internship - Mobile Development</SelectItem>
                            <SelectItem value="internship-social">Speed Internship - Social Media</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="experience"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Experience Level *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your experience level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="entry">Entry Level (0-1 years)</SelectItem>
                          <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                          <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                          <SelectItem value="senior">Senior (5+ years)</SelectItem>
                          <SelectItem value="student">Student/Intern</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <LinkedinIcon className="w-4 h-4" />
                          LinkedIn
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="https://linkedin.com/in/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <GithubIcon className="w-4 h-4" />
                          GitHub
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="https://github.com/..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="portfolio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Upload className="w-4 h-4" />
                          Portfolio/Website
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="https://yourportfolio.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="coverLetter"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Cover Letter *</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us why you want to join Uplyft, what makes you a great fit, and what you hope to achieve with us..."
                          className="min-h-[200px] resize-none"
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
                    className="w-full bg-gradient-accent hover:shadow-glow-accent text-lg py-6"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "Submitting..." : "Submit Application"}
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

export default Apply;
