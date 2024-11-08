import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const skillCategories = [
  {
    name: "Front-End Skills",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "Javascript", level: 80 },
    ],
  },
  {
    name: "Frameworks & Libraries",
    skills: [
      { name: "Tailwind", level: 85 },
      { name: "Bootstrap", level: 80 },
      { name: "React", level: 75 },
    ],
  },
];

const SkillCard = ({ name, level, index, inView }) => {
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1 },
      }));
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="bg-white bg-opacity-10 rounded-lg p-4 backdrop-filter backdrop-blur-sm"
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      custom={index}
      whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(255,255,255)" }}
      whileTap={{ scale: 0.95 }}
    >
      <h3 className="text-lg font-semibold mb-2 text-white">{name}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5 mb-2">
        <motion.div
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
        />
      </div>
      <motion.p
        className="text-sm text-gray-300"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
      >
        Experience Level: {level}%
      </motion.p>
    </motion.div>
  );
};

export default function SkillsSection({ isActive }) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (isActive) {
      setInView(true);
    } else {
      setInView(false);
    }
  }, [isActive]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-full h-full overflow-y-scroll hide-scrollbar px-4 py-16 bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 text-white"
    >
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl font-bold mb-12 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        >
          My Technical Arsenal
        </motion.h2>
        <div>
          {skillCategories.map((category) => (
            <div key={category.name} className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-300">
                {category.name}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.skills.map((skill, index) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={index}
                    inView={inView}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
