"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Code2 } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Smart Traffic Management System using YOLO",
    year: "2024",
    description:
      "Developed a traffic management system using YOLO and Python for real-time vehicle detection, optimizing traffic signal timers based on live video analysis with OpenCV for efficient image processing in varying conditions.",
    tech: ["Python", "YOLO", "OpenCV", "Computer Vision", "Real-time Systems"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    title: "OEE Calculator using Camera and Python",
    year: "2024",
    description:
      "Developed an OEE calculator in Python with OpenCV to monitor human efficiency by tracking activities via camera data, and applying image processing to accurately detect defect products.",
    tech: [
      "MERN Stack",
      "Python",
      "OpenCV",
      "OEE",
      "Image Processing",
      "Automation",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    title: "Smart Git Repo Debugger with AI-Powered Builder",
    year: "2025",
    description:
      "Developed a website which uses Gemini Pro 2.2 to build app source codes on a given prompt. Can be used to build websites, basic web applications with responsiveness without a backend. Also analyses any GitHub link to check any issues.",
    tech: [
      "MERN Stack",
      "Gemini Pro 2.2",
      "Web App Builder",
      "GitHub Integration",
      "AI Code Review",
    ],
    github: "#",
    demo: "#",
  },
];

export default function Projects() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="projects" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center tracking-widest">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              P R O J E C T S
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
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{
                boxShadow: "0 0 40px rgba(34, 211, 238, 0.2)",
              }}
              className="p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-md hover:border-cyan-500/50 transition-all overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-transparent pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-cyan-400 font-semibold">
                      {project.year}
                    </p>
                  </div>
                  <Code2 size={28} className="text-cyan-400" />
                </div>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-xs font-semibold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
