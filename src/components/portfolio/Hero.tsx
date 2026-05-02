import heroPortrait from "@/assets/hero-portrait.jpg";
import { Download, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
      <div className="absolute top-40 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="container relative grid lg:grid-cols-2 gap-12 items-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold">Available for new projects</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-4">
            Hi, I'm <span className="gradient-text animate-gradient bg-gradient-primary bg-clip-text">Dinesh</span>
          </h1>

          <p className="text-xl md:text-2xl font-semibold text-foreground/80 mb-6">
            Web Designer & <span className="gradient-warm-text">WordPress Developer</span>
          </p>

          <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-xl">
            Independent developer with 5.5+ years building high-performance, user-friendly websites.
            I turn Figma designs into pixel-perfect, scalable WordPress & WooCommerce stores.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-bounce"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a
              href="#projects"
              className="inline-flex items-center px-7 py-3.5 rounded-full bg-card border-2 border-border font-semibold hover:border-primary hover:text-primary transition-smooth"
            >
              View Projects
            </a>
          </div>
        </div>

        <div className="relative animate-scale-in">
          <div className="absolute inset-0 bg-gradient-primary rounded-[2.5rem] rotate-6 opacity-30 blur-2xl" />
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-elegant border-4 border-card animate-float">
            <img
              src={heroPortrait}
              alt="Dinesh — Web Designer and WordPress Developer portrait"
              width={1024}
              height={1024}
              className="w-full h-auto"
            />
          </div>

          {/* Floating badges */}
          <div className="absolute -top-4 -right-4 bg-card rounded-2xl px-4 py-3 shadow-card border border-border animate-float" style={{ animationDelay: "1s" }}>
            <div className="text-2xl font-extrabold gradient-text">5.5+</div>
            <div className="text-xs text-muted-foreground font-semibold">Years exp.</div>
          </div>
          <div className="absolute -bottom-4 -left-4 bg-card rounded-2xl px-4 py-3 shadow-card border border-border animate-float" style={{ animationDelay: "2s" }}>
            <div className="text-2xl font-extrabold gradient-warm-text">50+</div>
            <div className="text-xs text-muted-foreground font-semibold">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
