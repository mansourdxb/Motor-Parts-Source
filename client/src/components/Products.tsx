import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import type { Product } from "@shared/schema";
import engineParts from "@assets/image_1769588682016.png";
import brakeParts from "@assets/brake-parts.jpg";
import suspensionParts from "@assets/suspension-parts.jpg";
import electricalParts from "@assets/electrical-parts.jpg";

const featuredProducts: Product[] = [
  {
    id: "1",
    name: "Engine Oil Filter",
    brand: "Bosch",
    partNumber: "OF-123456",
    price: 45,
    category: "Engine Parts",
    type: "OEM",
    image: engineParts,
    inStock: true,
  },
  {
    id: "2",
    name: "Front Brake Pads Set",
    brand: "Brembo",
    partNumber: "BP-789012",
    price: 280,
    originalPrice: 320,
    category: "Brake Systems",
    type: "OEM",
    image: brakeParts,
    inStock: true,
  },
  {
    id: "3",
    name: "Shock Absorber Kit",
    brand: "Monroe",
    partNumber: "SA-345678",
    price: 520,
    category: "Suspension",
    type: "Aftermarket",
    image: suspensionParts,
    inStock: true,
  },
  {
    id: "4",
    name: "Car Battery 12V",
    brand: "Varta",
    partNumber: "CB-901234",
    price: 380,
    originalPrice: 420,
    category: "Electrical",
    type: "OEM",
    image: electricalParts,
    inStock: false,
  },
];

function ProductCard({ product }: { product: Product }) {
  const discount = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : null;

  return (
    <Card className="group overflow-visible hover-elevate" data-testid={`card-product-${product.id}`}>
      <div className="relative aspect-square overflow-hidden rounded-t-md bg-muted">
        <img 
          src={typeof product.image === 'string' ? product.image : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {discount && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            -{discount}%
          </Badge>
        )}
        <Badge 
          variant="secondary" 
          className="absolute top-3 right-3"
        >
          {product.type}
        </Badge>
      </div>
      
      <div className="p-4">
        <p className="text-sm text-muted-foreground mb-1">{product.brand}</p>
        <h3 className="font-semibold line-clamp-1 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">{product.partNumber}</p>
        
        <div className="flex items-center justify-between gap-2 mt-4">
          <div className="flex items-baseline gap-2 flex-wrap">
            <span className="text-lg font-bold text-primary">AED {product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                AED {product.originalPrice}
              </span>
            )}
          </div>
        </div>
        
        <Button 
          className="w-full mt-3 gap-2" 
          size="sm"
          disabled={!product.inStock}
          data-testid={`button-view-product-${product.id}`}
        >
          {product.inStock ? (
            <>
              View Product
              <ArrowRight className="h-4 w-4" />
            </>
          ) : (
            "Out of Stock"
          )}
        </Button>
      </div>
    </Card>
  );
}

export function Products() {
  return (
    <section className="py-16 lg:py-24 bg-card" data-testid="section-products">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-accent font-semibold mb-2">Featured Products</p>
            <h2 className="text-3xl lg:text-4xl font-bold" data-testid="text-products-title">
              Hot Picks This Week
            </h2>
          </div>
          <Link href="/products">
            <Button variant="outline" className="gap-2" data-testid="button-view-all-products">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
