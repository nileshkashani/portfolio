import { Typewriter } from 'react-simple-typewriter';

function HeroSection() {
  return (
    <div className="text-blue-500 text-3xl sm:text-5xl lg:text-6xl font-bold font-poppins">
      <p className='text-black'>I'm a</p>
      <div className="text-blue-600">
        <Typewriter
          words={[`Web Developer`, `Software Engineer`, `Problem Solver`]}
          loop={true}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={50}
          delaySpeed={500}
        />
      </div>
    </div>
  );
}

export default HeroSection;
