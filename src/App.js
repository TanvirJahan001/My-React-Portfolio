// src/App.jsx
import React, { useEffect, useState } from "react";
import BottomNav from "./components/BottomNav";
import ContactSection from "./components/ContactSection";
import ExperienceSection from "./components/ExperienceSection";
import HeroSection from "./components/HeroSection";
import PortfolioSection from "./components/PortfolioSection";
import Sidebar from "./components/Sidebar";
import SkillsSection from "./components/SkillsSection";

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (index) => {
    if (index !== currentSection) {
      setCurrentSection(index);
    }
  };

  const sections = [
    <HeroSection isActive={currentSection === 0} />,
    <SkillsSection isActive={currentSection === 1} />,
    <ExperienceSection isActive={currentSection === 2} />,
    <PortfolioSection isActive={currentSection === 3} />,
    <ContactSection isActive={currentSection === 4} />,
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900">
      {!isMobile && (
        <Sidebar currentSection={currentSection} onNavClick={handleNavClick} />
      )}
      <div className="flex-grow relative overflow-hidden">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-700 ease-in-out opacity-0 transform ${
              index === currentSection ? "opacity-100 translate-x-0" : ""
            } ${index < currentSection ? "-translate-x-full" : ""} ${
              index > currentSection ? "translate-x-full" : ""
            }`}
          >
            {section}
          </div>
        ))}
      </div>
      {isMobile && (
        <BottomNav
          currentSection={currentSection}
          onNavClick={handleNavClick}
        />
      )}
    </div>
  );
};

export default App;
