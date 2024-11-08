import React from "react";
import {
  FaBriefcase,
  FaCog,
  FaEnvelope,
  FaHome,
  FaProjectDiagram,
} from "react-icons/fa";

const Sidebar = ({ currentSection, onNavClick }) => (
  <nav className="w-20 md:w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 flex flex-col items-center justify-center shadow-2xl py-4">
    <h1 className="text-8xl font-bold text-center md:text-center w-full py-4 text-yellow-500">
      JS
    </h1>
    <div className="flex-grow flex flex-col justify-center space-y-4">
      {[
        { name: "Home", icon: <FaHome /> },
        { name: "Skills", icon: <FaCog /> },
        { name: "Experience", icon: <FaBriefcase /> },
        { name: "Portfolio", icon: <FaProjectDiagram /> },
        { name: "Contact", icon: <FaEnvelope /> },
      ].map((item, index) => (
        <button
          key={item.name}
          className={`flex items-center gap-3 w-full p-3 rounded-tl rounded-tr-3xl rounded-bl rounded-br-3xl transition-all duration-300 transform hover:scale-105 md:pl-8 md:pr-16 md:ml-4 ${
            currentSection === index
              ? "bg-yellow-500 text-gray-900 scale-105"
              : "hover:bg-gray-800"
          }`}
          onClick={() => onNavClick(index)}
        >
          {item.icon}
          <span className="hidden md:inline">{item.name}</span>
        </button>
      ))}
    </div>
  </nav>
);

export default Sidebar;
