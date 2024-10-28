import React from "react";

const tableData = [
  {
    id: 1,
    title: "DRISHTI 2020 (Themed as: Agriculture through my eyes - a national level agricultural photography contest)",
    date: "25th April 2020",
    category: "Social"
  },
  {
    id: 2,
    title: "Workshop on research proposal and paper writing by Dr. Divya Yadav",
    date: "11th May 2020",
    category: "Professional"
  },
  {
    id: 3,
    title: "AGTECH (Online webinar)",
    date: "22nd May 2020",
    category: "Academic & Professional"
  },
  {
    id: 4,
    title: "Locusp",
    date: "22nd June 2020",
    category: "Academic"
  },
  {
    id: 5,
    title: "I can grow my own: An initiative by IAAS India",
    date: "16th July 2020",
    category: "Socialist"
  },
  {
    id: 6,
    title: "Youth talk: on International Youth Day",
    date: "12th August 2020",
    category: "Socialist"
  },
  {
    id: 7,
    title: "National Congress 2020 themed 'Empowering Agriculture through Strengthen Leadership'",
    date: "31st October to 8th November 2020",
    category: "Professional"
  },
  {
    id: 8,
    title: "Wild-o-wid quiz competition collaboration with IFSA LC FRI",
    date: "3rd-4th October 2020",
    category: "Academic & Professional"
  },
  {
    id: 9,
    title: "Tales of Migration collaboration with IFSA LC FRI",
    date: "5th October 2020",
    category: "Academic"
  },
  {
    id: 10,
    title: "Effective utilisation of agriculture biomass: challenges and opportunities",
    date: "1st November 2020",
    category: "Academic"
  },
  {
    id: 11,
    title: "Webinar on wildlife conservation",
    date: "1st November 2020",
    category: "Socialist"
  },
  {
    id: 12,
    title: "Roles of cooperative and FPO's in Indian agriculture",
    date: "1st November 2020",
    category: "Professional"
  },
  {
    id: 13,
    title: "Community building and leadership in biodiversity conservation",
    date: "2nd November 2020",
    category: "Socialist"
  },
  {
    id: 14,
    title: "Agriculture: career and opportunities",
    date: "3rd November 2020",
    category: "Academic"
  },
  {
    id: 15,
    title: "Webinar on sustainable development goals",
    date: "4th November 2020",
    category: "Academic"
  },
  {
    id: 16,
    title: "DRISHTI 2021",
    date: "27th February 2021",
    category: "Socialist"
  },
  {
    id: 17,
    title: "Agronomy and agronomist: in the havoc of COVID-19 pandemic",
    date: "13th June 2021",
    category: "Professional"
  },
  {
    id: 18,
    title: "IAAS India Leadership Development Program",
    date: "April - November 2021",
    category: "Socialist"
  },
  {
    id: 19,
    title: "Workshop on application of remote sensing in agriculture",
    date: "25th July 2021",
    category: "Academic"
  },
  {
    id: 20,
    title: "Youth talk 2021",
    date: "12th August 2021",
    category: "Socialist"
  },
  {
    id: 21,
    title: "National Congress 2021",
    date: "15th to 21st November 2021",
    category: "Socialist"
  },
  {
    id: 22,
    title: "The Rice grain: a humble yet mighty food grain",
    date: "18th November 2021",
    category: "Researcher & Scientific"
  },
  {
    id: 23,
    title: "Climate action and agri-food system transformation",
    date: "19th November 2021",
    category: "Academic"
  },
  {
    id: 24,
    title: "Training on partnership building",
    date: "20th November 2021",
    category: "Professional"
  },
  {
    id: 25,
    title: "Aasha: book donation camp",
    date: "26th March 2022",
    category: "Socialist"
  },
  {
    id: 26,
    title: "World fruit day",
    date: "1st July 2022",
    category: "Academic"
  },
  {
    id: 27,
    title: "IAAS India Leadership Development Program Part 2",
    date: "September - December 2022",
    category: "Professional"
  },
  {
    id: 28,
    title: "Essay writing competition on the occasion of Ozone Day",
    date: "16th September 2022",
    category: "Academic"
  },
  {
    id: 29,
    title: "National Congress 2022",
    date: "20th-24th November 2022",
    category: "Socialist"
  },
  {
    id: 30,
    title: "Seminar: Natural farming, need of an hour by Dr. Anita Chauhan",
    date: "21st November 2022",
    category: "Professional"
  },
  {
    id: 31,
    title: "Career opportunities for agricultural science students in the field of agriculture",
    date: "24th November 2022",
    category: "Professional & Academic"
  },
  {
    id: 32,
    title: "Connecting world through Indian agriculture",
    date: "24th November 2022",
    category: "Academic"
  },
  {
    id: 33,
    title: "World Soil Day celebration and two days workshop",
    date: "5th-6th December 2022",
    category: "Professional & Academic"
  },
  {
    id: 34,
    title: "Workshop on wetlands",
    date: "29th May 2023",
    category: "Professional"
  },
  {
    id: 35,
    title: "International scientific conference on millets",
    date: "3rd-5th July 2023",
    category: "Professional"
  }

];
const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>SNo.</th>
          <th>Event Title</th>
          <th>Event Date</th>
          <th>Event Category</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((yearData, yearIndex) => (
          <tr key={yearIndex}>
            <td>{yearData.id}</td>
            <td>{yearData.title}</td>
            <td>{yearData.date}</td>
            <td>{yearData.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
