"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center tracking-widest">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              C O N T A C T
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {/* Phone */}
          <motion.a
            href="tel:+917010696214"
            whileHover={{
              y: -8,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4 mx-auto">
              <Phone size={28} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Phone</h3>
            <p className="text-cyan-400 font-semibold">+91 70106 96214</p>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:kolaapravin.work@gmail.com"
            whileHover={{
              y: -8,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4 mx-auto">
              <Mail size={28} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Email</h3>
            <p className="text-cyan-400 font-semibold text-sm break-all">
              kolaapravin.work@gmail.com
            </p>
          </motion.a>

          {/* Location */}
          <motion.a
            href="https://www.google.com/maps/place/Puducherry"
            whileHover={{
              y: -8,
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
            }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            className="p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-cyan-500/10 border border-cyan-500/30 mb-4 mx-auto">
              <MapPin size={28} className="text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">Location</h3>
            <p className="text-cyan-400 font-semibold">Puducherry, India</p>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
