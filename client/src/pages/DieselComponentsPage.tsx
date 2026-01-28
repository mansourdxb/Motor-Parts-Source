import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
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
    count: 380,
  },
  {
    id: "2",
    name: "Common Rail Pump",
    image: pumpImg,
    description: "Denso high-pressure diesel fuel pumps engineered for reliable fuel delivery.",
    slug: "common-rail-pump",
    count: 245,
  },
  {
    id: "3",
    name: "Common Rail SCV",
    image: scvImg,
    description: "Suction control valves that regulate fuel flow to the high-pressure pump.",
    slug: "common-rail-scv",
    count: 180,
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
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Link href="/categories">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-categories">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-diesel-title">
              Diesel Components
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Premium Denso diesel system components engineered for performance and reliability. 
              From common rail injectors to fuel pumps - OEM quality parts for all diesel engines.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Diesel Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dieselProducts.map((product) => (
                <Card 
                  key={product.id}
                  className="group overflow-visible hover-elevate"
                  data-testid={`card-diesel-${product.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-t-md">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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
                    <Link href={`/categories/diesel-components/${product.slug}`}>
                      <Button className="w-full gap-2" data-testid={`button-diesel-${product.id}`}>
                        More Information
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
