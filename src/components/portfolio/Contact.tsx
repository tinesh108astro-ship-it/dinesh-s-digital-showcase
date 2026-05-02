import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message sent!", description: "Thanks — I'll get back to you shortly." });
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

      <div className="container relative">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 rounded-full bg-card text-primary font-semibold text-sm mb-4 shadow-card">
            Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Let's <span className="gradient-text">work together</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-glow">
                <MapPin className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Location</div>
                <div className="font-bold text-lg">Chennai, India</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-warm flex items-center justify-center flex-shrink-0 shadow-glow">
                <Phone className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Phone</div>
                <a href="tel:8681810075" className="font-bold text-lg hover:text-primary">8681810075</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-cool flex items-center justify-center flex-shrink-0 shadow-glow-cyan">
                <Mail className="w-5 h-5 text-primary-foreground" />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-1">Email</div>
                <a href="mailto:dineshdd2811@gmail.com" className="font-bold text-lg hover:text-primary break-all">
                  dineshdd2811@gmail.com
                </a>
              </div>
            </div>

            <div className="pt-4 border-t border-border">
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-3">Follow me</div>
              <div className="flex gap-3">
                {[Github, Linkedin, Twitter].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full bg-muted hover:bg-gradient-primary hover:text-primary-foreground flex items-center justify-center transition-bounce hover:scale-110"
                    aria-label="Social link"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form onSubmit={onSubmit} className="bg-card rounded-3xl p-8 shadow-card border border-border space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-transparent focus:border-primary focus:outline-none transition-smooth"
              />
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-xl bg-muted border border-transparent focus:border-primary focus:outline-none transition-smooth"
              />
            </div>
            <input
              required
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-transparent focus:border-primary focus:outline-none transition-smooth"
            />
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Your message"
              className="w-full px-4 py-3 rounded-xl bg-muted border border-transparent focus:border-primary focus:outline-none transition-smooth resize-none"
            />
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-[1.02] transition-bounce"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
