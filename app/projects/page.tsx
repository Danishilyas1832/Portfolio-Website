"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Projects() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/projects")   // ✅ matches backend
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Header/>
   <section className="max-w-6xl mx-auto px-6 py-16">
      <h1
        className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        
      >
        My Projects
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((p, i) => {
  console.log("🔗 Link for project:", p.title, p.link);  // 👈 Add this

  return (
    <motion.div
      key={i}
      className="group relative rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.2, duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none" />

      <h2 className="text-2xl font-semibold mb-3 text-gray-800 dark:text-gray-100 group-hover:text-blue-500 transition-colors">
        {p.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
        {p.description}
      </p>

      <a
        href={p.link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:text-purple-600 transition-colors relative z-10"
      >
        Visit Project →
      </a>
    </motion.div>
  );
})}

      </div>
     
    </section>   <Footer/> </div>

  );
}
