import { Link } from "wouter";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { SiWhatsapp, SiFacebook, SiInstagram, SiLinkedin } from "react-icons/si";
import logoImage from "@assets/MPS_Logo-02_1769586620513.jpg";

export function Footer() {
  return (
    <footer className="bg-foreground text-background" data-testid="section-footer">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div>
            <img 
              src={logoImage} 
              alt="Motor Parts Source L.L.C" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-background/70 text-sm mb-6">
              Your trusted partner for premium motor parts in the UAE. 
              Quality OEM and aftermarket parts for all makes and models.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a 
                href="https://wa.me/971557029285" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/10 p-2.5 rounded-lg transition-colors hover-elevate"
                data-testid="link-social-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 p-2.5 rounded-lg transition-colors hover-elevate"
                data-testid="link-social-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 p-2.5 rounded-lg transition-colors hover-elevate"
                data-testid="link-social-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-background/10 p-2.5 rounded-lg transition-colors hover-elevate"
                data-testid="link-social-linkedin"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-home">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-products">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-categories">
                  Categories
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-about">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Categories</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-engine">
                  Engine Parts
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-brakes">
                  Brake Systems
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-suspension">
                  Suspension
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-electrical">
                  Electrical
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-background transition-colors" data-testid="link-footer-transmission">
                  Transmission
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5 text-accent" />
                <span className="text-background/70 text-sm">
                  Industrial Area, Sharjah<br />
                  United Arab Emirates
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-accent" />
                <a href="tel:+971557029285" className="text-background/70 hover:text-background transition-colors text-sm" data-testid="link-footer-phone">
                  +971 55 702 9285
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-accent" />
                <a href="mailto:sales@mpsuae.com" className="text-background/70 hover:text-background transition-colors text-sm" data-testid="link-footer-email">
                  sales@mpsuae.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-background/70 text-sm">
                  Sat - Thu: 8:00 AM - 6:00 PM
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-background/60">
            <p data-testid="text-copyright">
              © 2024 Motor Parts Source L.L.C. All rights reserved.
            </p>
            <div className="flex gap-6 flex-wrap">
              <a href="#" className="hover:text-background transition-colors" data-testid="link-privacy">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-background transition-colors" data-testid="link-terms">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
