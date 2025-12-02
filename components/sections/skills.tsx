"use client";

import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaAws,
  FaCpanel,
  FaGitAlt,
  FaGithub,
  FaMicrosoft,
} from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { SiMongodb, SiMysql, SiGooglecloud, SiPostman } from "react-icons/si";

const getSkillIcon = (skill: string) => {
  const icons: Record<string, JSX.Element> = {
    // Programming Languages
    Python: <FaPython />,
    JavaScript: <FaJs />,
    HTML: <FaHtml5 />,
    CSS: <FaCss3Alt />,

    // Frontend
    React: <FaReact />,

    // Backend
    "Node.js": <FaNodeJs />,
    "Express.js": <SiExpress />,
    "REST APIs": <TbApi />,

    // Database
    MongoDB: <SiMongodb />,
    MySQL: <SiMysql />,

    // Cloud & DevOps
    AWS: <FaAws />,
    GCP: <SiGooglecloud />,
    cPanel: <FaCpanel />,

    // Tools
    Git: <FaGitAlt />,
    GitHub: <FaGithub />,
    Postman: <SiPostman />,
    "Microsoft Office": <FaMicrosoft />,
  };
  return icons[skill] || "⚡";
};

const skillCategories = [
  {
    category: "Programming Languages",
    skills: ["Python", "JavaScript"],
  },
  {
    category: "Frontend",
    skills: ["HTML", "CSS", "React"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs"],
  },
  {
    category: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GCP", "cPanel"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman", "Microsoft Office"],
  },
];

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center text-balance">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              S K I L L
            </span>
            <span className="ml-2">S E T</span>
          </h2>
          <div className="flex justify-center gap-1 mt-4">
            {["S", "K", "I", "L", "L", "S"].map((char, i) => (
              <motion.span
                key={i}
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.1,
                }}
                className="text-slate-600"
              >
                {char}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {skillCategories.map((category) => (
            <motion.div key={category.category} variants={itemVariants}>
              <h3 className="text-lg font-semibold text-cyan-400 mb-4 ml-2">
                {category.category}
              </h3>
              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                variants={containerVariants}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
                    }}
                    className="p-4 rounded-lg border border-slate-700 bg-slate-800/40 backdrop-blur-md hover:border-cyan-500 transition-colors cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/30 to-blue-500/30 flex items-center justify-center group-hover:from-cyan-500/50 group-hover:to-blue-500/50 transition-all text-lg">
                        {getSkillIcon(skill)}
                      </div>
                      <span className="text-sm font-medium text-slate-200">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
