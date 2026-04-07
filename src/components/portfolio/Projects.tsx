import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Activity, Leaf, Globe } from "lucide-react";

const projects = [
  {
    title: "Hospital Triage Agent",
    description: "An intelligent triage system to prioritize patient care in hospital emergency departments using data-driven algorithms and machine learning. Built during a college-level hackathon.",
    tags: ["Python", "Machine Learning", "Data Analysis", "Healthcare"],
    icon: Activity,
    color: "primary",
    link: null,
    github: null,
    featured: true,
  },
  {
    title: "Ayurvedic Diet Chart",
    description: "A comprehensive Ayurvedic diet recommendation system that provides personalized diet plans based on user body type (Dosha) and health goals, integrating traditional wisdom with data analysis.",
    tags: ["Python", "Data Analysis", "Health Tech", "Recommendation System"],
    icon: Leaf,
    color: "accent",
    link: "https://ayurvedic-diet-chart-generator.vercel.app/",
    github: null,
    featured: true,
  },
  {
    title: "Maa Baglamukhi Shakti Siddhpeeth",
    description: "A full-stack web application built for a religious institution, featuring information architecture, responsive design, and modern web technologies deployed on Vercel.",
    tags: ["Web Development", "Frontend", "Vercel", "Responsive Design"],
    icon: Globe,
    color: "primary",
    link: "https://maa-baglamukhi-shakti-siddhpeeth-sa.vercel.app/",
    github: null,
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">What I've built</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Projects</h2>
          <div className="section-line w-24 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15 }}
                whileHover={{ y: -6 }}
                className={`card-glow rounded-2xl p-7 bg-card flex flex-col h-full relative overflow-hidden ${project.featured ? "md:col-span-1" : ""}`}
              >
                {project.featured && (
                  <span className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/15 text-primary border border-primary/20 tracking-wider uppercase">
                    Featured
                  </span>
                )}

                {/* Glow orb */}
                <div
                  className="absolute -top-6 -left-6 w-24 h-24 rounded-full opacity-10 blur-xl"
                  style={{ background: project.color === "accent" ? "hsl(45 100% 60%)" : "hsl(185 100% 50%)" }}
                />

                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5 ${project.color === "accent" ? "bg-accent/10" : "bg-primary/10"}`}>
                  <Icon size={22} className={project.color === "accent" ? "text-accent" : "text-primary"} />
                </div>

                <h3 className="font-display font-bold text-xl text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-5">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full text-xs bg-secondary text-muted-foreground border border-border">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  {project.link && (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 text-sm text-primary hover:text-primary/80 font-medium transition-colors"
                    >
                      <ExternalLink size={14} />
                      Live Demo
                    </motion.a>
                  )}
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground font-medium transition-colors"
                    >
                      <Github size={14} />
                      Code
                    </motion.a>
                  )}
                  {!project.link && !project.github && (
                    <span className="text-xs text-muted-foreground italic">Project code available on request</span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
