"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white dark:bg-white dark:text-black">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <img
          src="/profile.jpg"
          alt="Profile"
          className="w-40 h-40 rounded-full mx-auto mb-6"
        />

        <h1 className="text-5xl font-bold">Hi, I'm Nikhitha Reddy</h1>
        <p className="mt-4 text-xl">Frontend/web Developer</p>

        <div className="mt-6 flex gap-4 justify-center">
          <button className="px-6 py-2 bg-blue-500 rounded">
            Hire Me
          </button>

          <a
            href="/resume.pdf"
            download
            className="ml-4 px-6 py-3 bg-green-600 rounded hover:bg-green-700"
          >
             Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
}