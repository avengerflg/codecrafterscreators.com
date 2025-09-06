import React from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
}

const paddingVariants = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hover = false,
  padding = "md",
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -2, scale: 1.02 } : undefined}
      className={clsx(
        "bg-white rounded-xl border shadow-sm",
        paddingVariants[padding],
        hover && "transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
};
