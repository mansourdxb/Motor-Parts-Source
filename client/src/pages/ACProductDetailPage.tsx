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

const sidebarLinks = [
  { name: "A/C Condenser", slug: "condensers" },
  { name: "AC Compressor", slug: "ac-compressors" },
  { name: "AC Compressor Oil", slug: "compressor-oil" },
  { name: "Cabin Blower Fans", slug: "cabin-blower-fans" },
  { name: "Cooling Fans", slug: "cooling-fans" },
  { name: "Cooling Radiators", slug: "cooling-radiators" },
  { name: "Evaporators", slug: "evaporators" },
  { name: "Expansion Valves", slug: "expansion-valves" },
  { name: "Heater Cores", slug: "heater-cores" },
  { name: "Pressure Switches & Sensors", slug: "pressure-switches" },
  { name: "Receiver Driers", slug: "receiver-driers" },
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
  faultFinding?: string;
}> = {
  "condensers": {
    name: "A/C Condenser",
    image: acCondenser,
    subtitle: "The condenser is needed to cool refrigerant and turn it back into a liquid in the A/C system.",
    howItWorksTitle: "How A/C condensers work",
    howItWorks: "Air conditioning operation relies on taking heat out of the passenger compartment by absorbing the heat into a refrigerant, which transports the heat away from the passenger compartment so it can be released to the outside air. The release of the heat to the outside air is done by the condenser, located in the front of the vehicle. By releasing the heat to the cooler outside air, the gaseous refrigerant changes state to a liquid refrigerant. Able to withstand high internal pressures, the condenser passes the liquid refrigerant on to the receiver dryer, or the modulator in the case of a super cool condenser.",
    features: [
      "Compact and lightweight design.",
      "OE-standard quality and reliability.",
      "Manufactured to integrate into any A/C system.",
      "Enables peak performance with minimal maintenance."
    ],
    featureDetails: [
      { title: "Compact design", description: "Designed to be lightweight and have compact dimensions, DENSO condensers nonetheless deliver high-power cooling performance." },
      { title: "OE quality", description: "Manufactured and developed with our many years of A/C system experience, all our condensers are rigorously tested to high performance standards." },
      { title: "Easy to install", description: "DENSO condensers are built specifically for major car models to ensure you can install them quickly and easily." }
    ],
    typesTitle: "A/C Condenser types",
    types: [
      { name: "Multi-flow", description: "Available in U-shaped and S-shaped models, these types of condenser let the refrigerant flow in the tubes at both ends of the tank simultaneously. Passes are optimized by the presence of partition plates in the tanks." },
      { name: "Super cool", description: "Otherwise known as a subcool type, these condensers are multi-flow with an integrated gas-liquid separator or modulator. Divided into a condensing and super-cooling section, these types give improved cooling performance." }
    ],
    characteristics: "Designed and manufactured to integrate seamlessly into a vehicle's air conditioning system, DENSO condensers are compact, lightweight and highly reliable.",
    faultFinding: "Motorists should be urged to get their A/C system checked by a professional whenever they notice a difference in cooling performance. Regular maintenance of the A/C system, including a visual inspection of the condenser for wear and tear, will reduce the risks of costly repairs and ensure trouble-free operation."
  },
  "ac-compressors": {
    name: "AC Compressor",
    image: acCompressor,
    subtitle: "Our premium quality AC Compressor are compact, lightweight and powerful.",
    howItWorksTitle: "How they work",
    howItWorks: "Air conditioning systems create a comfortable temperature and humidity inside the passenger compartment, so the driver and passengers feel more relaxed and cool, and the driver is then able to concentrate on driving, which leads to increased road safety.\n\nAir conditioning operation relies on taking heat out of the passenger compartment by absorbing the heat into a refrigerant, which transports the heat away from the passenger compartment so it can be released to the outside air.\n\nThe A/C compressor is the key element that transports this heat from the passenger compartment (evaporator) to the outside air (condenser).\n\nThe global market for original equipment A/C Compressors, DENSO is the world leader in this market. DENSO parts are selected by top vehicle manufacturers in countries such as Japan, Europe and US.",
    features: [
      "High-quality compact and lightweight design.",
      "Built for specific car and engine specifications.",
      "Manufactured to the highest design standards with a low failure rate.",
      "Extensive testing ensures reliable performance."
    ],
    featureDetails: [
      { title: "Compact design", description: "Our many years of experience in engineering and manufacturing A/C components has led us to develop a compact and lightweight design that delivers high standards of cooling performance." },
      { title: "Easy to install", description: "100% fit: Perfect match to vehicle specification. Built to meet specific car and engine applications, each of our compressors is accurately manufactured to guarantee trouble-free installation." },
      { title: "High reliability", description: "We have very high DENSO design standards and perform rigorous testing to ensure our thermal products are of the highest quality with an extremely low failure rate." }
    ],
    typesTitle: "AC Compressor types",
    types: [
      { name: "Reciprocating (piston) type", description: "Dual operating swash plate (fixed displacement) and single swash plate types (variable displacement) are available within our A/C compressor range." },
      { name: "Rotary type", description: "Includes vane-type A/C compressors (identified in our range with codes SV for Sliding Vane and TV for Through Vane) and scroll types (look for SC codes, and electrical scroll for hybrid vehicles under ES)." }
    ],
    characteristics: "By investing more than nine percent of net sales in research and development, we put our A/C components through a continuous innovation cycle to make them as high quality and efficient as possible.",
    faultFinding: "To ensure that the A/C compressor performs efficiently journey after journey, it's essential that it is installed correctly, and faults are fixed quickly."
  },
  "compressor-oil": {
    name: "AC Compressor Oil",
    image: compressorOil,
    subtitle: "Keeping the A/C compressor lubricated with high-quality oil is essential to ensure it runs smoothly and reliably.",
    howItWorksTitle: "How A/C compressor oils work",
    howItWorks: "The A/C compressor is a key component of the air conditioning system. It transports the refrigerant through the A/C system by compressing gaseous refrigerant. DENSO compressor oil keeps the A/C compressor lubricated, ensuring it itself stays cool and friction-free so it can continue to perform under high-pressure and high-temperature conditions. The oil also ensures that the rubber seals in the refrigerant lines and connections are protected, preventing the likelihood of leaking or damage. To fulfil this function, compressor oil needs to have superior physical properties, such as temperature and pressure resistance.\n\nIt is also important that the correct type of compressor oil is used on the component. Garages should only use oil that has been approved by the car or compressor manufacturer and avoid mixing different oil types and universal oils to ensure high performance and prevent part damage.",
    features: [
      "Uniquely formulated for best performance.",
      "High-quality base oil and additives used.",
      "Double end-capped for excellent molecular stability.",
      "Best properties and chemically inactive.",
      "Thermally stable and a high viscosity Index."
    ],
    featureDetails: [
      { title: "High performance", description: "Developed by a global specialist, our A/C compressor oils have superior refrigerant miscibility and lubricity properties. Their material qualities include thermal stability, moisture absorption and high viscosity index." },
      { title: "Unique formulation", description: "Our PAG base oil is uniquely formulated to provide high performance. A high-quality alcohol (R-OH) combined with a specific chain structure of ethylene oxide (EO) and propylene oxide (PO) components makes our ND-oils some of the best on the market." },
      { title: "Reliable and stable", description: "Most PAG oils are single end-capped. Our ND-oil 8 and ND-oil 12 are double end-capped, meaning they are more chemically stable, non-reactive, and provide reliable performance." }
    ],
    typesTitle: "AC Compressor Oil types",
    types: [
      { name: "ND-oil 8", description: "Long-lasting, PAG 46-type double end-capped oil formulation for R134a-type refrigerant compressors." },
      { name: "ND-oil 12", description: "In order to provide the most advanced service on the market, our new compressor part numbers are pre-filled with ND-oil 12, which has extra additives specially for the R1234yf refrigerant, but can also be used with vehicles using R134a type refrigerant." },
      { name: "ND-oil 11", description: "Produced by another global specialist, ENEOS Corporation. ND-oil 11 is also produced to the strict requirements of DENSO Thermal Systems. ND-oil 11 is a POE oil, specific developed for use in DENSO electric driven scroll compressors, which are used in hybrid and electric vehicles. This oil has high insulation properties, as the electric motor of the compressor is cooled by the refrigerant and oil mix." }
    ],
    characteristics: "The unique formulation of DENSO's base oil means they deliver the exact physical properties our AC compressor needs to keep running smoothly and efficiently."
  },
  "cabin-blower-fans": {
    name: "Cabin Blower Fans",
    image: blowerFan,
    subtitle: "Cabin blower fans perform a key function in keeping car cabins temperate and comfortable.",
    howItWorksTitle: "How cabin blower fans work",
    howItWorks: "After (fresh) air has been cooled or heated, it needs to be delivered into the car cabin on demand. Cabin blower fans are the component that performs this function. With an impeller and electrical motor, they generate a flow of air that passes through the evaporator and/or heater core to raise or lower the cabin temperature.\n\nThe flow of air into the cabin is controlled either manually by the driver or passenger(s), or automatically when the vehicle is equipped with climate control. All DENSO cabin blower fans are manufactured to the highest OE quality standards, with a comprehensive range ensuring maximum coverage of vehicles and applications.",
    features: [
      "Ensures a temperate cabin.",
      "Delivers air into the cabin efficiently.",
      "Suitable for a range of applications.",
      "Manufactured to OE quality standards."
    ],
    featureDetails: [
      { title: "Precision engineered", description: "We've developed and manufactured our cabin blower fans using our many years of expertise and knowledge to ensure they maintain a temperate, comfortable vehicle cabin." },
      { title: "Efficient operation", description: "DENSO cabin blower fans ensure cool or warm air is delivered efficiently into the cabin according the driver's or passengers' demands." },
      { title: "Reliable performance", description: "Each of our HVAC components is put through a rigorous testing regime to ensure it can withstand the high demands of regular operation." }
    ],
    typesTitle: "Cabin Blower Fans types",
    types: [
      { name: "Brush motor", description: "In a brush motor, the coil (rotor) rotates when current flows to the coil via the brushes and collector." },
      { name: "Brushless motor", description: "A brushless motor detects the position of the magnet rotor with a hall element, switching the current of the fixed coil in the blower motor with a controller to make the magnet rotor rotate." }
    ],
    characteristics: "Each of our HVAC components, including cabin blower fans, are manufactured and rigorously tested to the highest OE standards."
  },
  "cooling-fans": {
    name: "Cooling Fans",
    image: coolingFan,
    subtitle: "A cooling fan is an essential part in a car cooling system, helping takes away heat when a vehicle is stationary.",
    howItWorksTitle: "How cooling fans work",
    howItWorks: "To avoid overheating of the engine when it is stationary or when the engine gets extremely hot, the cooling fans keeps the engine within a safe temperature range by forcing air through the radiator.\n\nDENSO's cooling fans can have solenoids fitted with sensors to ensure they only operate when needed in either low- or high-speed rotation, supporting reliable and efficient operation.",
    features: [
      "Developed for specific applications.",
      "Manufactured to OE quality standards.",
      "Rigorously tested and precision-engineered.",
      "Designed for maximum efficiency."
    ],
    featureDetails: [
      { title: "OE quality", description: "Our cooling fans are manufactured and tested to meet rigorous OE quality standards, powering reliable performance journey after journey." },
      { title: "Precision engineered", description: "Co-developed with air conditioning experts for ability to cope with extreme environmental conditions." },
      { title: "Range of applications", description: "All our cooling fan components are developed to match the specifications of particular cars or engine types to guarantee a first-time fit." }
    ],
    typesTitle: "Cooling Fans types",
    types: [],
    characteristics: "Our cooling fans are manufactured to OE quality standards and rigorously tested to ensure optimum performance journey after journey."
  },
  "cooling-radiators": {
    name: "Cooling Radiators",
    image: radiator,
    subtitle: "To keep the engine cooling systems in optimum condition, radiators need to work efficiently.",
    howItWorksTitle: "How radiators work",
    howItWorks: "To keep the engine running efficiently, it needs to be at an optimum temperature. The cooling radiator plays a key part in the engine cooling system, Engine heat is absorbed by the coolant, circulating in the cooling system. The radiator releases this heat to the atmosphere, by using the air flow, while the vehicle is moving. When a vehicle is stationary, the (electric) cooling fan(s) support heat transfer by pulling or pushing air through the radiator. To take advantage of the air flow as the vehicle moves, the radiator is installed at the front of the vehicle. The radiator needs to have the right cooling capacity as the heat exchange (air flow) can be affected by other heat exchangers, such as the condenser, oil cooler or intercooler.\n\nTo perform this function effectively, the radiator needs to be powerful and well-designed. DENSO has worked with engine cooling experts to ensure our components can run effectively even in the most challenging environmental conditions.",
    features: [
      "Reliable, consistent performance.",
      "Ensures optimum cooling systems efficiency.",
      "Designed to remove heat quickly.",
      "Long-lasting, compact component.",
      "Designed to perform optimally within the vehicle's engine cooling cycle."
    ],
    featureDetails: [
      { title: "OE quality", description: "Our radiators have been engineered to meet OE specifications and requirements, ensuring optimum cooling efficiency and durability, resulting in excellent performance under all (extreme) weather conditions." },
      { title: "Expert design", description: "Developed alongside air conditioning experts, our radiators use braze welding and a superior fin wave design to ensure optimum heat transfer." },
      { title: "Reliable and durable", description: "Each of our DENSO components, including our radiators, undergoes rigorous testing to ensure long-lasting and efficient performance." }
    ],
    typesTitle: "Cooling Radiators types",
    types: [
      { name: "Down flow type", description: "Coolant flow is from top to bottom. Down flow radiators are usually taller and require more space." },
      { name: "Cross flow type", description: "Coolant flow is from right to left in this example. Cross flow radiators are lower, with the same cooling capacity as down flow radiators." }
    ],
    characteristics: "Our cooling radiators have been designed to deliver optimum performance within a smaller, more efficient component design.",
    faultFinding: "Improper radiator operation can result in a car's engine overheating. Should this occur, the driver should immediately stop the vehicle to prevent costly engine damage. Call road assistance and have the vehicle checked and if needed, recovered to a workshop for repair."
  },
  "evaporators": {
    name: "Evaporators",
    image: evaporator,
    subtitle: "To keep refrigerant moving and performing its function in A/C systems, evaporators need to perform effectively and reliably.",
    howItWorksTitle: "How evaporators work",
    howItWorks: "The evaporator performs the opposite function to a condenser within the A/C system. The evaporator absorbs the heat from the outside, warm air, while the condenser dissipates this heat to the outside air. To cool down the (outside) warm air before it moves into the car's cabin, the air is 'pushed' through the cold evaporator fins. Inside the evaporator flows low-pressure, low-temperature liquid refrigerant (mist), which changes state to gaseous refrigerant by absorbing this heat from the warm outside air.\n\nThe vaporized refrigerant is then sucked into the compressor, compressed further and transported to the condenser, where it changes state to liquid by dissipating heat to the outside air. The liquid refrigerant then travels to the expansion valve and back to the evaporator. This process is called the refrigerant cycle.",
    features: [
      "High corrosion resistance.",
      "Compact, efficient design.",
      "Long life expectancy.",
      "Suitable for a range of applications."
    ],
    featureDetails: [
      { title: "Reliable performance", description: "Using our years of A/C manufacturing and design experience, we've developed a compact evaporator design that is efficient and reliable." },
      { title: "Durable design", description: "Each of our evaporators is specially coated to prevent corrosion and the build-up of harmful bacteria and bad smells within the HVAC system." },
      { title: "Range of applications", description: "We work with most of the world's biggest car makers and have developed evaporators for a wide range of applications." }
    ],
    typesTitle: "Evaporators types",
    types: [
      { name: "Multi-tank super-slim structure (MS Type)", description: "The MS-type evaporator was the first aluminum evaporator, developed as R134a-type refrigerant became the industry standard. By inserting an inner fin between two plates, an intricate flow path is created to provide superior heat transfer performance in a more compact design." },
      { name: "Revolutionary super-slim (RS Type)", description: "Today, the RS-type evaporator is becoming more and more common. By using a combination of micropores and short fins within the tubing, a much thinner body is created with no drop in thermal efficiency and is therefore much more compact and lightweight due to streamlined core component materials." }
    ],
    characteristics: "To ensure the heat exchange process always functions reliably, DENSO evaporators are designed and manufactured to the highest quality to provide long-lasting performance.",
    faultFinding: "Motorists should get their A/C system checked by a professional whenever they notice a difference in cooling performance. Regular maintenance of the A/C system will reduce the risks of costly repairs and ensure trouble-free operation."
  },
  "expansion-valves": {
    name: "Expansion Valves",
    image: expansionValve,
    subtitle: "Expansion valves supply precise amounts refrigerant, ensuring it reaches optimum temperature and pressure.",
    howItWorksTitle: "How expansion valves work",
    howItWorks: "To cool the air within an A/C system, the refrigerant needs to reach optimum temperature and pressure. To help it reach this state, expansion valves inject the right amount of liquid refrigerant (mist) into the evaporator. This control over injection helps the evaporator lower the pressure and temperature of the refrigerant efficiently.\n\nExpansion valves also help maintain conditions within the A/C system. They do this by adjusting the quantity of refrigerant injected according to the temperature of the superheated gas at the evaporator outlet. This ensures refrigerant can be converted from a liquid (mist) into a gas efficiently.",
    features: [
      "Precision engineered and built.",
      "Efficient and consistent operation.",
      "Reduces A/C outlet condensation.",
      "Reliable performance time after time."
    ],
    featureDetails: [
      { title: "Precision engineered", description: "We've developed and manufactured our expansion valves using our extensive knowhow and practical insight to ensure they offer high performance journey after journey." },
      { title: "Efficient operation", description: "Working as part of the whole A/C system, DENSO expansion valves help the evaporator perform more efficiently." },
      { title: "Reliable performance", description: "Each component in our A/C system is extensively tested to ensure it can withstand the varying temperatures and pressures of repeated operation." }
    ],
    typesTitle: "Expansion Valves types",
    types: [
      { name: "Box type", description: "Today, the box-type expansion valve is the most commonly used. As the gaseous refrigerant leaves the evaporator and moves through the box-type expansion valve to the compressor, it can internally detect refrigerant temperature to optimize cooling performance." }
    ],
    characteristics: "Our long-standing experience in heat exchange and precision engineering has informed the design and manufacture of our expansion valves."
  },
  "heater-cores": {
    name: "Heater cores",
    image: heaterCore,
    subtitle: "To keep drivers and passengers warm, heater cores need to perform efficiently and reliably.",
    howItWorksTitle: "How heater cores work",
    howItWorks: "Heater cores are part of the cooling system of the vehicle's engine. The warm engine coolant flows through the heater core and exchange heat with the air in the vehicle interior to warm up the interior in cool conditions. The interior air is pushed through the heater core by the blower motor. After the air is warmed up it is distributed to the different air outlets, like feet, face or defrost outlets. The air distribution and blower fan speed is either controlled by the driver or passenger or automatically when equipped with a climate control system.\n\nDENSO heater cores are designed alongside experts and manufactured to OE quality standards to ensure optimum HVAC performance journey after journey.",
    features: [
      "Provide optimum heat transfer.",
      "Long-lasting, efficient performance.",
      "Expert design and manufacture.",
      "Built to OE quality standards."
    ],
    featureDetails: [
      { title: "OE quality", description: "Our heater cores have been engineered to meet OE specifications and requirements, ensuring optimum HVAC efficiency for longer." },
      { title: "Expert design", description: "Developed alongside air conditioning experts, the design and manufacture of our heater cores mean they can cope with extreme environmental conditions." },
      { title: "Reliable and durable", description: "Each of our HVAC components, including our heater cores, undergoes rigorous testing to ensure long-lasting and efficient performance." }
    ],
    typesTitle: "Heater cores types",
    types: [
      { name: "SFA type", description: "Single Flow Advance" },
      { name: "UFA type", description: "U Flow Advance" }
    ],
    characteristics: "All of our heater cores are manufactured and tested to OE quality standards to ensure you get optimum HVAC performance for longer."
  },
  "pressure-switches": {
    name: "Pressure switches & sensors",
    image: pressureSwitch,
    subtitle: "Pressure switches ensure A/C components are not damaged when put under high or low pressure.",
    howItWorksTitle: "How pressure switches and sensors work",
    howItWorks: "Pressure switches and sensors are used to detect the pressures inside the A/C system and output a signal to protect the A/C system against under- and over-pressure situations. A pressure switch outputs an on/off signal, while a pressure sensor usually outputs a voltage change. Pressure sensor outputs like PWM or LIN are also possible. DENSO A/C components are rigorously tested and manufactured to ensure they can withstand these changes in pressures and temperatures.",
    features: [
      "Ensure reliable A/C operation.",
      "Effectively protect other components.",
      "Reliable and durable performance.",
      "Available for a range of A/C systems."
    ],
    featureDetails: [
      { title: "Precision engineered", description: "We've developed and manufactured our pressure switches and sensors using our many years of expertise and knowledge to ensure they protect the rest of the A/C system effectively." },
      { title: "Efficient operation", description: "Working as part of the whole A/C system, DENSO pressure switches and sensors keep components safe without restricting operational efficiency." },
      { title: "Reliable performance", description: "Each component in our A/C system is extensively tested to ensure it can withstand the high temperatures and pressures of repeated operation." }
    ],
    typesTitle: "Pressure switches & sensors types",
    types: [
      { name: "Pressure switch", description: "Pressure switches can be classified into 'dual switches', which detect both abnormally high pressure and abnormally low pressure in one switch, and 'trinary switches', which combine a dual switch with a pressure switch for the electric fans." },
      { name: "Pressure sensor", description: "The pressure sensor detects refrigerant pressure (high-pressure side) in the refrigeration cycle, and either outputs a voltage change, a PWM signal or a LIN signal. The pressure sensor is located between the condenser and the expansion valve." }
    ],
    characteristics: "DENSO pressure switches and sensors are engineered to OE quality standards to ensure they can protect A/C components efficiently."
  },
  "receiver-driers": {
    name: "Receiver driers",
    image: receiverDrier,
    subtitle: "Receiver driers ensure only liquid refrigerant moves into the evaporator, ensuring the A/C system operates efficiently.",
    howItWorksTitle: "How receiver driers work",
    howItWorks: "To ensure an A/C system cools air efficiently, the right amount of refrigerant needs to be put under the right conditions, before it is delivered to the evaporator. The receiver drier plays a key part in this by storing the liquid refrigerant safely until the evaporator needs it. It does this by separating the liquid and gaseous refrigerant to make sure only liquid enters the evaporator, to guarantee maximum cooling performance.\n\nTo ensure optimal efficiency, DENSO receiver driers also filter and dry the refrigerant to make sure it is in the ideal condition.",
    features: [
      "Ensures efficient A/C operation.",
      "Filters contaminants and absorbs moisture.",
      "Maintains optimum conditions.",
      "Engineered for high reliability."
    ],
    featureDetails: [
      { title: "Precision engineered", description: "We've developed and manufactured our receiver driers using our many years of expertise and knowledge to ensure they help the rest of the A/C system perform efficiently." },
      { title: "Efficient operation", description: "DENSO receiver driers ensure refrigerant is in an optimum condition to be put under high temperature and pressure." },
      { title: "Reliable performance", description: "Each of our A/C components is put under rigorous testing to ensure it can withstand the high pressures and temperatures of regular operation." }
    ],
    typesTitle: "Receiver driers types",
    types: [
      { name: "Receiver drier", description: "The receiver drier is located between the condenser and evaporator (HP side) and separates gas from liquid to ensure only liquid refrigerant is supplied to the evaporator." },
      { name: "Accumulator", description: "The accumulator is located between the evaporator and compressor (LP side) and separates liquid from gas to ensure only gaseous refrigerant is supplied to the compressor." }
    ],
    characteristics: "To ensure that the vehicle cabin is always comfortable and temperate, receiver driers need to work efficiently as part of the whole A/C system.",
    faultFinding: "When any motorist notices a difference in cooling performance, they should have their A/C system checked by a professional. Regular maintenance of the A/C system will reduce the risk of costly repairs and ensure trouble-free operation."
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
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <Link href="/categories/ac-engine-cooling">
              <Button variant="outline" className="mb-4 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-ac">
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
            </Link>
            <h1 className="text-3xl lg:text-4xl font-bold mb-2" data-testid="text-product-title">
              {product.name}
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-3xl">
              {product.subtitle}
            </p>
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              <div className="flex-1">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-primary">{product.howItWorksTitle}</h2>
                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      {product.howItWorks.split('\n\n').map((paragraph, idx) => (
                        <p key={idx} className="text-muted-foreground leading-relaxed mb-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                    <div>
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Features and benefits</h2>
                  <div className="grid md:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary flex items-center justify-center mt-0.5">
                          <Check className="w-3 h-3 text-primary-foreground" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-3 gap-6">
                    {product.featureDetails.map((detail, index) => (
                      <div key={index}>
                        <h3 className="font-bold text-lg mb-2">{detail.title}</h3>
                        <p className="text-muted-foreground text-sm">{detail.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Types and characteristics</h2>
                  <p className="text-muted-foreground mb-6">
                    To get the best performance from an A/C system, the right component needs to be installed. DENSO offers several different types within its aftermarket range, maximizing car parc coverage.
                  </p>
                  
                  {product.types.length > 0 && (
                    <>
                      <h3 className="text-xl font-semibold mb-4">{product.typesTitle}</h3>
                      <div className="space-y-6 mb-8">
                        {product.types.map((type, index) => (
                          <div key={index} className="border-l-4 border-primary pl-4">
                            <h4 className="font-bold text-lg text-primary mb-2">{type.name}</h4>
                            <p className="text-muted-foreground">{type.description}</p>
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Characteristics</h3>
                    <p className="text-muted-foreground">{product.characteristics}</p>
                  </div>
                </div>

                {product.faultFinding && (
                  <div className="mb-10">
                    <h2 className="text-2xl font-bold mb-4 text-primary">Fault finding</h2>
                    <p className="text-muted-foreground">{product.faultFinding}</p>
                  </div>
                )}

                <Card className="p-6 bg-muted/50">
                  <h2 className="text-xl font-bold mb-3">Need This Product?</h2>
                  <p className="text-muted-foreground mb-4">
                    Contact us for wholesale pricing on {product.name}. We offer competitive bulk rates for workshops, garages, and trade buyers.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact">
                      <Button>Get Quote</Button>
                    </Link>
                    <a href="https://wa.me/971557029285" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline">Chat on WhatsApp</Button>
                    </a>
                  </div>
                </Card>
              </div>

              <aside className="lg:w-64 shrink-0">
                <Card className="p-4 sticky top-24">
                  <h3 className="font-bold text-sm mb-3 text-muted-foreground uppercase tracking-wide">Browse</h3>
                  <Link href="/categories/ac-engine-cooling">
                    <div className="font-semibold text-primary mb-3 hover:underline cursor-pointer">
                      AC & Engine Cooling
                    </div>
                  </Link>
                  <nav className="space-y-1">
                    {sidebarLinks.map((link) => (
                      <Link key={link.slug} href={`/categories/ac-engine-cooling/${link.slug}`}>
                        <div 
                          className={`block py-1.5 px-2 text-sm rounded transition-colors cursor-pointer ${
                            productSlug === link.slug 
                              ? 'bg-primary text-primary-foreground font-medium' 
                              : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                          }`}
                        >
                          {link.name}
                        </div>
                      </Link>
                    ))}
                  </nav>
                </Card>
              </aside>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
