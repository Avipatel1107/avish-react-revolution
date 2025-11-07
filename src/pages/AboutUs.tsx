import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Award,
  Globe,
  Heart,
  Shield,
  Target,
  Users,
  Zap,
  TrendingUp,
} from "lucide-react";

const AboutUs = () => {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              About Us
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Pioneering excellence in pharmaceutical validation services with
              over 15 years of industry expertise
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 -mt-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {[
            { icon: Award, label: "Years Experience", value: "15+" },
            { icon: Users, label: "Satisfied Clients", value: "50+" },
            { icon: Globe, label: "Serves Canada & USA", value: "🇨🇦 🇺🇸" },
            { icon: TrendingUp, label: "Success Rate", value: "99%" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-card/95 backdrop-blur-lg p-6 rounded-2xl shadow-xl border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
            >
              <stat.icon className="w-8 h-8 text-primary mb-3 mx-auto" />
              <div className="text-3xl md:text-4xl font-bold text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main Content Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Who We Are */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 p-12 rounded-3xl border border-primary/20 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Target className="w-16 h-16 text-primary mb-6 relative z-10" />
              <h2 className="text-3xl font-bold text-foreground mb-4 relative z-10">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed relative z-10">
                To support clients across Canada and the USA by leveraging our
                expertise to develop processes that ensure products and services
                are delivered safely, efficiently, and reliably.
              </p>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Avish Pharma Validating Services Inc. partners with clients
                across diverse industries to deliver solutions that meet the
                highest standards of quality and compliance.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                We assist clients in meeting both local and international
                regulatory requirements while streamlining storage and handling
                processes for temperature-sensitive products. By providing
                timely and cost-effective solutions, we help prevent delays and
                overcome operational challenges, ensuring smooth supply chain
                operations.
              </p>
            </div>
          </div>

          {/* Our Commitment */}
          <div className="relative bg-gradient-to-br from-card via-card to-primary/5 p-10 md:p-12 rounded-3xl shadow-2xl border border-border overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700" />
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Our Commitment to Excellence
                </h2>
              </div>
              <div className="space-y-4 text-lg">
                <p className="text-muted-foreground leading-relaxed">
                  In a rapidly evolving healthcare logistics sector, regulatory
                  requirements are constantly changing. At Avish Pharma, we not
                  only address current compliance needs but also anticipate
                  future regulations, helping our clients stay ahead of industry
                  changes.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We are committed to safeguarding the integrity and quality of
                  pharmaceutical products, recognizing that patient safety
                  ultimately depends on proper storage and transportation. Our
                  expertise ensures that temperature-sensitive products are
                  handled within precise tolerances throughout the supply chain,
                  protecting both product efficacy and patient health.
                </p>
              </div>
            </div>
          </div>

          {/* What Sets Us Apart */}
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Sets Us Apart
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our unique combination of expertise, reach, and dedication makes
                us the trusted partner for validation services
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Industry Expertise",
                  description:
                    "Our consultants bring over 15 years of experience with deep knowledge across multiple industries. We understand the unique challenges each sector faces and provide tailored validation solutions backed by proven expertise.",
                  gradient: "from-blue-500/10 to-cyan-500/10",
                  iconColor: "text-blue-600",
                },
                {
                  icon: Globe,
                  title: "Global Reach, Local Understanding",
                  description:
                    "Our team supports clients in both Canada and USA while maintaining expertise in local regulatory requirements, ensuring seamless compliance across all markets.",
                  gradient: "from-purple-500/10 to-pink-500/10",
                  iconColor: "text-purple-600",
                },
                {
                  icon: Heart,
                  title: "Patient-Centric Approach",
                  description:
                    "Every validation service we perform is driven by our commitment to patient safety, ensuring that life-saving medications reach those who need them in optimal condition.",
                  gradient: "from-rose-500/10 to-orange-500/10",
                  iconColor: "text-rose-600",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.gradient} backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group`}
                >
                  <div className="mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <item.icon
                      className={`w-12 h-12 ${item.iconColor} relative z-10`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="relative">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Quality First",
                  description:
                    "We never compromise on quality, delivering validation services that exceed industry standards and regulatory expectations.",
                  color: "from-emerald-500 to-teal-500",
                },
                {
                  icon: Heart,
                  title: "Integrity",
                  description:
                    "Transparency and honesty guide every client interaction, building trust through reliable and ethical practices.",
                  color: "from-blue-500 to-indigo-500",
                },
                {
                  icon: Zap,
                  title: "Innovation",
                  description:
                    "We continuously evolve our methodologies to incorporate the latest technologies and best practices in validation.",
                  color: "from-amber-500 to-orange-500",
                },
                {
                  icon: Users,
                  title: "Partnership",
                  description:
                    "We view our clients as partners, working collaboratively to achieve shared goals and long-term success.",
                  color: "from-purple-500 to-pink-500",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="group relative bg-card/95 backdrop-blur-lg p-8 rounded-2xl shadow-lg border border-border hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />
                  <div className="relative z-10 flex items-start gap-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${value.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        {value.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default AboutUs;
