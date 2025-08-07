// components/TopRecruiters.js
'use client';

const recruiters = [
  { name: 'Microsoft', src: '/TopRecruiter/reclogo.png' },
  { name: 'Amazon', src: '/TopRecruiter/reclogo1.png' },
  { name: 'Google Cloud', src: '/TopRecruiter/reclogo2.png' },
  { name: 'Oracle', src: '/TopRecruiter/reclogo3.png' },
  { name: 'AWS Academy', src: '/TopRecruiter/reclogo4.png' },
  { name: 'Hero', src: '/TopRecruiter/reclogo5.png' },
  { name: 'Intel', src: '/TopRecruiter/reclogo6.png' },
  { name: 'IBM', src: '/TopRecruiter/reclogo7.png' },
  { name: 'Deloitte', src: '/TopRecruiter/reclogo8.png' },
  { name: 'HSBC', src: '/TopRecruiter/reclogo9.png' },
  { name: 'Cisco', src: '/TopRecruiter/reclogo10.png' },
  { name: 'Siemens', src: '/TopRecruiter/reclogo11.png' },
];

export default function TopRecruiters() {
  return (
    <div className="w-full py-12 px-4 md:px-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-[#74043D] mb-10 font-[Merriweather]">
        TOP RECRUITERS
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {recruiters.map((r, idx) => (
          <div
            key={idx}
            className="bg-white aspect-square flex items-center justify-center rounded-lg border border-[#045] shadow-md hover:shadow-[8px_8px_0px_0px_#74043D] transition-shadow duration-300"
          >
            <img
              src={r.src}
              alt={r.name}
              className="max-h-[60%] max-w-[80%] object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
