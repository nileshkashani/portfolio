import React, { useState } from 'react';
import { FaInstagram } from 'react-icons/fa';

const InstagramIcon = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="cursor-pointer w-6 h-6 md:w-8 md:h-8 lg:w-9 lg:h-9 transition-transform duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        viewBox="0 0 40 40"
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="instaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#feda75" />
            <stop offset="25%" stopColor="#fa7e1e" />
            <stop offset="50%" stopColor="#d62976" />
            <stop offset="75%" stopColor="#962fbf" />
            <stop offset="100%" stopColor="#4f5bd5" />
          </linearGradient>
        </defs>
        <FaInstagram
          className="w-full h-full"
          style={{
            fill: isHovered ? 'url(#instaGradient)' : 'black',
            transition: 'fill 0.3s ease',
          }}
        />
      </svg>
    </div>
  );
};

export default InstagramIcon;
