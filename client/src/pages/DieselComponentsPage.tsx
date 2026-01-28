import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import dieselImg from "@assets/diesel-components.jpg";

const dieselProducts = [
  {
    id: "1",
    name: "Common Rail Injectors",
    slug: "common-rail-injectors",
    description: "High-precision Denso common rail diesel injectors for optimal fuel atomization and combustion efficiency.",
    count: 450,
  },
  {
    id: "2",
    name: "Diesel Fuel Pumps",
    slug: "diesel-fuel-pumps",
    description: "Denso high-pressure diesel fuel pumps engineered for reliable fuel delivery.",
    count: 280,
  },
  {
    id: "3",
    name: "Supply Pumps",
    slug: "supply-pumps",
    description: "Feed pumps that deliver fuel from the tank to the high-pressure pump.",
    count: 165,
  },
  {
    id: "4",
    name: "Suction Control Valves",
    slug: "suction-control-valves",
    description: "Precision valves that regulate fuel flow to the high-pressure pump.",
    count: 120,
  },
  {
    id: "5",
    name: "Glow Plugs",
    slug: "glow-plugs",
    description: "Denso glow plugs for quick diesel engine starting in cold conditions.",
    count: 380,
  },
  {
    id: "6",
    name: "Diesel Particulate Filters",
    slug: "dpf-sensors",
    description: "DPF sensors and components for emissions control systems.",
    count: 95,
  },
];

export default function DieselComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-diesel-components">
      <SEO 
        title="Diesel Components | MPS"
        description="Premium Denso diesel components including common rail injectors, fuel pumps, glow plugs, and diesel system parts for all major vehicle brands."
        keywords="diesel components, common rail injectors, diesel fuel pumps, glow plugs, Denso diesel parts, UAE"
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
                  Diesel Components
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Premium Denso diesel system components engineered for performance and reliability. From common rail injectors to glow plugs, we supply genuine parts for all major diesel engines.
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
                  src={dieselImg} 
                  alt="Diesel Components"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Diesel Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dieselProducts.map((product) => (
                <Card key={product.id} className="overflow-visible hover-elevate" data-testid={`card-diesel-${product.id}`}>
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
                      <Button className="w-full gap-2" data-testid={`button-diesel-${product.id}`}>
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
