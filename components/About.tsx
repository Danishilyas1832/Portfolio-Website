"use client";

import Image from "next/image";

export default function About() {
  return (
    <section className="bg-gray-900 text-gray-200 py-10 px-10 mt-20">
      <div className="m-auto mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side - Text */}
         <div className="flex justify-center">
          <Image
            src="/profile.jpg" // replace with your image path
            alt="About Me"
            width={350}
            height={350}
            className="rounded-2xl shadow-lg border-4 border-emerald-500 object-cover"
          />
        </div>
        <div>
          <h2 className="text-4xl font-extrabold text-white mb-6">
            About Me
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Hi, I’m <span className="text-emerald-400 font-semibold">Danish</span>, 
            a passionate web developer specializing in creating modern, 
            responsive, and user-friendly applications. I love blending 
            design with functionality to build seamless digital experiences.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With expertise in <span className="text-emerald-400">React, Next.js, 
            Tailwind CSS</span> and a solid background in Python, 
            I enjoy turning ideas into interactive solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
          >
            Let’s Connect
          </a>
        </div>

        {/* Right Side - Image */}
       
      </div>
    </section>
  );
}
