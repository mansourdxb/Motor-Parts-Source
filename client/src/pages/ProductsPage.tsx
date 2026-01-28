import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Filter } from "lucide-react";
import type { Product } from "@shared/schema";
import engineParts from "@assets/engine-parts.jpg";
import brakeParts from "@assets/brake-parts.jpg";
import suspensionParts from "@assets/suspension-parts.jpg";
import electricalParts from "@assets/electrical-parts.jpg";
import transmissionParts from "@assets/transmission-parts.jpg";

const allProducts: Product[] = [
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
  {
    id: "5",
    name: "Timing Belt Kit",
    brand: "Gates",
    partNumber: "TB-567890",
    price: 195,
    category: "Engine Parts",
    type: "OEM",
    image: engineParts,
    inStock: true,
  },
  {
    id: "6",
    name: "Clutch Kit Complete",
    brand: "LuK",
    partNumber: "CK-234567",
    price: 750,
    originalPrice: 850,
    category: "Transmission",
    type: "OEM",
    image: transmissionParts,
    inStock: true,
  },
  {
    id: "7",
    name: "Brake Disc Rotor",
    brand: "ATE",
    partNumber: "BD-890123",
    price: 165,
    category: "Brake Systems",
    type: "Aftermarket",
    image: brakeParts,
    inStock: true,
  },
  {
    id: "8",
    name: "Alternator Assembly",
    brand: "Denso",
    partNumber: "ALT-456789",
    price: 620,
    category: "Electrical",
    type: "OEM",
    image: electricalParts,
    inStock: true,
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
          src={product.image} 
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
        
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
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

export default function ProductsPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-products">
      <SEO 
        title="Auto Parts Catalog"
        description="Browse our extensive collection of OEM and aftermarket auto parts. Engine parts, brakes, suspension, electrical and more for all vehicle makes."
        keywords="buy auto parts UAE, engine parts, brake pads, car battery, suspension kit"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-products-page-title">
              Our Products
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Browse our extensive collection of OEM and aftermarket auto parts for all makes and models.
            </p>
          </div>
        </section>

        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10"
                  data-testid="input-search-products"
                />
              </div>
              <Button variant="outline" className="gap-2" data-testid="button-filter">
                <Filter className="h-4 w-4" />
                Filter
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
              {allProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
