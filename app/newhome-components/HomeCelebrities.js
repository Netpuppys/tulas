"use client";

import Image from "next/image";

const celebrities = [
  {
    name: "Papon",
    img: "/Homepage/celeb/papon.jpg",
  },
  {
    name: "Darshan Raval",
    img: "/Homepage/celeb/darshan.jpg",
  },
  {
    name: "Chitrashi Rawat",
    img: "/Homepage/celeb/chitrashi.png",
  },
  {
    name: "Dilip Sen",
    img: "/Homepage/celeb/dilip.png",
  },
  {
    name: "Hardy Sandhu",
    img: "/Homepage/celeb/hardy.jpg",
  },
  {
    name: "Jimmy Shergill",
    img: "/Homepage/celeb/jimmy.png",
  },
  {
    name: "Salim & Sulaiman",
    img: "/Homepage/celeb/salim.jpg",
  },
  {
    name: "Dino Morea",
    img: "/Homepage/celeb/dino.jpg",
  },
];

export default function HomeCelebrities() {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          <span className="text-orange-500">Bollywood Celebrities</span>{" "}
          <span className="text-black">at Tulas</span>
        </h2>

        {/* Scroll Container */}
        <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">
          {celebrities.map((item, index) => (
            <div
              key={index}
              className="min-w-[240px] bg-white rounded-2xl shadow-md overflow-hidden flex-shrink-0"
            >
              {/* Image */}
              <div className="relative w-full h-[200px]">
                <Image
                  src={item.img}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Name */}
              <div className="text-center py-3 border-t-2 border-orange-400">
                <p className="font-medium text-gray-800">{item.name}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}