import { motion } from "framer-motion";

const shapes = [
  { size: 120, x: "5%", y: "15%", delay: 0, duration: 20, opacity: 0.06, color: "primary" },
  { size: 80, x: "85%", y: "25%", delay: 2, duration: 25, opacity: 0.05, color: "accent" },
  { size: 60, x: "70%", y: "60%", delay: 4, duration: 18, opacity: 0.04, color: "primary" },
  { size: 100, x: "15%", y: "75%", delay: 1, duration: 22, opacity: 0.05, color: "accent" },
  { size: 40, x: "50%", y: "40%", delay: 3, duration: 16, opacity: 0.06, color: "primary" },
  { size: 70, x: "90%", y: "80%", delay: 5, duration: 24, opacity: 0.04, color: "accent" },
];

const FloatingElements = () => (
  <div className="fixed inset-0 pointer-events-none -z-5 overflow-hidden">
    {shapes.map((s, i) => (
      <motion.div
        key={i}
        className={`absolute rounded-full ${s.color === "primary" ? "bg-primary" : "bg-accent"}`}
        style={{
          width: s.size,
          height: s.size,
          left: s.x,
          top: s.y,
          opacity: s.opacity,
          filter: `blur(${s.size / 3}px)`,
        }}
        animate={{
          y: [0, -30, 10, -20, 0],
          x: [0, 15, -10, 20, 0],
          scale: [1, 1.1, 0.95, 1.05, 1],
        }}
        transition={{
          duration: s.duration,
          delay: s.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}

    {/* Grid lines */}
    <div className="absolute inset-0 opacity-[0.02]"
      style={{
        backgroundImage: `
          linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
          linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
      }}
    />
  </div>
);

export default FloatingElements;
