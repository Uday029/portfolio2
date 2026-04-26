import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, ExternalLink } from "lucide-react";

const trainings = [
  {
    title: "C++ Training",
    institution: "Lovely Professional University",
    period: "May 2025 – July 2025",
    certificateLink: "https://files.lpu.in/umsweb/skilldevcourse/SkillDevelopmentCertificates/12320106_836_20_08_2025.pdf",
    points: [
      "Completed academic training in C++ focusing on OOP concepts and problem-solving techniques.",
      "Implemented file handling and class-based structures for structured data management.",
      "Developed Bank Management System applying advanced C++ concepts in a real-world scenario.",
    ],
    tech: ["C++", "OOP", "File Handling"],
  },
  {
    title: "Web Development Training",
    institution: "InternsElite",
    period: "June 2024 – August 2024",
    certificateLink: "https://drive.google.com/drive/folders/1hyxq9P_B5C9OGB_H1EmlGm22gq_rgrcW",
    points: [
      "Completed industrial training in web development covering HTML, CSS, JavaScript, and UI/UX fundamentals.",
      "Built a responsive e-commerce website implementing modern front-end design and development practices.",
      "Gained practical experience in web page structure, styling, and interactive UI development.",
    ],
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
  },
];

const TrainingSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="training" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-mono">
            MY <span className="text-gradient">TRAINING</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Hands-on learning experiences that shaped my technical foundation
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto relative">
          <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20 md:left-1/2" />

          {trainings.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative mb-12 pl-16 md:pl-0 ${
                i % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
              }`}
            >
              <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary glow md:left-[calc(50%-10px)]">
                <BookOpen size={12} className="text-primary-foreground absolute top-[4px] left-[4px]" />
              </div>

              <div className="glass-card p-6 hover-glow hover:scale-[1.01] transition-all">
                <span className="text-xs text-primary font-mono">{t.period}</span>
                <h3 className="text-lg font-semibold text-foreground mt-1">{t.title}</h3>
                <p className="text-sm text-accent mb-3">{t.institution}</p>
                <ul className="space-y-2">
                  {t.points.map((p, pi) => (
                    <li key={pi} className="text-sm text-muted-foreground flex gap-2">
                      <span className="text-primary mt-1">•</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {t.tech.map((tech) => (
                    <span key={tech} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={t.certificateLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm text-primary hover:text-accent transition-colors font-mono"
                >
                  <ExternalLink size={14} /> View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrainingSection;
