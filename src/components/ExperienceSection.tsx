import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    title: "Web Development Intern",
    company: "InternsElite",
    period: "June 2024 – August 2024",
    points: [
      "Completed industrial training covering HTML, CSS, JavaScript, and UI/UX fundamentals.",
      "Built a responsive e-commerce website with modern front-end practices.",
      "Gained practical experience in interactive user interface development.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-mono">
            MY <span className="text-gradient">EXPERIENCE</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 md:left-1/2" />

          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company + exp.period}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 pl-16 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary glow md:left-[calc(50%-10px)]">
                <Briefcase size={12} className="text-primary-foreground absolute top-[4px] left-[4px]" />
              </div>

              <div className="glass-card p-6 hover-glow hover:scale-[1.01] transition-all">
                <span className="text-xs text-primary font-mono">{exp.period}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{exp.title}</h3>
                <p className="text-sm text-accent mb-3">{exp.company}</p>
                <ul className="space-y-2">
                  {exp.points.map((p, pi) => (
                    <li key={pi} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
