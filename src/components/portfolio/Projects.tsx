import { useState } from "react";
import { ExternalLink } from "lucide-react";

type Category = "all" | "wordpress" | "ecommerce" | "plugin" | "react";

const projects: { title: string; category: Exclude<Category, "all">; tag: string; gradient: string }[] = [
  { title: "Astrology Booking Platform", category: "wordpress", tag: "WordPress", gradient: "from-pink-500 to-purple-600" },
  { title: "Boutique WooCommerce Store", category: "ecommerce", tag: "Ecommerce", gradient: "from-orange-500 to-pink-500" },
  { title: "Custom Booking Plugin", category: "plugin", tag: "Custom Plugin", gradient: "from-cyan-500 to-blue-600" },
  { title: "Corporate Agency Site", category: "wordpress", tag: "WordPress", gradient: "from-purple-500 to-indigo-600" },
  { title: "Multi-vendor Marketplace", category: "ecommerce", tag: "Ecommerce", gradient: "from-rose-500 to-orange-500" },
  { title: "Dashboard SPA", category: "react", tag: "React JS", gradient: "from-cyan-400 to-purple-600" },
  { title: "Membership Plugin", category: "plugin", tag: "Custom Plugin", gradient: "from-fuchsia-500 to-pink-600" },
  { title: "Restaurant WP Theme", category: "wordpress", tag: "WordPress", gradient: "from-amber-500 to-pink-500" },
  { title: "Portfolio React App", category: "react", tag: "React JS", gradient: "from-violet-500 to-cyan-500" },
];

const filters: { id: Category; label: string }[] = [
  { id: "all", label: "All Projects" },
  { id: "wordpress", label: "WordPress" },
  { id: "ecommerce", label: "Ecommerce" },
  { id: "plugin", label: "Custom Plugin" },
  { id: "react", label: "React JS" },
];

const Projects = () => {
  const [active, setActive] = useState<Category>("all");
  const filtered = active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-soft text-primary font-semibold text-sm mb-4">
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Recent <span className="gradient-text">projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of work spanning custom WordPress themes, WooCommerce stores, plugins and React apps.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActive(f.id)}
              className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-bounce ${
                active === f.id
                  ? "bg-gradient-primary text-primary-foreground shadow-glow scale-105"
                  : "bg-card border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={`${p.title}-${i}`}
              className="group relative rounded-3xl overflow-hidden shadow-card hover:shadow-elegant transition-smooth animate-fade-in"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${p.gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                  style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-7xl font-extrabold text-white/30">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/95 via-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-smooth flex flex-col justify-end p-6">
                <span className="inline-block w-fit text-xs font-bold text-primary-foreground bg-primary/80 px-3 py-1 rounded-full mb-2">
                  {p.tag}
                </span>
                <h3 className="text-xl font-bold text-background mb-3">{p.title}</h3>
                <button className="inline-flex items-center gap-2 text-sm font-semibold text-background hover:text-accent w-fit">
                  View case <ExternalLink className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 bg-card group-hover:opacity-0 transition-smooth">
                <span className="text-xs font-bold text-primary uppercase tracking-wider">{p.tag}</span>
                <h3 className="text-lg font-bold mt-1">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
