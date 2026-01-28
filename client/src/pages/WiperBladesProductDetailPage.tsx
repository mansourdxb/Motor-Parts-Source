import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import conventionalImg from "@assets/denso-conventional-wiper.jpg";
import flatImg from "@assets/denso-flat-wiper.jpg";
import hybridImg from "@assets/denso-hybrid-wiper.jpg";
import rearImg from "@assets/denso-rear-wiper.jpg";

const sidebarLinks = [
  { name: "Conventional Wiper Blades", slug: "conventional-wipers" },
  { name: "Flat Wiper Blades", slug: "flat-wipers" },
  { name: "Hybrid Wiper Blades", slug: "hybrid-wipers" },
  { name: "Rear Wiper Blades", slug: "rear-wipers" },
];

const productData: Record<string, {
  name: string;
  image: string;
  subtitle: string;
  howItWorksTitle: string;
  howItWorks: string;
  features: string[];
  featureDetails: { title: string; description: string }[];
  typesTitle: string;
  types: { name: string; description: string }[];
  characteristics: string;
}> = {
  "conventional-wipers": {
    name: "Conventional (Bracket) Wiper Blades",
    image: conventionalImg,
    subtitle: "Traditional frame-style wiper blades providing reliable performance across all weather conditions.",
    howItWorksTitle: "How conventional wiper blades work",
    howItWorks: "Conventional wiper blades use a metal frame with multiple pressure points to distribute force evenly across the rubber blade. This traditional design has been refined over decades to provide reliable wiping performance.\n\nThe frame structure allows the blade to conform to the curvature of the windscreen, ensuring consistent contact across the entire wiping surface. DENSO conventional blades feature high-quality rubber compounds that resist wear, cracking, and splitting.",
    features: [
      "Proven design with reliable performance.",
      "Multiple pressure points for even contact.",
      "High-quality rubber compound for durability.",
      "Wide vehicle coverage and easy installation."
    ],
    featureDetails: [
      { title: "Reliable performance", description: "The traditional frame design has been proven over decades to provide consistent, reliable wiping performance in all weather conditions." },
      { title: "Even pressure distribution", description: "Multiple pressure points along the frame ensure the blade maintains consistent contact with the windscreen across its entire length." },
      { title: "Durable construction", description: "High-quality materials and precision manufacturing ensure long service life and consistent performance." }
    ],
    typesTitle: "Conventional wiper features",
    types: [
      { name: "Standard conventional", description: "Traditional frame design suitable for most vehicle applications, providing reliable wiping performance at an economical price point." },
      { name: "Premium conventional", description: "Enhanced frame construction with improved rubber compound for superior durability and wiping performance." }
    ],
    characteristics: "DENSO conventional wiper blades combine proven design with premium materials to deliver reliable, streak-free visibility in all driving conditions."
  },
  "flat-wipers": {
    name: "Flat Wiper Blades",
    image: flatImg,
    subtitle: "Aerodynamic flat blade design for superior visibility and quiet operation at all speeds.",
    howItWorksTitle: "How flat wiper blades work",
    howItWorks: "Flat wiper blades use a tensioned metal spine integrated into a streamlined rubber body to distribute pressure evenly across the blade. This modern design eliminates the traditional metal frame, resulting in improved aerodynamics and reduced wind noise.\n\nThe aerodynamic profile helps the blade maintain contact with the windscreen at high speeds, where traditional blades may lift. DENSO flat blades feature advanced rubber compounds that remain flexible in extreme temperatures.",
    features: [
      "Aerodynamic design reduces wind noise.",
      "Even pressure distribution without external frame.",
      "Superior performance at high speeds.",
      "Modern appearance suits contemporary vehicles."
    ],
    featureDetails: [
      { title: "Aerodynamic performance", description: "The streamlined profile reduces wind lift and noise, maintaining consistent contact with the windscreen at all speeds." },
      { title: "Even contact pressure", description: "The integrated tension spring distributes pressure evenly across the entire blade length for streak-free wiping." },
      { title: "All-weather performance", description: "Advanced rubber compounds remain flexible in extreme cold and resist degradation from heat and UV exposure." }
    ],
    typesTitle: "Flat wiper features",
    types: [
      { name: "Standard flat blade", description: "Aerodynamic design with integrated spoiler for optimal performance at highway speeds." },
      { name: "Premium flat blade", description: "Enhanced design with advanced rubber compound and precision-engineered tension spring for superior durability." }
    ],
    characteristics: "DENSO flat wiper blades deliver superior visibility with quiet operation and a sleek, modern appearance that complements contemporary vehicle designs."
  },
  "hybrid-wipers": {
    name: "Hybrid Wiper Blades",
    image: hybridImg,
    subtitle: "Combining the best features of conventional and flat blade designs for optimal performance.",
    howItWorksTitle: "How hybrid wiper blades work",
    howItWorks: "Hybrid wiper blades combine the structural benefits of a conventional frame with the aerodynamic advantages of a flat blade. An aerodynamic shell covers a traditional articulated frame, providing excellent pressure distribution while reducing wind lift and noise.\n\nThis design offers the reliability of conventional blades with the improved high-speed performance of flat blades. DENSO hybrid blades are engineered to perform consistently across a wide range of speeds and weather conditions.",
    features: [
      "Combines benefits of conventional and flat designs.",
      "Aerodynamic shell reduces wind lift and noise.",
      "Excellent pressure distribution from frame structure.",
      "Versatile performance in all conditions."
    ],
    featureDetails: [
      { title: "Best of both designs", description: "The hybrid design combines the proven pressure distribution of conventional blades with the aerodynamic benefits of flat blades." },
      { title: "Quiet operation", description: "The aerodynamic shell reduces wind noise while the frame structure ensures consistent wiping performance." },
      { title: "All-weather reliability", description: "Performs consistently in rain, snow, and at all driving speeds from city traffic to highway cruising." }
    ],
    typesTitle: "Hybrid wiper features",
    types: [
      { name: "Standard hybrid", description: "Combines aerodynamic shell with articulated frame for balanced performance and durability." },
      { name: "Premium hybrid", description: "Enhanced design with advanced materials for superior longevity and wiping performance in extreme conditions." }
    ],
    characteristics: "DENSO hybrid wiper blades offer the ultimate combination of reliability, performance, and quiet operation for drivers who demand the best in all conditions."
  },
  "rear-wipers": {
    name: "Rear Wiper Blades",
    image: rearImg,
    subtitle: "Specialized wiper blades designed for rear window applications on SUVs, hatchbacks, and wagons.",
    howItWorksTitle: "How rear wiper blades work",
    howItWorks: "Rear wiper blades are specifically designed for the unique requirements of rear window applications. The rear window often has different curvature and mounting requirements compared to the front windscreen, requiring specialized blade designs.\n\nDENSO rear wiper blades are engineered to fit a wide range of vehicle-specific mounting systems while providing the same high-quality wiping performance as our front wiper blades.",
    features: [
      "Vehicle-specific designs for perfect fit.",
      "High-quality rubber for clear visibility.",
      "Easy installation with various mounting systems.",
      "Designed for rear window curvature."
    ],
    featureDetails: [
      { title: "Perfect fit", description: "DENSO rear wiper blades are designed to fit specific vehicle models, ensuring optimal performance and easy installation." },
      { title: "Clear visibility", description: "High-quality rubber compounds provide streak-free wiping for maximum rear visibility in all weather conditions." },
      { title: "Durable construction", description: "Built to withstand the unique demands of rear window applications, including exposure to debris and road spray." }
    ],
    typesTitle: "Rear wiper features",
    types: [
      { name: "Conventional rear wiper", description: "Traditional design for vehicles with standard rear wiper systems, providing reliable performance." },
      { name: "Specialized rear wiper", description: "Vehicle-specific designs with unique mounting systems for perfect fit and optimal performance." }
    ],
    characteristics: "DENSO rear wiper blades are engineered to provide clear rear visibility, enhancing safety for vehicles with rear window wipers."
  }
};

export default function WiperBladesProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/wiper-blades">
              <Button>Back to Wiper Blades</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-wiper-product-detail">
      <SEO 
        title={`${product.name} | Wiper Blades | MPS`}
        description={product.subtitle}
        keywords={`${product.name}, wiper blades, Denso, UAE`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/wiper-blades">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-wipers">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-wiper-product-title">
              {product.name}
            </h1>
            <p className="text-primary-foreground/90 max-w-3xl text-lg">
              {product.subtitle}
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 space-y-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">{product.howItWorksTitle}</h2>
                  <div className="grid md:grid-cols-2 gap-8 items-start">
                    <div className="prose prose-sm max-w-none text-muted-foreground">
                      {product.howItWorks.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                    <div className="flex justify-center">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="rounded-lg max-w-full h-auto shadow-lg"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Features and benefits</h2>
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <p className="text-muted-foreground">{feature}</p>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {product.featureDetails.map((detail, index) => (
                      <Card key={index} className="p-6">
                        <h3 className="font-bold mb-2">{detail.title}</h3>
                        <p className="text-sm text-muted-foreground">{detail.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">{product.typesTitle}</h2>
                  <div className="space-y-6">
                    {product.types.map((type, index) => (
                      <div key={index} className="border-l-4 border-primary pl-6">
                        <h3 className="font-bold text-lg mb-2">{type.name}</h3>
                        <p className="text-muted-foreground">{type.description}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-8 p-6 bg-muted rounded-lg">
                    <h3 className="font-bold mb-2">Characteristics</h3>
                    <p className="text-muted-foreground">{product.characteristics}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link href="/contact">
                    <Button size="lg" className="gap-2">
                      Request Quote
                    </Button>
                  </Link>
                  <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
                    <Button size="lg" variant="outline" className="gap-2">
                      WhatsApp Us
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Card className="p-6">
                    <h3 className="font-bold mb-4">Browse</h3>
                    <div className="space-y-2">
                      <Link href="/categories/wiper-blades">
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          Wiper Blades
                        </div>
                      </Link>
                      <div className="border-t pt-2 mt-2 space-y-1">
                        {sidebarLinks.map((link) => (
                          <Link key={link.slug} href={`/categories/wiper-blades/${link.slug}`}>
                            <div 
                              className={`text-sm py-1.5 px-2 rounded cursor-pointer transition-colors ${
                                slug === link.slug 
                                  ? 'bg-primary text-primary-foreground font-medium' 
                                  : 'text-muted-foreground hover:bg-muted'
                              }`}
                            >
                              {link.name}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
