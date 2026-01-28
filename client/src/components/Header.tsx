import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/MPS_Logo-02_1769586620513.jpg";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2 text-sm">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+971557029285" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" data-testid="link-phone">
              <Phone className="h-3.5 w-3.5" />
              <span>+971 55 702 9285</span>
            </a>
            <a href="mailto:sales@mpsuae.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity" data-testid="link-email">
              <Mail className="h-3.5 w-3.5" />
              <span>sales@mpsuae.com</span>
            </a>
          </div>
          <a 
            href="https://wa.me/971557029285" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-600 text-white px-3 py-1 rounded-md transition-colors"
            data-testid="link-whatsapp"
          >
            <SiWhatsapp className="h-4 w-4" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
          </a>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" data-testid="link-logo">
            <img 
              src={logoImage} 
              alt="Motor Parts Source L.L.C" 
              className="h-10 sm:h-12 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1" data-testid="nav-main">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button 
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="text-foreground"
                  data-testid={`nav-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/contact">
              <Button variant="outline" data-testid="button-get-quote">
                Get Quote
              </Button>
            </Link>
            <Link href="/categories">
              <Button data-testid="button-shop-now">
                Shop Now
              </Button>
            </Link>
          </div>

          <Button 
            variant="ghost" 
            size="icon" 
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t mt-3 flex flex-col gap-1" data-testid="nav-mobile">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <Button 
                  variant={location === link.href ? "secondary" : "ghost"}
                  className="w-full justify-start text-foreground"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`nav-mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Button>
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-3 pt-3 border-t">
              <Link href="/contact">
                <Button variant="outline" className="w-full" data-testid="button-mobile-get-quote" onClick={() => setMobileMenuOpen(false)}>
                  Get Quote
                </Button>
              </Link>
              <Link href="/categories">
                <Button className="w-full" data-testid="button-mobile-shop-now" onClick={() => setMobileMenuOpen(false)}>
                  Shop Now
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
