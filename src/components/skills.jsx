import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaGithub, FaGit, FaBootstrap, FaAws } from 'react-icons/fa';
import { SiApachetomcat, SiCplusplus, SiEclipseide, SiHibernate, SiSpringboot, SiTailwindcss } from 'react-icons/si';
import { FaJava } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { VscVscode } from 'react-icons/vsc';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col items-center justify-center bg-white py-20 shadow-md mt-2 h-auto sm:py-14 sm:px-4 sm:mt-3 ">
      <h2 className="lg:text-4xl md:text-3xl text-2xl font-semibold text-blue-600 underline underline-offset-4 mb-12 font-mono">
        My Skills 
      </h2>

      <h3 className="lg:text-2xl text-xl font-bold text-black mb-4 font-mono">Programming Languages</h3>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mb-14 sm:mb-10">
        <SkillCard icon={<FaJava />} label="Java" />
        <SkillCard icon={<SiCplusplus />} label="C/C++" />
        <SkillCard icon={<FaJs />} label="JavaScript" />
        <SkillCard icon={<FaHtml5 />} label="HTML" />
        <SkillCard icon={<FaCss3Alt />} label="CSS" />
        <SkillCard icon={<SiMysql />} label="MySQL" />
      </div>

   
      <h3 className="lg:text-2xl text-xl font-bold text-black mb-4 font-mono">Frameworks & Libraries</h3>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4 mb-14 sm:mb-10">
        <SkillCard icon={<FaReact />} label="React" />
        <SkillCard icon={<FaNode />} label="Node" />
        <SkillCard icon={<SiTailwindcss />} label="Tailwind CSS" />
        <SkillCard icon={<SiSpringboot />} label="Spring Boot" />
        <SkillCard icon={<SiApachetomcat />} label="Apache Tomcat Server" />
        <SkillCard icon={<SiHibernate />} label="Spring data Jpa" />

      </div>

    
      <h3 className="lg:text-2xl text-xl font-bold text-black mb-4 font-mono">Tools</h3>
      <div className="flex flex-wrap justify-center gap-6 sm:gap-4">
        <SkillCard icon={<FaGithub />} label="GitHub" />
        <SkillCard icon={<FaGit />} label="Git" />
        <SkillCard icon={<FaBootstrap />} label="BootStrap" />
        <SkillCard icon={<VscVscode />} label="VS Code" />
        <SkillCard icon={<SiEclipseide />} label="Eclipse Ide" />
        <SkillCard icon={<FaAws />} label="AWS" />
        
      </div>
    </div>
  );
};


const SkillCard = ({ icon, label }) => {
  return (
    <div className="w-28 h-24 sm:w-32 sm:h-20 md:w-[200px] md:h-24 lg:w-[250px] lg:h-32 xl:w-[250px] xl:h-28 bg-blue-500 rounded-xl shadow-md flex flex-col items-center justify-center 
    transition-transform duration-300 transform hover:shadow-xl hover:bg-blue-600 cursor-pointer">
      <div className="text-4xl sm:text-3xl md:text-4xl text-white mb-2">
        {icon}
      </div>
      <p className="text-white font-medium text-sm sm:text-xs text-center md:text-sm font-mono">{label}</p>
    </div>
  );
};


export default Skills;
