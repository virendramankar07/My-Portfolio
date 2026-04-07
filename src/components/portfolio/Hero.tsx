import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Download, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import ParticleField from "./ParticleField";

const roles = ["Data Analyst", "Python Developer", "Power BI Expert", "ML Enthusiast"];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1500);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-background/60" />
      {/* Bottom fade to next section */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" style={{ zIndex: 2 }} />

      {/* Canvas particle field */}
      <ParticleField />

      {/* Floating sunset orbs (above canvas, below content) */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.25, 0.45, 0.25], x: [0, 25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(16 100% 60% / 0.35), transparent 70%)", zIndex: 3 }}
      />
      <motion.div
        animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.35, 0.15], x: [0, -20, 0] }}
        transition={{ duration: 9, repeat: Infinity, delay: 1.5 }}
        className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(330 100% 65% / 0.3), transparent 70%)", zIndex: 3 }}
      />
      <motion.div
        animate={{ scale: [1, 1.25, 1], opacity: [0.1, 0.28, 0.1] }}
        transition={{ duration: 11, repeat: Infinity, delay: 3 }}
        className="absolute top-2/3 left-2/3 w-64 h-64 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(38 100% 58% / 0.22), transparent 70%)", zIndex: 3 }}
      />

      <div className="container relative text-center" style={{ zIndex: 4 }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-4 leading-none"
        >
          <span className="text-foreground">Virendra</span>
          <br />
          <span className="text-gradient-cyan">Mankar</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-xl md:text-2xl font-medium text-muted-foreground mb-8 h-8"
        >
          <span className="text-gradient-gold">{displayed}</span>
          <span className="animate-typing-cursor text-accent">|</span>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex items-center justify-center flex-wrap gap-4 mb-10"
        >
          {[
            { icon: Phone, label: "+91 8305433947", href: "tel:+918305433947" },
            { icon: Mail, label: "virendramankar7@gmail.com", href: "mailto:virendramankar7@gmail.com" },
            { icon: MapPin, label: "Pithampur, MP", href: "#" },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon size={14} className="text-primary" />
              {label}
            </a>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
          className="flex items-center justify-center flex-wrap gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="mailto:virendramankar7@gmail.com"
            className="px-7 py-3 rounded-full font-medium text-white transition-all duration-300 animate-glow-pulse"
            style={{ background: "linear-gradient(135deg, hsl(16 100% 60%), hsl(330 100% 60%))" }}
          >
            Get In Touch
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full font-medium border border-border hover:border-primary text-foreground transition-all duration-300 flex items-center gap-2"
          >
            <Github size={16} />
            GitHub
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="https://linkedin.com/in/virendra-mankar"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 rounded-full font-medium border border-border hover:border-accent text-foreground hover:text-accent transition-all duration-300 flex items-center gap-2"
          >
            <Linkedin size={16} />
            LinkedIn
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/Virendra_Mankar_Resume.pdf"
            download="Virendra_Mankar_Resume.pdf"
            className="px-7 py-3 rounded-full font-medium border border-accent/50 hover:border-accent text-accent hover:bg-accent/10 transition-all duration-300 flex items-center gap-2"
          >
            <Download size={16} />
            Download CV
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-muted-foreground"
        style={{ zIndex: 4 }}
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown size={18} className="text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
