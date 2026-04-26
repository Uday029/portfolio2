import { motion } from "framer-motion";

const SectionDivider = () => (
  <div className="flex items-center justify-center py-4">
    <motion.div
      className="flex items-center gap-3"
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/40" />
      <motion.div
        className="w-2 h-2 rounded-full bg-primary/60"
        animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/40" />
    </motion.div>
  </div>
);

export default SectionDivider;
