import { useState } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const skills = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 85 },
  { name: "PHP", value: 60 },
  { name: "MySQL", value: 70 },
  { name: "JavaScript", value: 70 },
  { name: "jQuery", value: 65 },
  { name: "WordPress", value: 95 },
  { name: "React JS", value: 50 },
];

const experience = [
  { role: "Software Engineer", place: "Astroved", date: "Feb 2025 — Jan 2026" },
  { role: "Software Developer", place: "eWall Host Web Services", date: "Jul 2024 — Jan 2025" },
  { role: "WordPress Developer", place: "Elephant in the Boardroom", date: "Mar 2022 — Apr 2024" },
  { role: "Front End Developer", place: "Web Trenz Technologies", date: "Feb 2020 — Feb 2022" },
];

const education = [
  { role: "B.Sc Computer Science", place: "Hindustan College of Arts and Science", date: "2014 — 2017" },
  { role: "Web Design & Development Course", place: "Certification Program", date: "2019" },
  { role: "HSC", place: "Government Higher School", date: "2014" },
  { role: "SSLC", place: "Government Higher School", date: "2012" },
];

const Skills = () => {
  const [tab, setTab] = useState<"exp" | "edu">("exp");
  const data = tab === "exp" ? experience : education;

  return (
    <section id="skills" className="py-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="container relative">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full bg-card text-primary font-semibold text-sm mb-4 shadow-card">
            Skills & Experience
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold">
            What I bring to the <span className="gradient-text">table</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Skills bars */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
            <div className="space-y-5">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm font-semibold mb-2">
                    <span>{s.name}</span>
                    <span className="gradient-text">{s.value}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full transition-all duration-1000"
                      style={{ width: `${s.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience / Education tabs */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border">
            <div className="flex gap-2 mb-6 p-1 bg-muted rounded-full">
              <button
                onClick={() => setTab("exp")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-semibold text-sm transition-smooth ${
                  tab === "exp" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <Briefcase className="w-4 h-4" />
                Experience
              </button>
              <button
                onClick={() => setTab("edu")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-full font-semibold text-sm transition-smooth ${
                  tab === "edu" ? "bg-gradient-primary text-primary-foreground shadow-glow" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <GraduationCap className="w-4 h-4" />
                Education
              </button>
            </div>

            <div className="relative pl-6 border-l-2 border-dashed border-border space-y-6">
              {data.map((item, i) => (
                <div key={i} className="relative animate-fade-in">
                  <div className="absolute -left-[31px] top-1 w-5 h-5 rounded-full bg-gradient-primary ring-4 ring-card" />
                  <div className="text-xs font-bold text-primary uppercase tracking-wider mb-1">
                    {item.date}
                  </div>
                  <h4 className="text-lg font-bold">{item.role}</h4>
                  <p className="text-sm text-muted-foreground">{item.place}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
