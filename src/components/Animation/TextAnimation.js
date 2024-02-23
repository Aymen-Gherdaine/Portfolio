"use client";
import { motion } from "framer-motion";

const TextAnimation = ({ text, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
    >
      <h1 className={className}>{text}</h1>
    </motion.div>
  );
};

export default TextAnimation;
