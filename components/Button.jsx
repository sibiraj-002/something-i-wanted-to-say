"use client";

import { motion } from "framer-motion";

export default function Button({ children, onClick, variant = "primary" }) {
  const btnClass = variant === "secondary" ? "btn btn-secondary" : "btn btn-primary";

  return (
    <motion.button
      type="button"
      onClick={onClick}
      className={btnClass}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.button>
  );
}
