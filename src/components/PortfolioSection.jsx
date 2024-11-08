import { motion } from "framer-motion";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ExternalLinkIcon,
  GithubIcon,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import ExpenseTracker from "../images/expense-tracker.png";
import PatientManagementSystem from "../images/patient-management-system.png";
import TimeConversion from "../images/time-conversion-app.png";

export default function PortfolioSection({ isActive }: { isActive: boolean }) {
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Time Conversion",
      description:
        "A React-based Time Conversion App that displays the current UTC time and date, along with the ability to view the time in various time zones like Bangladesh Time (BDT), Eastern Standard Time (EST), and more.",
      imageUrl: TimeConversion,
      demoUrl:
        "https://time-conversion-app-tanvirjahan001s-projects.vercel.app",
      codeUrl: "https://github.com/TanvirJahan001/Time-Conversion-App",
    },
    {
      title: "Patient Management System",
      description:
        "A simple and user-friendly Patient Management System built with React.",
      imageUrl: PatientManagementSystem,
      demoUrl:
        "https://patient-management-system-tanvirjahan001s-projects.vercel.app",
      codeUrl: "https://github.com/TanvirJahan001/Patient-Management-System",
    },
    {
      title: "Expense Tracker",
      description:
        "The Expense Tracker App is a React-based application designed to help users manage and track their expenses efficiently.",
      imageUrl: ExpenseTracker,
      demoUrl: "https://expense-tracker-tanvirjahan001s-projects.vercel.app",
      codeUrl: "https://github.com/TanvirJahan001/Expense-Tracker-App",
    },
  ];

  useEffect(() => {
    if (isActive) {
      setInView(true);
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    } else {
      setInView(false);
    }
  }, [isActive, projects.length]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-full h-full overflow-y-auto hide-scrollbar px-4 py-16 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#1E40AF] text-white"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          Portfolio
        </motion.h2>
        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-xl w-full lg:h-[400px] h-[300px]">
            <motion.div
              key={currentIndex}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <img
                src={projects[currentIndex].imageUrl}
                alt={projects[currentIndex].title}
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40" />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">
                  {projects[currentIndex].description}
                </p>
                <div className="flex space-x-4">
                  <a
                    href={projects[currentIndex].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A855F7] hover:bg-[#C4B5FD] transition-colors duration-300 text-white py-2 px-4 rounded-full flex items-center text-sm"
                  >
                    <ExternalLinkIcon className="h-4 w-4 mr-2" />
                    Live Demo
                  </a>
                  <a
                    href={projects[currentIndex].codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#A855F7] hover:bg-[#C4B5FD] transition-colors duration-300 text-white py-2 px-4 rounded-full flex items-center text-sm"
                  >
                    <GithubIcon className="h-4 w-4 mr-2" />
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Navigation Buttons (Hidden on Mobile) */}
            <div className="hidden md:flex absolute left-4 top-1/2 transform -translate-y-1/2">
              <motion.button
                onClick={handlePrev}
                whileHover={{ scale: 1.1 }}
                className="bg-[#6D28D9] p-2 rounded-full shadow-lg"
              >
                <ChevronLeftIcon className="h-5 w-5 text-white" />
              </motion.button>
            </div>
            <div className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2">
              <motion.button
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                className="bg-[#6D28D9] p-2 rounded-full shadow-lg"
              >
                <ChevronRightIcon className="h-5 w-5 text-white" />
              </motion.button>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex
                    ? "bg-[#A855F7]"
                    : "bg-[#C4B5FD] hover:bg-[#A855F7]"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
