import React from 'react'
import photo from '../assets/core-team.jpg'
const Contact = () => {

  const team = [
    {
      id:1,
      name:"John",
      linkedin:"#",
      mail: "#",
      phone:"#",
      photo: photo

    },
     {
      id:2,
      name:"John",
      linkedin:"#",
      mail: "#",
      phone:"#",
      photo: photo

    },
     {
      id:3,
      name:"John",
      linkedin:"#",
      mail: "#",
      phone:"#",
      photo: photo

    },
  ];
  return (
      <div className='min-h-screen bg-gradient-to-br from-[#060616] to-gray-900 py-12 px-4 '>
          <div className="max-w-7xl mx-auto mt-20">
            <h1 className='text-white text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'>
              TEAM
            </h1>
            <ul>
              
            </ul>
            
           
           
          </div>
        </div>
  )
}

export default Contact