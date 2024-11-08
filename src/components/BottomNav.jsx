import React from "react";
import {
  FaBriefcase,
  FaCog,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
} from "react-icons/fa";

const BottomNav = ({ currentSection, onNavClick }) => {
  const icons = [FaHome, FaCog, FaBriefcase, FaProjectDiagram, FaEnvelope];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-around py-4">
      {icons.map((Icon, index) => (
        <button
          key={index}
          onClick={() => onNavClick(index)}
          className={`flex flex-col items-center justify-center ${
            currentSection === index ? "text-yellow-400" : ""
          }`}
        >
          <Icon size={24} />
        </button>
      ))}
    </div>
  );
};

export default BottomNav;
