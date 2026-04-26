import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Award, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const certificates = [
  {
    title: "Java Programming Language",
    issuer: "iamneo - An NIIT Venture",
    date: "May 2025",
    credentialId: "",
    link: "https://lpucolab438.examly.io/certificate/U2FsdGVkX182J9g%2BMjV1pbaUMPAdLHr7kZVoSWiWKhI%3D",
    skills: ["Java"],
  },
  {
    title: "C Programming Language",
    issuer: "Cipher School",
    date: "May 2024",
    credentialId: "CS2024-10521",
    link: "https://cipher-other-assets.s3.ap-south-1.amazonaws.com/certificates/saabchoudhary241%40gmail.com_C%20Programming%20Language_CS2024-10521",
    skills: ["C"],
  },
  {
    title: "7 Days Bootcamp – Deep Learning & Deployment on Web",
    issuer: "Devtown",
    date: "February 2024",
    credentialId: "",
    link: "https://www.cert.devtown.in/verify/uFap1",
    skills: ["Deep Learning", "Web Development"],
  },
  {
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    date: "November 2023",
    credentialId: "fcc78e00a0c",
    link: "https://www.freecodecamp.org/certification/fcc78e00a0c-d5b1-4e4d-9fa1-6d002e2dc53f/responsive-web-design",
    skills: ["HTML", "CSS", "Responsive Design"],
  },
  {
    title: "Object Oriented Programming using C++",
    issuer: "LPU School of Computer Science Engineering",
    date: "August 2025",
    credentialId: "409476",
    link: "#",
    skills: ["C++"],
  },
  {
    title: "Computational Theory: Language Principle & Finite Automata Theory",
    issuer: "Skillsoft",
    date: "August 2025",
    credentialId: "158092390",
    link: "#",
    skills: [],
  },
  {
    title: "Data Structure and Algorithm",
    issuer: "iamneo - An NIIT Venture",
    date: "December 2024",
    credentialId: "25cM6Aj0ck6bl50m8",
    link: "#",
    skills: ["Algorithms", "Data Structures"],
  },
  {
    title: "Learn English: Beginning Grammar",
    issuer: "University of California, Irvine | Coursera",
    date: "May 2024",
    credentialId: "NRY9KW45G78Z",
    link: "#",
    skills: ["English"],
  },
  {
    title: "Software Development Processes and Methodologies",
    issuer: "University of Minnesota | Coursera",
    date: "April 2024",
    credentialId: "RRZX2QQW7DS8",
    link: "#",
    skills: ["Software Development", "Methodologies"],
  },
  {
    title: "Software Engineering: Implementation and Testing",
    issuer: "The Hong Kong University of Science and Technology",
    date: "April 2024",
    credentialId: "A4TW9HUCYVZ3",
    link: "#",
    skills: ["Software Engineering"],
  },
  {
    title: "Software Development And Engineering Excellence Master Course",
    issuer: "Udemy",
    date: "March 2024",
    credentialId: "UC-d8fcc997-5402-4993-be7a-84ea1bdb2815",
    link: "#",
    skills: ["Software Development"],
  },
  {
    title: "UX/UI Design",
    issuer: "oll.co",
    date: "February 2024",
    credentialId: "12408",
    link: "#",
    skills: ["UX/UI Design"],
  },
  {
    title: "Git and GitHub",
    issuer: "Changemakers of Amazon",
    date: "February 2024",
    credentialId: "",
    link: "#",
    skills: ["Git", "GitHub"],
  },
  {
    title: "Web Development Wizardry: HTML & CSS",
    issuer: "Udemy",
    date: "January 2024",
    credentialId: "UC-bb041296-a30d-4718-a235-5d041e5cf821",
    link: "#",
    skills: ["HTML", "CSS"],
  },
  {
    title: "Python Programming Languages",
    issuer: "MindLuster",
    date: "December 2023",
    credentialId: "14195904959",
    link: "#",
    skills: ["Python"],
  },
  {
    title: "Forex Exchange Trading",
    issuer: "Udemy",
    date: "October 2023",
    credentialId: "UC-9a975a13-1183-4434-8bba-4f57a0e52ccb",
    link: "#",
    skills: ["FX Trading"],
  },
];

const INITIAL_COUNT = 6;

const CertificatesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showAll, setShowAll] = useState(false);

  const visible = showAll ? certificates : certificates.slice(0, INITIAL_COUNT);

  return (
    <section id="certificates" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-mono">
            MY <span className="text-gradient">CERTIFICATES</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            {certificates.length} certifications across multiple domains
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((cert, i) => (
            <motion.a
              key={cert.title + cert.issuer}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: Math.min(i, 5) * 0.08 }}
              whileHover={{ scale: 1.03, y: -4 }}
              className="glass-card p-5 flex gap-4 items-start hover-glow transition-all group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Award className="text-primary" size={20} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-foreground text-sm leading-tight font-mono line-clamp-2">{cert.title}</h3>
                <p className="text-xs text-accent mt-1">{cert.issuer}</p>
                <span className="text-xs text-muted-foreground font-mono">{cert.date}</span>
                {cert.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {cert.skills.slice(0, 3).map((s) => (
                      <span key={s} className="text-[10px] px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                        {s}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
            </motion.a>
          ))}
        </div>

        {certificates.length > INITIAL_COUNT && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg glass hover-glow hover:scale-105 transition-all text-foreground font-mono text-sm"
            >
              {showAll ? (
                <>Show Less <ChevronUp size={16} /></>
              ) : (
                <>Show All {certificates.length} Certificates <ChevronDown size={16} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CertificatesSection;
