"use client";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-6 shadow-md sticky top-0 bg-white dark:bg-black z-50">
      <h1 className="text-2xl font-bold">Suyash</h1>

      <div className="flex gap-6 items-center">
        <a href="#about" className="hover:text-blue-500">
          About
        </a>

        <a href="#skills" className="hover:text-blue-500">
          Skills
        </a>

        <a href="#projects" className="hover:text-blue-500">
          Projects
        </a>

        <a href="#services" className="hover:text-blue-500">
          Services
        </a>

        <a href="#experience" className="hover:text-blue-500">
          Experience
        </a>

        <a href="#education" className="hover:text-blue-500">
          Education
        </a>

        <a href="#contact" className="hover:text-blue-500">
          Contact
        </a>

        <ThemeToggle />
      </div>
    </nav>
  );
}