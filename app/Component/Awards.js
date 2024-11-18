import React, { useEffect, useRef, useState } from 'react'
import background from "../../public/AboutDehradun/background.png"
import { FaPause, FaPlay } from "react-icons/fa";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';

const Checkpoint = ({ setCount, marginTop, expand, flipped=false }) => {
    return (
        <div 
            onClick={() => setCount(marginTop)} 
            style={{ top: `${marginTop}%`}} 
            className={`absolute ${expand? "w-10 border border-[#007A83] animate-expandCheckpoint" : "w-4 hover:w-10 hover:border hover:border-[#007A83] hover:animate-expandCheckpoint"} group cursor-pointer shadow-2xl aspect-square left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-slate-400`}
        >
            <div className='w-full h-full relative'>
                <Image
                    src={background}
                    className={`w-full ${expand? "" : "hidden group-hover:block"} h-full rounded-full`}
                    alt=''
                />

                <div className={`absolute text-nowrap top-1/2 -translate-y-1/2 px-5 ${flipped? "right-full" : "left-full"}`}>
                    <p className={`${expand? "text-[#007A83]" : "text-white"}`}>
                        BIM Detailing
                    </p>
                </div>
            </div>
        </div>
    )
}

const Awards = () => {
    const scrollRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.3,
      });

    const [ count, setCount ] = useState(4);
    const [ play, setPlay ] = useState(true)

    useEffect(() => {
        if (play && inView) {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                  if (prevCount < 100) {
                    return prevCount + 0.15;
                  } else {
                    return 4;
                  }
                });
              }, 100);
          
              return () => clearInterval(interval);
        }
    }, [play, inView]);

    useEffect(() => {
        // Calculate the scroll position and scroll to it
        const scrollToCheckpoint = () => {
            let targetElement = null;
    
            if (count >= 95) {
                targetElement = fourthRef.current;
            } else if (count >= 65) {
                targetElement = thirdRef.current;
            } else if (count >= 35) {
                targetElement = secondRef.current;
            } else if (count >= 5) {
                targetElement = firstRef.current;
            }
    
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
    
                scrollRef.current.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth',
                });
            }
        };
    
        scrollToCheckpoint();
    }, [count]);

  return (
    <div ref={ref} className='w-full h-screen flex md:flex-row flex-col bg-black relative md:-mb-[6vh]'>
        <div className='w-full md:w-1/2 h-fit md:h-full flex items-center justify-center bg-[#3D001B] py-20 relative'>

            <button 
                onClick={() => setPlay(prev => !prev)}
                className='w-20 bg-white h-14 text-slate-900 text-3xl rounded-full flex items-center justify-center shadow-2xl absolute bottom-20 left-20'
            >
                {play? <FaPlay /> : <FaPause />}
            </button>

            <div className='h-[90%] w-[2px] bg-opacity-40 bg-gray-400 relative rounded-full'>

                <div 
                    style={{ height: `${count}%` }}
                    className=" top-0 left-0 w-full rounded-full bg-[#007A83] transition-all duration-400"
                ></div>

                <Checkpoint setCount={setCount} marginTop={5} expand={count>5? true : false} />
                <Checkpoint setCount={setCount} marginTop={35} expand={count>35? true : false} flipped={true} />
                <Checkpoint setCount={setCount} marginTop={65} expand={count>65? true : false} />
                <Checkpoint setCount={setCount} marginTop={95} expand={count>95? true : false} flipped={true} />
            </div>
        </div>
        <div className={`${inView? "animate-swipeRight relative w-full md:w-1/2" : "absolute w-full top-0 right-0 animate-swipeLeft"} h-full overflow-hidden`}>
            <Image
                src={background}
                className='absolute z-[1] top-0 left-0 w-full scale-150 h-full'
                alt=''
            />
            <div ref={scrollRef} className='w-full max-w-full flex items-center justify-start flex-col max-h-full h-full overflow-y-auto px-10 relative z-[2]'>
                <div className='w-full max-w-[50vw] h-fit'>

                    <div ref={firstRef} className='w-full h-screen flex items-center justify-center'>
                        <p className=' text-white font-bold text-sm md:text-3xl'>
                            1 Furcare Summary
                            Overview:
                            Furcare is an all-in-one platform for pet care, catering to the needs of pet owners, veterinarians, and service providers. It aims to streamline pet health management by integrating features such as pet profiles, veterinary appointments, grooming services, daycare bookings, and a marketplace for pet products. The project leverages Flutter for cross-platform mobile apps, with backend support via Laravel, ensuring scalability, security, and accessibility.
                        </p>
                    </div>

                    <div ref={secondRef} className='w-full h-screen flex items-center justify-center'>
                        <p className=' text-white font-bold text-sm md:text-3xl'>
                            2 Furcare Summary
                            Overview:
                            Furcare is an all-in-one platform for pet care, catering to the needs of pet owners, veterinarians, and service providers. It aims to streamline pet health management by integrating features such as pet profiles, veterinary appointments, grooming services, daycare bookings, and a marketplace for pet products. The project leverages Flutter for cross-platform mobile apps, with backend support via Laravel, ensuring scalability, security, and accessibility.
                        </p>
                    </div>

                    <div ref={thirdRef} className='w-full h-screen flex items-center justify-center'>
                        <p className=' text-white font-bold text-sm md:text-3xl'>
                            3 Furcare Summary
                            Overview:
                            Furcare is an all-in-one platform for pet care, catering to the needs of pet owners, veterinarians, and service providers. It aims to streamline pet health management by integrating features such as pet profiles, veterinary appointments, grooming services, daycare bookings, and a marketplace for pet products. The project leverages Flutter for cross-platform mobile apps, with backend support via Laravel, ensuring scalability, security, and accessibility.
                        </p>
                    </div>

                    <div ref={fourthRef} className='w-full h-screen flex items-center justify-center'>
                        <p className=' text-white font-bold text-sm md:text-3xl'>
                            4 Furcare Summary
                            Overview:
                            Furcare is an all-in-one platform for pet care, catering to the needs of pet owners, veterinarians, and service providers. It aims to streamline pet health management by integrating features such as pet profiles, veterinary appointments, grooming services, daycare bookings, and a marketplace for pet products. The project leverages Flutter for cross-platform mobile apps, with backend support via Laravel, ensuring scalability, security, and accessibility.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards