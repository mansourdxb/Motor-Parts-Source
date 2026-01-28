import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import alternatorImg from "@assets/denso-alternator.jpg";
import starterImg from "@assets/denso-starter.jpg";

const sidebarLinks = [
  { name: "Alternators", slug: "alternators" },
  { name: "Starters", slug: "starters" },
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
  "alternators": {
    name: "Alternators",
    image: alternatorImg,
    subtitle: "A reliable alternator can support the performance of a vehicle's entire electrical system.",
    howItWorksTitle: "How they work",
    howItWorks: "Driven by the engine, the alternator (along with the belt and the regulator) converts mechanical power into electrical energy that supplies various loads in the vehicle system. During normal driving conditions, this electrical energy will be used to recharge the car battery.\n\nWhen the required electrical load does not match the output being produced by the alternator, the battery supplies any extra power needed to electrical equipment. As the engine speed changes according to driving conditions, so does the alternator speed and generated voltage. The regulator controls this generated voltage and ensures the various electrical loads are supplied with the appropriate voltage.",
    features: [
      "Manufactured to premium standards.",
      "Rigorously tested to meet high-performance requirements.",
      "Advanced technologies enable optimal performance in all conditions.",
      "Smart, easy-to-understand part range with strong coverage."
    ],
    featureDetails: [
      { title: "High performance", description: "Small and lightweight, the design of DENSO alternators provides high performance in a compact, easy-to-fit product." },
      { title: "Superior quality", description: "A product of choice for Toyota and a wide range of European car makers, our alternators are manufactured to premium standards." },
      { title: "Advanced technologies", description: "Compatible with sophisticated electronics systems, our alternators are built to perform under all weather conditions and under extreme electric loads." }
    ],
    typesTitle: "Alternator types",
    types: [
      { name: "Alternator with small internal fan", description: "Engineered to provide optimal performance in a small, lightweight design, the fan has two blades integrated into the rotor, reducing weight, size and fan noise." },
      { name: "SC alternator", description: "In 2000, DENSO introduced the world's first SC (Segment Conductor) alternator using a rectangular segment conductor for its stator coil. The SC alternator reduces coil resistance and thermal losses by 50 percent in a compact and lightweight design." }
    ],
    characteristics: "Our advanced technologies enable optimum output in a small, lightweight design. This enables maximum efficiency in a part that is easy to fit and has a long service life."
  },
  "starters": {
    name: "Starters",
    image: starterImg,
    subtitle: "An engine cannot crank without a powerful, reliable starter to drive it.",
    howItWorksTitle: "How starters work",
    howItWorks: "The starter motor is responsible for cranking the engine to begin the combustion cycle. When you turn the ignition key, electrical current from the battery flows to the starter motor, which engages with the engine's flywheel to rotate the crankshaft.\n\nDENSO starters are designed to deliver high torque output while minimizing power consumption. Our advanced designs ensure reliable starting performance in all weather conditions, from extreme cold to hot environments.",
    features: [
      "High torque output for reliable engine cranking.",
      "Compact and lightweight design.",
      "Durable construction for long service life.",
      "Wide vehicle coverage and application range."
    ],
    featureDetails: [
      { title: "Reliable performance", description: "DENSO starters are engineered to provide consistent, reliable engine cranking in all conditions, including extreme temperatures." },
      { title: "Advanced engineering", description: "Our starters feature precision-engineered components that maximize torque output while minimizing power consumption and wear." },
      { title: "OE quality", description: "Manufactured to the same standards as original equipment, DENSO starters ensure perfect fit and reliable performance." }
    ],
    typesTitle: "Starter types",
    types: [
      { name: "Conventional starters", description: "Traditional starter motor design suitable for most vehicle applications, providing reliable cranking performance." },
      { name: "Reduction gear starters", description: "Features a gear reduction system that allows the motor to operate at higher speeds while delivering increased torque to the flywheel." },
      { name: "Stop-start starters", description: "Designed for vehicles with stop-start systems, these starters are built to withstand frequent cycling and provide instant restart capability." }
    ],
    characteristics: "DENSO starters combine high-torque performance with durability and reliability, making them the choice of leading vehicle manufacturers worldwide."
  }
};

export default function RotatingElectricsProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/rotating-electrics">
              <Button>Back to Rotating Electrics</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-rotating-product-detail">
      <SEO 
        title={`${product.name} | Rotating Electrics | MPS`}
        description={product.subtitle}
        keywords={`${product.name}, rotating electrics, Denso, UAE`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/rotating-electrics">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-rotating">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-rotating-product-title">
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
                      <Link href="/categories/rotating-electrics">
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          Rotating Electrics
                        </div>
                      </Link>
                      <div className="border-t pt-2 mt-2 space-y-1">
                        {sidebarLinks.map((link) => (
                          <Link key={link.slug} href={`/categories/rotating-electrics/${link.slug}`}>
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
