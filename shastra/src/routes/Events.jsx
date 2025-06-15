import { TechFestEvents } from '../data/TechFestEvents.jsx';
import {EventCard}  from '../components/EventCard.jsx';

 const Events = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-[#060616] to-gray-900 py-12 px-4 '>
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className='text-white text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'>
          EVENTS
        </h1>
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TechFestEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Events;