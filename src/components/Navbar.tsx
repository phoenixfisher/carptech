import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import carpMascot from "@/assets/carp-mascot.png";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Tutorials", to: "/tutorials" },
  { label: "Cheat Sheet", to: "/cheat-sheet" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-popover border-b-2 border-border sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-3 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={carpMascot} alt="CARP Tech mascot" className="h-12 w-12" />
          <span className="text-senior-xl font-bold font-serif text-foreground">CARP Tech</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`text-senior-base font-medium transition-colors hover:text-primary ${
                location.pathname === item.to ? "text-primary underline underline-offset-4" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-popover border-t border-border px-4 pb-4">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-senior-lg font-medium border-b border-border ${
                location.pathname === item.to ? "text-primary" : "text-foreground"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
