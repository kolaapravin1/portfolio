"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PageLoader() {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => {
        if (prev >= 100) return 100;
        return prev + Math.random() * 25;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 flex items-center justify-center z-50"
    >
      {/* Animated background glow */}
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(34, 211, 238, 0.3)",
            "0 0 40px rgba(168, 85, 247, 0.3)",
            "0 0 20px rgba(34, 211, 238, 0.3)",
          ],
        }}
        transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
        className="absolute inset-0"
      />

      <motion.div className="relative flex flex-col items-center gap-8">
        {/* Circular loader */}
        <div className="relative w-32 h-32">
          <motion.svg
            className="absolute inset-0"
            viewBox="0 0 100 100"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="8"
              strokeDasharray="283"
              strokeDashoffset="0"
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                <stop offset="50%" stopColor="rgb(168, 85, 247)" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" />
              </linearGradient>
            </defs>
          </motion.svg>

          {/* Center text */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center">
              <motion.h2
                className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent"
                animate={{ letterSpacing: [0, 2, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Kolaa
              </motion.h2>
            </div>
          </motion.div>
        </div>

        {/* Percentage counter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <p className="text-sm text-cyan-400 font-mono">
            {Math.round(percentage)}%
          </p>
          <p className="text-xs text-slate-400 mt-2">
            Might be your network😂..
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
