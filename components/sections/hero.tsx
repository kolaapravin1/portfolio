"use client";

import { motion } from "framer-motion";
import React, { useRef, useState } from "react";
import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  // Prevent Ctrl+Shift+I (Inspect Element) shortcut
  const popupContainer = document.createElement("div");
  popupContainer.className =
    "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 p-4 rounded-md shadow-lg z-[100]";
  popupContainer.style.boxShadow = "0 0 10px red";
  const popupText = document.createElement("p");
  popupText.className = "text-sm text-foreground text-white";
  popupText.style.visibility = "visible";
  popupText.textContent = "Don't inspect, the code quality is too bad";

  document.addEventListener("keydown", function (event) {
    if (event.ctrlKey && event.shiftKey && event.key === "I") {
      event.preventDefault();
      document.body.appendChild(popupContainer);
      popupContainer.appendChild(popupText);
      setTimeout(() => document.body.removeChild(popupContainer), 2000);
    }
  });
  // Predefined GIF list
  const gifList: string[] = [
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDVkcmJqNng3YTB1OHEya2doNmo2M2thMHQ5NDlqbHB4M3ZxYTBtNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/bGgsc5mWoryfgKBx1u/giphy.gif",
    "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExOGVlOWs3d3k0ajhtNDN2MDZydXc5OW5hdWI1Y3g4YTd0bXF6cW50ayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/qgQUggAC3Pfv687qPC/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTlqamd2ejAxYnEyOHVjY3Q0OTZwNDdscHNxcmQxam51M2NvZW9qdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/iIqmM5tTjmpOB9mpbn/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbzlzNGk0eGk5c3YzbHpybnJpYzdpZzF3dGw0ajg4aWlsaDlpZjBxaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/pT4pmRFs15Yg8/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3eG9oMHJ6ajA2Yno0enRtNGxubmg2dms5cjdzY2ludDVqcTFpenI1NyZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/PvvSfSDFoAL5e/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZXU5dzI2OW52a2xlaGxtOWsxeDE2ODBvNmd0ZDJpaGlkbmw4cGFqMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fQZX2aoRC1Tqw/giphy.gif",
    "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamUwdzQ0ZWJncHVicWU2ZWJuNXN3OWp5NHcxcXczOTBjZHdjMnMwZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPs4Lf96UfvQamk/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3OWt2dGxsNmI0eXFoYm82cmt6cXFqMGEyYTFxcTVoZnRyOWg5czV3ciZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/HIYW8sTRTHt1m/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3QwdmRlYWl2eXh6YWNtbnBneW1sNjZpNmJ4azNwNWJkOHlueDdzMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/MAWhlj5M9a5pIJT1Y4/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDJ1djBpYnQ2b3YzbHBxa3d2NnYzajM0enpxY3JuNXZzZzV1cGg2dCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EZr27ZbJwmjE9PGyLN/giphy.gif",
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWhlZHFvYmxtbnQ4bDl0NWgwOXU3ejl5emNtbW11bHBnZWFjcWJ1dSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/78XCFBGOlS6keY1Bil/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3aG0yeG51cmJvazRrbXFodzZieDR6cnhtbzNtdGI3bHc4OG9ucHVvbCZlcD12MV9naWZzX3JlbGF0ZWQmY3Q9Zw/7srpeY4TZMrO8/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenA2dmJqZWh2YWJkcHE3bGNsbmhmcWpmcjk0cDJ5em9pNnRoZmF4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Npdl9kOaKFJHuRCBGx/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenA2dmJqZWh2YWJkcHE3bGNsbmhmcWpmcjk0cDJ5em9pNnRoZmF4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/A5yOQJ3X3y0Xyd476S/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczBicmI4cHVzbW4waHYxa2luN2s1ejZwa3lsdTltNXc0OTFjanhveSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/SpopD7IQN2gK3qN4jS/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExczBicmI4cHVzbW4waHYxa2luN2s1ejZwa3lsdTltNXc0OTFjanhveSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/l2JdTkHW1KZPdvdS0/giphy.gif",
  ];

  // Pick a random GIF once per page load / mount
  const [currentGif] = useState<string | null>(() => {
    if (!gifList.length) return null;
    const idx = Math.floor(Math.random() * gifList.length);
    return gifList[idx];
  });

  // Runaway button state
  const githubRef = useRef<HTMLAnchorElement | null>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [clickable, setClickable] = useState(false);
  const runaways = useRef(0);
  // choose either 2 or 3 dodges for this page load
  const maxRunaways = useRef(Math.random() < 0.5 ? 2 : 3);

  // Dodges the GitHub button away from the mouse cursor. After maxRunaways, clicks are allowed.
  function triggerDodge(e: React.MouseEvent) {
    try {
      if (clickable) return;

      // small devices should not dodge
      if (typeof window !== "undefined" && window.innerWidth < 640) return;

      const el = githubRef.current;
      if (!el) return;

      // ensure we only dodge up to the allowed number
      if (runaways.current >= maxRunaways.current) {
        // allow clicking now
        setClickable(true);
        return;
      }

      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const dx = centerX - e.clientX;
      const dy = centerY - e.clientY;
      const dist = Math.sqrt(dx * dx + dy * dy) || 1;

      // normalized away-from-vector
      const nx = dx / dist;
      const ny = dy / dist;

      // move between 70-140px away based on randomness
      const distance = 90 + Math.floor(Math.random() * 50);
      const nextX = Math.round(nx * distance);
      const nextY = Math.round(ny * distance * 0.5); // less vertical shift

      // apply the offset
      setOffset({ x: nextX, y: nextY });
      runaways.current += 1;

      // after a short time, return to original place
      setTimeout(() => {
        setOffset({ x: 0, y: 0 });

        // if we've exhausted the dodges, allow clicking
        if (runaways.current >= maxRunaways.current) {
          setClickable(true);
        }
      }, 650);
    } catch (err) {
      // ignore errors and ensure the control eventually becomes clickable
      runaways.current = maxRunaways.current;
      setClickable(true);
      setOffset({ x: 0, y: 0 });
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 pt-32 pb-20"
    >
      <div className="max-w-7xl w-full mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.h1
              className="text-5xl lg:text-7xl font-bold leading-tight text-balance"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Kolaa Pravin
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg text-slate-300 font-semibold"
            >
              A Full Stack Techie😎
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-400 max-w-xl"
            >
              Vanakkam!! I’m a MERN Stack & Cloud Developer who builds
              “intelligent” applications and websites{" "}
              <i>(only when well guided)</i>.<br />
              I usually say, “sometimes it works, sometimes it just decides not
              to” like a true Indian government office. <br />I create scalable
              web apps, cloud solutions, and occasionally rare masterpieces that
              only runs when the moon, stars, and my WiFi are in perfect
              alignment. <i>(not like this unalligned paragraph)</i>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.a
                href="#projects"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(34, 211, 238, 0.5)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center gap-2 justify-center hover:shadow-lg transition-shadow"
              >
                View My Projects
                <ArrowRight size={18} />
              </motion.a>

              <motion.a
                href="https://drive.google.com/file/d/1U_lD1UcyQtG78bcFj2c2jeymc6qW-ut9/view?usp=sharing"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors"
              >
                View CV
              </motion.a>

              {/* GitHub button */}
              <motion.a
                href="https://github.com/kolaapravin1"
                target="_blank"
                whileTap={{ scale: 1 }}
                className={`px-6 py-3 border border-slate-600 text-slate-300 rounded-lg font-semibold transition-colors flex items-center gap-2 justify-center ${
                  clickable
                    ? "hover:border-slate-400 cursor-pointer"
                    : "cursor-default"
                }`}
                rel="noreferrer"
                onClick={(e) => {
                  if (!clickable) {
                    e.preventDefault();
                  }
                }}
                aria-disabled={!clickable}
                tabIndex={clickable ? 0 : -1}
                onKeyDown={(e) => {
                  if (!clickable && (e.key === "Enter" || e.key === " ")) {
                    e.preventDefault();
                  }
                }}
                onMouseMove={(e) => {
                  if (!clickable) triggerDodge(e as React.MouseEvent);
                }}
                ref={githubRef}
                animate={{ x: offset.x, y: offset.y }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Github size={18} />
                GitHub
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: Neon-framed random GIF */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              animate={{
                y: [0, 20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              className="relative"
            >
              {/* Glowing background */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px rgba(34, 211, 238, 0.3)",
                    "0 0 60px rgba(168, 85, 247, 0.3)",
                    "0 0 40px rgba(34, 211, 238, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                className="w-72 h-72 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-md border border-cyan-500/30 flex items-center justify-center"
              >
                {/* GIF container */}
                {currentGif ? (
                  <div className="w-64 h-64 rounded-xl overflow-hidden border border-cyan-500/20">
                    <img
                      src={currentGif}
                      alt="Developer vibe"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-64 h-64 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center border border-cyan-500/20">
                    <div className="text-center">
                      <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        KP
                      </div>
                      <p className="text-slate-400 text-sm mt-2">
                        Developer Portfolio
                      </p>
                    </div>
                  </div>
                )}
              </motion.div>

              {/* Neon ring */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-500 bg-clip-border z-[-2]"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
