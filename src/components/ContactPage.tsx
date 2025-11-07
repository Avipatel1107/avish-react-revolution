import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  MessageSquare,
  Building2,
  Clock,
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Button } from "../components/ui/button";

const ContactPage = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending your message...");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "cd2e1e5b-1a9f-433a-bf14-59e21d495480");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(
        "Thank you for contacting us! We'll get back to you within 24 hours."
      );
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(
        "We're sorry, there was an error sending your message. Please try again or contact us directly at vipatel@avishvalidation.com"
      );
    }
  };

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
                <MessageSquare className="w-16 h-16 text-white" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
              Get In Touch
            </h1>
            <p className="mt-4 text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our expert validation and quality assurance
              solutions can support your compliance and logistics needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gradient-to-br from-card via-card to-primary/5 p-10 rounded-3xl shadow-2xl border border-border">
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Send Us a Message
              </h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>
              <form className="space-y-6" onSubmit={onSubmit}>
                <div>
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-semibold text-foreground"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-semibold text-foreground"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm font-semibold text-foreground"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-semibold text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="Tell us about your validation needs..."
                    required
                    className="w-full px-4 py-3 rounded-xl border border-input bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-200 resize-none"
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                >
                  Send Message
                </Button>
                {result && (
                  <div
                    className={`mt-4 p-4 rounded-xl text-center text-sm font-medium ${
                      result.includes("Thank you")
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : result.includes("error")
                        ? "bg-red-50 text-red-700 border border-red-200"
                        : "bg-blue-50 text-blue-700 border border-blue-200"
                    }`}
                  >
                    {result}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-card via-card to-secondary/5 p-8 rounded-2xl shadow-xl border border-border">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Building2 className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      Contact Information
                    </h3>
                    <p className="text-muted-foreground">
                      Our team is ready to assist you with your validation and
                      compliance needs.
                    </p>
                  </div>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl hover:bg-background transition-colors duration-200">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Address
                      </h4>
                      <p className="text-muted-foreground">
                        8 Morningstar Avenue
                        <br />
                        Whitby, Ontario
                        <br />
                        L1R 0P2
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl hover:bg-background transition-colors duration-200">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Phone
                      </h4>
                      <a
                        href="tel:214-940-7229"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200"
                      >
                        214-940-7229
                        <br></br>
                        416-735-5945
                        <br></br>
                        647-894-4073
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-background/50 rounded-xl hover:bg-background transition-colors duration-200">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        Email
                      </h4>
                      <a
                        href="mailto:vipatel@avishvalidation.com"
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 break-all"
                      >
                        vipatel@avishvalidation.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-card via-card to-primary/5 p-8 rounded-2xl shadow-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Clock className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-4">
                      Business Hours
                    </h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p className="flex justify-between">
                        <span className="font-medium">Monday – Friday:</span>
                        <span>9:00 AM – 6:00 PM EST</span>
                      </p>
                      <p className="flex justify-between">
                        <span className="font-medium">Saturday – Sunday:</span>
                        <span>Closed</span>
                      </p>
                    </div>
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

export default ContactPage;
