"use client";

import { motion } from "framer-motion";
import { Briefcase, ExternalLink } from "lucide-react";

const experience = [
  {
    id: 1,
    company: "MindFulAI Technologies Pvt Ltd.",
    role: "Technical and Operational Manager Trainee",
    duration: "Jan 2024 – May 2025",
    responsibilities: [
      "Managed the daily operations of a team of 20 employees",
      "Organized workflow by assigning responsibilities to departments and teams",
      "Advanced the plans and products developed within the company, increasing productivity",
      "Implemented backend solutions for various product lines in Python and MERN stack",
    ],
    linkedinUrl: "https://www.linkedin.com/in/kolaa-pravin/",
  },
];

export default function Experience() {
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
    <section id="experience" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center tracking-widest">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              W O R K E X P E R I E N C E
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              variants={itemVariants}
              whileHover={{
                x: 8,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
              }}
              className="p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all relative"
            >
              {/* Timeline indicator */}
              <div className="absolute right-0 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 border-2 border-slate-950 flex items-center justify-center">
                <Briefcase size={18} className="text-white" />
              </div>

              {index < experience.length - 1 && (
                <div className="absolute left-11 top-16 w-0.5 h-24 bg-gradient-to-b from-cyan-500 to-transparent" />
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-100 mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-cyan-400 font-semibold">{exp.company}</p>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-6">{exp.duration}</p>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i} className="flex gap-3 text-slate-300">
                    <span className="text-cyan-400 font-bold mt-0.5">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>

              {/* LinkedIn link */}
              <motion.a
                href={exp.linkedinUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                View on LinkedIn
                <ExternalLink size={14} />
              </motion.a>
              <motion.a
                href="https://www.mindfulai.co.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-6 py-2 text-sm font-semibold text-slate-400 border border-slate-600 rounded-lg hover:border-slate-500 transition-all"
              >
                Company Website
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
