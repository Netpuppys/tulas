import React, { useEffect, useRef, useState } from 'react'
import { FaPause, FaPlay } from "react-icons/fa";
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import background from "../../public/Homepage/awards/image.png"
import award1 from "../../public/Homepage/awards/award1.webp"
import award2 from "../../public/Homepage/awards/award2.webp"
import award3 from "../../public/Homepage/awards/award3.webp"
import award4 from "../../public/Homepage/awards/award4.webp"

const Checkpoint = ({ image, setCount, marginTop, expand, flipped=false, title}) => {
    return (
        <div 
            onClick={() => setCount(marginTop)} 
            style={{ top: `${marginTop}%`}} 
            className={`absolute ${expand? "w-10 border border-[#007A83] animate-expandCheckpoint" : "w-4 hover:w-10 hover:border hover:border-[#007A83] hover:animate-expandCheckpoint"} group cursor-pointer shadow-2xl aspect-square left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-gray-400`}
        >
            <div className='w-full h-full relative'>
                <Image
                    src={image}
                    className={`w-full shadow-awardsLine ${expand? "" : "hidden group-hover:block"} h-full rounded-full`}
                    alt=''
                />

                <div className={`absolute text-nowrap top-1/2 -translate-y-1/2 px-5 ${flipped? "right-full" : "left-full"}`}>
                    <p className={`${expand? "text-white" : "text-gray-400 text-opacity-60"} capitalize`}>
                        {title}
                    </p>
                </div>
            </div>
        </div>
    )
}

const Card = ({ image, date, title, content }) => {
    return (
        <div className='w-full max-w-[45vw] px-10'>
            <div className='w-full mb-10 max-h-[25rem] group hover:animate-awardHover hover:max-h-[40rem] hover:h-[40rem] h-[25rem] group rounded-[20px] hover:shadow-none shadow-awardsImage overflow-hidden hover:overflow-y-scroll flex items-center justify-center'>
                <Image  
                    src={image}
                    className='w-full h-full object-cover group-hover:w-fit group-hover:animate-awardImageHover delay-500 group-hover:object-contain group-hover:rounded-[20px]'
                    alt=''
                />
            </div>
            <p className='text-2xl text-white font-bold'>
                {title}
            </p>
            <p className='text-sm text-white opacity-80'>
                {date}
            </p>
            <div className='w-full h-[1px] my-4 bg-white bg-opacity-50 rounded-full'></div>
            <p className='text-white'>
                {content}
            </p>
        </div>
    )
}

const Awards = () => {
    const scrollRef = useRef(null)
    const firstRef = useRef(null)
    const secondRef = useRef(null)
    const thirdRef = useRef(null)
    const fourthRef = useRef(null)

    const awards = [
        {
            ref: firstRef,
            image: award4,
            provider: "Times Engineering",
            date: "January 6, 2021",
            title: "Ranked 41 nationwide for placement",
            content: "Ranked 41 nationwide for placement among private engineering colleges in India by the Times Engineering survey 2019."
        },
        {
            ref: secondRef,
            image: award2,
            provider: "The Times of india",
            date: "August 28, 2020",
            title: "Every parent wants their kids to get the best education",
            content: "Every parent wants their kids to get the best education. At Tula's Institute, a brilliant faculty comes together with premium facilities to offer students a learning experience of their lifetime. Thanks to this, we are one of India’s top 50 private colleges for engineering by The Times of India. So wait no more, get your kid enrolled now."
        },
        {
            ref: thirdRef,
            image: award3,
            provider: "The Times of india",
            date: "January 8, 2020",
            title: "Tula's Institue has been ranked 32",
            content: "Tula's Institue has been ranked 32 among the private engineering colleges in India by Times Engineering Survey 2019."
        },
        {
            ref: fourthRef,
            image: award1,
            provider: "ASMA",
            date: "January 6, 2021",
            title: "Tula's is awarded with academic excellence award 2020 by ASMA",
            content: "Tula's is awarded with academic excellence award 2020 by ASMA in the Education Leadership Conclave held on 27th November 2020."
        },
    ]

    const { ref, inView } = useInView({
        triggerOnce: false, 
        threshold: 0.6,
      });

    const [ count, setCount ] = useState(4);
    const [ play, setPlay ] = useState(true)

    useEffect(() => {
        if (play && inView) {
            const interval = setInterval(() => {
                setCount((prevCount) => {
                  if (prevCount < 100) {
                    return prevCount + 0.25;
                  } else {
                    return 4;
                  }
                });
              }, 25);
          
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
    <div ref={ref} className='w-full h-screen flex md:flex-row flex-col relative md:-mb-[6vh]'>
        <div className='w-full md:w-1/2 h-fit md:h-full flex items-center justify-center bg-[#230512] py-20 relative'>

            <button 
                onClick={() => setPlay(prev => !prev)}
                className='w-20 bg-white h-14 text-slate-900 text-3xl rounded-full flex items-center justify-center shadow-2xl absolute bottom-20 left-20'
            >
                {play? <FaPlay /> : <FaPause />}
            </button>

            <div className='h-[90%] w-[2px] bg-gray-400 relative rounded-full'>

                <div 
                    style={{ height: `${count}%` }}
                    className=" top-0 left-0 w-full shadow-awardsLine rounded-full bg-white transition-all duration-400"
                ></div>

                <Checkpoint image={award4} setCount={setCount} marginTop={5} expand={count>5? true : false} title={awards[0].provider} />
                <Checkpoint image={award2} setCount={setCount} marginTop={35} expand={count>35? true : false} flipped={true} title={awards[1].provider} />
                <Checkpoint image={award3} setCount={setCount} marginTop={65} expand={count>65? true : false} title={awards[2].provider} />
                <Checkpoint image={award1} setCount={setCount} marginTop={95} expand={count>95? true : false} flipped={true} title={awards[3].provider} />
            </div>
        </div>
        <div className={`${inView? "animate-swipeRight relative w-full md:w-1/2" : "absolute w-full top-0 right-0 animate-swipeLeft"} h-full overflow-hidden`}>
            <Image
                src={background}
                className='absolute z-[1] top-0 left-0 w-full scale-150 h-full'
                alt=''
            />
            <div ref={scrollRef} className='w-full max-w-full flex items-center justify-start flex-col max-h-full h-full overflow-y-auto bg-black bg-opacity-40 px-10 relative z-[2]'>
                <div className='w-full max-w-[50vw] h-fit'>
                    {awards.map((item, id) => (
                    <div key={id} ref={item.ref} className='w-full h-screen flex items-center justify-center'>
                        <Card
                            image={item.image}
                            date={item.date}
                            title={item.title}
                            content={item.content}
                        />
                    </div>))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Awards