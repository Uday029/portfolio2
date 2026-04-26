import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code, FileCode, Braces, Coffee, Terminal, Database,
  Globe, BarChart3, Layout, GitBranch, Github as GithubIcon,
  MonitorSmartphone, PieChart, FileSpreadsheet, BookOpen, Cpu,
  Users, Clock, Shield, Lightbulb, Pen
} from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: Code },
      { name: "C++", icon: Braces },
      { name: "Python", icon: Terminal },
      { name: "Java", icon: Coffee },
      { name: "JavaScript", icon: FileCode },
      { name: "SQL", icon: Database },
    ],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      { name: "HTML & CSS", icon: Globe },
      { name: "NumPy", icon: BarChart3 },
      { name: "Pandas", icon: Layout },
      { name: "Matplotlib", icon: PieChart },
      { name: "Scikit-learn", icon: Cpu },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: GitBranch },
      { name: "GitHub", icon: GithubIcon },
      { name: "VS Code", icon: MonitorSmartphone },
      { name: "Power BI", icon: PieChart },
      { name: "MS Excel", icon: FileSpreadsheet },
      { name: "Jupyter Notebook", icon: BookOpen },
      { name: "Hadoop", icon: Database },
      { name: "AutoCAD", icon: Pen },
    ],
  },
  {
    title: "Soft Skills",
    skills: [
      { name: "Problem-Solving", icon: Lightbulb },
      { name: "Time Management", icon: Clock },
      { name: "Leadership", icon: Shield },
      { name: "Adaptability", icon: Users },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6" ref={ref}>
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
            SKILLS
          </motion.span>
          <h2 className="section-heading font-mono">
            PROFESSIONAL <span className="text-gradient">SKILLSET</span>
          </h2>
        </motion.div>

        {skillCategories.map((cat, ci) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: ci * 0.1 }}
            className="mb-12"
          >
            <h3 className="text-xl font-semibold text-gradient mb-6 text-center font-mono">
              {cat.title}
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {cat.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.5, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: si * 0.06, type: "spring", stiffness: 200 }}
                  whileHover={{
                    scale: 1.15,
                    y: -8,
                    boxShadow: "0 12px 30px -8px hsl(var(--primary) / 0.4)",
                  }}
                  className="flex items-center gap-2 px-5 py-3 rounded-full glass-card border border-primary/20 text-foreground font-mono text-sm cursor-default transition-all"
                >
                  <motion.div
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: si * 0.3 }}
                  >
                    <skill.icon size={16} className="text-primary" />
                  </motion.div>
                  {skill.name}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
