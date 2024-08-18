import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll } from 'framer-motion';

const timelineEvents = [
  { id: 1, date: '2020', title: 'Event 1', description: 'Description for Event 1' },
  { id: 2, date: '2021', title: 'Event 2', description: 'Description for Event 2' },
  { id: 3, date: '2022', title: 'Event 3', description: 'Description for Event 3' },
  { id: 4, date: '2023', title: 'Event 4', description: 'Description for Event 4' },
];

const Timeline = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ container: containerRef });

  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((latest) => {
      const eventIndex = Math.floor(latest * timelineEvents.length);
      setCurrentEvent(eventIndex);
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  return (
    <div ref={containerRef} className="h-screen overflow-y-scroll">
      <div className="relative mx-auto w-1 bg-gray-200 h-full">
        <motion.div
          className="absolute w-4 h-4 bg-blue-500 rounded-full"
          style={{ top: scrollYProgress }}
        />
        {timelineEvents.map((event, index) => (
          <div
            key={event.id}
            className={`absolute left-4 p-4 bg-white shadow-md rounded-md w-64 transition-opacity duration-300 ${
              index === currentEvent ? 'opacity-100' : 'opacity-50'
            }`}
            style={{ top: `${(index / (timelineEvents.length - 1)) * 100}%` }}
          >
            <h3 className="text-lg font-bold">{event.date}</h3>
            <h4 className="text-md font-semibold">{event.title}</h4>
            <p className="text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;