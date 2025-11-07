import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Heart,
  Shield,
  Thermometer,
  AlertTriangle,
  CheckCircle2,
  Truck,
  Package,
  Snowflake,
  Sun,
  DollarSign,
  Users,
  FileText,
  ClipboardCheck,
} from "lucide-react";

const AnimalHealth = () => {
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
                <Heart className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Animal Health & Vaccine Protection
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Protecting animal health through comprehensive cold chain
              validation services for vaccines and temperature-sensitive
              veterinary products
            </p>
          </div>
        </div>
      </section>

      {/* Vaccine Importance Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Critical Importance of Vaccines
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Animals are a key component to our world, and vaccines are a major
              component to disease prevention and control
            </p>
          </div>

          <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border mb-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Protecting Animal Health
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Vaccines play a major role in protecting not only humans
                      but also our animals' health. They are essential for
                      disease prevention and control in livestock and companion
                      animals.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Package className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      Food & Nutrition Security
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Cold chain management contributes to food and nutrition
                      security by providing sustainable livestock production and
                      ensuring healthy animal populations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vaccine Risks Section */}
      <section className="bg-gradient-to-br from-red-500/5 via-orange-500/5 to-red-500/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-red-500/10 rounded-xl">
                  <AlertTriangle className="w-12 h-12 text-red-600" />
                </div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                How Vaccines Can Be Compromised
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Vaccines are highly sensitive products that can lose their
                effectiveness when exposed to improper conditions
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  icon: Snowflake,
                  title: "Freezing",
                  description:
                    "Exposure to freezing temperatures can damage vaccine components and reduce efficacy",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Sun,
                  title: "Heat Exposure",
                  description:
                    "High temperatures can denature proteins and destroy vaccine potency",
                  gradient: "from-orange-500/10 to-red-500/10",
                  iconColor: "text-orange-600",
                },
                {
                  icon: Sun,
                  title: "Direct Sunlight",
                  description:
                    "UV radiation from sunlight can break down vaccine molecules",
                  gradient: "from-yellow-500/10 to-orange-500/10",
                  iconColor: "text-yellow-600",
                },
                {
                  icon: AlertTriangle,
                  title: "Fluorescent Light",
                  description:
                    "Prolonged exposure to fluorescent lighting can compromise vaccine integrity",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  iconColor: "text-purple-600",
                },
              ].map((risk, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${risk.gradient} backdrop-blur-lg p-6 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className="mb-4">
                    <risk.icon className={`w-10 h-10 ${risk.iconColor}`} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {risk.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {risk.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-card via-card to-red-500/5 p-8 rounded-2xl shadow-xl border border-red-500/20">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    Critical Warning: Irreversible Damage
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    When vaccines are exposed to any of the above conditions,
                    they may lose their strength and ability to induce an immune
                    response in vaccinated animals.
                  </p>
                  <p className="text-foreground font-semibold">
                    Once vaccines lose their strength, they cannot be restored
                    and must be thrown away, leading to waste of product and
                    potential risk to animal health.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Veterinarian Solutions Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Challenges Facing Veterinarians
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Improper vaccine handling creates significant challenges for
              veterinary practices and animal health organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: DollarSign,
                title: "Economic Loss from Waste",
                description:
                  "Compromised vaccines must be discarded, resulting in significant financial losses for veterinary practices and animal health facilities. This waste impacts operational budgets and reduces resources available for animal care.",
                gradient: "from-green-500/10 to-emerald-500/10",
                iconColor: "text-green-600",
              },
              {
                icon: AlertTriangle,
                title: "Potential Risk to Public Health",
                description:
                  "Ineffective vaccines can lead to disease outbreaks in animal populations, which may pose zoonotic risks to humans. This threatens both animal welfare and public health safety.",
                gradient: "from-red-500/10 to-orange-500/10",
                iconColor: "text-red-600",
              },
              {
                icon: Users,
                title: "Public Uncertainty in Vaccines",
                description:
                  "Vaccine failures due to improper storage erode public confidence in veterinary medicine and vaccination programs, making disease prevention efforts more challenging.",
                gradient: "from-blue-500/10 to-indigo-500/10",
                iconColor: "text-blue-600",
              },
            ].map((challenge, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${challenge.gradient} backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 group`}
              >
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <challenge.icon
                    className={`w-12 h-12 ${challenge.iconColor} relative z-10`}
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {challenge.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {challenge.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Cold Chain Services Section */}
      <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Cold Chain Services for Animal Health
              </h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
                Comprehensive validation services to ensure
                temperature-sensitive veterinary products are safe and effective
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Truck className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Storage & Transportation Validation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      We validate storage facilities and transportation
                      equipment to ensure vaccines and veterinary products
                      maintain proper temperatures throughout the supply chain.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Storage safety during transportation</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Temperature monitoring and control</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>Equipment performance qualification</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-secondary/10 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <ClipboardCheck className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Management & Distribution
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comprehensive management of vaccine storage and
                      distribution systems to ensure products are stored and
                      transported at appropriate temperatures.
                    </p>
                  </div>
                </div>
                <div className="space-y-3 mt-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Vaccine storage management protocols</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Distribution system validation</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>Appropriate temperature maintenance</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Thermometer className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Temperature Control Assurance
                </h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Our services ensure that vaccines are stored and transported at
                appropriate temperatures, protecting their efficacy and
                preventing waste. We provide comprehensive validation studies to
                verify cold chain integrity from manufacturer to administration.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    Temperature mapping
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    Equipment qualification
                  </span>
                </div>
                <div className="flex items-center gap-3 p-4 bg-primary/5 rounded-xl border border-primary/20">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground font-medium">
                    Compliance documentation
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
      <section className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-secondary/10 rounded-xl">
                <FileText className="w-8 h-8 text-secondary" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Comprehensive Documentation & Reporting
              </h2>
            </div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              All of our services include detailed protocols, reports, and
              documentation to ensure regulatory compliance and provide peace of
              mind that your veterinary products are handled safely.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Validation Protocols
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Detailed step-by-step procedures for all validation
                      activities
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Temperature Mapping Reports
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive analysis of temperature distribution and
                      hot/cold spots
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Compliance Certificates
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Official documentation for regulatory audits and
                      inspections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Validation Studies
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      Comprehensive qualification and mapping studies with
                      detailed analysis
                    </p>
                  </div>
                </div>
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

export default AnimalHealth;
