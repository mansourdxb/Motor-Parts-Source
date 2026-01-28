import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import camshaftImg from "@assets/denso-camshaft-sensor.jpg";
import egrImg from "@assets/denso-egr-valve.jpg";
import egtsImg from "@assets/denso-egts.jpg";
import lambdaImg from "@assets/denso-lambda.jpg";
import mapImg from "@assets/denso-map-sensor.jpg";
import mafImg from "@assets/denso-maf-sensor.jpg";

const sidebarLinks = [
  { name: "Camshaft & Crankshaft Sensors", slug: "camshaft-crankshaft-sensors" },
  { name: "EGR Valves", slug: "egr-valves" },
  { name: "EGTS Sensors", slug: "egts-sensors" },
  { name: "Lambda Sensors", slug: "lambda-sensors" },
  { name: "MAP Sensors", slug: "map-sensors" },
  { name: "MAF Sensors", slug: "maf-sensors" },
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
  "camshaft-crankshaft-sensors": {
    name: "Camshaft and Crankshaft Sensors",
    image: camshaftImg,
    subtitle: "Precision position sensors that enable accurate engine timing for optimal performance and efficiency.",
    howItWorksTitle: "How position sensors work",
    howItWorks: "Camshaft and crankshaft position sensors monitor the rotational position of these critical engine components and send this information to the engine control unit (ECU). The ECU uses this data to precisely time fuel injection and ignition events.\n\nAccurate position sensing is essential for modern engine management systems to optimize combustion, maximize power output, and minimize emissions. DENSO sensors use advanced technologies to provide precise, reliable position detection.",
    features: [
      "Precise position detection for optimal timing.",
      "Reliable operation in harsh engine conditions.",
      "Wide vehicle coverage and application range.",
      "OE quality for consistent performance."
    ],
    featureDetails: [
      { title: "Precision timing", description: "Accurate position sensing enables the ECU to precisely time fuel injection and ignition for optimal combustion efficiency." },
      { title: "Durable construction", description: "Designed to withstand the heat, vibration, and contamination found in the engine environment." },
      { title: "Easy installation", description: "Direct-fit replacement parts ensure quick, trouble-free installation with no modifications required." }
    ],
    typesTitle: "Position sensor types",
    types: [
      { name: "Hall effect sensors", description: "Use a magnetic field and Hall effect IC to detect the position of a toothed wheel or reluctor ring on the camshaft or crankshaft." },
      { name: "Magnetic reluctance sensors", description: "Generate a voltage signal as teeth on a reluctor wheel pass by the sensor tip, providing rotational speed and position information." }
    ],
    characteristics: "DENSO position sensors deliver the precision and reliability required by modern engine management systems to optimize performance and minimize emissions."
  },
  "egr-valves": {
    name: "Exhaust Gas Recirculation Valves",
    image: egrImg,
    subtitle: "Advanced EGR valves that reduce emissions while maintaining engine performance and efficiency.",
    howItWorksTitle: "How EGR valves work",
    howItWorks: "Exhaust Gas Recirculation (EGR) valves reduce harmful nitrogen oxide (NOx) emissions by recirculating a portion of exhaust gas back into the engine's intake manifold. This lowers combustion temperatures, which reduces NOx formation.\n\nThe ECU controls the EGR valve to optimize the amount of exhaust gas recirculated based on engine operating conditions. DENSO EGR valves provide precise control and reliable operation for effective emissions reduction.",
    features: [
      "Reduces harmful NOx emissions.",
      "Precise flow control for optimal performance.",
      "Durable construction for long service life.",
      "Compatible with modern engine management systems."
    ],
    featureDetails: [
      { title: "Emissions reduction", description: "By lowering combustion temperatures, EGR valves significantly reduce NOx emissions without compromising engine performance." },
      { title: "Precise control", description: "Advanced valve design and control systems enable accurate regulation of exhaust gas recirculation rates." },
      { title: "Reliability", description: "Built to withstand the heat and contamination of exhaust gases while maintaining precise operation." }
    ],
    typesTitle: "EGR valve types",
    types: [
      { name: "Vacuum-operated EGR", description: "Traditional design using engine vacuum to control valve position, commonly found in older vehicles." },
      { name: "Electronic EGR", description: "Electrically controlled valve providing more precise flow control and faster response to ECU commands." }
    ],
    characteristics: "DENSO EGR valves combine advanced design with robust construction to provide reliable emissions reduction in all operating conditions."
  },
  "egts-sensors": {
    name: "Exhaust Gas Temperature Sensors",
    image: egtsImg,
    subtitle: "High-precision temperature sensors for monitoring exhaust system components and protecting catalytic converters.",
    howItWorksTitle: "How EGTS sensors work",
    howItWorks: "Exhaust Gas Temperature Sensors (EGTS) monitor the temperature of exhaust gases at various points in the exhaust system. This information helps the ECU protect components like catalytic converters and diesel particulate filters from damage due to overheating.\n\nEGTS sensors also enable optimization of exhaust aftertreatment systems by ensuring they operate within their optimal temperature range. DENSO sensors provide accurate temperature measurement even in extreme conditions.",
    features: [
      "Accurate temperature measurement up to 1000°C.",
      "Fast response time for real-time monitoring.",
      "Protects expensive exhaust components.",
      "Enables optimal aftertreatment system operation."
    ],
    featureDetails: [
      { title: "Component protection", description: "By monitoring exhaust temperatures, EGTS sensors help prevent damage to catalytic converters and other exhaust components from overheating." },
      { title: "System optimization", description: "Accurate temperature data enables the ECU to optimize exhaust aftertreatment system operation for maximum efficiency." },
      { title: "Durability", description: "Designed to withstand extreme temperatures and harsh exhaust gas environments while maintaining accuracy." }
    ],
    typesTitle: "EGTS sensor types",
    types: [
      { name: "Pre-catalyst sensors", description: "Mounted before the catalytic converter to monitor exhaust gas temperature and protect the catalyst from damage." },
      { name: "Post-catalyst sensors", description: "Mounted after the catalytic converter to monitor catalyst temperature and verify proper operation." }
    ],
    characteristics: "DENSO EGTS sensors provide the accuracy and durability required for reliable exhaust temperature monitoring in modern emissions control systems."
  },
  "lambda-sensors": {
    name: "Lambda Sensors",
    image: lambdaImg,
    subtitle: "Oxygen sensors for precise air-fuel ratio monitoring and optimal emissions control.",
    howItWorksTitle: "How lambda sensors work",
    howItWorks: "Lambda sensors, also known as oxygen sensors, measure the amount of oxygen in the exhaust gases. This information allows the ECU to adjust the air-fuel mixture to achieve optimal combustion and minimize emissions.\n\nA stoichiometric air-fuel ratio (lambda = 1) is ideal for catalytic converter efficiency. The ECU continuously adjusts fuel injection based on lambda sensor readings to maintain this optimal ratio. DENSO lambda sensors provide fast, accurate measurements for precise fuel control.",
    features: [
      "Fast response for precise fuel control.",
      "Accurate oxygen measurement for optimal mixture.",
      "Wide vehicle coverage and application range.",
      "OE quality for consistent, reliable performance."
    ],
    featureDetails: [
      { title: "Emissions reduction", description: "Precise air-fuel ratio control minimizes harmful emissions and ensures optimal catalytic converter efficiency." },
      { title: "Fuel efficiency", description: "By maintaining the ideal air-fuel mixture, lambda sensors help optimize fuel consumption." },
      { title: "Engine protection", description: "Prevents engine damage from running too lean or too rich by enabling closed-loop fuel control." }
    ],
    typesTitle: "Lambda sensor types",
    types: [
      { name: "Narrowband sensors", description: "Provide a simple rich/lean indication around the stoichiometric ratio. Used for basic closed-loop fuel control." },
      { name: "Wideband sensors", description: "Measure exact air-fuel ratios across a wide range, enabling more precise fuel control in modern engine management systems." }
    ],
    characteristics: "DENSO lambda sensors combine fast response with long-term accuracy to enable optimal engine performance and emissions control."
  },
  "map-sensors": {
    name: "MAP Sensors",
    image: mapImg,
    subtitle: "Manifold Absolute Pressure sensors for accurate engine load detection and optimal fuel delivery.",
    howItWorksTitle: "How MAP sensors work",
    howItWorks: "Manifold Absolute Pressure (MAP) sensors measure the pressure in the intake manifold. This pressure varies with engine load and is used by the ECU to calculate air mass entering the engine.\n\nCombined with other sensor inputs, MAP data enables the ECU to determine optimal fuel injection timing and quantity. DENSO MAP sensors provide accurate pressure measurement for precise engine control.",
    features: [
      "Accurate pressure measurement for load detection.",
      "Fast response for dynamic driving conditions.",
      "Robust construction for reliable operation.",
      "Wide measurement range for all operating conditions."
    ],
    featureDetails: [
      { title: "Load detection", description: "MAP sensors enable the ECU to accurately determine engine load for optimal fuel and ignition timing." },
      { title: "Altitude compensation", description: "By measuring absolute pressure, MAP sensors automatically compensate for changes in altitude." },
      { title: "Turbo boost monitoring", description: "In turbocharged engines, MAP sensors monitor boost pressure for engine protection and performance optimization." }
    ],
    typesTitle: "MAP sensor types",
    types: [
      { name: "Piezoresistive sensors", description: "Use a silicon diaphragm that changes resistance with pressure, providing accurate analog pressure output." },
      { name: "Integrated MAP/temperature sensors", description: "Combine pressure sensing with intake air temperature measurement in a single unit for compact installation." }
    ],
    characteristics: "DENSO MAP sensors deliver the accuracy and reliability required for precise engine load detection and optimal fuel system control."
  },
  "maf-sensors": {
    name: "Mass Air Flow Sensors",
    image: mafImg,
    subtitle: "Precision MAF sensors for accurate air mass measurement and optimal engine performance.",
    howItWorksTitle: "How MAF sensors work",
    howItWorks: "Mass Air Flow (MAF) sensors measure the mass of air entering the engine. This is critical information for the ECU to calculate the correct amount of fuel to inject for optimal combustion.\n\nDENSO was the first to develop plug-in MAF meters, making installation easier and reducing vehicle weight. Our MAF sensors use hot-wire or hot-film technology to provide accurate air mass measurement regardless of temperature or pressure variations.",
    features: [
      "Accurate air mass measurement.",
      "Fast response for transient conditions.",
      "Temperature-compensated for accuracy.",
      "Easy plug-in installation design."
    ],
    featureDetails: [
      { title: "Fuel efficiency", description: "Accurate air mass measurement enables precise fuel metering for optimal combustion and fuel economy." },
      { title: "Emissions control", description: "By enabling accurate air-fuel ratio control, MAF sensors help minimize harmful emissions." },
      { title: "Performance optimization", description: "Fast, accurate response enables the ECU to optimize engine performance under all driving conditions." }
    ],
    typesTitle: "MAF sensor types",
    types: [
      { name: "Hot-wire MAF", description: "Uses a heated wire element that cools proportionally to airflow. Accurate and responsive measurement technology." },
      { name: "Hot-film MAF", description: "Uses a thin-film heating element on a substrate. Provides similar accuracy with improved durability." }
    ],
    characteristics: "DENSO MAF sensors provide the accuracy and response speed required for modern engine management systems to optimize performance and emissions."
  }
};

export default function EngineManagementProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = slug ? productData[slug] : null;

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/engine-management">
              <Button>Back to Engine Management</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-ems-product-detail">
      <SEO 
        title={`${product.name} | Engine Management | MPS`}
        description={product.subtitle}
        keywords={`${product.name}, engine management, sensors, Denso, UAE`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/engine-management">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-ems">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-ems-product-title">
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
                      <Link href="/categories/engine-management">
                        <div className="text-sm font-medium text-primary hover:underline cursor-pointer">
                          Engine Management
                        </div>
                      </Link>
                      <div className="border-t pt-2 mt-2 space-y-1">
                        {sidebarLinks.map((link) => (
                          <Link key={link.slug} href={`/categories/engine-management/${link.slug}`}>
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
