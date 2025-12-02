"use client";

import { motion } from "framer-motion";
import { FileText, ExternalLink, Clock } from "lucide-react";

const publications = [
  {
    id: 1,
    title: "AI-POWERED TRAFFIC MANAGEMENT SYSTEM USING YOLO",
    publisher: "Institute of Electrical and Electronics Engineers (IEEE)",
    date: "Nov 2024",
    status: "ACCEPTED",
    url: "https://ieee.atyponrex.com/api/rex/v2/submissionupload/tenant/2/submission/6ead33f4-2d59-4820-9467-82290cdcb049/content/7cdc0bd7-c4b1-4293-8b3e-80213c63a54a/download",
    downloadUrl: "#",
    badge: "📰",
  },
  {
    id: 2,
    title: "Smart Git Repo Debugger with AI-Powered Reviews",
    publisher: "YMER",
    date: "Apr 2025",
    status: "PUBLISHED",
    url: "https://ymerdigital.com/uploads/MER2404M9.pdf",
    downloadUrl: "#",
    badge: "📄",
  },
];

export default function Publications() {
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
    <section id="publications" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              P U B L I C A T I O N S
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              variants={itemVariants}
              whileHover={{
                x: 8,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
              }}
              className="p-6 rounded-xl border border-slate-700 bg-gradient-to-r from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className="text-4xl flex-shrink-0 mt-2">{pub.badge}</div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-100 mb-2">
                    {pub.title}
                  </h3>

                  <p className="text-slate-400 mb-3">{pub.publisher}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-400">
                      <Clock size={16} />
                      {pub.date}
                    </div>
                    <span
                      className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        pub.status === "PUBLISHED"
                          ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                          : "bg-yellow-500/10 text-yellow-400 border border-yellow-500/30"
                      }`}
                    >
                      {pub.status}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-3">
                    <motion.a
                      href={pub.url}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
                    >
                      <FileText size={16} />
                      View Publication
                      <ExternalLink size={14} />
                    </motion.a>
                    {pub.status === "PUBLISHED"}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
