import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";
import heroBg from "@assets/hero-bg.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center" data-testid="section-hero">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 hero-gradient" />
      
      <div className="container mx-auto px-4 relative z-10 py-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white text-sm mb-6">
            <ShieldCheck className="h-4 w-4" />
            <span>Wholesale Auto Parts Supplier in UAE</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
            Your Wholesale Partner for
            <span className="block text-orange-300">Premium Motor Parts</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl" data-testid="text-hero-description">
            Wholesale supplier of OEM and aftermarket parts for workshops, garages, and trade buyers. 
            Bulk pricing, fast delivery across UAE, and worldwide shipping available.
          </p>
          
          <div className="flex flex-wrap gap-4 mb-12">
            <Button size="lg" className="bg-accent border-accent-border" data-testid="button-browse-parts">
              Browse Parts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white"
              data-testid="button-get-quote-hero"
            >
              Request Quote
            </Button>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-white" data-testid="feature-oem">
              <div className="bg-white/20 rounded-lg p-2">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">OEM Quality</p>
                <p className="text-sm text-white/70">Genuine parts guaranteed</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white" data-testid="feature-delivery">
              <div className="bg-white/20 rounded-lg p-2">
                <Truck className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">Fast Delivery</p>
                <p className="text-sm text-white/70">UAE & Worldwide</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 text-white" data-testid="feature-support">
              <div className="bg-white/20 rounded-lg p-2">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <p className="font-semibold">24/7 Support</p>
                <p className="text-sm text-white/70">Always here to help</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
