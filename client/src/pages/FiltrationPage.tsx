import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import filtrationImg from "@assets/filtration.jpg";

const filtrationProducts = [
  {
    id: "1",
    name: "Oil Filters",
    slug: "oil-filters",
    description: "Denso oil filters designed to capture contaminants and protect your engine.",
    count: 680,
  },
  {
    id: "2",
    name: "Air Filters",
    slug: "air-filters",
    description: "High-efficiency air filters for clean airflow and optimal engine performance.",
    count: 520,
  },
  {
    id: "3",
    name: "Fuel Filters",
    slug: "fuel-filters",
    description: "Premium fuel filters to protect fuel system components from contamination.",
    count: 380,
  },
  {
    id: "4",
    name: "Cabin Air Filters",
    slug: "cabin-filters",
    description: "Cabin air filters for clean, fresh air inside the vehicle interior.",
    count: 420,
  },
  {
    id: "5",
    name: "Transmission Filters",
    slug: "transmission-filters",
    description: "Quality transmission filters for smooth gear operation and longevity.",
    count: 195,
  },
  {
    id: "6",
    name: "Hydraulic Filters",
    slug: "hydraulic-filters",
    description: "Hydraulic system filters for power steering and brake systems.",
    count: 145,
  },
];

export default function FiltrationPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-filtration">
      <SEO 
        title="Filtration Products | MPS"
        description="Complete range of Denso filtration products including oil filters, air filters, fuel filters, and cabin filters for all vehicle applications."
        keywords="oil filters, air filters, fuel filters, cabin filters, Denso filters, automotive filtration, UAE"
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
                  Filtration
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Premium Denso filtration products engineered to protect your vehicle's critical systems. From oil and air filters to cabin filters, we supply quality parts for all applications.
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
                  src={filtrationImg} 
                  alt="Filtration Products"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Filtration Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtrationProducts.map((product) => (
                <Card key={product.id} className="overflow-visible hover-elevate" data-testid={`card-filter-${product.id}`}>
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
                      <Button className="w-full gap-2" data-testid={`button-filter-${product.id}`}>
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
