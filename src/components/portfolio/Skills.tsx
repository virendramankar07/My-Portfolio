import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, BarChart3, Brain, Languages } from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: Code2,
    color: "primary",
    skills: [
      { name: "Python", level: 80 },
      { name: "SQL", level: 75 },
      { name: "Pandas & NumPy", level: 72 },
    ],
  },
  {
    title: "Analytics & BI",
    icon: BarChart3,
    color: "accent",
    skills: [
      { name: "Power BI", level: 78 },
      { name: "MS Excel", level: 85 },
      { name: "Tableau", level: 65 },
    ],
  },
  {
    title: "AI / ML",
    icon: Brain,
    color: "primary",
    skills: [
      { name: "Machine Learning", level: 65 },
      { name: "Data Analysis", level: 80 },
      { name: "Data Visualization", level: 75 },
    ],
  },
  {
    title: "Languages",
    icon: Languages,
    color: "accent",
    skills: [
      { name: "English", level: 85 },
      { name: "Hindi", level: 100 },
    ],
  },
];

const techBadges = ["Python", "SQL", "Power BI", "MS Excel", "Tableau", "Pandas", "NumPy", "Machine Learning", "Data Analysis", "ChatGPT / AI Tools"];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">What I know</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Skills</h2>
          <div className="section-line w-24 mx-auto" />
        </motion.div>

        {/* Skill bars */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {skillGroups.map((group, gi) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + gi * 0.1 }}
                className="card-glow rounded-2xl p-7 bg-card"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${group.color === "accent" ? "bg-accent/10" : "bg-primary/10"}`}>
                    <Icon size={18} className={group.color === "accent" ? "text-accent" : "text-primary"} />
                  </div>
                  <h3 className="font-display font-semibold text-lg text-foreground">{group.title}</h3>
                </div>
                <div className="space-y-4">
                  {group.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm text-muted-foreground">{skill.name}</span>
                        <span className={`text-sm font-medium ${group.color === "accent" ? "text-accent" : "text-primary"}`}>{skill.level}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1.2, delay: 0.5 + gi * 0.1 + si * 0.1, ease: "easeOut" }}
                          className={`h-full rounded-full ${group.color === "accent"
                            ? "bg-gradient-to-r from-accent to-yellow-400"
                            : "skill-bar-fill"}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Tech badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {techBadges.map((badge, i) => (
            <motion.span
              key={badge}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 + i * 0.05 }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="px-4 py-1.5 rounded-full text-sm font-medium border border-border bg-secondary/50 text-muted-foreground hover:border-primary hover:text-primary transition-all duration-200 cursor-default"
            >
              {badge}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
