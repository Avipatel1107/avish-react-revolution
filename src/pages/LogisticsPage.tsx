import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Truck,
  Thermometer,
  Shield,
  ClipboardCheck,
  Package,
  MapPin,
  CheckCircle2,
  AlertTriangle,
  FileText,
  Calendar,
  Snowflake,
  Sun,
} from "lucide-react";

const LogisticsPage = () => {
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
                <Truck className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Logistics Validation 
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Ensuring safe and compliant transportation of
              temperature-sensitive products through comprehensive equipment
              validation and temperature mapping
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Performance Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Equipment Performance & Capabilities
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Understanding your equipment's performance capabilities and
              potential errors is crucial for safe product distribution in
              accordance with standards and regulations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <AlertTriangle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Know Your Equipment
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Make sure to know the performance capabilities and errors of
                    your equipment, allowing you to properly distribute your
                    products safely and in accordance with standards and
                    regulations.
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Performance capability assessment</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Error identification and mitigation</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Compliance with regulatory standards</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Safe product distribution protocols</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Package className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Equipment We Validate
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our services target all equipment used to transport and
                    store temperature-sensitive goods throughout your supply
                    chain including the following and many more.
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Truck className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Refrigerated vans and trucks</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Truck className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Temperature-controlled trailers</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Package className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Cold storage facilities</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Package className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Pre-transfer storage spaces</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Package className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Walk-in Coolers and Fridges</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Package className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Lane Study Shipments</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Logistics Validation Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive validation services designed to meet your needs
                with detailed protocols, reports, and documentation
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: MapPin,
                  title: "Lane Study Validation",
                  description:
                    "Comprehensive analysis of transportation routes to ensure temperature-sensitive products maintain required conditions throughout transit. We validate shipping lanes under real-world conditions.",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "text-blue-600",
                },
                {
                  icon: ClipboardCheck,
                  title: "Equipment Qualification",
                  description:
                    "Thorough qualification of all temperature-controlled equipment including installation qualification (IQ), operational qualification (OQ), and performance qualification (PQ).",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Thermometer,
                  title: "Temperature Mapping (All Seasons)",
                  description:
                    "Detailed temperature mapping studies conducted across all seasons to identify hot and cold spots, ensuring consistent temperature control year-round in your transport and storage equipment.",
                  gradient: "from-rose-500/10 to-orange-500/10",
                  iconColor: "text-rose-600",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${service.gradient} backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <service.icon
                      className={`w-12 h-12 ${service.iconColor} relative z-10`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Seasonal Temperature Mapping */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                All-Season Temperature Mapping
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Temperature variations across seasons can significantly impact the
              performance of your cold chain equipment. Our comprehensive
              seasonal mapping ensures your equipment maintains proper
              temperature control throughout the year.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                <Snowflake className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Winter Conditions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Validation during cold weather to ensure heating systems
                    maintain minimum temperatures and prevent freezing of
                    sensitive products.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                <Sun className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Summer Conditions
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Testing during hot weather to verify cooling systems can
                    maintain required temperatures under maximum ambient heat
                    stress.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation & Compliance */}
      <section className="bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Comprehensive Documentation
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  All of our services are designed to meet your needs and
                  include detailed protocols, reports, and documentation which
                  allow you to make sure your temperature-sensitive products are
                  handled safely.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Detailed Validation Protocols
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Step-by-step procedures tailored to your specific
                        equipment and operational requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Comprehensive Reports
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Detailed findings with data analysis, temperature
                        graphs, and compliance assessments
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Regulatory Documentation
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        All documentation prepared to meet FDA, Health Canada,
                        and other regulatory requirements
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 p-10 rounded-3xl border border-primary/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Shield className="w-16 h-16 text-primary mb-6 relative z-10" />
                <h3 className="text-2xl font-bold text-foreground mb-4 relative z-10">
                  Regulatory Compliance
                </h3>
                <p className="text-muted-foreground leading-relaxed relative z-10 mb-6">
                  Our validation services ensure compliance with all relevant
                  standards and regulations, including:
                </p>
                <ul className="space-y-3 relative z-10">
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>FDA 21 CFR Part 11</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Health Canada Guidelines</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>WHO Good Distribution Practices</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>ICH Guidelines Q1A-Q1F</span>
                  </li>
                  <li className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>
                      USP {"797"} and {"800"}
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Validation Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Protecting product integrity and patient safety through expert
              validation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Risk Mitigation",
                description:
                  "Identify and address potential temperature excursions before they impact product quality",
              },
              {
                icon: CheckCircle2,
                title: "Regulatory Confidence",
                description:
                  "Meet all regulatory requirements with comprehensive documentation and proven methodologies",
              },
              {
                icon: Truck,
                title: "Operational Excellence",
                description:
                  "Optimize your cold chain operations with data-driven insights and recommendations",
              },
              {
                icon: FileText,
                title: "Audit Ready",
                description:
                  "Maintain audit-ready documentation that demonstrates compliance and due diligence",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="bg-card/95 backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl inline-block group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-primary via-primary to-secondary p-12 rounded-3xl shadow-2xl text-center text-primary-foreground relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-20 -left-20 w-80 h-80 bg-white rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-white rounded-full blur-3xl" />
            </div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Validate Your Facilities and Equipment?
              </h2>
              <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your validation needs and ensure
                your temperature-sensitive products are transported safely and
                in compliance with all regulations.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-primary px-8 py-4 rounded-xl font-semibold hover:bg-primary-foreground/90 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LogisticsPage;
