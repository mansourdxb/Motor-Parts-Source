import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import filtrationImg from "@assets/denso-filtration-cat.png";
import airFilterImg from "@assets/denso-air-filter.jpg";
import cabinFilterImg from "@assets/denso-cabin-filter.jpg";
import oilFilterImg from "@assets/denso-oil-filter.jpg";

const filtrationProducts = [
  {
    id: "1",
    name: "Air Filters",
    image: airFilterImg,
    description: "High-efficiency air filters for clean airflow and optimal engine performance.",
    slug: "air-filters",
  },
  {
    id: "2",
    name: "Cabin Air Filters",
    image: cabinFilterImg,
    description: "Cabin air filters for clean, fresh air inside the vehicle interior.",
    slug: "cabin-air-filters",
  },
  {
    id: "3",
    name: "Oil Filters",
    image: oilFilterImg,
    description: "Denso oil filters designed to capture contaminants and protect your engine.",
    slug: "oil-filters",
  },
];

export default function FiltrationPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-filtration">
      <SEO 
        title="Filtration Products | MPS"
        description="Complete range of Denso filtration products including air filters, cabin filters, and oil filters for all vehicle applications."
        keywords="air filters, cabin filters, oil filters, Denso filters, automotive filtration, UAE"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories">
              <Button variant="outline" size="sm" className="mb-6 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-categories">
                All Categories
              </Button>
            </Link>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                  Filtration
                </h1>
                <p className="text-primary-foreground/90 mb-6 max-w-lg">
                  Premium Denso filtration products engineered to protect your vehicle's critical systems. From air and oil filters to cabin filters, we supply quality parts for all applications.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Link href="/contact">
                    <Button variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">Request Quote</Button>
                  </Link>
                  <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>
              <div className="hidden lg:flex justify-end">
                <img 
                  src={filtrationImg} 
                  alt="Filtration Products"
                  className="max-w-md rounded-lg"
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
                  <div className="aspect-video overflow-hidden rounded-t-md bg-muted flex items-center justify-center p-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="max-h-full object-contain"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href="/contact">
                      <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90" data-testid={`button-filter-${product.id}`}>
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
