"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    url: "https://github.com/kolaapravin1",
    color: "hover:text-slate-300 hover:border-slate-400",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    url: "https://linkedin.com/in/kolaa-pravin",
    color: "hover:text-blue-400 hover:border-blue-400",
  },
  {
    icon: Mail,
    label: "Email",
    url: "mailto:kolaapravin.work@gmail.com",
    color: "hover:text-cyan-400 hover:border-cyan-400",
  },
  {
    icon: Twitter,
    label: "X",
    url: "https://twitter.com/kolaapravin",
    color: "hover:text-slate-300 hover:border-slate-400",
  },
];

export default function SocialLinks() {
  return (
    <section className="relative py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-slate-400 font-semibold"
        >
          Let's connect
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex gap-6"
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`w-12 h-12 rounded-full border border-slate-600 flex items-center justify-center text-slate-400 transition-all ${social.color}`}
              >
                <Icon size={20} />
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
