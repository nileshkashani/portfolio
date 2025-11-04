import React from "react";
import { useNavigate } from "react-router-dom";
const Project = () => {
  const navigate = useNavigate()
  const projectList = [
    {
      title: "Club Matrix",
      summary:
        "Club Matrix - empowering school clubs Java(Spring Boot) + React + MySQL hackathon Runner-up project which contains features like sending available clubs the join request, search and categorize club, and add your own club and become leader.",
      github: "https://github.com/nileshkashani/clubmatrix"
    },
    {
      title: "Falcon",
      summary:
        "A Java + SpringBoot, ReactJs project made for providing instant delivery service, focusing on products like clothing, electronics, etc. which are not well-covered by existing platforms. It has features like OTP login (via phone or email) and RazorPay payment integration.",
      github: "https://github.com/nileshkashani/Falcon"
    },
    {
      title: "Barber Connect",
      summary: "A MERN stack project to get real time information of registered saloons nearby you eg. no of customer's waitingin saloon, services provided by saloon, etc. Has a role based access in which saloon's worker can manually update no of customer's waiting and users can explore saloons nearby followed by the real time waiting list.",
      github: "https://github.com/nileshkashani/barberconnect"
    }
  ];

  return (
    <section
      id="projects"
      className="py-16 px-6 md:px-20 bg-white font-mono mt-10 shadow-md"
    >
      <h2 className="lg:text-4xl text-2xl font-semibold text-blue-600 underline underline-offset-4 mb-12 text-center">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="bg-blue-500 p-5 rounded-3xl shadow-lg transform transition duration-300  hover:bg-blue-600 text-white flex flex-col"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base mb-4">{project.summary}</p>
            </div>

            {/* Buttons pushed to bottom */}
            <div className="flex gap-3 mt-auto pt-4 flex-wrap">

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition text-sm"
              >
                Source Code
              </a>
              <div onClick={() => navigate('/details', {state: {project}})}  className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition text-sm cursor-pointer">
                See Details
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
