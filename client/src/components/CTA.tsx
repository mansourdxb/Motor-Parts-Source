import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export function CTA() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-cta">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 lg:p-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4" data-testid="text-cta-title">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
            Contact our expert team and we'll help you source the exact part you need. 
            We have access to millions of parts worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-green-600 border-green-700 text-white gap-2" data-testid="button-cta-whatsapp">
                <SiWhatsapp className="h-5 w-5" />
                Chat on WhatsApp
              </Button>
            </a>
            <a href="tel:+971557029285">
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white gap-2" data-testid="button-cta-call">
                <Phone className="h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
