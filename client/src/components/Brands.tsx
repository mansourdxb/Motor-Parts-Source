import { Card } from "@/components/ui/card";
import { 
  SiToyota, 
  SiNissan, 
  SiHonda, 
  SiBmw, 
  SiMercedes, 
  SiFord, 
  SiChevrolet, 
  SiHyundai 
} from "react-icons/si";

const brands = [
  { name: "Toyota", icon: SiToyota },
  { name: "Nissan", icon: SiNissan },
  { name: "Honda", icon: SiHonda },
  { name: "BMW", icon: SiBmw },
  { name: "Mercedes", icon: SiMercedes },
  { name: "Ford", icon: SiFord },
  { name: "Chevrolet", icon: SiChevrolet },
  { name: "Hyundai", icon: SiHyundai },
];

export function Brands() {
  return (
    <section className="py-16 lg:py-24" data-testid="section-brands">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3" data-testid="text-brands-title">
            Parts for Every <span className="gradient-text">Make & Model</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We supply genuine and aftermarket parts for all major automotive brands.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {brands.map((brand, index) => {
            const IconComponent = brand.icon;
            return (
              <Card 
                key={index}
                className="p-4 flex flex-col items-center justify-center hover-elevate cursor-pointer aspect-square gap-2"
                data-testid={`card-brand-${brand.name.toLowerCase()}`}
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <IconComponent className="h-6 w-6 text-primary" />
                </div>
                <span className="text-sm font-semibold text-center">
                  {brand.name}
                </span>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Can't find your brand? <a href="/contact" className="text-primary font-semibold hover:underline" data-testid="link-contact-brands">Contact us</a> for assistance.
          </p>
        </div>
      </div>
    </section>
  );
}
