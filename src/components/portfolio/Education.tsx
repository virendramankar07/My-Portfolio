import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

const education = [
  {
    school: "Sushila Devi Bansal College Indore, RGPV",
    degree: "Bachelor of Technology — CSE-DS (Data Science)",
    location: "Indore, Madhya Pradesh",
    year: "2023",
    highlight: true,
  },
  {
    school: "Govt. Higher Secondary School Athner, MP Board",
    degree: "12th Grade — 62%",
    location: "Athner, Madhya Pradesh",
    year: "2022",
    highlight: false,
  },
  {
    school: "Govt. High School Sawangi, MP Board",
    degree: "10th Grade — 89%",
    location: "Athner, Madhya Pradesh",
    year: "2019",
    highlight: false,
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Academic background</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Education</h2>
          <div className="section-line w-24 mx-auto" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <motion.div
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary via-primary/40 to-transparent"
          />

          <div className="space-y-8">
            {education.map((item, i) => (
              <motion.div
                key={item.school}
                initial={{ opacity: 0, x: -40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.2 }}
                className="flex gap-6"
              >
                {/* Dot */}
                <div className="relative flex-shrink-0 mt-1">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={inView ? { scale: 1 } : {}}
                    transition={{ delay: 0.5 + i * 0.2, type: "spring" }}
                    className="w-12 h-12 rounded-full timeline-dot flex items-center justify-center z-10 relative"
                  >
                    <GraduationCap size={18} className="text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{ x: 4 }}
                  className={`flex-1 card-glow rounded-2xl p-6 bg-card ${item.highlight ? "border-primary/30" : ""}`}
                >
                  <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                      <h3 className="font-display font-semibold text-lg text-foreground mb-1">{item.school}</h3>
                      <p className={`text-sm font-medium mb-3 ${item.highlight ? "text-primary" : "text-muted-foreground"}`}>
                        {item.degree}
                      </p>
                      <div className="flex items-center gap-4 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin size={11} className="text-primary" /> {item.location}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar size={11} className="text-accent" /> {item.year}
                        </span>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.highlight ? "bg-primary/20 text-primary border border-primary/30" : "bg-accent/10 text-accent border border-accent/30"}`}>
                      {item.year}
                    </span>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
