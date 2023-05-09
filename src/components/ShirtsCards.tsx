"use client";

import SwiperCore, { Navigation,Virtual  } from 'swiper';
import { Swiper, SwiperSlide  } from "swiper/react";
import React, { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/navigation";
import "swiper/css/virtual";

import {MdOutlineNavigateNext,MdOutlineNavigateBefore} from "react-icons/md"


interface shirtsProps {
    id: number;
    name: string;
    points: string;
    img: string;
}



SwiperCore.use([Virtual, Navigation]);

export default function ShirtCards() {
    
    

    useEffect(() => {
         fetch("/api/t-shirts").then(res => res.json()).then(res => setShirts(res.blouse)); 
     },[])

    const [shirts, setShirts] = useState<shirtsProps[]>()
    
    const [shirtIndex, setShirtIndex] = useState(1);
    
  const [swiperRef, setSwiperRef] = useState<any>();

  const slideTo = (index : number) => {
    swiperRef.slideTo(index - 1, 0);
  };

    return (
        <div className="flex flex-col items-center my-4    sm:w-1/3 sm:h-1/2   ">
         
        <div className="flex items-center  w-1/2 justify-around">
                <section className="justify-self-center hidden w-fit gap-4 sm:flex">

                <button onClick={() => slideTo(shirtIndex - 1)}>
                        <MdOutlineNavigateBefore
                            className='
                            text-4xl 
                            border
                            border-white
                            text-center
                            rounded-full
                            bg-clip-border 
                            hover:opacity-60
                            transition-all
                            duration-200
                            ease-linear
                            '/>                    
         </button>
                <button onClick={() => slideTo(shirtIndex + 1)}>
                        <MdOutlineNavigateNext
                            className='
                            text-4xl  
                            hover:bg-[#e5d5fe]
                            bg-transparent
                            rounded-full
                            bg-clip-border
                            transition-all
                            duration-200
                            ease-linear
                            border
                            border-white' />
                    </button>
                </section>  
                <section className='flex self-start  items-end' >
                    <strong className='text-4xl leading-none font-thin'>{shirtIndex }</strong>
                    
                    <p className="leading-6">/{shirts?.length}</p>
                </section>
     </div>
        <Swiper
                onSwiper={setSwiperRef}
                 onSlideChange={(slide) => setShirtIndex(shirts ? shirts[slide.snapIndex].id : 1 )}
        grabCursor={true}
        slidesPerView={1}
            virtual       
          spaceBetween={10}
        modules={[Virtual]}
        className="flex w-1/2 h-10/12 m-0 sm:place-content-end"
        >
            
   
            {shirts ? 
                shirts.map(shirt => {
                    return (
                        <SwiperSlide virtualIndex={shirt.id}>
                        <div className="flex flex-col items-center text-center justify-center w-full h-max  p-2 rounded-md">
                        <img src={shirt.img} alt="" className="rounded-lg   w-full h-auto    "/>
                            <section className="self-start text-left" >
                            <h2 className="font-bold">
                            {shirt.name}
                        </h2>
                                <p>
                                    {shirt.points} pontos
                        </p>
                        </section>
                        </div>
                </SwiperSlide>
                )
            })  : "sd"  
        } 
      </Swiper>
        </div>
    )
}