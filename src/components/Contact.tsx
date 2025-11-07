import { Card, CardContent } from "./ui/card";
import { MapPin, Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto text-lg">
            Contact us today to discuss your validation needs and learn how we
            can help ensure your compliance
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-card">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Address</h3>
              <p className="text-muted-foreground leading-relaxed">
                8 Morningstar Avenue
                <br />
                Whitby, Ontario
                <br />
                L1R 0P2
              </p>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-card">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Phone</h3>
              <a
                href="tel:214-940-7229"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 block"
              >
                214-940-7229
                <br></br>
                416-735-5945
                <br></br>
                647-894-4073
              </a>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-xl transition-all duration-300 hover:scale-105 border-none bg-card">
            <CardContent className="p-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Email</h3>
              <a
                href="mailto:jipatel@avishvalidation.com"
                className="text-muted-foreground hover:text-primary transition-colors duration-300 block break-all"
              >
                vipatel@avishvalidation.com
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
