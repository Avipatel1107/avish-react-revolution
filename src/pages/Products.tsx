import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Package,
  Thermometer,
  Usb,
  CheckCircle,
  Mail,
  Phone,
} from "lucide-react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "LogTag Trix-8",
      description:
        "Multi-use data recorder with temperature monitoring and data logging.",
      image: new URL("../assets/trix-8.jpg", import.meta.url).href,
      features: [
        "Temperature monitoring only",
        "Multi-use recorder",
        "8000 recording capacity",
        "LTI interface compatible",
      ],
    },
    {
      id: 2,
      name: "LogTag Haxo-8",
      description:
        "Multi-use data recorder with temperature and humidity monitoring.",
      image: new URL("../assets/haxo-8.jpg", import.meta.url).href,
      features: [
        "Temperature and Humidity monitoring",
        "Multi-use recorder",
        "8000 recording capacity",
        "LTI interface compatible",
      ],
    },
    {
      id: 3,
      name: "LogTag Usric-8",
      description:
        "Advanced USB temperature recorder with high accuracy for critical temperature monitoring applications.",
      image: new URL("../assets/usric-8.jpg", import.meta.url).href,
      features: [
        "Temperature monitoring only",
        "Multi-use recorder",
        "8000 recording capacity",
        "Can download data without LTI interface ",
      ],
    },
    {
      id: 4,
      name: "LogTag LTI/USB Interface",
      description:
        "Essential USB interface for configuring and downloading data from LogTag temperature recorders.",
      image: new URL("../assets/lti-usb.jpg", import.meta.url).href,
      features: [
        "USB connectivity",
        "No configuration required",
        "Fast data download",
        "Compatible with most LogTag devices",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-secondary" />
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-6 py-24 md:py-32 text-center text-primary-foreground">
          <div className="animate-fade-in">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-white/10 backdrop-blur-lg rounded-2xl">
                <Thermometer className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Temperature Monitoring Solutions
            </h1>
          </div>
        </div>
      </section>

      {/* Products Grid Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Product Range
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Reliable temperature monitoring devices designed for compliance
              and accuracy
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
            {products.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden"
              >
                {/* Product Image */}
                <div className="relative h-64 bg-white overflow-hidden flex items-center justify-center p-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      // Fallback to icon if image doesn't load
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement!.innerHTML = `
                        <div class="w-full h-full flex items-center justify-center">
                          <svg class="w-32 h-32 text-primary/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                          </svg>
                        </div>
                      `;
                    }}
                  />
                </div>

                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-foreground mb-3">
                      Key Features:
                    </h4>
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="flex gap-3">
                  <Button
                    className="flex-1 bg-primary hover:bg-primary/90 text-white"
                    asChild
                  >
                    <Link to="/contact">Request Quote</Link>
                  </Button>
                  {/* Placeholder for future "Buy Now" button */}
                  {/* <Button variant="outline" className="flex-1">
                    Buy Now
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Custom Orders CTA */}
          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 rounded-3xl shadow-xl border-2 border-border">
            <div className="max-w-3xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-primary/10 rounded-2xl">
                  <Package className="w-12 h-12 text-primary" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Need Something Different?
              </h3>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Looking for bulk orders, custom configurations, or products not
                listed here? Our team is ready to help you find the perfect
                temperature monitoring solution for your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-white font-semibold px-8"
                  asChild
                >
                  <Link to="/contact">
                    <Mail className="w-5 h-5 mr-2" />
                    Get a Custom Quote
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-semibold px-8"
                  asChild
                >
                  <a href="tel:214-940-7229">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us: 214-940-7229
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Products;
