import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

import imgStudentPrediction from "@/assets/project-student-prediction.jpg";
import imgHospitalEda from "@/assets/project-hospital-eda.jpg";
import imgHrAnalytics from "@/assets/project-hr-analytics.jpg";
import imgDiversity from "@/assets/project-diversity.jpg";
import imgBankManagement from "@/assets/project-bank-management.jpg";
import imgEcommerce from "@/assets/project-ecommerce.jpg";

const projects = [
  {
    title: "Student Outcome Prediction",
    description: "End-to-end ML model predicting student outcomes (Graduate, Dropout, Enrolled). Compared multiple models, deployed Streamlit dashboard with SHAP explainability.",
    tech: ["Python", "ML", "Streamlit", "SHAP", "Pandas"],
    github: "https://github.com/Uday029/Student-Outcome-Prediction",
    demo: "https://student-outcome-prediction-iopbem5ktkjq7hd5dgrc64.streamlit.app",
    image: imgStudentPrediction,
  },
  {
    title: "Hospital Inpatient EDA",
    description: "Exploratory data analysis on real-world hospital inpatient data. Uncovered sex-based distribution, county-level trends, and urban vs rural patterns.",
    tech: ["Python", "Pandas", "Seaborn", "Matplotlib", "Jupyter"],
    github: "https://github.com/Uday029/Exploratoray_Data_Analysis",
    demo: null,
    image: imgHospitalEda,
  },
  {
    title: "HR Analytics Dashboard",
    description: "Excel-based HR analytics dashboard analyzing employee performance, satisfaction, and turnover using pivot tables, conditional formatting, and dynamic charts.",
    tech: ["Excel", "Pivot Tables", "Data Analysis", "Charts"],
    github: "https://github.com/Uday029/HR-Analytics-Dashboard",
    demo: null,
    image: imgHrAnalytics,
  },
  {
    title: "Diversity & Inclusion Analytics",
    description: "Power BI dashboard analyzing hiring, promotion, performance & turnover with gender diversity focus. Built interactive KPIs using DAX and Power Query.",
    tech: ["Power BI", "DAX", "Power Query", "Excel"],
    github: "https://github.com/Uday029/Diversity-Inclusion-Analytics",
    demo: "https://app.powerbi.com/view?r=eyJrIjoiNjM0ZTAxYTctZDhkZS00OWI0LWE2YWYtMWVkYjQ2M2Q0ZWNlIiwidCI6ImUxNGU3M2ViLTUyNTEtNDM4OC04ZDY3LThmOWYyZTJkNWE0NiIsImMiOjEwfQ%3D%3D",
    image: imgDiversity,
  },
  {
    title: "Bank Management System",
    description: "C++ system managing account creation, deposits, withdrawals, and balance inquiries using OOP concepts and file handling for persistent data storage.",
    tech: ["C++", "OOP", "File Handling"],
    github: "https://github.com/Uday029/Bank-Management-System",
    demo: null,
    image: imgBankManagement,
  },
  {
    title: "E-commerce Website",
    description: "Responsive e-commerce website with product pages, shopping cart functionality, and structured navigation built during web development internship.",
    tech: ["HTML", "CSS", "JavaScript", "UI/UX"],
    github: "https://github.com/Uday029/E-commerce-Website-",
    demo: "https://e-commerce-website-blue-chi.vercel.app",
    image: imgEcommerce,
  },
];

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const cardRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y }}
      initial={{ opacity: 0, y: 60, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      whileHover={{ scale: 1.03, rotateY: 2 }}
      className="glass-card group overflow-hidden hover-glow transition-all duration-300"
    >
      <div className="h-44 relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          width={896}
          height={512}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-foreground mb-2 font-mono">{project.title}</h3>
        <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tech.map((t) => (
            <span key={t} className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
              {t}
            </span>
          ))}
        </div>
        <div className="flex gap-3 pt-2 border-t border-border/20">
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <Github size={16} /> Code
          </a>
          {project.demo && (
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors">
              <ExternalLink size={16} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
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
            PORTFOLIO
          </motion.span>
          <h2 className="section-heading font-mono">
            MY <span className="text-gradient">PROJECTS</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Each project is a unique piece of development 🧩
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
