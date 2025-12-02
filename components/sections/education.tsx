"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    id: 1,
    institution: "SNS COLLEGE OF ENGINEERING",
    degree: "B.Tech in Information Technology",
    cgpa: "8.66",
    duration: "Nov 2021 – May 2025",
    location: "Coimbatore, India",
    icon: GraduationCap,
  },
  {
    id: 2,
    institution: "ADITYA VIDYASHRAM",
    degree: "Grade XII",
    percentage: "90.8%",
    duration: "May 2021",
    location: "Puducherry, India",
    icon: Award,
  },
  {
    id: 3,
    institution: "AMRITA VIDYALAYAM",
    degree: "Grade X",
    percentage: "85%",
    duration: "Apr 2019",
    location: "Coimbatore, India",
    icon: Award,
  },
];

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="education" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              E D U C A T I O N
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 relative"
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-violet-500" />

          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={edu.id}
                variants={itemVariants}
                whileHover={{
                  x: 12,
                  boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
                }}
                className="p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all ml-24"
              >
                {/* Timeline dot */}
                <div className="absolute right-2 top-6 w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-4 border-slate-950 flex items-center justify-center -translate-x-1/2">
                  <Icon size={20} className="text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  {edu.degree}
                </h3>

                <p className="text-cyan-400 font-semibold mb-3">
                  {edu.institution}
                </p>

                <div className="flex flex-col gap-2 text-sm text-slate-400">
                  {edu.cgpa && (
                    <p>
                      <span className="text-slate-300 font-semibold">
                        CGPA:
                      </span>{" "}
                      {edu.cgpa}
                    </p>
                  )}
                  {edu.percentage && (
                    <p>
                      <span className="text-slate-300 font-semibold">
                        Percentage:
                      </span>{" "}
                      {edu.percentage}
                    </p>
                  )}
                  {edu.duration && <p>{edu.duration}</p>}
                  {edu.location && <p>{edu.location}</p>}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
