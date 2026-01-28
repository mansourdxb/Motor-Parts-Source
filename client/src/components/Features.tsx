import { Card } from "@/components/ui/card";
import { Building2, Package, BadgeCheck, Globe } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Built for Workshops & Fleets",
    description: "Specialized solutions for automotive workshops, fleet managers, and professional buyers.",
  },
  {
    icon: Package,
    title: "One-Stop Auto Parts Hub",
    description: "Complete range of parts for all makes and models. Everything you need in one place.",
  },
  {
    icon: BadgeCheck,
    title: "OEM & Trusted Aftermarket",
    description: "Quality guaranteed with genuine OEM and certified aftermarket parts from top brands.",
  },
  {
    icon: Globe,
    title: "Fast UAE & Worldwide Delivery",
    description: "Quick delivery across UAE and international shipping to customers worldwide.",
  },
];

export function Features() {
  return (
    <section className="py-16 lg:py-24 bg-card" data-testid="section-features">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="p-6 text-center hover-elevate transition-all duration-300 bg-background"
              data-testid={`card-feature-${index}`}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
