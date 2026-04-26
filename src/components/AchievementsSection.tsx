import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, ExternalLink } from "lucide-react";
import innovatexImg from "@/assets/innovatex.jpg";
import hackwiththvertosImg from "@/assets/hackwithvertos.jpeg";

const achievements = [
  {
    title: "InnovateX – 24 Hours Hackathon",
    org: "PentaoMnia Club, LPU",
    date: "March 2024",
    description: "Cleared Round 1 in a 24-hour coding hackathon organized by Student Organization PentaoMnia, LPU.",
    link: "https://www.linkedin.com/posts/udayveer-singh-chaudhary-a706b928a_hackathonchampions-pentaomniaclub-lpu-activity-7184263980842987520-dwAG/?utm_source=share&utm_medium=member_android",
    image: innovatexImg,
  },
  {
    title: "HackWithVertos 1.0 – 24 Hours Hackathon",
    org: "Echo Club, LPU",
    date: "February 2024",
    description: "Successfully completed a 24-hour hackathon and secured a position in the Top 10 among participants.",
    link: "https://www.linkedin.com/posts/udayveer-singh-chaudhary-a706b928a_hackathonveteran-echoclub-codingallnight-activity-7184288314961588225-EGs6/?utm_source=share&utm_medium=member_android",
    image: hackwiththvertosImg,
  },
];

const AchievementsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="achievements" className="py-24">
      <div className="container mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading font-mono">
            MY <span className="text-gradient">ACHIEVEMENTS</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-8">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="glass-card overflow-hidden hover-glow hover:scale-[1.01] transition-all group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={ach.image}
                  alt={ach.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Trophy className="text-primary" size={24} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-foreground font-mono">{ach.title}</h3>
                      <a href={ach.link} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0">
                        <ExternalLink size={14} />
                      </a>
                    </div>
                    <p className="text-sm text-accent">{ach.org}</p>
                    <p className="text-sm text-muted-foreground mt-2">{ach.description}</p>
                    <span className="text-xs text-primary font-mono mt-2 inline-block">{ach.date}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
