import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import engineMgmtImg from "@assets/engine-management.jpg";

const engineManagementProducts = [
  {
    id: "1",
    name: "Oxygen Sensors",
    slug: "oxygen-sensors",
    description: "Denso oxygen sensors for accurate air-fuel ratio monitoring and emissions control.",
    count: 520,
  },
  {
    id: "2",
    name: "Mass Air Flow Sensors",
    slug: "maf-sensors",
    description: "Precision MAF sensors for optimal engine performance and fuel efficiency.",
    count: 340,
  },
  {
    id: "3",
    name: "Camshaft Position Sensors",
    slug: "camshaft-sensors",
    description: "Accurate camshaft position sensors for precise engine timing.",
    count: 280,
  },
  {
    id: "4",
    name: "Crankshaft Position Sensors",
    slug: "crankshaft-sensors",
    description: "High-quality crankshaft sensors for engine speed and position detection.",
    count: 310,
  },
  {
    id: "5",
    name: "Throttle Position Sensors",
    slug: "throttle-sensors",
    description: "Reliable throttle position sensors for accurate throttle response.",
    count: 195,
  },
  {
    id: "6",
    name: "Coolant Temperature Sensors",
    slug: "coolant-sensors",
    description: "Engine coolant temperature sensors for optimal engine management.",
    count: 165,
  },
  {
    id: "7",
    name: "Knock Sensors",
    slug: "knock-sensors",
    description: "Denso knock sensors for engine detonation detection and protection.",
    count: 140,
  },
  {
    id: "8",
    name: "EGR Valves",
    slug: "egr-valves",
    description: "Exhaust gas recirculation valves for emissions reduction.",
    count: 180,
  },
];

export default function EngineManagementPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-engine-management">
      <SEO 
        title="Engine Management Systems | MPS"
        description="Denso engine management sensors and components including oxygen sensors, MAF sensors, position sensors, and EGR valves for all vehicle makes."
        keywords="engine management, oxygen sensors, MAF sensors, camshaft sensors, crankshaft sensors, Denso sensors, UAE"
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
                  Engine Management Systems
                </h1>
                <p className="text-lg text-primary-foreground/90 mb-6">
                  Complete range of Denso engine management sensors and components. From oxygen sensors to EGR valves, we supply precision parts for optimal engine performance.
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
                  src={engineMgmtImg} 
                  alt="Engine Management Systems"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">
              Engine Management Products
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineManagementProducts.map((product) => (
                <Card key={product.id} className="overflow-visible hover-elevate" data-testid={`card-engine-${product.id}`}>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold">{product.name}</h3>
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">
                        {product.count}+
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href="/contact">
                      <Button className="w-full gap-2" data-testid={`button-engine-${product.id}`}>
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
