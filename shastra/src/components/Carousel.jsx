import React, { useState, useEffect } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(React.Children.count(children));

  useEffect(() => {
    setLength(React.Children.count(children));
  }, [children]);

  const next = () => {
    setCurrentIndex(prevIndex => (prevIndex === length - 1 ? 0 : prevIndex + 1));
  };

  const prev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [length]);

  return (
    <div className="relative w-full">
      <div 
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div key={index} className="w-full flex-shrink-0">
            {child}
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? 'bg-white w-6' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;