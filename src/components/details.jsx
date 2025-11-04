import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { project } = location.state || {};

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-gray-600">
        <p>No details found. Please go back and try again.</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
        >
          Go Back
        </button>
      </div>
    );
  }

  // 🧠 Conditional image sets by title
  const projectImages = {
    'Barber Connect': [
      'sc-52.png',
      'sc-53.png',
      'sc-54.png',
      'sc-55.png'
    ],
    Falcon: [
      'sc-56.png',
      'sc-57.png',
      'sc-58.png',
      'sc-59.png',
      'sc-60.png',
      'sc-61.png',
      'sc-62.png',
      'sc-63.png'
    ],
    'Club Matrix': [
      'sc-45.png',
      'sc-44.png',
      'sc-46.png',
      'sc-47.png',
      'sc-48.png',
      'sc-48.png',
      'sc-49.png',
      'sc-50.png',
      "sc-51.png",
    ]
  };

  const images =
    projectImages[project.title]

  const [index, setIndex] = useState(0);



  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="p-10 font-mono flex flex-col items-center bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-bold text-blue-600 mb-6">{project.title}</h2>
      <p className="text-gray-700 text-lg mb-8 max-w-2xl text-center">{project.summary}</p>

      {/* 🖼 Circular carousel */}
      <div className="relative w-full max-w-3xl flex items-center justify-center">
        <button
          onClick={prevImage}
          className="absolute left-2 md:left-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition text-2xl"
        >
          ◀
        </button>

        <img

          src={images[index]}
          alt={`${project.title} screenshot ${index + 1}`}
          className="rounded-3xl shadow-lg w-full h-[400px] sm:h-[200px] object-cover transition-all duration-500"
        />

        <button
          onClick={nextImage}
          className="absolute right-2 md:right-6 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition text-2xl"
        >
          ▶
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex mt-6 space-x-2">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-all ${index === i ? 'bg-blue-600 scale-110' : 'bg-gray-400'
              }`}
          ></div>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-10 px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
      >
        View Source Code
      </a>
    </div>
  );
};

export default Details;
