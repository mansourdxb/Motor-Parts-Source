import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormInput } from "@shared/schema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock,
  Send,
  Loader2
} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const { toast } = useToast();
  
  const form = useForm<ContactFormInput>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: ContactFormInput) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormInput) => {
    mutation.mutate(data);
  };

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-contact">
      <SEO 
        title="Contact Us"
        description="Contact Motor Parts Source L.L.C for auto parts inquiries. Located in Sharjah, UAE. Call +971 55 702 9285 or WhatsApp for quick response."
        keywords="contact motor parts source, auto parts Sharjah, car parts UAE phone"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-contact-title">
                Contact Us
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Have questions about our products or need help finding a specific part? 
                Our team is ready to assist you.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="p-6 lg:p-8">
                  <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="Your name" data-testid="input-name" {...field} />
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
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input type="email" placeholder="your@email.com" data-testid="input-email" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone Number</FormLabel>
                              <FormControl>
                                <Input type="tel" placeholder="+971 XX XXX XXXX" data-testid="input-phone" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="subject"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Subject</FormLabel>
                              <FormControl>
                                <Input placeholder="How can we help?" data-testid="input-subject" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us more about your inquiry..." 
                                rows={5}
                                data-testid="input-message"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full sm:w-auto gap-2"
                        disabled={mutation.isPending}
                        data-testid="button-submit"
                      >
                        {mutation.isPending ? (
                          <>
                            <Loader2 className="h-5 w-5 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-4">Contact Information</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-primary" />
                      <span className="text-muted-foreground text-sm">
                        Industrial Area, Sharjah<br />
                        United Arab Emirates
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-primary" />
                      <a href="tel:+971557029285" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-contact-phone">
                        +971 55 702 9285
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Mail className="h-5 w-5 shrink-0 text-primary" />
                      <a href="mailto:sales@mpsuae.com" className="text-muted-foreground hover:text-foreground transition-colors text-sm" data-testid="link-contact-email">
                        sales@mpsuae.com
                      </a>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 shrink-0 text-primary" />
                      <span className="text-muted-foreground text-sm">
                        Sat - Thu: 8:00 AM - 6:00 PM
                      </span>
                    </li>
                  </ul>
                </Card>

                <Card className="p-6 bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-3">
                    <SiWhatsapp className="h-8 w-8 text-green-600" />
                    <div>
                      <h3 className="font-semibold">Quick Response</h3>
                      <p className="text-sm text-muted-foreground">Chat with us on WhatsApp</p>
                    </div>
                  </div>
                  <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-green-600 border-green-700" data-testid="button-whatsapp-contact">
                      Start Chat
                    </Button>
                  </a>
                </Card>

                <Card className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Business Hours</h3>
                  <ul className="space-y-2 text-sm">
                    <li className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Saturday - Thursday</span>
                      <span className="font-medium">8:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-4">
                      <span className="text-muted-foreground">Friday</span>
                      <span className="font-medium text-destructive">Closed</span>
                    </li>
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
