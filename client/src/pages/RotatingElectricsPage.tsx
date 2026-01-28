import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import alternatorImg from "@assets/denso-alternator.jpg";
import starterImg from "@assets/denso-starter.jpg";

const rotatingProducts = [
  {
    id: "1",
    name: "Alternators",
    image: alternatorImg,
    description: "Denso alternators for reliable electrical power generation and battery charging.",
    slug: "alternators",
    count: 380,
  },
  {
    id: "2",
    name: "Starters",
    image: starterImg,
    description: "High-torque starter motors for dependable engine cranking.",
    slug: "starters",
    count: 320,
  },
];

export default function RotatingElectricsPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-rotating-electrics">
      <SEO 
        title="Rotating Electrics | MPS"
        description="Premium Denso rotating electrical components including alternators and starter motors for all vehicle applications."
        keywords="alternators, starter motors, rotating electrics, Denso alternators, automotive electrical, UAE"
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-rotating-title">
              Rotating Electrics
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Premium Denso rotating electrical components for reliable power generation and engine starting. 
              From alternators to starter motors - quality parts for all vehicles.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Rotating Electrics Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rotatingProducts.map((product) => (
                <Card 
                  key={product.id}
                  className="group overflow-visible hover-elevate"
                  data-testid={`card-rotating-${product.id}`}
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
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {product.count}+ parts
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href={`/categories/rotating-electrics/${product.slug}`}>
                      <Button className="w-full gap-2" data-testid={`button-rotating-${product.id}`}>
                        More Information
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">General information</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-4">
                  Our unwavering focus on delivering outstanding quality, advanced design and innovative technologies to the global car market has led our rotating electric products to set the OE standard across Europe. By working closely with carmakers such as Toyota, Fiat and Land Rover, we've developed starters and alternators that offer exemplary performance and are the product of choice for a huge range of OE manufacturers.
                </p>
                <p>
                  Subject to rigorous manufacturing and testing processes, our starters and alternators guarantee high levels of performance and fit a large range of car models. As well as meeting DENSO's strict quality standards, our rotating electric products use completely new parts. This means our starters and alternators can be relied on to facilitate high, reliable performance journey after journey.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
