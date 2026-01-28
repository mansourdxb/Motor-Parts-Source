import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Target, 
  Award, 
  Globe,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import logoImage from "@assets/MPS_Logo-01_1769586620512.png";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "50K+", label: "Parts Available" },
  { value: "5000+", label: "Happy Customers" },
  { value: "24/7", label: "Customer Support" },
];

const values = [
  {
    icon: Award,
    title: "Quality First",
    description: "We only source parts from authorized distributors and trusted manufacturers.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction is our priority. We go above and beyond to meet your needs.",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Expert guidance to help you find the exact part for your vehicle.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Serving customers across UAE and shipping worldwide.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-about">
      <SEO 
        title="About Us"
        description="Learn about Motor Parts Source L.L.C - your trusted auto parts supplier in UAE. Over 10 years of experience, 50K+ parts, serving 5000+ customers with 24/7 support."
        keywords="about motor parts source, UAE auto parts company, car parts Sharjah"
      />
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground py-20 lg:py-28">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6" data-testid="text-about-title">
                About Motor Parts Source
              </h1>
              <p className="text-lg text-primary-foreground/90">
                Established in the UAE, Motor Parts Source L.L.C is your trusted partner for 
                premium automotive parts. We combine industry expertise with exceptional 
                customer service to deliver the best parts shopping experience.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  Your Trusted <span className="gradient-text">Auto Parts Partner</span>
                </h2>
                <p className="text-muted-foreground mb-6">
                  At Motor Parts Source, we understand the importance of having the right 
                  parts for your vehicle. Whether you're a professional mechanic, workshop 
                  owner, or car enthusiast, we're here to provide you with quality parts 
                  at competitive prices.
                </p>
                <p className="text-muted-foreground mb-8">
                  Our extensive network of suppliers allows us to source both OEM and 
                  aftermarket parts for virtually any make and model. We take pride in 
                  our commitment to quality, ensuring every part meets the highest standards.
                </p>
                <ul className="space-y-3">
                  {["Wide range of OEM and aftermarket parts", "Competitive pricing guaranteed", "Expert technical support", "Fast delivery across UAE"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex justify-center">
                <div className="bg-card rounded-2xl p-8 shadow-lg">
                  <img 
                    src={logoImage} 
                    alt="Motor Parts Source" 
                    className="w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-card">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center" data-testid={`stat-${index}`}>
                  <p className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-3">Our Core Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Motor Parts Source.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="p-6 text-center hover-elevate" data-testid={`value-${index}`}>
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4">
                    <value.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Browse our extensive catalog or contact our team for personalized assistance.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-accent border-accent-border gap-2" data-testid="button-browse-catalog">
                Browse Catalog
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white" data-testid="button-contact-team">
                Contact Team
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
