import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import background from "../../public/Homepage/awards/image.png";
import award1 from "../../public/Homepage/awards/award1.webp";
import award2 from "../../public/Homepage/awards/award2.webp";
import award3 from "../../public/Homepage/awards/award3.webp";
import award4 from "../../public/Homepage/awards/award4.webp";
import { useMobile } from "@/component/IsMobileContext";

const Checkpoint = ({
  image,
  setCount,
  marginTop,
  expand,
  flipped = false,
  title,
}) => {
  const { isMobile } = useMobile();

  return (
    <div
      onClick={() => setCount(marginTop + 1)}
      style={isMobile ? { left: `${marginTop}%` } : { top: `${marginTop}%` }}
      className={`absolute ${
        expand
          ? "w-10 border border-[#007A83] animate-expandCheckpoint"
          : "w-4 hover:w-10 hover:border hover:border-[#007A83] hover:animate-expandCheckpoint"
      } group cursor-pointer shadow-2xl aspect-square left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full bg-gray-400`}
    >
      <div className="w-full h-full relative">
        <Image
          src={image}
          className={`w-full shadow-awardsLine ${
            expand ? "" : "hidden group-hover:block"
          } h-full rounded-full`}
          alt=""
        />

        <div
          style={
            isMobile ? { left: "50%", transform: "translate(-50%, 0)" } : {}
          }
          className={`absolute text-nowrap top-12 md:top-1/2 md:-translate-y-1/2 md:px-5 ${
            flipped ? "md:right-full" : "md:left-full"
          }`}
        >
          <p
            className={`${
              expand ? "text-white" : "text-gray-400 text-opacity-60"
            } capitalize`}
          >
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

const Card = ({ image, date, title, content }) => {
  return (
    <div className="w-full md:max-w-[45vw] px-6 md:px-10">
      <div className="w-full mb-10 max-h-[25rem] group md:hover:animate-awardHover md:hover:max-h-[40rem] md:hover:h-[40rem] h-[25rem] group rounded-[20px] md:hover:shadow-none md:shadow-awardsImage overflow-hidden md:hover:overflow-y-scroll flex items-center justify-center">
        <Image
          src={image}
          className="w-full h-full object-contain md:object-cover md:group-hover:w-fit md:group-hover:animate-awardImageHover delay-500 md:group-hover:object-contain md:group-hover:rounded-[20px]"
          alt=""
        />
      </div>
      <p className="text-lg md:text-2xl text-white font-bold">{title}</p>
      <p className="text-xs ms:text-sm text-white opacity-80">{date}</p>
      <div className="w-full h-[1px] my-4 bg-white bg-opacity-50 rounded-full"></div>
      <p className="text-white text-sm md:text-base">{content}</p>
    </div>
  );
};

const Awards = () => {
  const scrollRef = useRef(null);
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);

  const pointsRef = useRef(null);

  const { isMobile } = useMobile();

  const awards = [
    {
      ref: firstRef,
      image: award4,
      provider: "Times Engineering",
      date: "January 6, 2021",
      title: "Ranked 41 nationwide for placement",
      content:
        "Ranked 41 nationwide for placement among private engineering colleges in India by the Times Engineering survey 2019.",
    },
    {
      ref: secondRef,
      image: award2,
      provider: "The Times of india",
      date: "August 28, 2020",
      title: "Every parent wants their kids to get the best education",
      content:
        "Every parent wants their kids to get the best education. At Tula's Institute, a brilliant faculty comes together with premium facilities to offer students a learning experience of their lifetime. Thanks to this, we are one of India’s top 50 private colleges for engineering by The Times of India. So wait no more, get your kid enrolled now.",
    },
    {
      ref: thirdRef,
      image: award3,
      provider: "The Times of india",
      date: "January 8, 2020",
      title: "Tula's Institute has been ranked 32",
      content:
        "Tula's Institute has been ranked 32 among the private engineering colleges in India by Times Engineering Survey 2019.",
    },
    {
      ref: fourthRef,
      image: award1,
      provider: "ASMA",
      date: "January 6, 2021",
      title: "Tula's is awarded with academic excellence award 2020 by ASMA",
      content:
        "Tula's is awarded with academic excellence award 2020 by ASMA in the Education Leadership Conclave held on 27th November 2020.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.6,
  });

  const [count, setCount] = useState(4);
  const [play, setPlay] = useState(true);

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
      }, 50);

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
          behavior: "smooth",
        });
      }
    };

    scrollToCheckpoint();
  }, [count]);

  return (
    <div
      ref={ref}
      className="w-full md:h-screen flex md:flex-row flex-col relative"
    >
      <div className="w-full md:w-1/2 h-80 via-zinc-50 md:h-full flex items-center justify-start md:justify-center bg-[#230512] md:py-20 relative">
        <p className="md:hidden absolute top-4 left-1/2 -translate-x-1/2 text-3xl font-[carotSlab]">
          Awards
        </p>

        <button
          onClick={() => setPlay((prev) => !prev)}
          className="w-20 bg-white h-14 text-[#230512] text-3xl rounded-full flex items-center justify-center shadow-2xl absolute bottom-0 left-1/2 md:bottom-16 md:left-full z-50 -translate-x-1/2 translate-y-1/2 md:-translate-y-1/2"
        >
          {play ? <FaPlay /> : <FaPause />}
        </button>

        <div
          ref={pointsRef}
          className="px-10 md:hidden overflow-x-scroll overflow-y-visible max-w-full w-full h-40 flex items-center justify-start"
        >
          <div className="h-[2px] md:h-[90%] min-w-[200vw] md:w-[2px] bg-gray-400 relative rounded-full">
            <div
              style={
                isMobile ? { width: `${count}%` } : { height: `${count}%` }
              }
              className="top-0 left-0 h-full md:w-full shadow-awardsLine rounded-full bg-white transition-all duration-200"
            ></div>

            <Checkpoint
              image={award4}
              setCount={setCount}
              marginTop={5}
              expand={count > 5 ? true : false}
              title={awards[0].provider}
            />
            <Checkpoint
              image={award2}
              setCount={setCount}
              marginTop={35}
              expand={count > 35 ? true : false}
              flipped={true}
              title={awards[1].provider}
            />
            <Checkpoint
              image={award3}
              setCount={setCount}
              marginTop={65}
              expand={count > 65 ? true : false}
              title={awards[2].provider}
            />
            <Checkpoint
              image={award1}
              setCount={setCount}
              marginTop={95}
              expand={count > 95 ? true : false}
              flipped={true}
              title={awards[3].provider}
            />
          </div>
        </div>

        <div className="h-[2px] md:h-[90%] md:w-[2px] bg-gray-400 relative rounded-full hidden md:block">
          <div
            style={isMobile ? { width: `${count}%` } : { height: `${count}%` }}
            className="top-0 left-0 h-full md:w-full shadow-awardsLine rounded-full bg-white transition-all duration-200"
          ></div>

          <Checkpoint
            image={award4}
            setCount={setCount}
            marginTop={5}
            expand={count > 5 ? true : false}
            title={awards[0].provider}
          />
          <Checkpoint
            image={award2}
            setCount={setCount}
            marginTop={35}
            expand={count > 35 ? true : false}
            flipped={true}
            title={awards[1].provider}
          />
          <Checkpoint
            image={award3}
            setCount={setCount}
            marginTop={65}
            expand={count > 65 ? true : false}
            title={awards[2].provider}
          />
          <Checkpoint
            image={award1}
            setCount={setCount}
            marginTop={95}
            expand={count > 95 ? true : false}
            flipped={true}
            title={awards[3].provider}
          />
        </div>
      </div>
      <div
        className={`${
          inView
            ? "md:animate-swipeRight relative w-full md:w-1/2"
            : "absolute w-full top-0 right-0 md:animate-swipeLeft"
        } h-[50rem] md:h-full overflow-hidden`}
      >
        <Image
          src={background}
          className="absolute z-[1] top-0 left-0 w-full scale-150 h-full"
          alt=""
        />

        <p className="absolute z-50 top-12 left-1/2 -translate-x-1/2 hidden md:block text-5xl text-white font-[carotSlab]">
          Awards
        </p>

        <div
          ref={scrollRef}
          className="w-full max-w-full flex items-center justify-start flex-col max-h-full h-full overflow-y-hidden bg-black bg-opacity-40 md:px-10 relative z-[2]"
        >
          <div className="w-full md:max-w-[50vw] h-fit">
            {awards.map((item, id) => (
              <div
                key={id}
                ref={item.ref}
                className="min-w-[100vw] md:min-w-0 md:w-full h-[50rem] md:h-screen flex items-start md:items-center justify-center py-16 md:py-0"
              >
                <Card
                  image={item.image}
                  date={item.date}
                  title={item.title}
                  content={item.content}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Awards;
