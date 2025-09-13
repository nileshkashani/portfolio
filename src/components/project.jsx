import React from "react";

const Project = () => {
  const projectList = [
    {
      title: "SnackSource",
      summary:
        "A Hackathon project made with Java + SpringBoot + React Js and MySql which is made for street food vendors and raw material suppliers. Where suppliers can add raw materials for purchase and vendors can purchase according to pricing, rating, and quality. Algorithms are designed in such a way that raw material suppliers will be within the city of vendors. This ensures that delivery will be done within a few hours.",
      github: "https://github.com/nileshkashani/snacksource",
      frontend: "https://snacksource.vercel.app"
    },
    {
      title: "Falcon",
      summary:
        "A Java + SpringBoot, ReactJs project made for providing instant delivery service, focusing on products like clothing, electronics, etc. which are not well-covered by existing platforms. It has features like OTP login (via phone or email) and RazorPay payment integration."
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
            className="bg-blue-500 p-5 rounded-3xl shadow-lg transform transition duration-300 hover:scale-105 hover:bg-blue-600 text-white flex flex-col"
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm md:text-base mb-4">{project.summary}</p>
            </div>

            {/* Buttons pushed to bottom */}
            <div className="flex gap-3 mt-auto pt-4 flex-wrap">
              {project.github ? (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition text-sm"
                >
                  Source Code
                </a>
              ) : (
                <a
                  href="#"
                  className="px-5 py-2 bg-white text-blue-400 font-semibold rounded-full cursor-not-allowed opacity-50 text-sm"
                >
                  Source Code
                </a>
              )}

              {project.frontend ? (
                <a
                  href={project.frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 bg-white text-blue-700 font-semibold rounded-full hover:bg-gray-100 transition text-sm"
                >
                  Website
                </a>
              ) : (
                <a
                  href="#"
                  className="px-5 py-2 bg-white text-blue-400 font-semibold rounded-full cursor-not-allowed opacity-50 text-sm"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
