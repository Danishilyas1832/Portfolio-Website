"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Typewriter } from "react-simple-typewriter";

export default function Banner() {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/projects")   // ✅ matches backend
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 mb-30">
      <section className="w-full bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-10 mb-30">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6">

          {/* Left Side - Text */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Hi, I’m <span className="text-emerald-500">Danish</span> 👋
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
              I’m a passionate{" "}
              <span className="font-semibold">
                <Typewriter
                  words={["Web Developer", "Mobile Developer", "Software Enthusiast"]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1500}
                />
              </span>{" "}
              with experience in building modern, responsive applications using{" "}
              <span className="text-emerald-500">Next.js, React, and Python</span>.
            </p>
            <div className="flex gap-4 mt-4">
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-emerald-500 text-white font-semibold rounded-xl shadow-md hover:bg-emerald-600 transition"
                >
                  View Projects
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-emerald-500 text-emerald-500 font-semibold rounded-xl hover:bg-emerald-500 hover:text-white transition"
                >
                  Contact Me
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Image
              src="/images/Snapchat-1883363796.jpg"
              alt="Profile Picture"
              width={350}
              height={350}
              className="rounded-full border-4 border-emerald-500 shadow-lg hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
        <p className="bg-black w-auto h-10 mt-30 " />

      </section>
      <section className="max-w-6xl mx-auto px-6 mb-50 -mt-20">
        <motion.h1
          className="text-4xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl shadow-lg bg-white dark:bg-gray-900 p-6 border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

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
                  className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:text-purple-600 transition-colors"
                >
                  Visit Project →
                </a>
            </motion.div>
          ))}
        </div>

      </section>
    </div>
  );
}
