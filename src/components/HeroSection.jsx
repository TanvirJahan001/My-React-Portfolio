import { motion, useAnimation } from "framer-motion";
import { ArrowRightIcon, GithubIcon, LinkedinIcon } from "lucide-react";
import React, { useEffect, useRef } from "react";
import { ReactTyped } from "react-typed";

import Button from "./Button";

const Particle = ({ delay }) => (
  <motion.div
    className="absolute w-2 h-2 bg-white rounded-full"
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: [0, 1, 0],
      scale: [0, 1, 0],
      x: [0, Math.random() * window.innerWidth - window.innerWidth / 2],
      y: [0, Math.random() * window.innerHeight - window.innerHeight / 2],
    }}
    transition={{
      duration: 2,
      delay: delay,
      repeat: Infinity,
      repeatDelay: Math.random() * 2,
    }}
  />
);

export default function HeroSection() {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <motion.div
      ref={containerRef}
      className="relative flex flex-col justify-center items-center min-h-screen w-full px-4 overflow-hidden bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900"
    >
      <div className="absolute ">
        {[...Array(50)].map((_, i) => (
          <Particle key={i} delay={i * 0.1} />
        ))}
      </div>
      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <motion.div
          className="flex flex-col items-center text-center space-y-8"
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl xl:text-7xl">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-500">
              A. S. M. Tanvir Jahan
            </span>
          </h1>
          <div className="text-4xl text-gray-200 md:text-2xl h-12">
            <ReactTyped
              strings={["Developer.", "UI/UX Designer.", "Professional Coder."]}
              typeSpeed={90}
              backSpeed={90}
              loop
            />
          </div>
          <p className="text-xl text-gray-200 md:text-2xl max-w-2xl">
            I'm a passionate developer crafting stunning and functional web
            experiences. Welcome to my digital playground!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105 hover:rotate-3">
              View Projects
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full transition-all duration-300 hover:bg-white hover:text-purple-700 hover:-rotate-3"
            >
              Download CV
            </Button>
          </div>
          <div className="flex space-x-4 mt-8">
            <a
              href="https://github.com/TanvirJahan001"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:rotate-12"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3"
              >
                <GithubIcon className="h-6 w-6" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a
              href="https://linkedin.com/in/ash-sams-md-tanvir-jahan"
              target="_blank"
              rel="noopener noreferrer"
              className="transform transition-all duration-300 hover:scale-110 hover:-rotate-12"
            >
              <Button
                variant="ghost"
                size="icon"
                className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white rounded-full p-3"
              >
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
