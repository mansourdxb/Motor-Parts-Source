import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import engineParts from "@assets/image_1769588682016.png";
import brakeParts from "@assets/brake-parts.jpg";
import acCooling from "@assets/image_1769588682016.png";
import airFilters from "@assets/image_1769589414485.png";
import transmissionParts from "@assets/transmission-parts.jpg";
import heroBg from "@assets/hero-bg.jpg";
import sparkPlugs from "@assets/image_1769588542997.png";
import injectors from "@assets/image_1769588597393.png";

const categories = [
  {
    id: "1",
    name: "Spark Plugs",
    image: sparkPlugs,
    description: "Premium spark plugs from Toyota, Denso, NGK, and Bosch. OEM quality for all vehicle makes and models.",
    count: 850,
  },
  {
    id: "2",
    name: "Injectors",
    image: injectors,
    description: "Fuel injectors from Toyota, Denso, and Bosch. High-precision OEM and aftermarket options available.",
    count: 620,
  },
  {
    id: "3",
    name: "Engine Parts",
    image: engineParts,
    description: "Complete range of engine components including pistons, gaskets, timing belts, camshafts, and more.",
    count: 1250,
  },
  {
    id: "4",
    name: "Brake Systems",
    image: brakeParts,
    description: "High-performance brake pads, discs, calipers, rotors, and brake fluid for all vehicle types.",
    count: 890,
  },
  {
    id: "5",
    name: "AC & Engine Cooling",
    image: acCooling,
    description: "A/C compressors, condensers, cooling fans, radiators, evaporators, and thermal components.",
    count: 1450,
  },
  {
    id: "6",
    name: "Air Filters",
    image: airFilters,
    description: "Denso Cool Gear air filters, cabin filters, and engine air filters for all vehicles.",
    count: 1100,
  },
  {
    id: "7",
    name: "Transmission",
    image: transmissionParts,
    description: "Clutch kits, gearbox components, CV joints, and transmission fluids.",
    count: 560,
  },
  {
    id: "8",
    name: "Body Parts",
    image: heroBg,
    description: "Bumpers, fenders, mirrors, headlights, and other exterior body components.",
    count: 980,
  },
  {
    id: "9",
    name: "A/C Condensers",
    image: acCooling,
    description: "High-quality Denso A/C condensers for efficient heat exchange and cooling performance.",
    count: 280,
  },
  {
    id: "10",
    name: "AC Compressors",
    image: acCooling,
    description: "Denso A/C compressors - the heart of your vehicle's air conditioning system.",
    count: 420,
  },
  {
    id: "11",
    name: "AC Compressor Oil",
    image: acCooling,
    description: "Premium Denso compressor oils for optimal A/C system lubrication and performance.",
    count: 45,
  },
  {
    id: "12",
    name: "Cabin Blower Fans",
    image: acCooling,
    description: "Denso cabin blower fans for effective air circulation and climate control.",
    count: 180,
  },
  {
    id: "13",
    name: "Cooling Fans",
    image: acCooling,
    description: "Engine cooling fans from Denso for reliable temperature management.",
    count: 320,
  },
  {
    id: "14",
    name: "Cooling Radiators",
    image: acCooling,
    description: "Denso radiators engineered for superior heat dissipation and engine cooling.",
    count: 380,
  },
  {
    id: "15",
    name: "Evaporators",
    image: acCooling,
    description: "Super-slim Denso evaporators for efficient cabin cooling.",
    count: 210,
  },
  {
    id: "16",
    name: "Expansion Valves",
    image: acCooling,
    description: "Precision Denso expansion valves for accurate refrigerant flow control.",
    count: 150,
  },
  {
    id: "17",
    name: "Heater Cores",
    image: acCooling,
    description: "Denso heater cores for reliable cabin heating in cold conditions.",
    count: 165,
  },
  {
    id: "18",
    name: "Pressure Switches & Sensors",
    image: acCooling,
    description: "Denso A/C pressure switches and sensors for system monitoring and protection.",
    count: 95,
  },
  {
    id: "19",
    name: "Receiver Driers",
    image: acCooling,
    description: "Denso receiver driers to remove moisture and contaminants from A/C systems.",
    count: 120,
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-categories">
      <SEO 
        title="Parts Categories"
        description="Browse auto parts by category. Find engine parts, brake systems, suspension, electrical components, transmission parts and more at Motor Parts Source."
        keywords="auto parts categories, engine parts, brake parts, suspension parts, electrical parts"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-categories-page-title">
              Browse by Category
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Find the right parts quickly by browsing our organized categories. 
              We stock parts for all major vehicle systems.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Card 
                  key={category.id}
                  className="group overflow-visible hover-elevate"
                  data-testid={`card-category-page-${category.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-t-md">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {category.name}
                      </h3>
                      <span className="text-sm text-muted-foreground">
                        {category.count}+ parts
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {category.description}
                    </p>
                    <Button className="w-full gap-2" data-testid={`button-browse-${category.id}`}>
                      Browse Category
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
