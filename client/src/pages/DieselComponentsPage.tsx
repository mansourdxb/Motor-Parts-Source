import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import dieselImg from "@assets/denso-diesel-cat.jpg";
import injectorImg from "@assets/denso-common-rail-injector.jpg";
import pumpImg from "@assets/denso-diesel-pump.jpg";
import scvImg from "@assets/denso-scv.jpg";

const dieselProducts = [
  {
    id: "1",
    name: "Common Rail Injector",
    image: injectorImg,
    description: "High-precision Denso common rail diesel injectors for optimal fuel atomization and combustion efficiency.",
    slug: "common-rail-injector",
  },
  {
    id: "2",
    name: "Common Rail Pump",
    image: pumpImg,
    description: "Denso high-pressure diesel fuel pumps engineered for reliable fuel delivery.",
    slug: "common-rail-pump",
  },
  {
    id: "3",
    name: "Common Rail SCV",
    image: scvImg,
    description: "Suction control valves that regulate fuel flow to the high-pressure pump.",
    slug: "common-rail-scv",
  },
];

export default function DieselComponentsPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-diesel-components">
      <SEO 
        title="Diesel Components | MPS"
        description="Premium Denso diesel components including common rail injectors, fuel pumps, and suction control valves for all major vehicle brands."
        keywords="diesel components, common rail injectors, diesel fuel pumps, SCV, Denso diesel parts, UAE"
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
                  Diesel Components
                </h1>
                <p className="text-primary-foreground/90 mb-6 max-w-lg">
                  Premium Denso diesel system components engineered for performance and reliability. From common rail injectors to glow plugs, we supply genuine parts for all major diesel engines.
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
                  src={dieselImg} 
                  alt="Diesel Components"
                  className="max-w-md rounded-lg"
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
                      <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90" data-testid={`button-diesel-${product.id}`}>
                        Get Quote
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">Diesel components from DENSO</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-4">
                  Working in partnership with a range of car manufacturers, DENSO has invested extensively in its diesel components, producing a range that is unique, consistent with OE part quality, and always at the forefront of diesel engine technology. Through product performance, R&D efforts, and a range tailored to the needs of manufacturers, DENSO diesel components – including diesel fuel injectors, diesel pumps and suction control valves (SCVs) – have gained a reputation for efficiency and reliability.
                </p>
                <p className="mb-4">
                  DENSO was a pioneer of the common rail fuel system for production road vehicles, and has continued to refine and improve the system ever since. We are always building on our heritage to unlock new levels of performance in diesel engines. With emissions reduction now a key part of engine development, aftermarket professionals can be confident that when they source DENSO components, they are contributing to greater fuel efficiency, and therefore lesser environmental impact, in customer vehicles.
                </p>
                <p>
                  This experience ensures that DENSO's diesel injectors, pumps and SCVs are included in our outstanding Diesel components programme, meeting OE quality.
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
