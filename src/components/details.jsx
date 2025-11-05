import React, { useState } from 'react';
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

  const projectImages = {
    'Barber Connect': ['sc-52.png', 'sc-53.png', 'sc-54.png', 'sc-55.png'],
    Falcon: ['sc-56.png', 'sc-57.png', 'sc-58.png', 'sc-59.png', 'sc-60.png', 'sc-61.png', 'sc-62.png', 'sc-63.png'],
    'Club Matrix': ['sc-45.png', 'sc-44.png', 'sc-46.png', 'sc-47.png', 'sc-48.png', 'sc-49.png', 'sc-50.png', 'sc-51.png']
  };

  const images = projectImages[project.title];
  const [index, setIndex] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="p-6 sm:p-8 md:p-10 font-mono flex flex-col items-center bg-gray-50 min-h-screen">
      <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4 sm:mb-6 text-center">{project.title}</h2>
      <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl text-center px-4">{project.summary}</p>

      {/* Carousel */}
      <div className="relative w-full max-w-4xl flex items-center justify-center">
        <button
          onClick={prevImage}
          className="absolute left-2 sm:left-4 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 transition text-xl sm:text-2xl z-10"
        >
          ◀
        </button>

        {/* Image container with zoom */}
        <div
          className={`transition-transform duration-500 cursor-zoom-in ${zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100'}`}
          onClick={() => setZoomed(!zoomed)}
        >
          <img
            src={images[index]}
            alt={`${project.title} screenshot ${index + 1}`}
            className="rounded-2xl shadow-lg w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[50vw] h-auto object-contain transition-all duration-500"
          />
        </div>

        <button
          onClick={nextImage}
          className="absolute right-2 sm:right-4 bg-white shadow-lg rounded-full p-2 sm:p-3 hover:bg-gray-100 transition text-xl sm:text-2xl z-10"
        >
          ▶
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex mt-6 space-x-2 sm:space-x-3">
        {images.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer transition-all ${
              index === i ? 'bg-blue-600 scale-110' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 sm:mt-10 px-5 sm:px-6 py-2 sm:py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition"
      >
        View Source Code
      </a>
    </div>
  );
};

export default Details;
