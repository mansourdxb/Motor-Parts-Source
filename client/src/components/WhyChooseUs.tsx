import { Card } from "@/components/ui/card";
import { 
  Award, 
  Headphones, 
  RefreshCw, 
  CreditCard,
  Truck,
  ShieldCheck
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Quality Assured",
    description: "All parts are quality tested and come with manufacturer warranty.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Our automotive experts are available to help you find the right parts.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description: "Hassle-free returns within 30 days if the part doesn't fit.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description: "Multiple payment options with encrypted secure transactions.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Same-day dispatch for orders placed before 2 PM UAE time.",
  },
  {
    icon: ShieldCheck,
    title: "Genuine Parts",
    description: "Direct sourcing from authorized distributors and manufacturers.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="py-16 lg:py-24 bg-primary text-primary-foreground" data-testid="section-why-choose-us">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3" data-testid="text-why-title">
            Why Choose Motor Parts Source?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto">
            We're committed to providing the best auto parts shopping experience in the UAE.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <Card 
              key={index}
              className="p-6 bg-white/10 border-white/20 backdrop-blur-sm"
              data-testid={`card-reason-${index}`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-white/20 rounded-lg p-3 shrink-0">
                  <reason.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{reason.title}</h3>
                  <p className="text-white/70 text-sm">{reason.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
