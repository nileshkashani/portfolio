import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub } from 'react-icons/fa';
import { SiCplusplus, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center bg-white py-20 shadow-md mt-7 h-auto sm:py-14 sm:px-4 sm:mt-3">
      <h2 className="text-3xl sm:text-2xl font-semibold text-blue-600 underline underline-offset-4 mb-12 font-mono">
        My Skills Arsenal
      </h2>

      {/* Programming Languages */}
      <h3 className="text-xl sm:text-lg font-bold text-black mb-4 font-mono">Programming Languages</h3>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mb-14 sm:mb-10">
        <SkillCard icon={<FaJava />} label="Java" />
        <SkillCard icon={<SiCplusplus />} label="C/C++" />
        <SkillCard icon={<FaJs />} label="JavaScript" />
        <SkillCard icon={<FaHtml5 />} label="HTML" />
        <SkillCard icon={<FaCss3Alt />} label="CSS" />
        <SkillCard icon={<SiMysql />} label="MySQL" />
      </div>

      {/* Frameworks / Libraries */}
      <h3 className="text-xl sm:text-lg font-bold text-black mb-4 font-mono">Frameworks & Libraries</h3>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mb-14 sm:mb-10">
        <SkillCard icon={<FaReact />} label="React" />
        <SkillCard icon={<FaNode />} label="Node" />
        <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" />
      </div>

      {/* Tools */}
      <h3 className="text-xl sm:text-lg font-bold text-black mb-4 font-mono">Tools</h3>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
        <SkillCard icon={<FaGithub />} label="GitHub" />
        <SkillCard icon={<VscVscode />} label="VS Code" />
      </div>
    </div>
  );
};

// Reusable Card Component
const SkillCard = ({ icon, label }) => {
  return (
    <div className="w-40 h-24 sm:w-28 sm:h-20 bg-blue-500 rounded-xl shadow-md flex flex-col items-center justify-center 
    transition-transform duration-300 transform hover:shadow-xl hover:bg-blue-600 hover:scale-105 cursor-pointer">
      <div className="text-4xl sm:text-2xl text-white mb-1">
        {icon}
      </div>
      <p className="text-white font-medium text-sm sm:text-xs font-mono">{label}</p>
    </div>
  );
};

export default Skills;
