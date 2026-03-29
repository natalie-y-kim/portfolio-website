"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700 z-50"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <div className="font-semibold text-slate-950 dark:text-white">Natalie Kim</div>
          <div className="flex items-center space-x-6">
            <a href="#about" className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition">About</a>
            <a href="#projects" className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition">Projects</a>
            <a href="#skills" className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition">Skills</a>
            <a href="#contact" className="text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white transition">Contact</a>
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition"
            >
              {isDark ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}