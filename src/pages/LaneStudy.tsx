import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MapPin,
  Package,
  Thermometer,
  CheckCircle2,
  FileText,
  ClipboardCheck,
  Shield,
  Snowflake,
  Sun,
  TrendingUp,
} from "lucide-react";

const LaneStudy = () => {
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
                <MapPin className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Lane Study
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Performance test shipping study from point A to B - Verify the
              reliability of your existing packaging methods
            </p>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualification
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Performance test shipping study from point A to B. This study
              allows your company to know the reliability of your existing
              packaging methods.
            </p>
          </div>

          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Method of Study
              </h3>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                <Thermometer className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Temperature Control
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Maintaining temperature achieved by temperature controlled
                    container, cooler or refrigerators
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                <Shield className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2">
                    Validated Shipping Containers
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Package design must ensure safe and compliant transport of
                    products
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose of Study Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Purpose of Study
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Our lane studies are designed to verify and validate your
                shipping processes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Packaging Configuration Verification
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Verify the ability of approved packaging configuration to
                      maintain temperature during shipment of cold chain or
                      ambient products
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Snowflake className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Pre-conditioned Gels Effectiveness
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Verify the effectiveness of pre-conditioned gels to ensure
                      optimal temperature maintenance throughout the shipping
                      process
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive Documentation
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              We provide copies of the following documents as applicable:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Final Summary Report
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive analysis of all findings and recommendations
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Temperature Mapping Data
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Detailed temperature mapping data, graphs,  
                      and more
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Executed Protocols
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      IQ/OQ/PQ/CQ/RQ as required for a validated shipping study
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Test Equipment & Materials
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Complete documentation of all equipment used during
                      testing
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Calibration Certificates
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Pre and post verification data ensuring accuracy and
                      compliance
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Contact Us Today
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Ready to validate your transportation methods and ensure your products
              maintain proper temperature control throughout transit? Get in
              touch with our team to discuss how we can help!
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <ClipboardCheck className="w-5 h-5" />
              Request a Lane Study
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LaneStudy;
