"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import gcpFire from "./gcp-fire.gif";

const certifications = [
  {
    id: 1,
    name: "Google Cloud Computing Foundations",
    issuer: "Google",
    badge: (
      <img src={gcpFire.src.toString()} alt="badge" style={{ width: "4rem" }} />
    ),
    tags: ["Cloud", "GCP"],
    credentialUrl:
      "https://www.credly.com/badges/9db26316-659f-4efd-aa42-bd4c80280497",
  },
  {
    id: 2,
    name: "The Joy of Computing Using Python",
    issuer: "NPTEL",
    badge: (
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExenA2dmJqZWh2YWJkcHE3bGNsbmhmcWpmcjk0cDJ5em9pNnRoZmF4aSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/NaDfUq0PoLm7UAtUu1/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Programming", "Python", "DSA"],
    credentialUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL22CS122S5448291910037146",
  },
  {
    id: 3,
    name: "Computer Networks and IP",
    issuer: "NPTEL",
    badge: (
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExYWs2cjFmcWJnY3IzM2l4Y3I2dDRod3pyZWhwNmNqa21haXl1NmxqeSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/U4FkC2VqpeNRHjTDQ5/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Networking", "Protocols"],
    credentialUrl:
      "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS48S3339130004158488",
  },
  {
    id: 4,
    name: "Cloud Computing",
    issuer: "NPTEL",
    badge: (
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdDFid21uY3owaTYyOWpnOWh6N3Jwb3F6bHBzMzk2bjFxeng4cDh3MyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3o7ZeqkYTvaL3lGjCw/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Cloud"],
    credentialUrl:
      "https://archive.nptel.ac.in/content/noc/NOC24/SEM1/Ecertificates/106/noc24-cs17/Course/NPTEL24CS17S35380559230546584.pdf",
  },
  {
    id: 5,
    name: "Python (Basic)",
    issuer: "HackerRank",
    badge: (
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTAyanBpNGk4OXVrNHFjZDB2Yzl2emV2NzhpdWF2ZzZ1NjVza3dxbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/KAq5w47R9rmTuvWOWa/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Programming", "Python"],
    credentialUrl: "https://www.hackerrank.com/certificates/eca0b1ffa0ac",
  },
  {
    id: 6,
    name: "SQL (Basic)",
    issuer: "HackerRank",
    badge: (
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExa2F2a2lla2w2MGJ5ZGE1ODQ5MHVocmtpd25ycWszOGRpejh2MmNmbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oKIPnAiaMCws8nOsE/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Database", "SQL"],
    credentialUrl: "https://www.hackerrank.com/certificates/4d6756e139c9",
  },
  {
    id: 7,
    name: "Problem Solving",
    issuer: "HackerRank",
    badge: (
      <img
        src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExczY2dWlscWNmZWRpYXhtYjB4ZW5venZzNmU2amJkdnBvbWc4cGxsZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/BmmfETghGOPrW/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Problem Solving", "Python"],
    credentialUrl: "https://www.hackerrank.com/certificates/6bc044b003c5",
  },
  {
    id: 8,
    name: "Enterprise Desgin Thinking Co-Creator",
    issuer: "IBM",
    badge: (
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnNtaDF5bmp5OWZ4cXA5aDZpdjV0NzZnaHAzd3pwbm92NWYwZHpxcyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Tk1JAnrarV7VcQmA4r/giphy.gif"
        alt="badge"
        style={{ width: "4rem" }}
      />
    ),
    tags: ["Design Thinking"],
    credentialUrl:
      "https://www.credly.com/badges/4790858e-524d-49c3-b7d7-577cc30ef40e",
  },
];

export default function Certifications() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="certifications" className="relative py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              C E R T I F I C A T I O N S
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert) => (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
              }}
              className="p-6 rounded-xl border border-slate-700 bg-gradient-to-br from-slate-800/40 to-slate-900/40 backdrop-blur-md hover:border-cyan-500/50 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-4xl">{cert.badge}</div>
                <Award size={20} className="text-cyan-400" />
              </div>

              <h3 className="font-bold text-lg text-slate-100 mb-2">
                {cert.name}
              </h3>

              <p className="text-sm text-slate-400 mb-4">{cert.issuer}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {cert.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                href={cert.credentialUrl}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-cyan-400 border border-cyan-500/30 rounded-lg hover:bg-cyan-500/10 transition-all"
              >
                View Credential
                <ExternalLink size={14} />
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
