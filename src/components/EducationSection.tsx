import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "B.Tech - Computer Science & Engineering",
    institution: "Lovely Professional University, Punjab",
    period: "August 2023 – Present",
    grade: "CGPA: 7.26",
  },
  {
    degree: "Intermediate (12th)",
    institution: "Nehru Senior Secondary School, Mandi Dabwali, Haryana",
    period: "April 2021 – March 2022",
    grade: "Percentage: 84.6%",
  },
  {
    degree: "Matriculation (10th)",
    institution: "Adarsh Senior Secondary School, Lakhuana, Haryana",
    period: "April 2019 – March 2020",
    grade: "Percentage: 90.8%",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 relative overflow-hidden">
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
            EDUCATION
          </motion.span>
          <h2 className="section-heading font-mono">
            MY <span className="text-gradient">EDUCATION</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto relative">
          {/* Animated timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border/20">
            <motion.div
              className="w-full bg-gradient-to-b from-primary to-accent"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-8">
            {education.map((edu, i) => (
              <motion.div
                key={edu.degree}
                initial={{ opacity: 0, x: 40 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.2, type: "spring" }}
                className="glass-card p-6 flex gap-4 hover-glow hover:scale-[1.01] transition-all ml-12 relative"
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute -left-[3.25rem] top-7 w-4 h-4 rounded-full bg-primary border-4 border-background"
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: i * 0.2 + 0.3, type: "spring" }}
                />

                <motion.div
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <GraduationCap className="text-primary" size={24} />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-foreground font-mono">{edu.degree}</h3>
                  <p className="text-sm text-accent">{edu.institution}</p>
                  <div className="flex gap-4 mt-2">
                    <span className="text-xs text-muted-foreground font-mono">{edu.period}</span>
                    <motion.span
                      className="text-xs text-primary font-mono"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: i * 0.2 + 0.5 }}
                    >
                      {edu.grade}
                    </motion.span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
