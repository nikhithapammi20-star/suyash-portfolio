"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center bg-black text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      ><img src="/profile.jpg" alt="Profile" className="w-40 h-40 rounded-full mx-auto mb-6" />
        <h1 className="text-5xl font-bold">Hi, I'm Suyash</h1>
        <p className="mt-4 text-xl">Frontend Developer</p>

        <button className="mt-6 px-6 py-2 bg-blue-500 rounded">
          Hire Me
        </button>
      </motion.div>
    </section>
  );
}