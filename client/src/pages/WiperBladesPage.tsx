import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import conventionalImg from "@assets/denso-conventional-wiper.jpg";
import flatImg from "@assets/denso-flat-wiper.jpg";
import hybridImg from "@assets/denso-hybrid-wiper.jpg";
import rearImg from "@assets/denso-rear-wiper.jpg";

const wiperProducts = [
  {
    id: "1",
    name: "Conventional (Bracket) Wiper Blades",
    image: conventionalImg,
    description: "Traditional frame-style wiper blades for reliable performance.",
    slug: "conventional-wipers",
    count: 180,
  },
  {
    id: "2",
    name: "Flat Wiper Blades",
    image: flatImg,
    description: "Aerodynamic flat blade wipers for superior visibility and quiet operation.",
    slug: "flat-wipers",
    count: 220,
  },
  {
    id: "3",
    name: "Hybrid Wiper Blades",
    image: hybridImg,
    description: "Combination design wipers offering the best of both flat and conventional styles.",
    slug: "hybrid-wipers",
    count: 165,
  },
  {
    id: "4",
    name: "Rear Wiper Blades",
    image: rearImg,
    description: "Rear window wiper blades for SUVs, hatchbacks, and wagons.",
    slug: "rear-wipers",
    count: 140,
  },
];

export default function WiperBladesPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-wiper-blades">
      <SEO 
        title="Wiper Blades | MPS"
        description="Premium Denso wiper blades including flat blade, conventional, hybrid, and rear designs for all vehicle makes and models."
        keywords="wiper blades, windscreen wipers, flat blade wipers, Denso wipers, automotive wipers, UAE"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Link href="/categories">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-categories">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-wiper-title">
              Wiper Blades
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Premium Denso wiper blades engineered for clear visibility in all weather conditions. 
              From flat blade to hybrid designs - quality wipers for all vehicles.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Wiper Blades Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {wiperProducts.map((product) => (
                <Card 
                  key={product.id}
                  className="group overflow-visible hover-elevate"
                  data-testid={`card-wiper-${product.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-t-md bg-muted flex items-center justify-center p-6">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-xs mb-1">
                      {product.count}+ parts
                    </p>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href="/contact">
                      <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90" data-testid={`button-wiper-${product.id}`}>
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
