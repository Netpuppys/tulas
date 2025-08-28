// components/TeamSection.js
'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function TeamSection() {
  const members = [
    {
      name: 'Mr. Vaibhav Kumar',
      title: 'Training and Placement Officer (TPO) . .',
      img: '/trainingteam/vaibhav-kumar1.png',
      bio: `With over 15 years of experience in academia and student development, Vaibhav Kumar brings a robust blend of technical expertise and strategic leadership to the role of Training and Placement Officer. Holding a B.Tech in Electronics and Communication Engineering and an M.Tech in Wireless & Mobile Communication, he possesses a strong foundation in engineering education. For the past 10 years, he has been dedicatedly managing the Training and Placement Cell, facilitating successful campus placements, industry tie-ups, and student training programs. Under his leadership, the institution has witnessed consistent growth in placement records and corporate collaborations. He is committed to bridging the gap between academia and industry by introducing skill development workshops, soft skills training, and internship programs tailored to evolving industry demands. 
      
      Known for his organized approach and strong industry network, Vaibhav Kumar continues to play a pivotal role in enhancing students' employability and shaping their professional journeys.`,
    },
    {
      name: 'Anupam Nautiyal',
      title: 'Assistant Professor (Graduate School of Business)',
      img: '/trainingteam/anupam-nautiyal.png',
      bio: `Anupam Nautiyal  is an experienced and dedicated management faculty member with over 12 years of academic experience, complemented by 2 years of industry exposure in the banking sector. With a deep understanding of business operations and financial systems, he effectively integrates real-world insights into classroom learning, enriching the academic experience for students.
      
      Anupam  has been an integral part of the Placement cell supporting BBA, MBA, and B.Com students. He has been actively involved in guiding students through placement preparation, including resume building, interview skills, group discussions, and corporate readiness training. Known for his commitment to student success and strong mentoring abilities, Anupam plays a crucial role in bridging the gap between academic learning and industry expectations, helping students achieve their career goals with confidence and competence.`,
    },
    {
      name: 'Girish Bisht',
      title: 'Assistant Professor (Department B.Tech CSE)',
      img: '/trainingteam/girish-bisht.png',
      bio: `With over 10 years of proven experience in shaping student careers, Tulas Institute has established itself as a center of excellence for placement and professional development. Our dedicated Placement & Training Cell, under the leadership of Mr. Girish Singh Bisht, has played a key role in bridging the gap between academic learning and industry expectations.
      
      Through structured training modules in aptitude, soft skills, mock interviews, group discussions, and hands-on coding sessions, students are thoroughly prepared for real-world challenges. Our consistent placement record and increasing recruiter base reflect our strong industry alignment and student readiness.`,    
    },
    {
      name: 'Mr. Shivendra Mishra',
      title: 'Assistant Professor (Department Of Agriculture)',
      img: '/trainingteam/shivendra-mishra.png',
      bio: `Mr. Shivendra Mishra, M.Sc. (Agronomy) and Ph.D. (Pursuing), is Assistant Professor and Placement Coordinator in the Department of Agriculture at Tula's Institute, Dehradun. Having completed 4 years at Tula's with experience in teaching, research, and industry, he has been instrumental in mentoring students and enhancing their professional growth.
      
      He has authored 8 research papers, 2 book chapters, and 2 articles in reputed national and international journals. He is committed to connecting academic knowledge with real-world applications to prepare students for rewarding careers.`,    
    },
    {
      name: 'Mr. Rahul Kumar',
      title: 'Assistant Professor (Department Mechanical Engineering)',
      img: '/trainingteam/rahul-kumar.png',
      bio: `Mr. Rahul Kumar, PhD(P) and M.Tech (Thermal Engineering) ,is Assistant Professor and Placement Coordinator in the Department of Mechanical Engineering  at Tula's Institute, Dehradun.
      
      Having completed 9 years at Tula's with experience in teaching & research he has played a significant role in guiding students and advancing their professional development. He has authored 6 research papers & 5 patents in  reputed national and international journals. He focuses on bridging the gap between theoretical knowledge and practical applicatio`,
        },
          {
      name: 'Mr. Neeraj Kotiyal ',
      title: 'Assistant Professor (Department Mass Communication BAJMC)',
      img: '/trainingteam/neeraj-kotiyal.png',
      bio: `Mr. Neeraj Kotiyal has been an integral part of Tula's for the past four years, contributing both academically and in student development. With a strong foundation in Media and Communication Studies and over three years of industry experience—including roles at All India Radio and leading news portals—he brings real-world insight to the classroom. As a dedicated member of the Training and Placement Team for the last three years, he has guided numerous students toward successful career paths, combining academic mentoring with practical industry exposure. His passion for student growth and strategic career planning makes him a valuable asset to the team.`,
        },
          {
      name: 'Bharat Bhusan',
      title: 'Assistant Professor (Graduate School of Business)',
      img: '/trainingteam/bharat-bhushan.png',
      bio: `Bharat Bhusan is a distinguished academic and hospitality professional with a strong educational background. He holds a BHMCT degree, an MBA, and is currently pursuing his PhD from SGRR University, Dehradun. With 2 years of corporate experience and 3.5 years in academia, Bharat Bhushan brings a unique blend of industry expertise and teaching acumen. His research interests and academic pursuits demonstrate his commitment to excellence in his field. Through his work, he aims to contribute meaningfully to the hospitality and management sectors, leveraging his diverse experience and knowledge to drive innovation and growth.`,
        },
        
           {
      name: 'Archit Priyadarshi',
      title: 'Assistant Professor (Department Civil Engineering)',
      img: '/trainingteam/archit.png',
      bio: `I am Archit Priyadarshi, currently working as an Assistant Professor in the Department of Civil Engineering at Tula's Institute, Dehradun. I hold a Master's degree (M.Tech) in Geotechnical Engineering, along with a B. Tech in Civil Engineering.
      
      With 7 years of academic experience, I am also entrusted with the responsibilities of the Placement Coordinator and Departmental Coordinator for Civil Engineering. My roles allow me to closely engage with students, guiding them in both academic and professional domains. My core area of interest lies in Geotechnical Engineering, and I actively contribute to research through publications in reputed journals. I am passionate about connecting theoretical knowledge with practical applications and helping students prepare for the real-world challenges of the engineering field.
`,
        }, 
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
<section className="w-[90%] mx-auto px-4 py-12"> 
  {/* 👆 w-4/5 makes container 80% wide */}

  <div className="text-center my-8">
    <h2 className="text-5xl font-bold text-[#800033] font-[CarotSlab]">
      Placement &amp; Training Team
    </h2>
    <h3 className="text-3xl font-bold text-[#007A83] mt-1 font-[CarotSlab]">
      (TCCI)
    </h3>
  </div>

  {/* 👇 Instead of grid-cols-2, use grid-cols-12 for 8/4 split */}
<div className="grid md:grid-cols-12 gap-6 items-center">
  {/* Image card → first on mobile, right on desktop */}
  <div className="md:col-span-4 order-1 md:order-2 flex flex-col items-center">
    <div className="border-4 border-[#007A83] rounded-md overflow-hidden">
      <Image
        src={members[activeIndex].img}
        alt={members[activeIndex].name}
        width={300}
        height={380}
        className="object-cover"
      />
    </div>
    <div className="bg-[#8C1D40] px-8 text-white text-center py-3 mt-[-60px]">
      <p className="font-bold text-lg">{members[activeIndex].name}</p>
      <p className="text-sm">{members[activeIndex].title}</p>
    </div>
  </div>

  {/* Text + Thumbnails → below image on mobile, left on desktop */}
  <div className="md:col-span-8 order-2 md:order-1 flex flex-col items-center  space-y-4">
    {members[activeIndex].bio.split('\n').map((para, idx) => (
      <p key={idx} className="text-gray-800 leading-relaxed">
        {para}
      </p>
    ))}
    {/* Thumbnails */}
    <div className="flex gap-4 pt-4 flex-wrap justify-center">
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
            className="object-cover bg-gray-100"
          />
        </button>
      ))}
    </div>
  </div>
</div>

</section>

  );
}
