"use client";

import React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function GetInTouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    projectType: "Web App",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  // isSubmitted === permanently submitted for this page-load (resend only after refresh)
  const [isSubmitted, setIsSubmitted] = useState(false);
  // transient UI flag used to play a short tick animation
  const [showTick, setShowTick] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitted) return; // prevent resending until page refresh

    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok || !json.success) {
        // keep form enabled on failure so user can retry
        console.error("Failed to send message", json);
        alert("Failed to send message. Please try again later.");
        setIsSending(false);
        return;
      }

      // permanent submit lock for this page-load (resend only after refresh)
      setIsSubmitted(true);
      // play a short tick animation
      setShowTick(true);
      setTimeout(() => setShowTick(false), 1500);

      // keep formData cleared but since isSubmitted is true, submit is disabled until refresh
      setFormData({
        name: "",
        email: "",
        subject: "",
        projectType: "Web App",
        message: "",
      });
    } catch (err) {
      console.error(err);
      alert("An unexpected error occurred. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="get-in-touch" className="relative py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              G E T I N T O U C H
            </span>
          </h2>
          <p className="text-center text-slate-400 mt-4">
            Have something to speak? Let's collaborate!
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={handleSubmit}
          // container must be position:relative for the floating tick overlay
          className="relative group p-8 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md space-y-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Subject */}
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors"
                placeholder="Project subject"
              />
            </motion.div>

            {/* Request Type */}
            <motion.div whileHover={{ y: -2 }}>
              <label className="block text-sm font-semibold text-slate-300 mb-2">
                Request Type
              </label>
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option>Project - Web App</option>
                <option>Project - Cloud</option>
                <option>Work</option>
                <option>Other</option>
              </select>
            </motion.div>
          </div>

          {/* Message */}
          <motion.div whileHover={{ y: -2 }}>
            <label className="block text-sm font-semibold text-slate-300 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 rounded-lg bg-slate-800/50 border border-slate-700 text-slate-100 placeholder-slate-500 focus:border-cyan-500 focus:outline-none transition-colors resize-none"
              placeholder="Tell me more..."
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
            }}
            whileTap={{ scale: 0.95 }}
            className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-shadow ${
              isSubmitted ? "opacity-60 cursor-not-allowed" : ""
            }`}
            disabled={isSubmitted || isSending}
          >
            <Send size={18} />
            {isSending
              ? "Sending..."
              : isSubmitted
              ? "Submitted"
              : "Send Message"}
          </motion.button>

          {/* Success Message */}
          {/* Transient success overlay (tick animation) */}
          {showTick && (
            <motion.div
              initial={{ scale: 0.2, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.2, opacity: 0 }}
              className="pointer-events-none absolute inset-0 flex items-center justify-center z-20"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="w-24 h-24 rounded-full bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-4xl shadow-lg">
                  ✓
                </div>
                <div className="text-emerald-300 font-semibold">Submitted</div>
              </div>
            </motion.div>
          )}

          {/* Permanent submitted hover label — only visible after a successful send */}
          {isSubmitted && (
            <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-200 text-xs font-semibold shadow-sm">
                Already submitted, Don't spam me
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}
