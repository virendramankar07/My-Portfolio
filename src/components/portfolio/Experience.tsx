import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Award } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Hands-on work</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Experience</h2>
          <div className="section-line w-24 mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="card-glow rounded-2xl p-8 bg-card relative overflow-hidden"
          >
            {/* Decorative gradient */}
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
              style={{ background: "radial-gradient(circle, hsl(185 100% 50%), transparent)", transform: "translate(30%, -30%)" }} />

            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Briefcase size={22} className="text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="font-display font-bold text-xl text-foreground">Hackathon Participation</h3>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                    College Level
                  </span>
                </div>
                <p className="text-primary font-medium mb-3">Hospital Triage Agent — Project</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-5">
                  <MapPin size={13} className="text-accent" />
                  Indore, Madhya Pradesh
                </div>

                <div className="space-y-3">
                  {[
                    "Developed a Hospital Triage Agent system to prioritize patient care using data-driven algorithms",
                    "Collaborated in a team environment, solving complex healthcare problems under time constraints",
                    "Applied Python and machine learning techniques to build a functional prototype",
                    "Demonstrated problem-solving and project management skills at the college level",
                  ].map((point, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -15 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      {point}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Seeking badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-6 p-6 rounded-2xl border border-dashed border-primary/30 text-center"
          >
            <Award size={28} className="text-primary mx-auto mb-3" />
            <p className="text-foreground font-medium">Open to Internships & Entry-level Positions</p>
            <p className="text-muted-foreground text-sm mt-1">Ready to bring analytical skills and fresh perspective to your team</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
