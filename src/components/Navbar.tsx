import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, LogOut, ChevronDown, Settings } from "lucide-react";
import { useState } from "react";
import carpMascot from "@/assets/carp-mascot.png";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Tutorials", to: "/tutorials" },
  { label: "Cheat Sheet", to: "/cheat-sheet" },
  { label: "About", to: "/about" },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, logout } = useAuth();

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

          {/* Login / User dropdown */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="gap-1">
                  {user.username}
                  <ChevronDown size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => navigate("/settings")} className="gap-2 cursor-pointer">
                  <Settings size={16} />
                  Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout} className="gap-2 cursor-pointer">
                  <LogOut size={16} />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
          )}
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

          {/* Mobile login / logout */}
          {user ? (
            <>
              <button
                onClick={() => { navigate("/settings"); setMobileOpen(false); }}
                className="flex items-center gap-2 w-full py-3 text-senior-lg font-medium border-b border-border text-foreground"
              >
                <Settings size={18} />
                Settings
              </button>
              <button
                onClick={() => { logout(); setMobileOpen(false); }}
                className="flex items-center gap-2 w-full py-3 text-senior-lg font-medium text-foreground"
              >
                <LogOut size={18} />
                Log out ({user.username})
              </button>
            </>
          ) : (
            <Link
              to="/login"
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-senior-lg font-medium text-foreground"
            >
              Login
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
