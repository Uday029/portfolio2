import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Code2, Database, Brain, Users } from "lucide-react";

const highlights = [
  { icon: Code2, label: "Full-Stack Dev", desc: "HTML, CSS, JS, React" },
  { icon: Database, label: "Data Science", desc: "Python, ML, Analytics" },
  { icon: Brain, label: "Problem Solver", desc: "DSA & Algorithms" },
  { icon: Users, label: "Team Player", desc: "Leadership & Collaboration" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Parallax decorative orbs */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -left-20 top-20 w-72 h-72 rounded-full bg-primary/5 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute -right-20 bottom-20 w-60 h-60 rounded-full bg-accent/5 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-6 relative" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, type: "spring" }}
            className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono mb-4"
          >
            ABOUT ME
          </motion.span>
          <h2 className="section-heading font-mono">
            LET ME <span className="text-gradient">INTRODUCE</span> MYSELF
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
              I'm a Software Engineering student who loves transforming ideas into reliable,
              scalable products. Over time, I've explored several technologies and found
              my passion in building high-performance systems and intuitive user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              I'm proficient in{" "}
              <span className="text-primary font-mono italic">C++, Python, Java, JavaScript, and SQL</span>{" "}
              — and I enjoy working across both backend and frontend stacks.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My key areas of interest include developing{" "}
              <span className="text-primary font-mono italic">Web Applications, Data Science Solutions,</span>{" "}
              and exploring machine learning to solve real-world problems.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={inView ? { opacity: 1, y: 0, rotate: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: "spring" }}
                whileHover={{
                  scale: 1.08,
                  rotate: 2,
                  boxShadow: "0 10px 40px -10px hsl(var(--primary) / 0.3)",
                }}
                className="glass-card p-6 text-center hover-glow transition-transform cursor-default"
              >
                <motion.div
                  animate={{ y: [0, -4, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                >
                  <item.icon className="mx-auto mb-3 text-primary" size={28} />
                </motion.div>
                <h3 className="font-semibold text-foreground mb-1 font-mono text-sm">{item.label}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
