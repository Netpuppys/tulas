'use client'

import campusLifeImages from '@/data/campusLifeImages'
import Image from 'next/image';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import { useState, useRef, useEffect } from 'react';

const CampusLife = () => {
    const contRef = useRef()
    const scrollRef = useRef()

    const [ contHeight, setContHeight ] = useState()
    const [ albumIndex, setAlbumIndex ] = useState(0)
    const [ imageIndex, setImageIndex ] = useState(0)

    useEffect(() => {
        if (contRef.current) {
            const height = contRef.current.getBoundingClientRect().height
            setContHeight(height)
            console.log("jehwfdqk" + height)
        }
    }, [])

    const handleAlbumIndex = (index) => {
        if (index < campusLifeImages.length) {
            setAlbumIndex(index)
            return
        }
    }

    const handleNextImage = () => {
        if (imageIndex < campusLifeImages[albumIndex].images.length) {
            setImageIndex(prev => prev+1)
            return
        }
    }

    const handlePrevImage = () => {
        if (imageIndex !== 0) {
            setImageIndex(prev => prev-1)
            return
        }
    }

    useEffect(() => {
        const vw = window.innerWidth;
    
        if (scrollRef.current) {
            scrollRef.current.scrollTo({
                left: albumIndex * vw,
                behavior: "smooth"
            });
        }
    }, [albumIndex, scrollRef]);
    
    useEffect(() => {
        if (scrollRef.current && contHeight) {
            scrollRef.current.scrollTo({
                top: imageIndex * contHeight,
                behavior: "smooth"
            });
        }
    }, [imageIndex, scrollRef, contHeight]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setImageIndex(prev => prev+1)
    //     }, 2000)
    // }, [imageIndex])

  return (
    <div className="w-full flex flex-col items-center justify-start pt-20 pb-40">
        <p className="uppercase text-4xl text-[#007A83] font-semibold tracking-[0.15em]">
            Campus Life
        </p>
        <div className="w-full relative h-[40rem] mt-8">
            <div ref={contRef} className="w-full h-full bg-green-300 relative">
                <div ref={scrollRef} className="absolute top-0 left-0 flex overflow-hidden w-full max-h-full">
                {campusLifeImages.map((item,index) => (
                    <div key={index} className="">
                        {item.images.map((image, index) => (
                            <div 
                                key={index} 
                                style={{ height: contHeight}} 
                                className="w-screen relative overflow-hidden flex items-center justify-center"
                            >
                                <Image
                                    src={image}
                                    height={contHeight}
                                    className="w-screen object-cover"
                                    alt=""
                                />
                                <div className="absolute top-0 left-0 w-full h-full z-10 bg-[#007A83] bg-opacity-30"></div>
                                <div className="absolute top-0 left-0 w-full h-full z-10 bg-black bg-opacity-40"></div>
                            </div>
                        ))}
                    </div>))}
                </div>
                {/* up and down btns */}
                <div className='w-14 z-30 h-fit flex items-center justify-center flex-col gap-2 absolute top-1/2 -translate-y-1/2 right-20'>
                    <button
                        onClick={handlePrevImage}
                        disabled={imageIndex===0? true : false}
                        className="w-full aspect-square shadow-2xl disabled:opacity-80 disabled:text-gray-600 rounded-full bg-white flex items-center justify-center text-black text-2xl"
                    >
                        <IoIosArrowRoundUp />
                    </button>
                    <button
                        onClick={handleNextImage}
                        disabled={imageIndex===campusLifeImages[albumIndex].images.length-1? true : false}
                        className="w-full aspect-square shadow-2xl disabled:opacity-80 disabled:text-gray-600 rounded-full bg-white flex items-center justify-center text-black text-2xl"
                    >
                        <IoIosArrowRoundDown />
                    </button>
                </div>
            </div>
            {/* bottom selector */}
            <div className="w-full z-30 h-40 absolute bottom-0 translate-y-1/2 bg-transparent px-5 flex items-center justify-center">
                <div className="shadow-2xl bg-white max-w-[85rem] w-full h-full flex flex-col items-center justify-center px-14 rounded-2xl rounded-br-[3rem] relative">
                    <button
                        className="absolute -top-8 left-5 uppercase tracking-widest text-xs"
                    >
                        explore more
                    </button>
                    <div className="w-full flex items-center justify-around">
                    {campusLifeImages.map((item, index) => (
                        <button 
                            key={index}
                            onClick={() => handleAlbumIndex(index)}
                            style={{ transform: `translateY(${albumIndex < index ? "0px" : "-5px"})` }}
                            className={`uppercase text-[#050505] font-light
                            w-1/${campusLifeImages.length}`}
                        >
                            {item.title}
                        </button>))}
                    </div>
                    <div className="w-full mt-6 relative bg-black bg-opacity-25 h-[0.15rem] rounded-full flex items-center justify-center">
                        <div 
                            style={{ width: `${25*(albumIndex+1)}%` }}
                            className="h-full bg-black rounded-full absolute z-0 top-0 left-0">
                        </div>
                        <div className="w-full flex items-center justify-around z-10 h-10">
                            {campusLifeImages.map((_, index) => (
                                <button 
                                    key={index}
                                    onClick={() => handleAlbumIndex(index)}
                                    style={{ borderWidth: `${(albumIndex<index)? "0px" : "2px"}`}}
                                    className="h-full aspect-square rounded-full bg-white p-3 border-black hover:!border-2"
                                >
                                    <div className="w-full h-full bg-black rounded-full"></div>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CampusLife