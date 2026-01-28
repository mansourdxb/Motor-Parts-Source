import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import wiperImg from "@assets/wiper-blades.jpg";

const wiperProducts = [
  {
    id: "1",
    name: "Flat Blade Wipers",
    slug: "flat-blade-wipers",
    description: "Aerodynamic flat blade wipers for superior visibility and quiet operation.",
    count: 320,
  },
  {
    id: "2",
    name: "Conventional Wipers",
    slug: "conventional-wipers",
    description: "Traditional frame-style wiper blades for reliable performance.",
    count: 280,
  },
  {
    id: "3",
    name: "Hybrid Wipers",
    slug: "hybrid-wipers",
    description: "Combination design wipers offering the best of both flat and conventional styles.",
    count: 195,
  },
  {
    id: "4",
    name: "Rear Wipers",
    slug: "rear-wipers",
    description: "Rear window wiper blades for SUVs, hatchbacks, and wagons.",
    count: 145,
  },
  {
    id: "5",
    name: "Wiper Arms",
    slug: "wiper-arms",
    description: "Replacement wiper arms for front and rear applications.",
    count: 120,
  },
  {
    id: "6",
    name: "Wiper Motors",
    slug: "wiper-motors",
    description: "OE-quality wiper motors for front and rear wiper systems.",
    count: 85,
  },
];

export default function WiperBladesPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-wiper-blades">
      <SEO 
        title="Wiper Blades | MPS"
        description="Premium Denso wiper blades including flat blade, conventional, and hybrid designs for all vehicle makes and models."
        keywords="wiper blades, windscreen wipers, flat blade wipers, Denso wipers, automotive wipers, UAE"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-20">
          <div className="container mx-auto px-4">
            <Link href="/categories">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-categories">
                <ArrowLeft className="h-4 w-4" />
                All Categories
              </Button>
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Wiper Blades
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Premium Denso wiper blades engineered for clear visibility in all weather conditions. From flat blade to hybrid designs, we supply quality wipers for all vehicles.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary">Request Quote</Button>
                  </Link>
                  <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden lg:block">
                <img 
                  src={wiperImg} 
                  alt="Wiper Blades"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Wiper Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wiperProducts.map((product) => (
                <Card key={product.id} className="overflow-visible hover-elevate" data-testid={`card-wiper-${product.id}`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-lg">{product.name}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {product.count}+ SKUs
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href="/contact">
                      <Button className="w-full gap-2" data-testid={`button-wiper-${product.id}`}>
                        Get Quote
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
