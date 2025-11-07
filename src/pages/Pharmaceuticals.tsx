import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Thermometer,
  Shield,
  ClipboardCheck,
  Package,
  CheckCircle2,
  FileText,
  AlertCircle,
  Activity,
  Snowflake,
  TrendingUp,
  Users,
  Award,
} from "lucide-react";

const Pharmaceuticals = () => {
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
                <Snowflake className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Cold Chain Solutions
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Maintaining the integrity of temperature-sensitive pharmaceutical
              products through comprehensive cold chain management and quality
              assurance services
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Pharmaceutical Cold Chain Excellence
              </h2>
            </div>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
              <p>
                Pharmaceutical cold chain is a major industry we serve. Cold
                chain helps in many industries, one of the biggest being the
                healthcare industry, by maintaining the flow of
                temperature-sensitive drug supplies and products.
              </p>
              <p>
                When manufactured drugs contain high-value ingredients which
                have a shorter life and specific temperature requirements, the
                use of cold chain management is necessary to preserve their
                efficacy and safety.
              </p>
              <p>
                <strong className="text-foreground">Avish Pharma</strong> offers
                Quality Assurance (QA) services by using monitoring devices
                (Data Loggers) and tools, as well as any actions needed after
                testing such as technical services to help improve cold chain
                implementation in the pharmaceutical industry.
              </p>
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
                Our Cold Chain Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive quality assurance services designed to maintain
                the integrity of your temperature-sensitive pharmaceutical
                products
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Thermometer,
                  title: "Temperature Monitoring",
                  description:
                    "Precise temperature monitoring using advanced data loggers to track and document temperature conditions throughout the supply chain, ensuring products remain within specified ranges.",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "text-blue-600",
                },
                {
                  icon: ClipboardCheck,
                  title: "Quality Assurance Testing",
                  description:
                    "Comprehensive QA testing protocols to validate cold chain equipment performance, identify potential risks, and ensure compliance with pharmaceutical standards.",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Shield,
                  title: "Regulatory Compliance",
                  description:
                    "Expert guidance and documentation to meet FDA, WHO, and other regulatory requirements for pharmaceutical cold chain management and validation.",
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

      {/* Why Cold Chain Matters */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Cold Chain Management is Critical
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Temperature excursions can compromise drug efficacy, patient
              safety, and regulatory compliance
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <AlertCircle className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Product Integrity
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Many pharmaceutical products, including vaccines, biologics,
                    insulin, and specialty medications, are highly sensitive to
                    temperature variations. Even brief exposure to temperatures
                    outside the specified range can degrade active ingredients,
                    rendering medications ineffective or unsafe.
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Preserves drug efficacy and potency</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>Prevents degradation of active ingredients</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>
                    Ensures patient safety and treatment effectiveness
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-8 h-8 text-secondary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    Regulatory Requirements
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pharmaceutical companies must comply with strict regulations
                    from agencies like the FDA, EMA, and WHO. Proper cold chain
                    management with documented validation is essential for
                    maintaining Good Distribution Practice (GDP) and Good
                    Manufacturing Practice (GMP) compliance.
                  </p>
                </div>
              </div>
              <div className="space-y-3 mt-6">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>FDA and WHO compliance</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>GDP and GMP standards adherence</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span>Complete audit trail documentation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Logger Technology */}
      <section className="bg-gradient-to-br from-secondary/5 via-primary/5 to-secondary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Advanced Data Logger Technology
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Our monitoring solutions utilize state-of-the-art data loggers
                  that provide accurate temperature tracking and comprehensive
                  reporting throughout your pharmaceutical supply chain.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Activity className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Precise Data Collection
                      </h4>
                      <p className="text-muted-foreground">
                        Accurate temperature tracking and data logging
                        throughout storage and transit
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <FileText className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Detailed Reporting
                      </h4>
                      <p className="text-muted-foreground">
                        Comprehensive data logs and reports for regulatory
                        compliance
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Validated Systems
                      </h4>
                      <p className="text-muted-foreground">
                        FDA-compliant calibrated devices with full validation
                        documentation
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-8 rounded-2xl border border-border">
                <div className="space-y-6">
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Thermometer className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground">
                        Temperature Range
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      Wide range coverage from -80°C to +70°C for all
                      pharmaceutical storage needs
                    </p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-secondary/10 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-secondary" />
                      </div>
                      <h4 className="font-bold text-foreground">
                        High Accuracy
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      ±0.5°C accuracy with NIST-traceable calibration
                      certificates
                    </p>
                  </div>
                  <div className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Package className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-foreground">
                        Flexible Deployment
                      </h4>
                    </div>
                    <p className="text-muted-foreground">
                      Suitable for warehouses, transport vehicles, and shipping
                      containers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Services */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Technical Services & Support
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Beyond monitoring and validation, we provide technical services to
              help you optimize your cold chain operations and address any
              challenges that arise.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Cold Chain Risk Assessment
                    </h4>
                    <p className="text-muted-foreground">
                      Identify vulnerabilities in your supply chain and provide
                      recommendations for mitigation strategies
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Equipment Qualification Support
                    </h4>
                    <p className="text-muted-foreground">
                      IQ/OQ/PQ protocols for refrigerators, freezers, and
                      transport equipment
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Temperature Mapping Studies
                    </h4>
                    <p className="text-muted-foreground">
                      Comprehensive mapping of storage and transport equipment
                      to identify hot and cold spots
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Deviation Analysis Support
                    </h4>
                    <p className="text-muted-foreground">
                      Analysis of temperature excursions with suggestions for
                      potential root causes
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Regulatory Audit Support
                    </h4>
                    <p className="text-muted-foreground">
                      Documentation and validation reports to support FDA, WHO,
                      and other regulatory inspections
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary via-primary/95 to-secondary py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Want to Know More About How Our Services Can Help You?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 leading-relaxed">
              Our team of cold chain experts are ready to discuss your specific
              pharmaceutical validation needs and develop a customized execution plan
              for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary font-semibold rounded-xl hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Contact Our Team
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

export default Pharmaceuticals;
