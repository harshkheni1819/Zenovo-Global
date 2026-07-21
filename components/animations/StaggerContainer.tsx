"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
}

export default function StaggerContainer({
  children,
  className = "",
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
          },
        },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}