import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ClipboardCheck,
  FileText,
  Shield,
  CheckCircle2,
  Settings,
  Zap,
  DoorOpen,
  Power,
  Package,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  FileCheck,
} from "lucide-react";

const Validation = () => {
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
                <ClipboardCheck className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Qualification & Validation Services
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Expert validation services assisting customers to meet industry
              requirements and guidelines established by government agencies
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualification and Validation Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Our validation services assist our customers to meet industry
              requirements and guidelines established by government agencies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Shield className="w-12 h-12 text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Regulatory Compliance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Meet all industry requirements and government agency guidelines
                with our comprehensive validation services
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Award className="w-12 h-12 text-secondary relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Quality Assurance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ensure the highest standards of quality and accuracy in all
                documentation and validation processes
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <TrendingUp className="w-12 h-12 text-primary relative z-10" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Expert Support
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Our experienced team provides comprehensive support throughout
                your entire validation project
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reports, Protocols and SOPs Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Reports, Protocols and SOPs
                </h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team focuses on the quality and accuracy of all
                documentation provided to you for your project. Avish will
                provide report, protocol and SOP if applicable.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-xl border border-blue-500/20">
                  <FileCheck className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Detailed Reports
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive validation reports with complete data
                      analysis and findings
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-xl border border-purple-500/20">
                  <ClipboardCheck className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Custom Protocols
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Tailored qualification protocols designed for your
                      specific requirements
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-xl border border-orange-500/20">
                  <BookOpen className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Standard Operating Procedures
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Clear and comprehensive SOPs for ongoing compliance and
                      operations if applicable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification Protocol Examples Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Qualification Protocol Examples
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Comprehensive qualification protocols tailored to your equipment
              and operational needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Installation Qualification (IQ)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Verification that equipment is installed correctly according to
                manufacturer specifications and design requirements
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Operational Qualification (OQ)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Confirmation that equipment operates as intended across all
                anticipated operating ranges and conditions
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Performance Qualification (PQ)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Demonstration that equipment consistently performs according to
                specifications under actual operating conditions
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Continuous Qualification (CQ)
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Ongoing verification that equipment maintains its validated
                state throughout its operational lifecycle
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Power className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Power Off / Power Failure Tests
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Testing equipment response and recovery procedures during power
                interruptions and failures
              </p>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-6 rounded-2xl shadow-lg border border-border hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <DoorOpen className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
                  Open Door Tests
                </h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Evaluation of temperature recovery time and impact when doors
                are opened during normal operations
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Package className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Loaded Mappings
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Temperature mapping studies conducted with equipment at full
                    operational capacity to simulate real-world conditions and
                    identify temperature variations
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-secondary/10 rounded-xl">
                  <Package className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Empty Mappings
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Temperature mapping performed with empty equipment to
                    establish baseline performance and identify potential hot or
                    cold spots without product interference
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-6">
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
                        Comprehensive analysis of all validation findings,
                        conclusions, and recommendations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Temperature & Humidity Mapping Data
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Detailed temperature mapping data, humidity mapping
                        data, graphs, and comprehensive analysis
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
                        IQ/OQ/PQ/CQ/RQ as requested for your specific validation
                        requirements
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Test Equipment & Materials
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Calibration certificates, pre and post verification data
                        for all testing equipment
                      </p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Sensor Location Information
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Diagrams, drawings, and images showing precise sensor
                        placement (if required)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Employee Training Records
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Documentation of all personnel training related to
                        equipment operation and validation
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Standard Operating Procedures (SOPs)
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Detailed SOPs for equipment operation, maintenance, and
                        ongoing compliance
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Contact Us Today
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Ready to ensure your equipment meets all regulatory requirements?
            Get in touch with our validation experts to discuss your project
            needs and how we can help you achieve compliance.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <ClipboardCheck className="w-5 h-5" />
            Request Validation Services
          </a>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Validation;
