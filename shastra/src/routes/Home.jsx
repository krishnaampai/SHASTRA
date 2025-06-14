import React from 'react'
import banner from '../assets/bnr-without-txt.png'
import Carousel from '../components/Carousel.jsx'
import img01 from '../assets/carousel/img01.jpeg';
import img02 from '../assets/carousel/img02.jpeg';
import img03 from '../assets/carousel/img03.jpeg';
import ScrollView from '../components/ScrollView.jsx';
import logo from '../assets/logo.png';
import { FaInstagram,FaFacebookSquare,FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const slides = [img01, img02, img03];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#060616] to-gray-900">
      
      <section 
        className="w-full h-[50vh] sm:h-screen bg-no-repeat bg-cover bg-bottom relative m" 
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className='absolute inset-0 flex items-center justify-center '>
          <p className="font-sans font-bold text-white text-5xl sm:text-7xl md:text-9xl 
              [text-shadow:_0_0_2px_#fff,_0_0_4px_#a2d2ff,_0_0_6px_#7db1ff]
              animate-[glow_3s_ease-in-out_infinite_alternate]">
            SHASTRA
          </p>
        </div>
      </section>

      
     <div className="w-full px-4 py-8 md:py-16">
  <div className="mx-auto w-full max-w-4xl bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-6 md:p-8 border border-white border-opacity-20">
    <ScrollView>
<h2 className='text-white text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'>
      ABOUT
    </h2>
    </ScrollView>
    <ScrollView>
      <p className="text-white text-opacity-90 text-base md:text-lg leading-relaxed">
      Shastra, the premier techno-managerial festival of India, hosted by the students of ABC, Kochi is a beacon of innovation and celebration of young minds.Since its inception in 2001, Shastra has always pushed the limits of creativity as a dynamic platform for students to explore, innovate, and Shastra. Shastra returns for a momentous 25th edition this Shastra 2024 and promises to be an unforgettable journey. Join us for a constellation of events that includes workshops, competitions, talks, and all kinds of fun.
    </p>

    </ScrollView>
    
  </div>
</div>
  <div className="w-full px-4 py-12">
        <div className="mx-auto max-w-4xl">
          <ScrollView><h3 className='text-white text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'>GALLERY</h3></ScrollView>
          
          <div className="relative overflow-hidden rounded-xl shadow-2xl">
            <Carousel>
              {slides.map((slide, index) => (
                <div key={index} className="w-full aspect-video">
                  <img 
                    src={slide} 
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
  
    <div className='mx-auto  px-4 py-12 max-w-3xl'>
      <h3 className='text-white text-2xl md:text-3xl font-bold text-center mb-4 md:mb-6'>PARTNERS</h3>
      <div className='grid md:grid-cols-2 grid-cols-1 gap-4 justify-items-center'>
        <div className='text-white flex text-center w-3xl p-4  bg-white bg-opacity-10 backdrop-blur-lg rounded-md'>Partner 1</div>
        <div className='text-white flex text-center w-2xl p-4  bg-white bg-opacity-10 backdrop-blur-lg rounded-md'>Partner 2</div>
        <div className='text-white flex text-center w-2xl p-4  bg-white bg-opacity-10 backdrop-blur-lg rounded-md'>Partner 3</div>
        <div className='text-white flex text-center w-2xl p-4  bg-white bg-opacity-10 backdrop-blur-lg rounded-md'>Partner 4</div>
      </div>
      
    </div>
     <footer>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4  mt-48 justify-center px-10 mb-10 '>
          <div><img src={logo} alt="Logo" className="h-18 w-20" /></div>
           <div className='grid grid-cols-4 text-white font-2xl text-xl'>
            <FaInstagram /><FaFacebookSquare /><FaLinkedin /><FaSquareXTwitter />
           </div>
            <div>moddel negineering college</div>

        </div>
      </footer>


    </div>


  )
}

export default Home