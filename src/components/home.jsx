import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import HeroSection from "./effect.jsx";

const Home = () => {
  return (
    <section
      id="home"
      className="lg:h-[100vh] min-h-screen relative w-full font-poppins font-bold overflow-hidden pt-24 shadow-md md:h-[110vh] lg:mt-[100px] mt-10"
    >
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full px-6 lg:px-24 gap-10 lg:gap-0">

        {/* Left Side: Text + Button */}
        <div className="w-full lg:w-1/2 text-center md:text-left">
          <p className="text-3xl sm:text-5xl lg:text-6xl lg:mb-5">Hi,</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl p-0 lg:mb-5">
            I'm <span className="text-blue-600 font-extrabold">Nilesh.</span>
          </h1>

          <div className="mt-3">
            <HeroSection />
          </div>

          {/* Resume Button */}
          <a
            href="Nilesh Kashani - Resume (2).pdf"
            className="text-xs inline-block px-3 py-3 mt-10 bg-blue-500 text-white font-semibold rounded-md shadow-md 
              hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out 
              lg:mt-16 lg:text-xl w-36 md:w-52 lg:w-56 text-center"
          >
            Download Resume
          </a>

          {/* Social icons (Desktop/Tablet only) */}
          <div className="hidden md:flex flex-row gap-10 mt-12 md:mt-16 lg:mt-10">
            <a href="https://github.com/nileshkashani" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-black hover:text-blue-600" />
            </a>
            <a href="https://www.linkedin.com/in/nilesh-kashani-876646346" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-black hover:text-blue-600" />
            </a>
            <a href="https://www.instagram.com/nilesh_____45" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-9 h-9 md:w-10 md:h-10 lg:w-11 lg:h-11 text-black hover:text-blue-600" />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col md:flex-col lg:flex-col items-center gap-6">

          {/* Mobile layout: icons + blob in a row */}
          <div className="flex flex-row items-center gap-6 md:hidden">
            {/* Social Icons mobile */}
            <div className="flex flex-col gap-7">
              <a href="https://github.com/nileshkashani" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-9 h-9 text-black hover:text-blue-600" />
              </a>
              <a href="https://www.linkedin.com/in/nilesh-kashani-876646346" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-9 h-9 text-black hover:text-blue-600" />
              </a>
              <a href="https://www.instagram.com/nilesh_____45" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-9 h-9 text-black hover:text-blue-600" />
              </a>
            </div>

            {/* Image Blob */}
            <div className="w-[200px] h-[220px] sm:w-[250px] sm:h-[260px] mt-0">
              <svg viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    fill="#3B82F6"
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                  />
                  <image x="50" y="60" width="380" height="435" href="nilesh2.png" />
                </g>
              </svg>
            </div>
          </div>

          {/* Tablet + PC blob */}
          {/* Tablet + PC blob */}
          <div className="hidden md:block w-[250px] h-[280px] sm:w-[320px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] mt-10 lg:mt-0">
            <svg viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
             <mask id="mask1" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
              <g mask="url(#mask1)">
                <path
                  fill="#3B82F6"
                  d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                />
                <image
                  x="50"
                  y="70"
                  width="380"
                  height="450"
                  href="nilesh2.png"
                />


              </g>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
