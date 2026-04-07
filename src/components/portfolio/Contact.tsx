import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Linkedin, Github, Send, ExternalLink } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Phone", value: "+91 8305433947", href: "tel:+918305433947" },
  { icon: Mail, label: "Email", value: "virendramankar7@gmail.com", href: "mailto:virendramankar7@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/virendra-mankar", href: "https://linkedin.com/in/virendra-mankar" },
  { icon: Github, label: "GitHub", value: "github.com/dashboard", href: "https://github.com/dashboard" },
  { icon: MapPin, label: "Location", value: "Pithampur, Madhya Pradesh", href: "#" },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/20 to-background pointer-events-none" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-primary text-sm font-medium tracking-widest uppercase mb-2">Let's talk</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">Get In Touch</h2>
          <div className="section-line w-24 mx-auto mb-6" />
          <p className="text-muted-foreground max-w-lg mx-auto">
            I'm actively looking for opportunities in Data Analytics and Data Science. Feel free to reach out!
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {contacts.map((contact, i) => {
              const Icon = contact.icon;
              return (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="card-glow rounded-xl p-4 bg-card flex items-center gap-4 group cursor-pointer block"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Icon size={16} className="text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{contact.label}</p>
                    <p className="text-sm font-medium text-foreground truncate">{contact.value}</p>
                  </div>
                  {contact.href !== "#" && (
                    <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  )}
                </motion.a>
              );
            })}
          </motion.div>

          {/* CTA Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="card-glow rounded-2xl p-8 bg-card relative overflow-hidden flex flex-col justify-center"
          >
            {/* Decorative */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-5"
              style={{ background: "radial-gradient(circle, hsl(185 100% 50%), transparent)" }} />

            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Send size={24} className="text-primary" />
            </div>
            <h3 className="font-display text-2xl font-bold text-foreground mb-3">Ready to Collaborate?</h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-8">
              Whether you have an internship opportunity, a project idea, or just want to connect — I'd love to hear from you. Let's build something impactful together.
            </p>
            <div className="flex flex-col gap-3">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="mailto:virendramankar7@gmail.com"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-primary-foreground transition-all duration-300 text-sm"
                style={{ background: "linear-gradient(135deg, hsl(185 100% 45%), hsl(185 80% 35%))" }}
              >
                <Mail size={15} />
                Send Email
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href="https://linkedin.com/in/virendra-mankar"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 rounded-xl font-semibold border border-border hover:border-primary/50 text-foreground transition-all duration-300 text-sm"
              >
                <Linkedin size={15} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 0.8 }}
        className="mt-20 text-center text-muted-foreground text-sm border-t border-border pt-8"
      >
        <p>Designed & built  by <span className="text-primary font-medium">Virendra Mankar</span> · {new Date().getFullYear()}</p>
      </motion.div>
    </section>
  );
}
