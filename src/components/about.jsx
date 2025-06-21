import React from 'react';
import { FaSchool } from 'react-icons/fa';
import { IoIosSchool } from "react-icons/io";

const About = () => {
  return (
    <section id="about" className="shadow-md min-h-screen px-4 sm:px-6 md:px-10 lg:px-16 ">
      <div className="flex flex-col items-center gap-16 pb-20">

        {/* About Me */}
        <div className="aboutme flex flex-col text-center justify-center w-full md:w-[90%] lg:w-[53vw] mt-24">
          <p className="font-semibold font-poppins text-2xl sm:text-xl text-blue-600 underline underline-offset-4">
            About Me
          </p>
          <p className="font-poppins text-lg sm:text-base mt-10 text-black leading-relaxed">
            Hello! I’m <b className='font-bold'>Nilesh</b>, a curious and enthusiastic software developer with a strong grip on <b className='font-bold'>C, C++</b>, and frontend technologies like <b className='font-bold'>HTML, CSS, JavaScript, and React</b>. I’m currently a second-year student at ICCS Pune, pursuing a Bachelor of Science in Computer Science. I love turning ideas into clean, responsive, and user-friendly interfaces. Building intuitive web experiences excites me, and I’m always eager to learn new tools, take on challenges, and grow as a developer.
          </p>
        </div>

        {/* Education Heading */}
        <p className="font-poppins text-2xl sm:text-xl text-center font-semibold text-blue-600 underline underline-offset-4 pt-10">
          Education
        </p>

        {/* Education Cards */}
        <div className="education flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 w-full">

          {/* College */}
          <div className="w-[90%] sm:w-[90%] md:w-[400px] h-40 bg-blue-500 rounded-2xl flex flex-col justify-center transition duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer">
            <div className="flex items-center">
              <IoIosSchool className="w-10 h-10 text-white pl-4" />
              <h1 className="text-white pl-4 text-xl font-semibold font-poppins">Indira College Pune</h1>
            </div>
            <p className="text-white pl-4 pt-3 font-poppins">Bachelor of Science in Computer Science</p>
            <p className="text-white pl-4 font-poppins">July 2024 - Present</p>
            <p className="text-white pl-4 font-poppins">CGPA: 9.27/10</p>
          </div>

          {/* 12th */}
          <div className="w-[90%] sm:w-[90%] md:w-[400px] h-40 bg-blue-500 rounded-2xl flex flex-col justify-center transition duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer">
            <div className="flex items-center">
              <FaSchool className="w-10 h-10 text-white pl-4 " />
              <h1 className="text-white pl-4 text-xl font-semibold font-poppins">Dr College Nandurbar</h1>
            </div>
            <p className="text-white pl-4 pt-3 font-poppins">Class 12 HSC - Maharashtra Board</p>
            <p className="text-white pl-4 font-poppins">May 2023 - Feb 2024</p>
            <p className="text-white pl-4 font-poppins">Percentage: 73%</p>
          </div>

          {/* 10th */}
          <div className="w-[90%] sm:w-[90%] md:w-[400px] h-40 bg-blue-500 rounded-2xl flex flex-col justify-center transition duration-300 hover:bg-blue-600 hover:scale-105 cursor-pointer">
            <div className="flex items-center">
              <FaSchool className="w-10 h-10 text-white pl-4 " />
              <h1 className="text-white pl-4 text-xl font-semibold font-poppins">S.A.M School Nandurbar</h1>
            </div>
            <p className="text-white pl-4 pt-3 font-poppins">Class 10 SSC - Maharashtra Board</p>
            <p className="text-white pl-4 font-poppins">April 2021 - May 2022</p>
            <p className="text-white pl-4 font-poppins">Percentage: 82%</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
