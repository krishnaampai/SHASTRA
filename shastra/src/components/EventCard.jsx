import React, { useState } from 'react';
import { motion } from 'framer-motion'; 

 export const EventCard = ({ event }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div 
      className="w-full h-96 rounded-xl shadow-lg cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
      whileHover={{ scale: 1.03 }}>
      <motion.div 
        className="relative w-full h-full"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}>
       
        <div 
          className="absolute w-full h-full bg-white rounded-xl overflow-hidden flex flex-col"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img 
            src={event.poster} 
            alt={event.name} 
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold">{event.name}</h3>
            <p className="text-gray-600 mt-2">{event.date} • {event.time}</p>
          </div>
        </div>

       
        <div 
          className="absolute w-full h-full bg-gray-800 text-white rounded-xl p-6 flex flex-col"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)" 
          }}
        >
          <h3 className="text-2xl font-bold">{event.name}</h3>
          <p className="mt-4">{event.description}</p>
          <div className="mt-6 space-y-2">
            <p><span className="font-semibold">Speaker:</span> {event.speaker}</p>
            <p><span className="font-semibold">Venue:</span> {event.venue}</p>
            <p><span className="font-semibold">Seats:</span> {event.seats} left</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

