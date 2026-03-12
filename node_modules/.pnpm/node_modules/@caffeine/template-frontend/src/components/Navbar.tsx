import { Button } from "@/components/ui/button";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Scale, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
  { to: "/", label: "Home", ocid: "nav.home.link" },
  {
    to: "/section-simplifier",
    label: "Section Simplifier",
    ocid: "nav.simplifier.link",
  },
  {
    to: "/what-should-i-do",
    label: "What Should I Do",
    ocid: "nav.whatnow.link",
  },
  { to: "/nearby-lawyers", label: "Lawyer Finder", ocid: "nav.lawyer.link" },
];

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-blur border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full gradient-saffron flex items-center justify-center shadow-saffron">
              <Scale className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-lg text-saffron tracking-wide">
                NyayMitra
              </span>
              <span className="text-[10px] text-muted-foreground font-body tracking-widest uppercase">
                Justice Friend
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  className={`px-4 py-2 rounded-md text-sm font-medium font-body transition-all duration-200 ${
                    isActive
                      ? "bg-primary/20 text-saffron"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden pb-4 space-y-1">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <Link
                  key={link.to}
                  to={link.to}
                  data-ocid={link.ocid}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-2.5 rounded-md text-sm font-medium font-body transition-all duration-200 ${
                    isActive
                      ? "bg-primary/20 text-saffron"
                      : "text-foreground/70 hover:text-foreground hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
}
