"use client";
import { motion, useAnimation, Variants } from "framer-motion";
import { useEffect, useRef } from "react";

interface MotionCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay },
  }),
};

const MotionCard: React.FC<MotionCardProps> = ({ children, className = "", delay = 0 }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start("visible");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      custom={delay}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionCard;
