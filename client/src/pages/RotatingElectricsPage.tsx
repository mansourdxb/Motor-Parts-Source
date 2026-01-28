import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import rotatingImg from "@assets/rotating-electrics.jpg";

const rotatingProducts = [
  {
    id: "1",
    name: "Alternators",
    slug: "alternators",
    description: "Denso alternators for reliable electrical power generation and battery charging.",
    count: 580,
  },
  {
    id: "2",
    name: "Starter Motors",
    slug: "starter-motors",
    description: "High-torque starter motors for dependable engine cranking.",
    count: 490,
  },
  {
    id: "3",
    name: "Alternator Regulators",
    slug: "alternator-regulators",
    description: "Voltage regulators for consistent alternator output control.",
    count: 185,
  },
  {
    id: "4",
    name: "Starter Solenoids",
    slug: "starter-solenoids",
    description: "Starter solenoids for reliable starter motor engagement.",
    count: 145,
  },
  {
    id: "5",
    name: "Alternator Pulleys",
    slug: "alternator-pulleys",
    description: "OE-quality alternator pulleys including overrunning alternator pulleys.",
    count: 220,
  },
  {
    id: "6",
    name: "Carbon Brushes",
    slug: "carbon-brushes",
    description: "Replacement carbon brushes for alternators and starter motors.",
    count: 165,
  },
];

export default function RotatingElectricsPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-rotating-electrics">
      <SEO 
        title="Rotating Electrics | MPS"
        description="Premium Denso rotating electrical components including alternators, starter motors, and related parts for all vehicle applications."
        keywords="alternators, starter motors, rotating electrics, Denso alternators, automotive electrical, UAE"
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
                  Rotating Electrics
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Premium Denso rotating electrical components for reliable power generation and engine starting. From alternators to starter motors, we supply quality parts for all vehicles.
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
                  src={rotatingImg} 
                  alt="Rotating Electrics"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Rotating Electrics Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rotatingProducts.map((product) => (
                <Card key={product.id} className="overflow-visible hover-elevate" data-testid={`card-rotating-${product.id}`}>
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
                      <Button className="w-full gap-2" data-testid={`button-rotating-${product.id}`}>
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
