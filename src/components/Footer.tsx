const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">Avish Pharma Validating Services Inc.</h3>
            <p className="text-background/70">
              Quality Assurance and Validation Excellence
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-background/70">
              © {new Date().getFullYear()} Avish Pharma Validating Services Inc.
            </p>
            <p className="text-background/70">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
