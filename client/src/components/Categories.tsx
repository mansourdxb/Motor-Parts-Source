import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import engineParts from "@assets/engine-parts.jpg";
import brakeParts from "@assets/brake-parts.jpg";
import suspensionParts from "@assets/suspension-parts.jpg";
import electricalParts from "@assets/electrical-parts.jpg";
import transmissionParts from "@assets/transmission-parts.jpg";

const categories = [
  {
    id: "1",
    name: "Spark Plugs",
    image: electricalParts,
    description: "Toyota, Denso & NGK spark plugs",
  },
  {
    id: "2",
    name: "Injectors",
    image: engineParts,
    description: "Toyota & Denso fuel injectors",
  },
  {
    id: "3",
    name: "Engine Parts",
    image: engineParts,
    description: "Pistons, gaskets, timing belts, and more",
  },
  {
    id: "4",
    name: "Brake Systems",
    image: brakeParts,
    description: "Brake pads, discs, calipers, and rotors",
  },
  {
    id: "5",
    name: "Electrical",
    image: electricalParts,
    description: "Batteries, alternators, and starters",
  },
];

export function Categories() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-categories">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-3" data-testid="text-categories-title">
              Shop by <span className="gradient-text">Category</span>
            </h2>
            <p className="text-muted-foreground max-w-xl">
              Browse our extensive collection of auto parts organized by category for easy navigation.
            </p>
          </div>
          <Link href="/categories">
            <Button variant="outline" className="gap-2" data-testid="button-view-all-categories">
              View All Categories
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category) => (
            <Card 
              key={category.id}
              className="group overflow-visible cursor-pointer hover-elevate"
              data-testid={`card-category-${category.id}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-t-md">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-center group-hover:text-primary transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-muted-foreground text-center mt-1 line-clamp-1">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
