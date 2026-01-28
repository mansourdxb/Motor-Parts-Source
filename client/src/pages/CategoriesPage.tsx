import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Link } from "wouter";
import acCooling from "@assets/denso-ac-category.jpg";
import dieselComponents from "@assets/denso-diesel-cat.jpg";
import engineManagement from "@assets/denso-ems-cat.jpg";
import filtration from "@assets/denso-filtration-cat.png";
import ignition from "@assets/denso-ignition-cat.jpg";
import rotatingElectrics from "@assets/denso-rotating-cat.jpg";
import wiperBlades from "@assets/denso-wiper-cat.jpg";

const categories = [
  {
    id: "1",
    name: "AC & Engine Cooling",
    image: acCooling,
    slug: "ac-engine-cooling",
    description: "A/C compressors, condensers, cooling fans, radiators, evaporators, and thermal components.",
  },
  {
    id: "2",
    name: "Diesel Components",
    image: dieselComponents,
    slug: "diesel-components",
    description: "Common rail injectors, diesel fuel pumps, glow plugs, and diesel system parts.",
  },
  {
    id: "3",
    name: "Engine Management Systems",
    image: engineManagement,
    slug: "engine-management",
    description: "Oxygen sensors, MAF sensors, position sensors, EGR valves, and ECU components.",
  },
  {
    id: "4",
    name: "Filtration",
    image: filtration,
    slug: "filtration",
    description: "Oil filters, air filters, fuel filters, cabin filters, and transmission filters.",
  },
  {
    id: "5",
    name: "Ignition",
    image: ignition,
    slug: "ignition",
    description: "Spark plugs, ignition coils, glow plugs, ignition leads, and ignition modules.",
  },
  {
    id: "6",
    name: "Rotating Electrics",
    image: rotatingElectrics,
    slug: "rotating-electrics",
    description: "Alternators, starter motors, voltage regulators, and electrical components.",
  },
  {
    id: "7",
    name: "Wiper Blades",
    image: wiperBlades,
    slug: "wiper-blades",
    description: "Flat blade wipers, conventional wipers, hybrid wipers, and wiper components.",
  },
];

export default function CategoriesPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-categories">
      <SEO 
        title="Parts Categories"
        description="Browse automotive products and service parts by category. Find AC & Engine Cooling, Diesel Components, Engine Management, Filtration, Ignition, Rotating Electrics, and Wiper Blades."
        keywords="auto parts categories, engine parts, AC parts, diesel components, ignition, filtration, rotating electrics"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-categories-page-title">
              Automotive products and service parts
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Working away unseen for virtually all car manufacturers. 
              Browse our organized categories to find the parts you need.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.slug}`}>
                  <div 
                    className="relative aspect-[16/9] rounded-md overflow-hidden cursor-pointer group"
                    data-testid={`card-category-page-${category.id}`}
                  >
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-4">
                      <h3 className="text-white font-semibold text-lg drop-shadow-md mb-1">
                        {category.name}
                      </h3>
                      <p className="text-white/80 text-sm line-clamp-2">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
