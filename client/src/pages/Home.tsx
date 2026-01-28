import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Categories } from "@/components/Categories";
import { Products } from "@/components/Products";
import { Brands } from "@/components/Brands";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col" data-testid="page-home">
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
