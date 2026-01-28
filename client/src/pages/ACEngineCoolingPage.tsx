import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import acCondenser from "@assets/denso-condenser.jpg";
import acCompressor from "@assets/denso-ac-compressor.png";
import compressorOil from "@assets/denso-compressor-oil.jpg";
import blowerFan from "@assets/denso-cabin-blower.jpg";
import coolingFan from "@assets/denso-cooling-fan.jpg";
import radiator from "@assets/denso-radiator.jpg";
import evaporator from "@assets/denso-evaporator.png";
import expansionValve from "@assets/denso-expansion-valve.jpg";
import heaterCore from "@assets/denso-heater-core.jpg";
import pressureSwitch from "@assets/denso-pressure-switch.jpg";
import receiverDrier from "@assets/denso-receiver-drier.jpg";

const acCategories = [
  {
    id: "1",
    name: "A/C Condensers",
    image: acCondenser,
    description: "High-quality Denso A/C condensers for efficient heat exchange and cooling performance.",
    count: 280,
  },
  {
    id: "2",
    name: "AC Compressors",
    image: acCompressor,
    description: "Denso A/C compressors - the heart of your vehicle's air conditioning system.",
    count: 420,
  },
  {
    id: "3",
    name: "AC Compressor Oil",
    image: compressorOil,
    description: "Premium Denso compressor oils for optimal A/C system lubrication and performance.",
    count: 45,
  },
  {
    id: "4",
    name: "Cabin Blower Fans",
    image: blowerFan,
    description: "Denso cabin blower fans for effective air circulation and climate control.",
    count: 180,
  },
  {
    id: "5",
    name: "Cooling Fans",
    image: coolingFan,
    description: "Engine cooling fans from Denso for reliable temperature management.",
    count: 320,
  },
  {
    id: "6",
    name: "Cooling Radiators",
    image: radiator,
    description: "Denso radiators engineered for superior heat dissipation and engine cooling.",
    count: 380,
  },
  {
    id: "7",
    name: "Evaporators",
    image: evaporator,
    description: "Super-slim Denso evaporators for efficient cabin cooling.",
    count: 210,
  },
  {
    id: "8",
    name: "Expansion Valves",
    image: expansionValve,
    description: "Precision Denso expansion valves for accurate refrigerant flow control.",
    count: 150,
  },
  {
    id: "9",
    name: "Heater Cores",
    image: heaterCore,
    description: "Denso heater cores for reliable cabin heating in cold conditions.",
    count: 165,
  },
  {
    id: "10",
    name: "Pressure Switches & Sensors",
    image: pressureSwitch,
    description: "Denso A/C pressure switches and sensors for system monitoring and protection.",
    count: 95,
  },
  {
    id: "11",
    name: "Receiver Driers",
    image: receiverDrier,
    description: "Denso receiver driers to remove moisture and contaminants from A/C systems.",
    count: 120,
  },
];

export default function ACEngineCoolingPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-ac-engine-cooling">
      <SEO 
        title="AC & Engine Cooling Parts"
        description="Browse Denso AC and Engine Cooling parts. A/C compressors, condensers, cooling fans, radiators, evaporators, and thermal components for all vehicles."
        keywords="AC compressor, condenser, cooling fan, radiator, evaporator, heater core, Denso"
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
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-ac-cooling-title">
              AC & Engine Cooling
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Complete range of Denso A/C and thermal components. From compressors and condensers 
              to cooling fans and radiators - OEM quality parts for all vehicle makes.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {acCategories.map((category) => (
                <Card 
                  key={category.id}
                  className="group overflow-visible hover-elevate"
                  data-testid={`card-ac-category-${category.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-t-md">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {category.count}+ parts
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <Button className="w-full gap-2" data-testid={`button-browse-ac-${category.id}`}>
                      Browse Products
                      <ArrowRight className="h-4 w-4" />
                    </Button>
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
