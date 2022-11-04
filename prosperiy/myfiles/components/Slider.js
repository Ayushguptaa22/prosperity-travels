import React from 'react'
import { SliderData } from './SliderData';
import { useState } from 'react';
import {FaArrowCircleLeft, FaArrowCircleRight} from 'react-icons/fa';
import Image from 'next/image';
const Slider = ({slides}) => {
    const [current, setCurrent] = useState(0);
    const length=slides.length;

    const nextSlide=()=>{
        setCurrent(current === length-1 ? 0 : current+1);
    }

    const prevSlide=()=>{
        setCurrent(current ===  0 ?length-1 : current-1);
    }

    if(!Array.isArray(slides) || slides.length === 0){
        return null;
    }

  return (
    <div id='gallery' className='aboutHeading'>
        <h2>Fun <span className='format'>@</span> Prosperity</h2>
        <div>
            {slides.map((slide,index) => {
                return (
                <div key={index} className={index===current ? "opacity-[1] ease-in duration-1000" : "opacity-[0]"}> 
                <div className='relative flex justify-center p-4 pb-1'>
                <FaArrowCircleLeft onClick={prevSlide}
                className='absolute top-[50%] left-[80px] text-white/70 cursor-pointer select-none z-[2]'
                size={40}/>
                {index === current && (
                    <Image 
                    src={slide.image} 
                    alt='..' 
                    width='1050' 
                    height='0' 
                    objectFit='cover'
                    />
                )}
                <FaArrowCircleRight onClick={nextSlide}
                className='absolute top-[50%] right-[80px] text-white/70 cursor-pointer select-none z-[2]'
                size={40}/>
                </div>
                
                </div>
                );

            }
            )}
        </div>
    </div>
  )
}

export default Slider