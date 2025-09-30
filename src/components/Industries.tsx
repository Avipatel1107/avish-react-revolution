import { Card, CardContent } from './ui/card';
import pharmaIcon from '@/assets/pharma-icon.png';
import animalIcon from '@/assets/animal-icon.png';
import logisticsIcon from '@/assets/logistics-icon.png';

const industries = [
  {
    title: 'PHARMACEUTICALS',
    icon: pharmaIcon,
    description: 'Comprehensive validation services for pharmaceutical manufacturing and distribution.',
  },
  {
    title: 'ANIMAL HEALTH',
    icon: animalIcon,
    description: 'Specialized validation solutions for veterinary pharmaceutical products.',
  },
  {
    title: 'LOGISTICS',
    icon: logisticsIcon,
    description: 'Temperature-controlled logistics validation for cold chain integrity.',
  },
];

const Industries = () => {
  return (
    <section id="industries" className="py-20 bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Industries We Serve</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 bg-background border-none overflow-hidden"
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-32 h-32 mx-auto relative">
                  <img
                    src={industry.icon}
                    alt={industry.title}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-wide">
                  {industry.title}
                </h3>
                <p className="text-muted-foreground">
                  {industry.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
