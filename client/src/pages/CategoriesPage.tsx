import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import engineParts from "@assets/engine-parts.jpg";
import brakeParts from "@assets/brake-parts.jpg";
import suspensionParts from "@assets/suspension-parts.jpg";
import electricalParts from "@assets/electrical-parts.jpg";
import transmissionParts from "@assets/transmission-parts.jpg";
import heroBg from "@assets/hero-bg.jpg";

const categories = [
  {
    id: "1",
    name: "Engine Parts",
    image: engineParts,
    description: "Complete range of engine components including pistons, gaskets, timing belts, camshafts, and more.",
    count: 1250,
  },
  {
    id: "2",
    name: "Brake Systems",
    image: brakeParts,
    description: "High-performance brake pads, discs, calipers, rotors, and brake fluid for all vehicle types.",
    count: 890,
  },
  {
    id: "3",
    name: "Suspension",
    image: suspensionParts,
    description: "Quality shock absorbers, struts, control arms, and suspension kits for smooth rides.",
    count: 720,
  },
  {
    id: "4",
    name: "Electrical",
    image: electricalParts,
    description: "Batteries, alternators, starters, ignition coils, and electrical accessories.",
    count: 1100,
  },
  {
    id: "5",
    name: "Transmission",
    image: transmissionParts,
    description: "Clutch kits, gearbox components, CV joints, and transmission fluids.",
    count: 560,
  },
  {
    id: "6",
    name: "Body Parts",
    image: heroBg,
    description: "Bumpers, fenders, mirrors, headlights, and other exterior body components.",
    count: 980,
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
