import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, CheckCircle } from "lucide-react";

const certifications = [
  { title: "Introduction to Data Science", issuer: "Online Platform", category: "Data Science" },
  { title: "Power BI Workshop", issuer: "Workshop Training", category: "Analytics" },
  { title: "AI Tools and ChatGPT Workshop", issuer: "Workshop Training", category: "AI" },
  { title: "Internship Common Aptitude Test (ICAT)", issuer: "Certificate of Participation", category: "Assessment" },
  { title: "Introduction to Data Analytics", issuer: "Simplilearn SkillUp!", category: "Analytics" },
  { title: "Data Analytics Job Simulation", issuer: "Deloitte — Forage", category: "Analytics" },
  { title: "Data Science & Analytics Course", issuer: "HP LIFE", category: "Data Science" },
];

const categoryColors: Record<string, string> = {
  "Data Science": "primary",
  "Analytics": "accent",
  "AI": "primary",
  "Assessment": "accent",
};

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Credentials</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Certifications</h2>
          <div className="section-line w-24 mx-auto" />
        </motion.div>

        {/* Summary badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-10"
        >
          <div className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-primary/30 bg-primary/5 text-primary">
            <Award size={16} />
            <span className="text-sm font-semibold">{certifications.length} Certifications Earned</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto">
          {certifications.map((cert, i) => {
            const color = categoryColors[cert.category] || "primary";
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ x: 4 }}
                className="card-glow rounded-xl p-5 bg-card flex items-start gap-4"
              >
                <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center ${color === "accent" ? "bg-accent/10" : "bg-primary/10"}`}>
                  <CheckCircle size={16} className={color === "accent" ? "text-accent" : "text-primary"} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-foreground text-sm mb-1 leading-snug">{cert.title}</h4>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
                <span className={`flex-shrink-0 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide ${color === "accent" ? "bg-accent/10 text-accent" : "bg-primary/10 text-primary"}`}>
                  {cert.category}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
