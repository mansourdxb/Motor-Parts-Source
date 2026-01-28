import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import sparkPlugImg from "@assets/denso-spark-plug.jpg";
import ignitionCoilImg from "@assets/denso-ignition-coil.jpg";
import glowPlugImg from "@assets/denso-glow-plug.jpg";
import fuelPumpImg from "@assets/denso-fuel-pump.jpg";
import cogenImg from "@assets/denso-cogen-spark.jpg";

const sidebarLinks = [
  { name: "Spark Plugs", slug: "spark-plugs" },
  { name: "Ignition Coils", slug: "ignition-coils" },
  { name: "Glow Plugs", slug: "glow-plugs" },
  { name: "Fuel Pumps", slug: "fuel-pumps" },
  { name: "Co-Generation Spark Plugs", slug: "co-gen-spark-plugs" },
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
  "spark-plugs": {
    name: "Spark Plugs",
    image: sparkPlugImg,
    subtitle: "Since 1959, DENSO has become one of the world's leading pioneers of OEM quality spark plug technology.",
    howItWorksTitle: "How spark plugs work",
    howItWorks: "Known as the 'heart of the engine', spark plugs play a key role in the ignition and performance of the entire engine. The well-timed combustion of the fuel-air mixture of gasoline and oxygen is what generates power in gasoline engines. The precise timing of the spark created by the spark plug ignites the fuel, triggering combustion.\n\nTo create this spark, a high voltage is passed between the centre electrode and ground electrode of the spark plug. This voltage breaks down the natural insulation between these electrodes and an electrical spark is generated. Although this strong spark only lasts for about 1/1,000 of a second, it has to be precisely and reliably timed to trigger the combustion of the fuel-air mixture.",
    features: [
      "Optimum performance in a compact design.",
      "Built by DENSO in-house, with 'zero defects' as standard.",
      "Designs suitable for 90% of car models.",
      "Developed in-house for a wide range of applications."
    ],
    featureDetails: [
      { title: "Expert technology development", description: "Since our first design in 1959, we've been working to develop our spark plug technology and improve performance. This expertise informs the design of our huge range of compact spark plugs." },
      { title: "High, reliable performance", description: "As engines downsize, spark plugs still need to provide similar or improved levels of spark performance. DENSO spark plugs provide the best optimum performance in a compact design." },
      { title: "Suitable for many applications", description: "Our spark plugs are suitable for 90% of car models and are designed to provide reliable performance in a range of engine types and for various applications." }
    ],
    typesTitle: "Spark plug types",
    types: [
      { name: "Nickel TT", description: "The first-ever fine-wired spark plug without precious metal-based electrodes. The DENSO patented Twin Tip upgrade technology is available at a lower cost with average lifespan up to 40,000km." },
      { name: "Iridium TT", description: "Two needle-thin electrodes enable sparks to grow 360 degrees in all three dimensions, improving ignition performance and combustion output, increasing spark plug lifespan and reducing emissions." },
      { name: "Platinum Longlife", description: "With platinum on both the centre and ground electrodes, these spark plugs are resistant to corrosion and erosion, providing superior spark performance and lifetime in excess of 60,000 km." },
      { name: "Iridium Longlife", description: "With Iridium on the centre and Platinum chip on ground electrodes, these spark plugs provide superior spark performance and lifespan according to car makers requirements." }
    ],
    characteristics: "DENSO spark plugs are engineered to deliver consistent, reliable ignition performance across all driving conditions, with advanced electrode designs that maximize efficiency and lifespan."
  },
  "ignition-coils": {
    name: "Ignition Coils",
    image: ignitionCoilImg,
    subtitle: "To activate spark plugs, high voltages are required. DENSO's ignition coils ensure the consistent and reliable delivery of high-power outputs every time.",
    howItWorksTitle: "How DENSO ignition coils work",
    howItWorks: "Every time you turn the key, a spark needs to be delivered to trigger the ignition of the engine. To deliver this, the ignition coil needs to convert the lower power output of the car battery into the high voltages needed to enable the spark plug to fire.\n\nAs an electrical current of around 12 volts passes from the car battery through the ignition coil, a magnetic field is created around the primary coil. When the spark plug requires a spark, the ignition system stops the flow of electricity into the primary coil. The magnetic field then collapses, increasing the voltage to around 20,000 volts - enough to create a spark within the spark plug.",
    features: [
      "An innovative, cylindrical design makes the most of small engine sizes.",
      "Increased magnetic efficiency produces high voltages faster.",
      "The use of superior materials increases reliability and reduces misfires.",
      "No high-tension ignition wires needed, enabling faster installation."
    ],
    featureDetails: [
      { title: "Compact, innovative design", description: "Our market-leading design integrates the driving circuit into the top of our ignition coils, reducing product size. This means DENSO ignition coils can be installed easily into smaller engines." },
      { title: "Superior performance", description: "By combining our advanced design with high-quality materials, we ensure that our ignition coils produce magnetic efficiency and generate higher voltages faster for a longer lifetime." },
      { title: "Easier installation", description: "With no need to include high tension ignition wires, our ignition coil's integrated and compact design makes it easier to install, even in smaller engines." }
    ],
    typesTitle: "Ignition Coil types",
    types: [
      { name: "Stick coil", description: "A first to market, our compact, stick-type ignition coil pioneered a design that provides superior performance in a smaller, easy-to-install product." },
      { name: "Distributor coil", description: "A distributor system uses a rotating shaft that routes the high-voltage current to the spark plugs in the correct order." },
      { name: "Ignition coil block", description: "This distributor-less ignition system combines multiple coils in a single unit, with multiple outlets to feed voltage to different spark plugs at the same time." },
      { name: "Coil on plug", description: "Our coil-on-plug products provide a dual spark in a distributor-less system, making them a great option for high-power car models." }
    ],
    characteristics: "Our design is unique to DENSO and has been developed alongside world-leading manufacturers. With micro-sized driver circuits and diagonal inductive windings, our ignition coils deliver high power outputs in a compact design."
  },
  "glow-plugs": {
    name: "Glow Plugs",
    image: glowPlugImg,
    subtitle: "With 167 parts covering more than 8,000 applications, discover why DENSO glow plugs are the OE industry standard.",
    howItWorksTitle: "How DENSO glow plugs work",
    howItWorks: "Improving the emissions standards of diesel engines is an increasing priority. Glow plugs play a key part in minimizing the environmental impact of diesel emissions, alongside ensuring engine reliability and performance.\n\nTo start combustion within a diesel engine, air is compressed in a chamber to raise the temperature and pressure, fuel is then added to this air to start the combustion cycle. If the temperature of the air is too low, some fuel may not be burnt. Glow plugs provide extra heat to ensure that combustion chambers reach the required temperature for a clean combustion cycle.",
    features: [
      "Manufactured to meet or exceed OE specifications.",
      "Reliable temperature control, including faster heat-up times.",
      "Suitable for use in almost any European diesel engine.",
      "Proven to reduce a vehicle's carbon emissions impact."
    ],
    featureDetails: [
      { title: "OE standard quality", description: "By making significant investments into research and development, we've created innovative glow plug designs that meet or exceed industry standards." },
      { title: "Reliable temperature control", description: "With a reliable rapid start, even in sub-zero temperatures, DENSO glow plugs heat up fast and stay at a high temperature for longer, helping to reduce carbon emissions." },
      { title: "Easy-to-access parts", description: "DENSO products cover more applications with fewer part references. Plus, an easy-to-use part numbering system helps manufacturers find the right part quickly and easily." }
    ],
    typesTitle: "Glow Plug types",
    types: [
      { name: "Instant heating", description: "Our market-leading double coil technology provides instant heating and a self-regulating resistor that enables quick engine start-up and reduces noise, vibrations and emissions." },
      { name: "Ceramic", description: "As the first OE manufacturer of ceramic glow plugs, the conductive nature of the material means the all-ceramic design can reach and maintain high temperatures for longer." },
      { name: "Double coil", description: "With two serial resistors inside, one acts as a regulator to ensure improved temperature accuracy and enabling the glow plug to reach hotter temperatures in a shorter time." }
    ],
    characteristics: "Our OE standard glow plugs are proven to provide high-temperature performance quickly with greater temperature accuracy, ensuring long-lasting ignition performance every time."
  },
  "fuel-pumps": {
    name: "Fuel Pumps",
    image: fuelPumpImg,
    subtitle: "DENSO fuel pumps deliver reliable fuel supply to ensure optimal engine performance in all conditions.",
    howItWorksTitle: "How fuel pumps work",
    howItWorks: "The fuel pump is responsible for delivering fuel from the tank to the engine at the correct pressure and flow rate. Modern fuel injection systems require precise fuel delivery to maintain optimal air-fuel ratios for efficient combustion.\n\nDENSO fuel pumps are engineered to provide consistent fuel pressure across all operating conditions, from cold starts to high-performance driving. Our pumps feature advanced motor designs that minimize noise and vibration while maximizing durability and efficiency.",
    features: [
      "Consistent fuel pressure delivery.",
      "Quiet operation with minimal vibration.",
      "Long service life and reliability.",
      "Suitable for a wide range of applications."
    ],
    featureDetails: [
      { title: "Reliable performance", description: "DENSO fuel pumps are designed to deliver consistent fuel pressure across all operating conditions, ensuring optimal engine performance." },
      { title: "Advanced engineering", description: "Our fuel pumps feature precision-engineered components that minimize wear and extend service life." },
      { title: "Wide coverage", description: "With a comprehensive range covering most vehicle applications, finding the right DENSO fuel pump is quick and easy." }
    ],
    typesTitle: "Fuel Pump types",
    types: [
      { name: "In-tank pumps", description: "Mounted inside the fuel tank, these pumps are cooled by the surrounding fuel and operate quietly with minimal vibration." },
      { name: "External pumps", description: "Mounted outside the fuel tank, these pumps are used in specific applications where in-tank mounting is not practical." }
    ],
    characteristics: "DENSO fuel pumps are manufactured to OE specifications, ensuring reliable fuel delivery and optimal engine performance throughout the life of the vehicle."
  },
  "co-gen-spark-plugs": {
    name: "Co-Generation Spark Plugs",
    image: cogenImg,
    subtitle: "Specialized spark plugs designed for co-generation and industrial gas engine applications.",
    howItWorksTitle: "How co-generation spark plugs work",
    howItWorks: "Co-generation spark plugs are specially designed for industrial gas engines used in power generation and combined heat and power (CHP) systems. These engines operate under more demanding conditions than automotive engines, with higher pressures, temperatures, and longer operating hours.\n\nDENSO co-generation spark plugs are engineered to withstand these extreme conditions while maintaining consistent ignition performance over extended service intervals.",
    features: [
      "Designed for industrial gas engine applications.",
      "Extended service life under demanding conditions.",
      "Consistent ignition performance.",
      "Suitable for various gas types and engine configurations."
    ],
    featureDetails: [
      { title: "Industrial-grade durability", description: "Built to withstand the demanding conditions of continuous operation in industrial gas engines." },
      { title: "Extended service intervals", description: "Designed for longer service life, reducing maintenance costs and downtime in industrial applications." },
      { title: "Reliable ignition", description: "Provides consistent spark performance even under high-pressure and high-temperature conditions." }
    ],
    typesTitle: "Co-Generation Spark Plug types",
    types: [
      { name: "Standard co-gen plugs", description: "Designed for general industrial gas engine applications with balanced performance and durability." },
      { name: "High-performance co-gen plugs", description: "Engineered for demanding applications requiring maximum ignition performance and extended service life." }
    ],
    characteristics: "DENSO co-generation spark plugs combine industrial-grade durability with precision ignition performance, making them ideal for power generation and CHP applications."
  }
};

export default function IgnitionProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/ignition">
              <Button>Back to Ignition</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-ignition-product-detail">
      <SEO 
        title={`${product.name} | Ignition | MPS`}
        description={product.subtitle}
        keywords={`${product.name}, ignition, Denso, UAE`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/ignition">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-ignition">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-ignition-product-title">
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
                      <Link href="/categories/ignition">
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          Ignition
                        </div>
                      </Link>
                      <div className="border-t pt-2 mt-2 space-y-1">
                        {sidebarLinks.map((link) => (
                          <Link key={link.slug} href={`/categories/ignition/${link.slug}`}>
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
