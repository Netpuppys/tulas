// components/TeamSection.js
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function TeamSection() {
  const members = [
    {
      name: 'Mr. Vaibhav Kumar',
      title: 'Training and Placement Officer (TPO)',
      img: '/placement-team/hallfame1.png',
      bio: `With over 15 years of experience in academia and student development, Vaibhav Kumar brings a robust blend of technical expertise and strategic leadership to the role of Training and Placement Officer. Holding a B.Tech in Electronics and Communication Engineering and an M.Tech in Wireless & Mobile Communication, he possesses a strong foundation in engineering education. For the past 10 years, he has been dedicatedly managing the Training and Placement Cell, facilitating successful campus placements, industry tie-ups, and student training programs. Under his leadership, the institution has witnessed consistent growth in placement records and corporate collaborations. He is committed to bridging the gap between academia and industry by introducing skill development workshops, soft skills training, and internship programs tailored to evolving industry demands. Known for his organized approach and strong industry network, Vaibhav Kumar continues to play a pivotal role in enhancing students’ employability and shaping their professional journeys.`,
    },
    {
      name: 'Mr. Rahul Singh',
      title: 'Assistant TPO',
      img: '/placement-team/hallfame2.png',
      bio: `With over 15 years of experience in academia and student development, Vaibhav Kumar brings a robust blend of technical expertise and strategic leadership to the role of Training and Placement Officer. Holding a B.Tech in Electronics and Communication Engineering and an M.Tech in Wireless & Mobile Communication, he possesses a strong foundation in engineering education. For the past 10 years, he has been dedicatedly managing the Training and Placement Cell, facilitating successful campus placements, industry tie-ups, and student training programs. Under his leadership, the institution has witnessed consistent growth in placement records and corporate collaborations. He is committed to bridging the gap between academia and industry by introducing skill development workshops, soft skills training, and internship programs tailored to evolving industry demands. Known for his organized approach and strong industry network, Vaibhav Kumar continues to play a pivotal role in enhancing students’ employability and shaping their professional journeys.`,
    },
    {
      name: 'Mr. Amit Sharma',
      title: 'Placement Coordinator',
      img: '/placement-team/hallfame3.png',
      bio: `With over 15 years of experience in academia and student development, Vaibhav Kumar brings a robust blend of technical expertise and strategic leadership to the role of Training and Placement Officer. Holding a B.Tech in Electronics and Communication Engineering and an M.Tech in Wireless & Mobile Communication, he possesses a strong foundation in engineering education. For the past 10 years, he has been dedicatedly managing the Training and Placement Cell, facilitating successful campus placements, industry tie-ups, and student training programs. Under his leadership, the institution has witnessed consistent growth in placement records and corporate collaborations. He is committed to bridging the gap between academia and industry by introducing skill development workshops, soft skills training, and internship programs tailored to evolving industry demands. Known for his organized approach and strong industry network, Vaibhav Kumar continues to play a pivotal role in enhancing students’ employability and shaping their professional journeys.`,    
    },
    {
      name: 'Mr. Ankit Verma',
      title: 'Industry Liaison',
      img: '/placement-team/hallfame1.png',
      bio: `With over 15 years of experience in academia and student development, Vaibhav Kumar brings a robust blend of technical expertise and strategic leadership to the role of Training and Placement Officer. Holding a B.Tech in Electronics and Communication Engineering and an M.Tech in Wireless & Mobile Communication, he possesses a strong foundation in engineering education. For the past 10 years, he has been dedicatedly managing the Training and Placement Cell, facilitating successful campus placements, industry tie-ups, and student training programs. Under his leadership, the institution has witnessed consistent growth in placement records and corporate collaborations. He is committed to bridging the gap between academia and industry by introducing skill development workshops, soft skills training, and internship programs tailored to evolving industry demands. Known for his organized approach and strong industry network, Vaibhav Kumar continues to play a pivotal role in enhancing students’ employability and shaping their professional journeys.`,    
    },
    {
      name: 'Mr. Rohan Gupta',
      title: 'Soft Skills Trainer',
      img: '/placement-team/hallfame2.png',
      bio: `With over 15 years of experience in academia and student development, Vaibhav Kumar brings a robust blend of technical expertise and strategic leadership to the role of Training and Placement Officer. Holding a B.Tech in Electronics and Communication Engineering and an M.Tech in Wireless & Mobile Communication, he possesses a strong foundation in engineering education. For the past 10 years, he has been dedicatedly managing the Training and Placement Cell, facilitating successful campus placements, industry tie-ups, and student training programs. Under his leadership, the institution has witnessed consistent growth in placement records and corporate collaborations. He is committed to bridging the gap between academia and industry by introducing skill development workshops, soft skills training, and internship programs tailored to evolving industry demands. Known for his organized approach and strong industry network, Vaibhav Kumar continues to play a pivotal role in enhancing students’ employability and shaping their professional journeys.`,
        },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
            <div className="text-center my-8">
      <h2 className="text-5xl font-bold text-[#800033] font-[CarotSlab]">
        Placement &amp; Training Team
      </h2>
      <h3 className="text-3xl font-bold text-[#007A83] mt-1 font-[CarotSlab]">
        (TCCI)
      </h3>
    </div>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        {/* Left: Text */}
        <div className="space-y-4 text-justify">
          {members[activeIndex].bio.split('\n').map((para, idx) => (
            <p key={idx} className="text-gray-800 leading-relaxed">
              {para}
            </p>
          ))}
          {/* Thumbnails */}
          <div className="flex gap-4 pt-4">
            {members.map((member, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`rounded overflow-hidden border-2 transition-all duration-300 
                  ${activeIndex === idx ? 'border-[#007A83]' : 'border-transparent grayscale hover:grayscale-0'}`}
              >
                <Image
                  src={member.img}
                  alt={member.name}
                  width={80}
                  height={80}
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Image card */}
        <div className="w-full flex flex-col items-center">
          <div className="border-4 border-[#007A83] rounded-md overflow-hidden">
            <Image
              src={members[activeIndex].img}
              alt={members[activeIndex].name}
              width={350}
              height={400}
              className="object-cover"
            />
          </div>
          <div className="bg-[#8C1D40] w-full text-white text-center py-3 mt-[-4px]">
            <p className="font-bold text-lg">{members[activeIndex].name}</p>
            <p className="text-sm">{members[activeIndex].title}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
