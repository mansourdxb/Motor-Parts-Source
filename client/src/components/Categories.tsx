import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import acCooling from "@assets/denso-ac-category.jpg";
import dieselComponents from "@assets/denso-diesel-cat.jpg";
import engineManagement from "@assets/denso-ems-cat.jpg";
import filtration from "@assets/denso-filtration-cat.png";
import ignition from "@assets/denso-ignition-cat.jpg";
import rotatingElectrics from "@assets/denso-rotating-cat.jpg";
import wiperBlades from "@assets/denso-wiper-cat.jpg";

const categories = [
  {
    id: "1",
    name: "AC & Engine Cooling",
    image: acCooling,
    slug: "ac-engine-cooling",
  },
  {
    id: "2",
    name: "Diesel Components",
    image: dieselComponents,
    slug: "diesel-components",
  },
  {
    id: "3",
    name: "Engine Management Systems",
    image: engineManagement,
    slug: "engine-management",
  },
  {
    id: "4",
    name: "Filtration",
    image: filtration,
    slug: "filtration",
  },
  {
    id: "5",
    name: "Ignition",
    image: ignition,
    slug: "ignition",
  },
  {
    id: "6",
    name: "Rotating Electrics",
    image: rotatingElectrics,
    slug: "rotating-electrics",
  },
  {
    id: "7",
    name: "Wiper Blades",
    image: wiperBlades,
    slug: "wiper-blades",
  },
];

export function Categories() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30" data-testid="section-categories">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3" data-testid="text-categories-title">
            Automotive products and service parts
          </h2>
          <p className="text-muted-foreground">
            Working away unseen for virtually all car manufacturers
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="relative aspect-[16/9] rounded-md overflow-hidden group"
              data-testid={`card-category-${category.id}`}
            >
              <img 
                src={category.image} 
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white font-semibold text-lg drop-shadow-md mb-3">
                  {category.name}
                </h3>
                <Link href={`/categories/${category.slug}`}>
                  <Button 
                    className="gap-2" 
                    size="sm"
                    data-testid={`button-view-category-${category.id}`}
                  >
                    View Product
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
