import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function ExperienceSection({ isActive }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (isActive) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [isActive]);

  const experiences = [
    {
      company: "Godagari Shishu Niketon",
      position: "Teacher",
      duration: "2023 - Present",
      description:
        "Teaching young students basic subjects such as reading, writing and basic math.",
    },
    {
      company: "Freelancing ",
      position: "Front-End Developer",
      duration: "2022 - Present",
      description:
        "I have successfully completed some projects, achieving a 5-star rating and a 100% job success rate. My work includes converting PSD and other mockups into HTML, CSS, and JS, ensuring accurate and efficient front-end development. ",
    },
    {
      company: "PioneerIT(ISP)",
      position: "Customer Support Manager",
      duration: "2021 - 2022",
      description:
        "Provided technical support for customers experiencing IT-related issues. Resolved issues related to software, hardware, and network connectivity. Maintained customer satisfaction by providing timely and effective support.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  const AnimatedExperienceItem = ({
    company,
    position,
    duration,
    description,
    index,
  }) => {
    const controls = useAnimation();

    useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          y: 0,
          transition: { delay: index * 0.2 },
        });
      }
    }, [controls, index]);

    return (
      <motion.div
        className="bg-gradient-to-br from-[#9333EA] to-[#6D28D9] rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        whileHover={{
          scale: 1.05,
          boxShadow: "0px 0px 30px rgba(147, 51, 234, 0.5)",
          transition: { duration: 0.3 },
        }}
      >
        <div className="flex items-center mb-4">
          <div className="bg-[#A855F7] p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-bold text-white">{position}</h3>
            <p className="text-[#C4B5FD]">{company}</p>
          </div>
        </div>
        <p className="text-[#A5B4FC] mb-4">{duration}</p>
        <p className="text-[#E0E7FF]">{description}</p>
      </motion.div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-full h-full overflow-y-scroll hide-scrollbar px-4 py-16 bg-gradient-to-br from-[#6D28D9] via-[#4C1D95] to-[#1E40AF] text-white"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
        >
          Professional Experience
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {experiences.map((experience, index) => (
            <motion.div key={index} variants={itemVariants}>
              <AnimatedExperienceItem
                company={experience.company}
                position={experience.position}
                duration={experience.duration}
                description={experience.description}
                index={index}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
}
