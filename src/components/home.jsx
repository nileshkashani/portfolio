import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import HeroSection from './effect.jsx';

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-[120vh] md:min-h-screen lg: min-h-screen w-full font-poppins font-bold overflow-hidden pt-12 px-6 shadow-md flex items-center justify-center"
    >
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">

        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
          <p className="text-3xl sm:text-5xl lg:text-6xl">Hi,</p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl">
            I'm <span className="text-blue-600 font-extrabold">Nilesh.</span>
          </h1>
          <div className="mt-2">
            <HeroSection />
          </div>

          <a
            href="/portfolio/public/Nilesh Kashani - Resume (2).pdf"
            className="inline-block mt-8 bg-blue-500 text-white px-6 py-3 rounded-md shadow-md text-sm md:text-base lg:text-lg hover:bg-blue-600 hover:scale-105 transition-transform duration-300 ease-in-out lg:w-[31%] w-[60%]"
          >
            Download Resume
          </a>

          <div className="hidden lg:flex justify-start gap-6 mt-8">
            <a href="https://github.com/nileshkashani" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8 hover:text-blue-600 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.linkedin.com/in/nilesh-kashani-876646346" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8 hover:text-blue-600 transition-transform hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/nilesh_____45" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-8 h-8 hover:text-blue-600 transition-transform hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="mt-10 lg:mt-0 w-full lg:w-[450px] flex justify-center lg:justify-end">

          <div className="flex flex-row items-center gap-6 lg:hidden">
            <div className="flex flex-col items-center gap-4">
              <a href="https://github.com/Nilesh-45-dev" target="_blank" rel="noopener noreferrer">
                <FaGithub className="w-8 h-8 hover:text-blue-600 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.linkedin.com/in/nilesh-kashani-876646346" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="w-8 h-8 hover:text-blue-600 transition-transform hover:scale-110" />
              </a>
              <a href="https://www.instagram.com/nilesh_____45" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="w-8 h-8 hover:text-blue-600 transition-transform hover:scale-110" />
              </a>
            </div>

            <div className="w-[260px] sm:w-[320px]">
              <svg viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <mask id="mask0" mask-type="alpha">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </mask>
                <g mask="url(#mask0)">
                  <path
                    fill="#3B82F6"
                    d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
                  />
                  <foreignObject x="50" y="60" width="380" height="430">
                    <img
                      src="nilesh2.png"
                      alt="Nilesh"
                      className="w-full h-full object-cover"
                    />
                  </foreignObject>
                </g>
              </svg>
            </div>
          </div>

          <div className="hidden lg:block w-[450px]">
            <svg viewBox="0 0 479 467" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <defs>
                <clipPath id="clip">
                  <path d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z" />
                </clipPath>
              </defs>

              <path
                fill="#3B82F6"
                d="M9.19024 145.964C34.0253 76.5814 114.865 54.7299 184.111 29.4823C245.804 6.98884 311.86 -14.9503 370.735 14.143C431.207 44.026 467.948 107.508 477.191 174.311C485.897 237.229 454.931 294.377 416.506 344.954C373.74 401.245 326.068 462.801 255.442 466.189C179.416 469.835 111.552 422.137 65.1576 361.805C17.4835 299.81 -17.1617 219.583 9.19024 145.964Z"
              />

              <image
                x="50"
                y="60"
                width="380"
                height="430"
                href="nilesh2.png"
                clipPath="url(#clip)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Home;
