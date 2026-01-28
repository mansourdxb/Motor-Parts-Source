import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Check } from "lucide-react";
import { Link, useParams } from "wouter";
import acCondenser from "@assets/denso-condenser.jpg";
import acCompressor from "@assets/denso-ac-compressor.png";
import compressorOil from "@assets/denso-compressor-oil.jpg";
import blowerFan from "@assets/denso-cabin-blower.jpg";
import coolingFan from "@assets/denso-cooling-fan.jpg";
import radiator from "@assets/denso-radiator.jpg";
import evaporator from "@assets/denso-evaporator.png";
import expansionValve from "@assets/denso-expansion-valve.jpg";
import heaterCore from "@assets/denso-heater-core.jpg";
import pressureSwitch from "@assets/denso-pressure-switch.jpg";
import receiverDrier from "@assets/denso-receiver-drier.jpg";

const productData: Record<string, {
  name: string;
  image: string;
  subtitle: string;
  howItWorks: string;
  features: string[];
  featureDetails: { title: string; description: string }[];
  types?: { name: string; description: string }[];
}> = {
  "condensers": {
    name: "A/C Condensers",
    image: acCondenser,
    subtitle: "The condenser is needed to cool refrigerant and turn it back into a liquid in the A/C system.",
    howItWorks: "Air conditioning operation relies on taking heat out of the passenger compartment by absorbing the heat into a refrigerant, which transports the heat away from the passenger compartment so it can be released to the outside air. The release of the heat to the outside air is done by the condenser, located in the front of the vehicle. By releasing the heat to the cooler outside air, the gaseous refrigerant changes state to a liquid refrigerant. Able to withstand high internal pressures, the condenser passes the liquid refrigerant on to the receiver dryer.",
    features: [
      "Compact and lightweight design",
      "OE-standard quality and reliability",
      "Manufactured to integrate into any A/C system",
      "Enables peak performance with minimal maintenance"
    ],
    featureDetails: [
      { title: "Compact Design", description: "Designed to be lightweight and have compact dimensions, DENSO condensers nonetheless deliver high-power cooling performance." },
      { title: "OE Quality", description: "Manufactured and developed with our many years of A/C system experience, all our condensers are rigorously tested to high performance standards." },
      { title: "Easy to Install", description: "DENSO condensers are built specifically for major car models to ensure you can install them quickly and easily." }
    ],
    types: [
      { name: "Multi-flow", description: "Available in U-shaped and S-shaped models, these types of condenser let the refrigerant flow in the tubes at both ends of the tank simultaneously." },
      { name: "Super Cool", description: "Otherwise known as a subcool type, these condensers are multi-flow with an integrated gas-liquid separator or modulator." }
    ]
  },
  "ac-compressors": {
    name: "AC Compressors",
    image: acCompressor,
    subtitle: "Our premium quality AC Compressors are compact, lightweight and powerful.",
    howItWorks: "Air conditioning systems create a comfortable temperature and humidity inside the passenger compartment, so the driver and passengers feel more relaxed and cool. The A/C compressor is the key element that transports heat from the passenger compartment (evaporator) to the outside air (condenser). DENSO is the world leader in the global market for original equipment A/C Compressors, selected by top vehicle manufacturers in Japan, Europe and US.",
    features: [
      "High-quality compact and lightweight design",
      "Built for specific car and engine specifications",
      "Manufactured to highest design standards with low failure rate",
      "Extensive testing ensures reliable performance"
    ],
    featureDetails: [
      { title: "Compact Design", description: "Our many years of experience in engineering and manufacturing A/C components has led us to develop a compact and lightweight design that delivers high standards of cooling performance." },
      { title: "Easy to Install", description: "Built to meet specific car and engine applications, each of our compressors is accurately manufactured to guarantee trouble-free installation." },
      { title: "High Reliability", description: "We have very high DENSO design standards and perform rigorous testing to ensure our thermal products are of the highest quality with an extremely low failure rate." }
    ],
    types: [
      { name: "Reciprocating (Piston) Type", description: "Dual operating swash plate (fixed displacement) and single swash plate types (variable displacement) are available within our A/C compressor range." },
      { name: "Rotary Type", description: "Includes vane-type A/C compressors and scroll types for hybrid vehicles." }
    ]
  },
  "compressor-oil": {
    name: "AC Compressor Oil",
    image: compressorOil,
    subtitle: "Keeping the A/C compressor lubricated with high-quality oil is essential to ensure it runs smoothly and reliably.",
    howItWorks: "The A/C compressor is a key component of the air conditioning system. DENSO compressor oil keeps the A/C compressor lubricated, ensuring it stays cool and friction-free so it can continue to perform under high-pressure and high-temperature conditions. The oil also ensures that the rubber seals in the refrigerant lines and connections are protected, preventing the likelihood of leaking or damage.",
    features: [
      "Uniquely formulated for best performance",
      "High-quality base oil and additives used",
      "Double end-capped for excellent molecular stability",
      "Thermally stable with high viscosity index"
    ],
    featureDetails: [
      { title: "High Performance", description: "Developed by a global specialist, our A/C compressor oils have superior refrigerant miscibility and lubricity properties." },
      { title: "Unique Formulation", description: "Our PAG base oil is uniquely formulated to provide high performance with a specific chain structure of ethylene oxide and propylene oxide components." },
      { title: "Reliable and Stable", description: "Our ND-oil 8 and ND-oil 12 are double end-capped, meaning they are more chemically stable, non-reactive, and provide reliable performance." }
    ],
    types: [
      { name: "ND-oil 8", description: "Long-lasting, PAG 46-type double end-capped oil formulation for R134a-type refrigerant compressors." },
      { name: "ND-oil 12", description: "Has extra additives specially for the R1234yf refrigerant, but can also be used with vehicles using R134a type refrigerant." },
      { name: "ND-oil 11", description: "POE oil specifically developed for use in DENSO electric driven scroll compressors for hybrid and electric vehicles." }
    ]
  },
  "cabin-blower-fans": {
    name: "Cabin Blower Fans",
    image: blowerFan,
    subtitle: "Cabin blower fans perform a key function in keeping car cabins temperate and comfortable.",
    howItWorks: "After (fresh) air has been cooled or heated, it needs to be delivered into the car cabin on demand. Cabin blower fans are the component that performs this function. With an impeller and electrical motor, they generate a flow of air that passes through the evaporator and/or heater core to raise or lower the cabin temperature. The flow of air into the cabin is controlled either manually by the driver or automatically when equipped with climate control.",
    features: [
      "Ensures a temperate cabin",
      "Delivers air into the cabin efficiently",
      "Suitable for a range of applications",
      "Manufactured to OE quality standards"
    ],
    featureDetails: [
      { title: "Precision Engineered", description: "We've developed and manufactured our cabin blower fans using our many years of expertise and knowledge to ensure they maintain a temperate, comfortable vehicle cabin." },
      { title: "Efficient Operation", description: "DENSO cabin blower fans ensure cool or warm air is delivered efficiently into the cabin according the driver's or passengers' demands." },
      { title: "Reliable Performance", description: "Each of our HVAC components is put through a rigorous testing regime to ensure it can withstand the high demands of regular operation." }
    ],
    types: [
      { name: "Brush Motor", description: "In a brush motor, the coil (rotor) rotates when current flows to the coil via the brushes and collector." },
      { name: "Brushless Motor", description: "A brushless motor detects the position of the magnet rotor with a hall element, switching the current of the fixed coil with a controller." }
    ]
  },
  "cooling-fans": {
    name: "Cooling Fans",
    image: coolingFan,
    subtitle: "A cooling fan is an essential part in a car cooling system, helping take away heat when a vehicle is stationary.",
    howItWorks: "To avoid overheating of the engine when it is stationary or when the engine gets extremely hot, the cooling fans keeps the engine within a safe temperature range by forcing air through the radiator. DENSO's cooling fans can have solenoids fitted with sensors to ensure they only operate when needed in either low- or high-speed rotation, supporting reliable and efficient operation.",
    features: [
      "Developed for specific applications",
      "Manufactured to OE quality standards",
      "Rigorously tested and precision-engineered",
      "Designed for maximum efficiency"
    ],
    featureDetails: [
      { title: "OE Quality", description: "Our cooling fans are manufactured and tested to meet rigorous OE quality standards, powering reliable performance journey after journey." },
      { title: "Precision Engineered", description: "Co-developed with air conditioning experts for ability to cope with extreme environmental conditions." },
      { title: "Range of Applications", description: "All our cooling fan components are developed to match the specifications of particular cars or engine types to guarantee a first-time fit." }
    ]
  },
  "cooling-radiators": {
    name: "Cooling Radiators",
    image: radiator,
    subtitle: "To keep the engine cooling systems in optimum condition, radiators need to work efficiently.",
    howItWorks: "To keep the engine running efficiently, it needs to be at an optimum temperature. The cooling radiator plays a key part in the engine cooling system. Engine heat is absorbed by the coolant, circulating in the cooling system. The radiator releases this heat to the atmosphere by using the air flow while the vehicle is moving. When stationary, the electric cooling fan(s) support heat transfer by pulling or pushing air through the radiator.",
    features: [
      "Reliable, consistent performance",
      "Ensures optimum cooling systems efficiency",
      "Designed to remove heat quickly",
      "Long-lasting, compact component"
    ],
    featureDetails: [
      { title: "OE Quality", description: "Our radiators have been engineered to meet OE specifications and requirements, ensuring optimum cooling efficiency and durability under all weather conditions." },
      { title: "Expert Design", description: "Developed alongside air conditioning experts, our radiators use braze welding and a superior fin wave design to ensure optimum heat transfer." },
      { title: "Reliable and Durable", description: "Each of our DENSO components, including our radiators, undergoes rigorous testing to ensure long-lasting and efficient performance." }
    ],
    types: [
      { name: "Down Flow Type", description: "Coolant flow is from top to bottom. Down flow radiators are usually taller and require more space." },
      { name: "Cross Flow Type", description: "Coolant flow is horizontal. Cross flow radiators are lower, with the same cooling capacity as down flow radiators." }
    ]
  },
  "evaporators": {
    name: "Evaporators",
    image: evaporator,
    subtitle: "To keep refrigerant moving and performing its function in A/C systems, evaporators need to perform effectively and reliably.",
    howItWorks: "The evaporator performs the opposite function to a condenser within the A/C system. The evaporator absorbs the heat from the outside, warm air, while the condenser dissipates this heat to the outside air. To cool down the warm air before it moves into the car's cabin, the air is 'pushed' through the cold evaporator fins. Inside the evaporator flows low-pressure, low-temperature liquid refrigerant, which changes state to gaseous refrigerant by absorbing this heat.",
    features: [
      "High corrosion resistance",
      "Compact, efficient design",
      "Long life expectancy",
      "Suitable for a range of applications"
    ],
    featureDetails: [
      { title: "Reliable Performance", description: "Using our years of A/C manufacturing and design experience, we've developed a compact evaporator design that is efficient and reliable." },
      { title: "Durable Design", description: "Each of our evaporators is specially coated to prevent corrosion and the build-up of harmful bacteria and bad smells within the HVAC system." },
      { title: "Range of Applications", description: "We work with most of the world's biggest car makers and have developed evaporators for a wide range of applications." }
    ],
    types: [
      { name: "Multi-tank Super-slim (MS Type)", description: "The first aluminum evaporator, developed as R134a-type refrigerant became the industry standard with intricate flow path for superior heat transfer." },
      { name: "Revolutionary Super-slim (RS Type)", description: "Uses micropores and short fins for a much thinner body with no drop in thermal efficiency, more compact and lightweight." }
    ]
  },
  "expansion-valves": {
    name: "Expansion Valves",
    image: expansionValve,
    subtitle: "Expansion valves supply precise amounts of refrigerant, ensuring it reaches optimum temperature and pressure.",
    howItWorks: "To cool the air within an A/C system, the refrigerant needs to reach optimum temperature and pressure. Expansion valves inject the right amount of liquid refrigerant into the evaporator. This control over injection helps the evaporator lower the pressure and temperature of the refrigerant efficiently. They also maintain conditions by adjusting the quantity of refrigerant according to the temperature of the superheated gas at the evaporator outlet.",
    features: [
      "Precision engineered and built",
      "Efficient and consistent operation",
      "Reduces A/C outlet condensation",
      "Reliable performance time after time"
    ],
    featureDetails: [
      { title: "Precision Engineered", description: "We've developed and manufactured our expansion valves using our extensive knowhow and practical insight to ensure they offer high performance journey after journey." },
      { title: "Efficient Operation", description: "Working as part of the whole A/C system, DENSO expansion valves help the evaporator perform more efficiently." },
      { title: "Reliable Performance", description: "Each component in our A/C system is extensively tested to ensure it can withstand the varying temperatures and pressures of repeated operation." }
    ],
    types: [
      { name: "Box Type", description: "The most commonly used type today. As the gaseous refrigerant leaves the evaporator, it can internally detect refrigerant temperature to optimize cooling performance." }
    ]
  },
  "heater-cores": {
    name: "Heater Cores",
    image: heaterCore,
    subtitle: "To keep drivers and passengers warm, heater cores need to perform efficiently and reliably.",
    howItWorks: "Heater cores are part of the cooling system of the vehicle's engine. The warm engine coolant flows through the heater core and exchanges heat with the air in the vehicle interior to warm up the interior in cool conditions. The interior air is pushed through the heater core by the blower motor. After the air is warmed up it is distributed to the different air outlets, like feet, face or defrost outlets.",
    features: [
      "Provide optimum heat transfer",
      "Long-lasting, efficient performance",
      "Expert design and manufacture",
      "Built to OE quality standards"
    ],
    featureDetails: [
      { title: "OE Quality", description: "Our heater cores have been engineered to meet OE specifications and requirements, ensuring optimum HVAC efficiency for longer." },
      { title: "Expert Design", description: "Developed alongside air conditioning experts, the design and manufacture of our heater cores mean they can cope with extreme environmental conditions." },
      { title: "Reliable and Durable", description: "Each of our HVAC components, including our heater cores, undergoes rigorous testing to ensure long-lasting and efficient performance." }
    ],
    types: [
      { name: "SFA Type", description: "Single Flow Advance design for efficient heat transfer." },
      { name: "UFA Type", description: "U Flow Advance design for optimized coolant circulation." }
    ]
  },
  "pressure-switches": {
    name: "Pressure Switches & Sensors",
    image: pressureSwitch,
    subtitle: "Pressure switches ensure A/C components are not damaged when put under high or low pressure.",
    howItWorks: "Pressure switches and sensors are used to detect the pressures inside the A/C system and output a signal to protect the A/C system against under- and over-pressure situations. A pressure switch outputs an on/off signal, while a pressure sensor usually outputs a voltage change. DENSO A/C components are rigorously tested and manufactured to ensure they can withstand these changes in pressures and temperatures.",
    features: [
      "Ensure reliable A/C operation",
      "Effectively protect other components",
      "Reliable and durable performance",
      "Available for a range of A/C systems"
    ],
    featureDetails: [
      { title: "Precision Engineered", description: "We've developed and manufactured our pressure switches and sensors using our many years of expertise to ensure they protect the rest of the A/C system effectively." },
      { title: "Efficient Operation", description: "Working as part of the whole A/C system, DENSO pressure switches and sensors keep components safe without restricting operational efficiency." },
      { title: "Reliable Performance", description: "Each component in our A/C system is extensively tested to ensure it can withstand the high temperatures and pressures of repeated operation." }
    ],
    types: [
      { name: "Pressure Switch", description: "Can be classified into 'dual switches' which detect both abnormally high and low pressure, and 'trinary switches' which combine with electric fan control." },
      { name: "Pressure Sensor", description: "Detects refrigerant pressure on the high-pressure side and outputs a voltage change, PWM signal or LIN signal." }
    ]
  },
  "receiver-driers": {
    name: "Receiver Driers",
    image: receiverDrier,
    subtitle: "Receiver driers ensure only liquid refrigerant moves into the evaporator, ensuring the A/C system operates efficiently.",
    howItWorks: "To ensure an A/C system cools air efficiently, the right amount of refrigerant needs to be put under the right conditions before it is delivered to the evaporator. The receiver drier plays a key part by storing the liquid refrigerant safely until the evaporator needs it. It does this by separating the liquid and gaseous refrigerant to make sure only liquid enters the evaporator, to guarantee maximum cooling performance. DENSO receiver driers also filter and dry the refrigerant.",
    features: [
      "Ensures efficient A/C operation",
      "Filters contaminants and absorbs moisture",
      "Maintains optimum conditions",
      "Engineered for high reliability"
    ],
    featureDetails: [
      { title: "Precision Engineered", description: "We've developed and manufactured our receiver driers using our many years of expertise to ensure they help the rest of the A/C system perform efficiently." },
      { title: "Efficient Operation", description: "DENSO receiver driers ensure refrigerant is in an optimum condition to be put under high temperature and pressure." },
      { title: "Reliable Performance", description: "Each of our A/C components is put under rigorous testing to ensure it can withstand the high pressures and temperatures of regular operation." }
    ],
    types: [
      { name: "Receiver Drier", description: "Located between the condenser and evaporator (HP side) and separates gas from liquid to ensure only liquid refrigerant is supplied to the evaporator." },
      { name: "Accumulator", description: "Located between the evaporator and compressor (LP side) and separates liquid from gas to ensure only gaseous refrigerant is supplied to the compressor." }
    ]
  }
};

export default function ACProductDetailPage() {
  const params = useParams();
  const productSlug = params.slug || "";
  const product = productData[productSlug];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link href="/categories/ac-engine-cooling">
              <Button>Back to AC & Engine Cooling</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col" data-testid="page-ac-product-detail">
      <SEO 
        title={`${product.name} | AC & Engine Cooling`}
        description={product.subtitle}
        keywords={`${product.name}, Denso, AC parts, engine cooling, automotive`}
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <Link href="/categories/ac-engine-cooling">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-ac">
                <ArrowLeft className="h-4 w-4" />
                Back to AC & Engine Cooling
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-4" data-testid="text-product-title">
              {product.name}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {product.subtitle}
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              <div>
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">How It Works</h2>
                <p className="text-muted-foreground leading-relaxed">
                  {product.howItWorks}
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Features & Benefits</h2>
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {product.featureDetails.map((detail, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="font-bold text-lg mb-2">{detail.title}</h3>
                    <p className="text-muted-foreground text-sm">{detail.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            {product.types && product.types.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-6">Types & Characteristics</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {product.types.map((type, index) => (
                    <Card key={index} className="p-6">
                      <h3 className="font-bold text-lg mb-2 text-primary">{type.name}</h3>
                      <p className="text-muted-foreground">{type.description}</p>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-muted/50 rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Need This Product?</h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Contact us for wholesale pricing on {product.name}. We offer competitive bulk rates for workshops, garages, and trade buyers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="/contact">
                  <Button size="lg">Get Quote</Button>
                </Link>
                <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="outline">Chat on WhatsApp</Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
