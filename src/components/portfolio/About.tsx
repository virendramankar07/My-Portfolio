import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { User, Target, BookOpen } from "lucide-react";

const stats = [
  { label: "Projects Built", value: "3+" },
  { label: "Certifications", value: "7+" },
  { label: "Technologies", value: "10+" },
  { label: "GPA / Score", value: "89%" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      <div className="container relative" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="section-line w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="card-glow rounded-2xl p-8 bg-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <User size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-xl text-foreground">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <span className="text-primary font-medium">Bachelor of Technology CSE-DS</span> student highly motivated to gain first professional experience. Possessing practical skills in programming languages, <span className="text-accent font-medium">Power BI, Python</span> and Excel.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Proven technical capability through the development of complex projects, including an <span className="text-primary font-medium">Ayurvedic Diet Chart</span> and <span className="text-primary font-medium">Hospital Triage Agent System</span>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Known for being a responsible and orderly individual, with experience in collaborative problem-solving from college-level hackathon participation.
              </p>
            </div>
          </motion.div>

          {/* Stats + goals */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="card-glow rounded-xl p-5 bg-card text-center"
                >
                  <div className="font-display text-3xl font-bold text-gradient-cyan mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Goal card */}
            <div className="card-glow rounded-2xl p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target size={18} className="text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">Goal</h3>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                To leverage data analytics, machine learning, and visualization tools to drive impactful business decisions and grow as a professional in the data science domain.
              </p>
            </div>

            {/* Location */}
            <div className="card-glow rounded-2xl p-6 bg-card">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen size={18} className="text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground">Currently</h3>
              </div>
              <p className="text-muted-foreground text-sm">📍 Pithampur, Madhya Pradesh</p>
              <p className="text-muted-foreground text-sm mt-1">🎓 B.Tech CSE-DS — Data Science</p>
              <p className="text-muted-foreground text-sm mt-1">💼 Seeking first professional role</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
