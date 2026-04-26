import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { TypeAnimation } from "react-type-animation";
import { Download, Mail, Linkedin, Github } from "lucide-react";
import HeroScene from "./HeroScene";
import profilePhoto from "@/assets/profile-photo.jpeg";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const textY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const sceneY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
  <section id="home" ref={sectionRef} className="min-h-screen flex items-center relative pt-20">
    <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      {/* Text */}
      <motion.div
        style={{ y: textY, opacity }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-6 mb-6">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative"
          >
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-primary/50 shadow-lg shadow-primary/20">
              <img src={profilePhoto} alt="Udayveer Singh Chaudhary" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
          </motion.div>
          <div>
            <p className="text-muted-foreground text-lg mb-1 font-mono">Hi There! 👋</p>
            <h1 className="text-3xl md:text-5xl font-bold font-mono">
              I'M <span className="text-gradient">UDAYVEER</span>
            </h1>
          </div>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-6 font-mono">
          SINGH CHAUDHARY
        </h2>
        <div className="text-xl md:text-2xl text-primary mb-8 h-10 font-mono">
          <TypeAnimation
            sequence={[
              "Web Developer",
              2000,
              "Data Science Enthusiast",
              2000,
              "Machine Learning Explorer",
              2000,
              "Problem Solver",
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-muted-foreground max-w-md mb-8 leading-relaxed">
          B.Tech CSE student at Lovely Professional University, passionate about building
          impactful software and exploring data-driven solutions.
        </p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover-glow hover:scale-105 transition-transform font-mono text-sm"
          >
            <Mail size={18} /> CONTACT ME
          </a>
          <a
            href="/Udayveer_Singh_Chaudhary.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover-glow hover:scale-105 transition-transform text-foreground font-mono text-sm"
          >
            <Download size={18} /> DOWNLOAD CV
          </a>
          <a
            href="https://www.linkedin.com/in/udayveer-singh-chaudhary-a706b928a/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg glass hover-glow hover:scale-105 transition-transform text-foreground"
          >
            <Linkedin size={18} />
          </a>
          <a
            href="https://github.com/Uday029"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-3 rounded-lg glass hover-glow hover:scale-105 transition-transform text-foreground"
          >
            <Github size={18} />
          </a>
        </div>
      </motion.div>

      {/* 3D */}
      <motion.div
        style={{ y: sceneY }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="h-[400px] md:h-[500px]"
      >
        <HeroScene />
      </motion.div>
    </div>
  </section>
  );
};

export default HeroSection;
