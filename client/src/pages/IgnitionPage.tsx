import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import ignitionImg from "@assets/ignition-parts.jpg";

const ignitionProducts = [
  {
    id: "1",
    name: "Spark Plugs",
    slug: "spark-plugs",
    description: "Denso iridium and platinum spark plugs for reliable ignition and fuel efficiency.",
    count: 850,
  },
  {
    id: "2",
    name: "Ignition Coils",
    slug: "ignition-coils",
    description: "High-performance ignition coils for consistent spark delivery.",
    count: 620,
  },
  {
    id: "3",
    name: "Glow Plugs",
    slug: "glow-plugs",
    description: "Denso glow plugs for quick diesel engine cold starts.",
    count: 380,
  },
  {
    id: "4",
    name: "Ignition Leads",
    slug: "ignition-leads",
    description: "Premium ignition lead sets for efficient spark plug wire connections.",
    count: 290,
  },
  {
    id: "5",
    name: "Ignition Modules",
    slug: "ignition-modules",
    description: "Electronic ignition control modules for precise timing control.",
    count: 165,
  },
  {
    id: "6",
    name: "Distributor Caps & Rotors",
    slug: "distributor-parts",
    description: "Quality distributor caps and rotors for older ignition systems.",
    count: 145,
  },
];

export default function IgnitionPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-ignition">
      <SEO 
        title="Ignition Products | MPS"
        description="Complete range of Denso ignition components including spark plugs, ignition coils, glow plugs, and ignition leads for all vehicle makes."
        keywords="spark plugs, ignition coils, glow plugs, ignition leads, Denso ignition, automotive ignition, UAE"
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
                  Ignition
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Premium Denso ignition components for reliable engine starting and performance. From spark plugs to ignition coils, we supply quality parts for all petrol and diesel engines.
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
                  src={ignitionImg} 
                  alt="Ignition Products"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Ignition Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ignitionProducts.map((product) => (
                <Card key={product.id} className="overflow-visible hover-elevate" data-testid={`card-ignition-${product.id}`}>
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
                      <Button className="w-full gap-2" data-testid={`button-ignition-${product.id}`}>
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
