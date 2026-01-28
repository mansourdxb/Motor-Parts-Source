import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import airFilterImg from "@assets/denso-air-filter.jpg";
import cabinFilterImg from "@assets/denso-cabin-filter.jpg";
import oilFilterImg from "@assets/denso-oil-filter.jpg";

const sidebarLinks = [
  { name: "Air Filters", slug: "air-filters" },
  { name: "Cabin Air Filters", slug: "cabin-air-filters" },
  { name: "Oil Filters", slug: "oil-filters" },
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
  "air-filters": {
    name: "Air Filters",
    image: airFilterImg,
    subtitle: "High-efficiency air filters that protect your engine by removing harmful particles from intake air.",
    howItWorksTitle: "How air filters work",
    howItWorks: "The engine air filter is the first line of defense against airborne contaminants entering the engine. It removes dust, dirt, pollen, and other particles from the air before it enters the combustion chambers.\n\nA clean air filter ensures optimal airflow to the engine, which is essential for efficient combustion and maximum power output. DENSO air filters use advanced filtration media that captures particles while maintaining low airflow resistance.",
    features: [
      "High filtration efficiency for engine protection.",
      "Low airflow resistance for optimal performance.",
      "Durable construction for extended service life.",
      "Wide vehicle coverage and perfect fit."
    ],
    featureDetails: [
      { title: "Engine protection", description: "DENSO air filters capture harmful particles that could damage engine components, extending engine life and maintaining performance." },
      { title: "Optimal airflow", description: "Advanced filtration media provides excellent particle capture while maintaining low restriction for maximum engine efficiency." },
      { title: "Long service life", description: "High-quality materials ensure consistent filtration performance throughout the recommended service interval." }
    ],
    typesTitle: "Air filter types",
    types: [
      { name: "Panel air filters", description: "Flat, rectangular design commonly used in modern vehicles, offering high filtration area in a compact form factor." },
      { name: "Cylindrical air filters", description: "Round design used in some vehicle applications, providing 360-degree airflow and high dust-holding capacity." }
    ],
    characteristics: "DENSO air filters combine advanced filtration technology with durable construction to protect engines while maintaining optimal performance and fuel efficiency."
  },
  "cabin-air-filters": {
    name: "Cabin Air Filters",
    image: cabinFilterImg,
    subtitle: "Premium cabin filters that ensure clean, fresh air inside the vehicle for driver and passenger comfort.",
    howItWorksTitle: "How cabin air filters work",
    howItWorks: "The cabin air filter cleans the air that enters the vehicle's interior through the heating, ventilation, and air conditioning (HVAC) system. It removes dust, pollen, mold spores, and other airborne particles to improve air quality inside the cabin.\n\nRegular replacement of the cabin air filter ensures optimal HVAC performance and prevents unpleasant odors from developing. DENSO cabin filters use multi-layer filtration media for comprehensive particle capture.",
    features: [
      "Multi-layer filtration for comprehensive protection.",
      "Removes allergens and pollutants.",
      "Maintains HVAC system efficiency.",
      "Prevents unpleasant odors in the cabin."
    ],
    featureDetails: [
      { title: "Clean cabin air", description: "Multi-layer filtration captures particles of all sizes, from large dust particles to microscopic allergens and pollutants." },
      { title: "Allergy relief", description: "Effective removal of pollen and other allergens provides relief for passengers with allergies or respiratory sensitivities." },
      { title: "HVAC protection", description: "By preventing debris from entering the HVAC system, cabin filters help maintain blower motor and evaporator efficiency." }
    ],
    typesTitle: "Cabin filter types",
    types: [
      { name: "Particulate filters", description: "Standard cabin filters that remove dust, pollen, and other particles from the incoming air." },
      { name: "Activated carbon filters", description: "Enhanced filters with activated carbon layer that also absorbs odors and harmful gases from outside air." }
    ],
    characteristics: "DENSO cabin air filters provide comprehensive protection against airborne particles and odors, ensuring a comfortable and healthy environment for all vehicle occupants."
  },
  "oil-filters": {
    name: "Oil Filters",
    image: oilFilterImg,
    subtitle: "High-quality oil filters designed to remove contaminants and protect vital engine components.",
    howItWorksTitle: "How oil filters work",
    howItWorks: "The oil filter removes contaminants from engine oil as it circulates through the lubrication system. These contaminants include metal particles from engine wear, combustion byproducts, and external debris that can cause accelerated wear and damage to engine components.\n\nDENSO oil filters use advanced filtration media that captures particles while maintaining adequate oil flow. A bypass valve ensures oil continues to flow to the engine even if the filter becomes clogged.",
    features: [
      "High filtration efficiency protects engine.",
      "Maintains adequate oil flow under all conditions.",
      "Anti-drain back valve prevents dry starts.",
      "Durable construction for leak-free operation."
    ],
    featureDetails: [
      { title: "Engine protection", description: "Advanced filtration media captures harmful particles that could damage bearings, pistons, and other critical engine components." },
      { title: "Reliable oil flow", description: "Precision-engineered bypass valve ensures oil continues to reach the engine even in extreme cold or if the filter becomes restricted." },
      { title: "Quality construction", description: "Heavy-duty housing and precision seals ensure leak-free operation and withstand engine vibration and pressure." }
    ],
    typesTitle: "Oil filter types",
    types: [
      { name: "Spin-on oil filters", description: "Self-contained filter with integrated housing that threads onto the engine. Easy to replace and widely used in modern vehicles." },
      { name: "Cartridge oil filters", description: "Replaceable filter element that fits into a reusable housing. Environmentally friendly option with less waste material." }
    ],
    characteristics: "DENSO oil filters combine superior filtration performance with robust construction to protect engines and extend service life in all operating conditions."
  }
};

export default function FiltrationProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/filtration">
              <Button>Back to Filtration</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-filtration-product-detail">
      <SEO 
        title={`${product.name} | Filtration | MPS`}
        description={product.subtitle}
        keywords={`${product.name}, filtration, filters, Denso, UAE`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/filtration">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-filtration">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-filtration-product-title">
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
                      <Link href="/categories/filtration">
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          Filtration
                        </div>
                      </Link>
                      <div className="border-t pt-2 mt-2 space-y-1">
                        {sidebarLinks.map((link) => (
                          <Link key={link.slug} href={`/categories/filtration/${link.slug}`}>
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
