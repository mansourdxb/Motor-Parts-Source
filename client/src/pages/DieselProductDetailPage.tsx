import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import injectorImg from "@assets/denso-common-rail-injector.jpg";
import pumpImg from "@assets/denso-diesel-pump.jpg";
import scvImg from "@assets/denso-scv.jpg";

const sidebarLinks = [
  { name: "Common Rail Injector", slug: "common-rail-injector" },
  { name: "Common Rail Pump", slug: "common-rail-pump" },
  { name: "Common Rail SCV", slug: "common-rail-scv" },
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
  installation?: string[];
}> = {
  "common-rail-injector": {
    name: "Common Rail Injector",
    image: injectorImg,
    subtitle: "DENSO's advanced common rail diesel fuel injectors are a reliable, powerful solution for providing diesel engines with the precise amount of fuel, at exactly the right time, and in the ideal condition for efficient combustion.",
    howItWorksTitle: "How DENSO common rail injectors work",
    howItWorks: "The diesel common rail system is now the most commonly used fuel injection system for diesel engines. First commercialised by DENSO, it enables the engine to have greater control over the pressure of fuel injection, leading to a more reliable and efficient combustion process.\n\nAfter the fuel has been pressurised within the fuel pump, it is stored in the common rail system, also known as the accumulator, before being sprayed via the injectors into the combustion chambers. Each of these injectors can be adjusted within set limits depending on the required fuel pressure and timing for the delivery of fuel. Unaffected by the engine's rotation speed, having multiple injectors available to send fuel to the engine at different pressures or times enables a greater level of flexibility in terms of the level of power, fuel consumption and emissions that are produced by the engine.",
    features: [
      "High fuel pressure and high level of injection precision.",
      "Full control over fuel injection pressure, timing, rate and quantity.",
      "Lower emissions and better fuel economy.",
      "Lower noise levels and higher power output."
    ],
    featureDetails: [
      { title: "Advanced design", description: "By measuring the injection pressure of fuel more accurately, common rail injectors can adjust the performance of the engine depending on the amount of combustion needed." },
      { title: "Optimum efficiency", description: "Common rail injectors improve the efficiency of an engine's performance by only delivering the right amount of fuel and injection pressure at the right moment required for combustion." },
      { title: "OE quality", description: "Manufactured and developed with our many years of diesel system experience, all our injectors are rigorously tested to high performance standards." }
    ],
    typesTitle: "Common Rail Injector types",
    types: [
      { name: "Solenoid-type injector", description: "Solenoid-type injectors control fuel injection by opening and closing the control valve with magnetic force, using a solenoid on the actuator." },
      { name: "Piezo-type injector", description: "Piezo-type injectors achieve faster responsiveness than solenoid types by using piezo elements on the actuators. Piezo elements work by converting changes in the voltage applied into expansion and contraction (displacement)." }
    ],
    characteristics: "The advanced design of DENSO's common rail injectors provides optimum efficiency and combustion performance, whatever your application or injector type."
  },
  "common-rail-pump": {
    name: "Common Rail Pump",
    image: pumpImg,
    subtitle: "To deliver fuel to the engine under the correct pressure, the common rail pump needs to be efficient and reliable.",
    howItWorksTitle: "How DENSO common rail pumps work",
    howItWorks: "The purpose of the common rail system is to increase the efficiency of diesel engine performance. During operation, an amount of fuel is delivered from the fuel pump into the common rail, which is a kind of accumulator, where it is then sent to the injectors. These electronically controlled injectors control the amount of fuel and timing when this fuel is injected under a certain pressure.\n\nThe engine ECU can control injection quantity and timing to a high level of precision, independent of engine speed or load. Even multi-injection (multiple fuel injections in one injection stroke) is possible. This ensures stable injection pressure at all times, even in the low engine speed range, and dramatically decreases the amount of black smoke emitted during start-up and acceleration.\n\nOnce the fuel is delivered from the tank to the engine, the common rail pump creates the high pressure ready for it to be put into the combustion chambers via the injectors. This makes the common rail pump a key part of the common rail system.",
    features: [
      "Ensures the reliable delivery of pressurised fuel.",
      "Optimises the performance of diesel engines.",
      "Range of units and parts available.",
      "Suitable for a huge range of applications."
    ],
    featureDetails: [
      { title: "Optimises performance", description: "The common rail pump helps to optimise diesel engine performance, lower emissions and improve fuel consumption as a key part of the common rail system." },
      { title: "Improves efficiency", description: "By having the ability to create the right pressure at the right time, the common rail pump will supply fuel at the right pressure ready to be injected into the combustion chambers." },
      { title: "Suits range of applications", description: "Manufactured in partnership with worldwide car makers, the common rail pump is suitable for a range of applications and is unique within the aftermarket." }
    ],
    typesTitle: "Common Rail Pump types",
    types: [
      { name: "HP2", description: "First-generation common rail pump for passenger cars introduced in 1999. Uses a double pumping mechanism to ensure smooth operation, creating a maximum system pressure of 145 MPa." },
      { name: "HP3", description: "Second-generation common rail pump introduced in 2001. A lighter, more compact, two-cylinder pump used in passenger cars and compact trucks with maximum system pressure of 200 MPa." },
      { name: "HP4", description: "Introduced in 2004 for medium-sized trucks. Has three cylinders for higher fuel delivery capacity with maximum system pressure of 200 MPa." }
    ],
    characteristics: "The common rail pump is one of the key elements of DENSO's market-leading common rail systems."
  },
  "common-rail-scv": {
    name: "Common Rail SCV",
    image: scvImg,
    subtitle: "An essential part of the common rail system, Suction Control Valves (SCVs) are vital for maintaining the right pressure in the fuel system to meet the required low emissions levels and high power output.",
    howItWorksTitle: "How Common Rail SCVs work",
    howItWorks: "The common rail system is essential for delivering fuel under the right pressure to the rest of the engine. Keeping the fuel pressure level correct and accurate is vital for the engine to perform the combustion process efficiently. Efficient combustion ensures the reliable performance of the engine, helps to reduce carbon emissions and maximizes fuel consumption.\n\nSCVs control the amount of fuel that is pumped through the common rail system, therefore helping to maintain consistent fuel pressure. This ensures that the common rail injectors can deliver the right amount of fuel under the correct pressure to the combustion chamber, optimizing combustion performance and increasing overall engine efficiency.",
    features: [
      "Part of DENSO's pioneering common rail system.",
      "Ensures consistent fuel pressure levels.",
      "OE quality standard component.",
      "Easy-to-use part numbering system."
    ],
    featureDetails: [
      { title: "Consistent fuel pressure", description: "SCVs are an essential part of the common rail system due to their control over fuel supply to reach a consistent pressure. Without SCVs, the system couldn't function accurately." },
      { title: "High-quality parts", description: "Made to OE manufacturer's standards, each part of DENSO's common rail system is high-quality and meets the applications of a range of vehicle types." },
      { title: "Wide product range", description: "With an easy-to-use product numbering system, it's easy to find the right SCV for your application, whether it's an application with a HP2, HP3 or HP4 High Pressure pump system." }
    ],
    typesTitle: "Common Rail SCV types",
    types: [
      { name: "For HP2 pump system", description: "Because this high-pressure pump has two pumping mechanisms, it also has two SCVs. These on/off solenoid valves use a green or red connector to identify the two pumping systems. These two SCVs are sold as one kit." },
      { name: "For HP3 and HP4 pump system", description: "Operation of the SCV is same for HP3 and HP4 pump systems. DENSO uses two different types of SCV: normally closed and normally open linear solenoid valves." }
    ],
    characteristics: "The unique design of DENSO SCVs ensures that fuel pressure remains consistent, enabling the common rail system to function reliably and accurately.",
    installation: [
      "Install one new O-ring.",
      "Install two guide pins in the mounting holes and install the new gaskets.",
      "Apply engine oil on small O-ring.",
      "Install the SCV by carefully pushing it into the housing (to avoid O-ring damage).",
      "When the SCV is in position, remove the guide pins.",
      "Fit the bolts and tighten them to 6.9-10.8Nm.",
      "Connect the vehicle to diagnostic tester and perform available routines for pump testing."
    ]
  }
};

export default function DieselProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/diesel-components">
              <Button>Back to Diesel Components</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-diesel-product-detail">
      <SEO 
        title={`${product.name} | Diesel Components | MPS`}
        description={product.subtitle}
        keywords={`${product.name}, diesel components, common rail, Denso, UAE`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/diesel-components">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-diesel">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-diesel-product-title">
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

                {product.installation && (
                  <div>
                    <h2 className="text-2xl font-bold mb-6">Installation</h2>
                    <div className="bg-muted rounded-lg p-6">
                      <ol className="space-y-3">
                        {product.installation.map((step, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <span className="h-6 w-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 text-sm font-bold">
                              {index + 1}
                            </span>
                            <p className="text-muted-foreground">{step}</p>
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                )}

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
                      <Link href="/categories/diesel-components">
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          Diesel Components
                        </div>
                      </Link>
                      <div className="border-t pt-2 mt-2 space-y-1">
                        {sidebarLinks.map((link) => (
                          <Link key={link.slug} href={`/categories/diesel-components/${link.slug}`}>
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
