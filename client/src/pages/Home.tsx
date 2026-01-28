import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Brands } from "@/components/Brands";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-home">
      <SEO 
        title="Premium Auto Parts in UAE"
        description="Motor Parts Source L.L.C is your trusted partner for OEM and aftermarket auto parts in UAE. Fast delivery, quality guaranteed, 24/7 support."
        keywords="auto parts UAE, motor parts, OEM parts, aftermarket parts, car parts Sharjah"
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <Categories />
        <Products />
        <Brands />
        <WhyChooseUs />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
