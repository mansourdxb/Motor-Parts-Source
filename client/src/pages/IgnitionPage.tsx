import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ignitionImg from "@assets/denso-ignition-cat.jpg";
import sparkPlugImg from "@assets/denso-spark-plug.jpg";
import ignitionCoilImg from "@assets/denso-ignition-coil.jpg";
import glowPlugImg from "@assets/denso-glow-plug.jpg";
import fuelPumpImg from "@assets/denso-fuel-pump.jpg";
import cogenImg from "@assets/denso-cogen-spark.jpg";

const ignitionProducts = [
  {
    id: "1",
    name: "Spark Plugs",
    image: sparkPlugImg,
    description: "Denso iridium and platinum spark plugs for reliable ignition and fuel efficiency.",
    slug: "spark-plugs",
  },
  {
    id: "2",
    name: "Ignition Coils",
    image: ignitionCoilImg,
    description: "High-performance ignition coils for consistent spark delivery.",
    slug: "ignition-coils",
  },
  {
    id: "3",
    name: "Glow Plugs",
    image: glowPlugImg,
    description: "Denso glow plugs for quick diesel engine cold starts.",
    slug: "glow-plugs",
  },
  {
    id: "4",
    name: "Fuel Pumps",
    image: fuelPumpImg,
    description: "Reliable fuel pumps for consistent fuel delivery to the engine.",
    slug: "fuel-pumps",
  },
  {
    id: "5",
    name: "Co-Generation Spark Plugs",
    image: cogenImg,
    description: "Specialized spark plugs for co-generation and industrial applications.",
    slug: "co-gen-spark-plugs",
  },
];

export default function IgnitionPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-ignition">
      <SEO 
        title="Ignition Products | MPS"
        description="Complete range of Denso ignition components including spark plugs, ignition coils, glow plugs, and fuel pumps for all vehicle makes."
        keywords="spark plugs, ignition coils, glow plugs, fuel pumps, Denso ignition, automotive ignition, UAE"
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
                  Ignition
                </h1>
                <p className="text-primary-foreground/90 mb-6 max-w-lg">
                  Premium Denso ignition components for reliable engine starting and performance. From spark plugs to ignition coils, we supply quality parts for all petrol and diesel engines.
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
                  src={ignitionImg} 
                  alt="Ignition Products"
                  className="max-w-md rounded-lg"
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
                      <Button className="w-full gap-2 bg-accent text-accent-foreground hover:bg-accent/90" data-testid={`button-ignition-${product.id}`}>
                        Get Quote
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
                  Key to starting your car reliably and efficiently, successful ignition is also essential to ensure the high performance of your vehicle. From fuel efficiency to reducing carbon emissions, choosing ignition products that provide a consistent power output will help your engine to perform well on every journey.
                </p>
                <p className="mb-4">
                  By developing and manufacturing world-leading ignition technologies, DENSO has become a trusted name for a variety of original equipment (OE) products, including ignition coils, spark plugs and glow plugs. We're continuously developing innovations such as our patented Twin Tip (TT) design to ensure our spark plugs provide high performance in petrol engines, whatever the car or driving style.
                </p>
                <p>
                  With innovative technologies and longer lifetimes in products that suit any budget, our aftermarket ignition range is relied upon by worldwide car manufacturers to provide optimum engine performance in both petrol and diesel vehicles.
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
