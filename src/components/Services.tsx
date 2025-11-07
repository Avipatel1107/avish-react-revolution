import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import tempMapping from "@/assets/temp-mapping.jpg";
import laneStudy from "@/assets/lane-study.jpg";

const services = [
  {
    title: "Temperature Mapping",
    image: tempMapping,
    description:
      "Comprehensive temperature mapping studies for warehouses, storage facilities, and transportation to ensure GMP compliance and product integrity.",
    link: "/validation",
  },
  {
    title: "Lane Study",
    image: laneStudy,
    description:
      "Transportation qualification studies for temperature-sensitive pharmaceutical products to validate shipping routes and maintain cold chain integrity.",
    link: "/lane-study",
  },
];

const Services = () => {
  const navigate = useNavigate();

  const handleLearnMore = (link: string) => {
    navigate(link);
    window.scrollTo(0, 0);
  };

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Services Provided
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Expert validation services tailored to meet regulatory requirements
            and ensure product quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 overflow-hidden border-none"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <CardContent className="p-8 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <Button
                  variant="link"
                  className="p-0 h-auto text-primary hover:text-primary/80 group"
                  onClick={() => handleLearnMore(service.link)}
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
