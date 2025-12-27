import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">Community Hub</h3>
            <p className="text-primary-foreground/70 leading-relaxed">
              Building connections, creating memories, and fostering a vibrant community together.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              <Link to="/gallery" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Gallery
              </Link>
              <Link to="/events" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Events
              </Link>
              <Link to="/activities" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                Activities
              </Link>
              <Link to="/about" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                About Us
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@communityhub.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Mail className="h-4 w-4" />
                hello@communityhub.com
              </a>
              <a href="tel:+1234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                <Phone className="h-4 w-4" />
                (123) 456-7890
              </a>
              <p className="flex items-center gap-3 text-primary-foreground/70">
                <MapPin className="h-4 w-4" />
                123 Community Lane
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-10 pt-8 text-center text-primary-foreground/50 text-sm">
          <p>&copy; {new Date().getFullYear()} Community Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
