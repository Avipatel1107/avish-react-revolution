import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const services = [
    { label: "Lane Study", value: "lane-study", path: "/lane-study" },
    { label: "Validation", value: "validation", path: "/validation" },
  ];

  const about = [
    { label: "About Us", value: "about-us", path: "/about-us" },
    { label: "Logistics", value: "logistics", path: "/logistics" },
    { label: "Animal Health", value: "animal-health", path: "/animal-health" },
    {
      label: "Pharmaceuticals",
      value: "pharmaceuticals",
      path: "/pharmaceuticals",
    },
  ];

  const handleServiceChange = (selectedOption: string) => {
    setSelectedService(selectedOption);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background backdrop-blur-md border-b border-border will-change-transform shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo (now clickable) */}
          <a href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Avish Pharma Validating Services Inc.
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-3 font-medium text-lg tracking-wide">
            {/* About Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="!px-3 !py-2 flex items-center hover:text-primary transition"
                >
                  <span>About</span>
                  <ChevronDown size={14} className="opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {about.map((item) => (
                  <DropdownMenuItem key={item.value} asChild>
                    <Link to={item.path} className="cursor-pointer">
                      {item.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Services Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="!px-3 !py-2 flex items-center hover:text-primary transition"
                >
                  <span>Services</span>
                  <ChevronDown size={14} className="opacity-70" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {services.map((service) => (
                  <DropdownMenuItem key={service.value} asChild>
                    <Link to={service.path} className="cursor-pointer">
                      {service.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Link to="/products">
              <Button
                variant="ghost"
                className="!px-3 !py-2 hover:text-primary transition"
              >
                Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button className="!px-3 !py-2">Contact Us</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3 font-medium tracking-wide">
            {/* Mobile About Dropdown */}
            <div className="pl-2">
              <button
                className="flex items-center justify-between w-full text-left hover:text-primary transition"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
              >
                About
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileAboutOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {mobileAboutOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {about.map((item) => (
                    <Link
                      key={item.value}
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left text-sm hover:text-primary transition"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Services Dropdown */}
            <div className="pl-2">
              <button
                className="flex items-center justify-between w-full text-left hover:text-primary transition"
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              >
                Services
                <ChevronDown
                  size={16}
                  className={`transition-transform ${
                    mobileServicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {mobileServicesOpen && (
                <div className="ml-4 mt-2 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.value}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className="block w-full text-left text-sm hover:text-primary transition"
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/products"
              className="block w-full text-left pl-2 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Products
            </Link>

            <Link
              to="/contact"
              className="block w-full text-left pl-2 hover:text-primary transition"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
