import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import camshaftImg from "@assets/denso-camshaft-sensor.jpg";
import egrImg from "@assets/denso-egr-valve.jpg";
import egtsImg from "@assets/denso-egts.jpg";
import lambdaImg from "@assets/denso-lambda.jpg";
import mapImg from "@assets/denso-map-sensor.jpg";
import mafImg from "@assets/denso-maf-sensor.jpg";

const emsProducts = [
  {
    id: "1",
    name: "Camshaft and Crankshaft Sensors",
    image: camshaftImg,
    description: "Accurate camshaft and crankshaft position sensors for precise engine timing and performance.",
    slug: "camshaft-crankshaft-sensors",
    count: 420,
  },
  {
    id: "2",
    name: "Exhaust Gas Recirculation Valves",
    image: egrImg,
    description: "EGR valves for emissions reduction and improved fuel efficiency.",
    slug: "egr-valves",
    count: 185,
  },
  {
    id: "3",
    name: "Exhaust Gas Temperature Sensors",
    image: egtsImg,
    description: "EGTS sensors for monitoring exhaust temperatures and protecting catalytic converters.",
    slug: "egts-sensors",
    count: 210,
  },
  {
    id: "4",
    name: "Lambda Sensors",
    image: lambdaImg,
    description: "Oxygen sensors for accurate air-fuel ratio monitoring and emissions control.",
    slug: "lambda-sensors",
    count: 580,
  },
  {
    id: "5",
    name: "MAP Sensors",
    image: mapImg,
    description: "Manifold absolute pressure sensors for optimal engine load detection.",
    slug: "map-sensors",
    count: 165,
  },
  {
    id: "6",
    name: "Mass Air Flow Sensors",
    image: mafImg,
    description: "Precision MAF sensors for optimal engine performance and fuel efficiency.",
    slug: "maf-sensors",
    count: 290,
  },
];

export default function EngineManagementPage() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-engine-management">
      <SEO 
        title="Engine Management Systems | MPS"
        description="Denso engine management sensors and components including lambda sensors, MAF sensors, position sensors, and EGR valves for all vehicle makes."
        keywords="engine management, lambda sensors, MAF sensors, camshaft sensors, crankshaft sensors, Denso sensors, UAE"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-16 lg:py-20">
          <div className="container mx-auto px-4">
            <Link href="/categories">
              <Button variant="outline" className="mb-6 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20" data-testid="button-back-categories">
                <ArrowLeft className="h-4 w-4" />
                Back to Categories
              </Button>
            </Link>
            <h1 className="text-4xl lg:text-5xl font-bold mb-4" data-testid="text-ems-title">
              Engine Management Systems
            </h1>
            <p className="text-lg text-primary-foreground/90 max-w-2xl">
              Complete range of Denso engine management sensors and components. From lambda sensors 
              to EGR valves - precision parts for optimal engine performance.
            </p>
          </div>
        </section>

        <section className="py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl lg:text-3xl font-bold mb-8">Engine Management Systems Products</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {emsProducts.map((product) => (
                <Card 
                  key={product.id}
                  className="group overflow-visible hover-elevate"
                  data-testid={`card-ems-${product.id}`}
                >
                  <div className="aspect-video overflow-hidden rounded-t-md">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">
                        {product.count}+ parts
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {product.description}
                    </p>
                    <Link href={`/categories/engine-management/${product.slug}`}>
                      <Button className="w-full gap-2" data-testid={`button-ems-${product.id}`}>
                        More Information
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              ))}
            </div>

            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">General information</h2>
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="mb-4">
                  To ensure a vehicle performs reliably, it's essential that its engine management system (EMS) is engineered to a high degree of accuracy. To guarantee this superior level of performance, DENSO has been working for many years to advance the design of our EMS products and develop innovative technologies that lead the market in terms of fuel efficiency, lower emissions and high engine output.
                </p>
                <p className="mb-4">
                  Our pioneering EMS technologies include the Exhaust Gas Recirculation (EGR) Valves, plug-in Mass Air Flow meters and adding quantitative measurements to Lambda Sensors, all of which were firsts in the world market designed to improve vehicle efficiency. Integrating an EGR valve with an air intake throttle valve improved the emissions performance of diesel engines in a more compact design.
                </p>
                <p>
                  By combining our many years of experience in the global car market, our precision engineering, advanced design and the highest OE quality, we've developed a pioneering EMS range that is now available to the aftermarket.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
