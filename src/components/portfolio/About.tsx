import { Check } from "lucide-react";

const features = [
  "Page Builders: Elementor, WPBakery, Gutenberg, Divi",
  "Responsive & mobile-first design",
  "Third-party API Integration",
  "WooCommerce customization",
  "Website Security & Maintenance",
  "Performance Optimization & SEO",
  "Troubleshooting & Debugging",
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-soft text-primary font-semibold text-sm mb-4">
              About me
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Crafting <span className="gradient-text">digital experiences</span> that perform
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I specialize in designing and developing responsive, scalable websites using modern web
              technologies while strictly following web standards, performance best practices, and security
              guidelines. I love turning Figma designs into pixel-perfect, functional websites that deliver
              real business value.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I also have extensive experience with WooCommerce — building secure, fast, conversion-focused
              online stores tailored to each business.
            </p>

            <ul className="grid sm:grid-cols-2 gap-3">
              {features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm">
                  <span className="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Check className="w-3 h-3 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80 font-medium">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="bg-gradient-primary rounded-3xl p-8 text-primary-foreground shadow-glow hover:scale-105 transition-bounce">
              <div className="text-6xl font-extrabold mb-2">5.5</div>
              <div className="text-sm font-semibold opacity-90">Years of professional experience</div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-glow-purple transition-smooth mt-8">
              <div className="text-6xl font-extrabold gradient-warm-text mb-2">50+</div>
              <div className="text-sm font-semibold text-muted-foreground">Projects completed</div>
            </div>
            <div className="bg-card border border-border rounded-3xl p-8 shadow-card hover:shadow-glow-cyan transition-smooth">
              <div className="text-6xl font-extrabold text-secondary mb-2">10+</div>
              <div className="text-sm font-semibold text-muted-foreground">Custom themes & plugins</div>
            </div>
            <div className="bg-gradient-cool rounded-3xl p-8 text-primary-foreground shadow-glow-cyan hover:scale-105 transition-bounce mt-8">
              <div className="text-6xl font-extrabold mb-2">∞</div>
              <div className="text-sm font-semibold opacity-90">Passion for clean code</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
