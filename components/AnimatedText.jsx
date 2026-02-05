"use client";

import { motion } from "framer-motion";

const sizeClasses = {
    base: "proposal-text proposal-text-lg",
    lg: "proposal-text proposal-text-lg",
    xl: "proposal-text proposal-text-xl",
    "2xl": "proposal-text proposal-text-2xl",
};

export default function AnimatedText({
    children,
    delay = 0,
    className = "",
    size = "base",
    duration = 0.8,
}) {
    return (
        <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{
                duration,
                delay,
                ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className={`${sizeClasses[size] || sizeClasses.base} ${className}`}
        >
            {children}
        </motion.p>
    );
}
