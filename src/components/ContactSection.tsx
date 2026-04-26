import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      window.location.href = `mailto:udaychaudhary0029@gmail.com?subject=Portfolio Contact from ${form.name}&body=${form.message}`;
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-mono">
            FIND ME <span className="text-gradient">ON</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Feel free to <span className="text-primary">connect</span> with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm always open to discussing new projects, opportunities, or collaborations. Feel free to reach out!
            </p>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "udaychaudhary0029@gmail.com", href: "mailto:udaychaudhary0029@gmail.com" },
                { icon: Phone, label: "+91-9053551470", href: "tel:+919053551470" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/udayveer-singh-chaudhary-a706b928a/" },
                { icon: Github, label: "github.com/Uday029", href: "https://github.com/Uday029" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <item.icon size={18} className="text-primary" />
                  </div>
                  <span className="font-mono text-sm">{item.label}</span>
                </a>
              ))}
            </div>

            <div className="flex gap-4 pt-4">
              {[
                { icon: Github, href: "https://github.com/Uday029" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/udayveer-singh-chaudhary-a706b928a/" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full glass-card border border-primary/20 flex items-center justify-center text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <input
                    type={field === "email" ? "email" : "text"}
                    placeholder={field === "name" ? "Your Name" : "Your Email"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition font-mono text-sm"
                  />
                  {errors[field] && <p className="text-xs text-destructive mt-1">{errors[field]}</p>}
                </div>
              ))}
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary/50 border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition resize-none font-mono text-sm"
                />
                {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium flex items-center justify-center gap-2 hover-glow hover:scale-[1.02] transition-transform font-mono"
              >
                <Send size={18} /> SEND MESSAGE
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
