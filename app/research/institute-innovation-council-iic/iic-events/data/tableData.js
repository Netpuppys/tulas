import React from "react";

const tableData = [
  {
    id: 1,
    title: "Wordpress workshop",
    date: "28-04-2023 13:50",
    category: "Self Driven Activity",
  },
  {
    id: 2,
    title:
      "2 Days National level Marathon Coding Competition (Tula's Hackathon 2023)",
    date: "20-04-2023 10:00",
    category: "IIC Yukti Activity",
  },
  {
    id: 3,
    title:
      "My Story - Motivational Session by Successful Entrepreneur/Start-up founder.",
    date: "10/07/2022",
    category: "IIC Activity",
  },
  {
    id: 4,
    title:
      "Workshop on “Entrepreneurship and Innovation as Career Opportunity”",
    date: "9 -10 Oct 2022",
    category: "IIC Activity",
  },
  {
    id: 5,
    title: "Session on Problem Solving and Ideation Workshop",
    date: "11/04/2022",
    category: "IIC Activity",
  },
  {
    id: 6,
    title: "Expert Talk on Life cycle of a star and birth of black hole",
    date: "09/30/2022",
    category: "Self Driven Activity",
  },
  {
    id: 7,
    title: "EXPERT TALK ON INTELLECTUAL PROPERTY RIGHTS",
    date: "08/08/2022",
    category: "IIC Activity",
  },
  {
    id: 8,
    title: "Yantrik Technologies Industrial Visit",
    date: "10/13/2022",
    category: "Self Driven Activity",
  },
  {
    id: 9,
    title:
      "industrial visit to the Defence Electronics Application Laboratory (DEAL)",
    date: "10/14/2022",
    category: "Self Driven Activity",
  },
  {
    id: 10,
    title: "5 DAYS WORKSHOP ON AUTOCAD",
    date: "29 Aug - 09 Sep 2022",
    category: "Self Driven Activity",
  },
  {
    id: 11,
    title: "5 DAYS HANDS-ON SHORT-TERM COURSE ON DEEP NEURAL NETWORKS",
    date: "29 Aug - 09 Sep 2022",
    category: "Self Driven Activity",
  },
  {
    id: 12,
    title: "Exposure and field visit for problem identification",
    date: "10/13/2022",
    category: "IIC Activity",
  },
  {
    id: 13,
    title:
      "Demo Day/Exhibition/Poster Presentation of Ideas/PoC; linkage with Innovation Ambassadors/Experts for Mentorship Support - Manage through YUKTI-NIR",
    date: "09/19/2022",
    category: "IIC Activity",
  },
  {
    id: 14,
    title: "Guest Lecture on Application of Remote Sensing for Water Resources",
    date: "11/04/2022",
    category: "Self Driven Activity",
  },
  {
    id: 15,
    title: "NATURAL FARMING· THE NEED OF AN HOUR",
    date: "11/21/2022",
    category: "Self Driven Activity",
  },
  {
    id: 16,
    title:
      "ROLE OF ELECTRICAL & ELECTRONICS ENGINEERING IN AUTOMOBILE INDUSTRY",
    date: "11/26/2022",
    category: "Self Driven Activity",
  },
  {
    id: 17,
    title: "GUEST LECTURE ON “EMPLOYABILITY”",
    date: "11/17/2022",
    category: "Self Driven Activity",
  },
  {
    id: 18,
    title: "IPR FILING AND DRAFTING WORKSHOP",
    date: "30 Nov - 1 Dec 2022",
    category: "Self Driven Activity",
  },
  {
    id: 19,
    title: "Orientation Session on IIC 5.0 Features",
    date: "1/11/2023",
    category: "MIC Activity",
  },
  {
    id: 20,
    title:
      "Leadership Talk with Prof. T. G. Sitharam, Hon’ble Chairman, All India Council for Technical Education (AICTE)",
    date: "1/30/2023",
    category: "MIC Activity",
  },
  {
    id: 21,
    title: "Launch of 5G services",
    date: "10/01/2022",
    category: "MIC Activity",
  },
  {
    id: 22,
    title: "Workshop on Entrepreneurship and Innovation as Career Opportunity",
    date: "10/30/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 23,
    title: "My Story - Motivational Session by Successful Innovators.",
    date: "10/13/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 24,
    title: "Financial Awareness and Safe Banking",
    date: "11/21/2023",
    category: "Self Driven",
  },
  {
    id: 25,
    title: "research writing and citation management",
    date: "11/17/2023",
    category: "Self Driven",
  },
  {
    id: 26,
    title:
      "Inter/Intra Institutional Idea Competition/Challenge/Hackathon and Reward Best Ideas.",
    date: "09/18/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 27,
    title:
      "My Story - Motivational Session by Successful Entrepreneur/Start-up founder.",
    date: "10/06/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 28,
    title: "National Education Day",
    date: "10/29/2023",
    category: "Celebration",
  },
  {
    id: 29,
    title: "Session on Problem Solving and Ideation Workshop",
    date: "11/03/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 30,
    title: "FOOD DONATION DRIVE",
    date: "10/16/2023",
    category: "Self Driven",
  },
  {
    id: 31,
    title: "One Nation One Election",
    date: "10/13/2023",
    category: "Self Driven",
  },
  {
    id: 32,
    title: "Success Mantras",
    date: "10/06/2023",
    category: "Self Driven",
  },
  {
    id: 33,
    title: "Debate Competition",
    date: "03/15/2024",
    category: "Self Driven",
  },
  {
    id: 34,
    title: "Full Stack Development",
    date: "01/23/2024",
    category: "Self Driven",
  },
  {
    id: 35,
    title:
      "Industrial Visit to All India Radio on the occasion of World Radio Day",
    date: "02/13/2024",
    category: "Self Driven",
  },
  {
    id: 36,
    title: "Industrial Visit to Drone Application and Research Center (ITDA)",
    date: "02/26/2024",
    category: "Self Driven",
  },
  {
    id: 37,
    title: "Industrial visit to Patanjali, Yogpeeth, Haridwar",
    date: "02/22/2024",
    category: "Self Driven",
  },
  {
    id: 38,
    title: "Aqua Smart Showdown",
    date: "03/20/2024",
    category: "Self Driven",
  },
  {
    id: 39,
    title: "Add-On Certificate on Mobile App Development",
    date: "03/04/2024",
    category: "Self Driven",
  },
  {
    id: 40,
    title: "National Science Day",
    date: "02/28/2024",
    category: "Celebration",
  },
  {
    id: 41,
    title: "National Youth Day",
    date: "01/12/2024",
    category: "Celebration",
  },
  {
    id: 42,
    title:
      "Mentoring Event: Demo Day/Exhibition/Poster Presentation of Innovations/Prototypes & linkage with Innovation Ambassadors/Experts for Mentorship Support",
    date: "02/20/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 43,
    title:
      "Organize an Inter/Intra Institutional Innovation Competition/Challenge/Hackathon and Reward Best Innovations.",
    date: "02/25/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 44,
    title:
      "Field/Exposure Visit to Pre-incubation units such as Ideas Lab, Fab lab, Makers Space, Design Centres, City MSME clusters, workshops etc.",
    date: "02/26/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 45,
    title: "Session on Achieving Problem-Solution Fit Product-Market Fit",
    date: "02/22/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 46,
    title:
      "Workshop on Entrepreneurship Skill, Attitude and Behaviour Development",
    date: "02/11/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 47,
    title:
      "Expert talk on Process of Innovation Development Technology Readiness Level (TRL) Commercialisation of Lab Technologies Tech-Transfer",
    date: "02/26/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 48,
    title:
      "Organising Innovation Entrepreneurship Outreach Program in Schools/Community",
    date: "11/29/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 49,
    title:
      "Workshop on Design Thinking, Critical thinking and Innovation Design",
    date: "02/16/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 50,
    title: "National Entrepreneurship Day",
    date: "11/04/2023",
    category: "Celebration",
  },
  {
    id: 51,
    title: "Exposure and field visit for problem identification",
    date: "10/05/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 52,
    title:
      "Demo Day/Exhibition/Poster Presentation of Ideas/PoC linkage with Innovation Ambassadors/Experts for Mentorship Support.",
    date: "09/24/2023",
    category: "IIC Calender Activity",
  },
  {
    id: 53,
    title: "Innovation Day",
    date: "10/15/2023",
    category: "Celebration",
  },
  {
    id: 54,
    title: "National Energy Conservation Day(India)",
    date: "12/14/2023",
    category: "Celebration",
  },
  {
    id: 55,
    title:
      "Organise Viksit Bharat@2047 Utsav in Campus and Watch the Inaugural Address by Honourable Prime Minister of India on 11th Dec. 2023",
    date: "12/11/2023",
    category: "MIC Driven",
  },
  {
    id: 56,
    title: "National Pollution Control Day",
    date: "12/02/2023",
    category: "Celebration",
  },
  {
    id: 57,
    title: "IIC Regional Meet 2023-24",
    date: "11/23/2023",
    category: "MIC Driven",
  },
  {
    id: 58,
    title: "National Startup Day",
    date: "02/16/2024",
    category: "Celebration",
  },
  {
    id: 59,
    title:
      "Demo Day/Exhibition/Poster Presentation of Business Plans linkage with Innovation Ambassadors/Experts for Mentorship Support",
    date: "03/11/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 60,
    title:
      "Organise an Inter/Intra Institutional Business Plan Competition and Reward Best Innovations",
    date: "03/18/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 61,
    title:
      "Workshop on Intellectual Property Rights (IPRs) and IP management for start up",
    date: "03/04/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 62,
    title: "Session on How to plan for Start-up and legal Ethical Steps",
    date: "03/18/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 63,
    title:
      "Field/Exposure Visit to Incubation Unit/Patent Facilitation Centre/ Technology Transfer Centre such as Atal Incubation Centre etc",
    date: "02/27/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 64,
    title: "Session/ Workshop on Business Model Canvas (BMC)",
    date: "03/21/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 65,
    title: "Workshop on Prototype/Process Design and Development",
    date: "03/22/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 66,
    title: "National Technology Day",
    date: "05/11/2024",
    category: "Celebration",
  },
  {
    id: 67,
    title: "World Intellectual Property Day",
    date: "04/26/2024",
    category: "Celebration",
  },
  {
    id: 68,
    title: "International Women's Day",
    date: "03/06/2024",
    category: "Celebration",
  },
  {
    id: 69,
    title: "Debate Competition",
    date: "03/15/2024",
    category: "Self Driven",
  },
  {
    id: 70,
    title: "Expert Talk on Women Empowerment",
    date: "03/20/2024",
    category: "Self Driven",
  },
  {
    id: 71,
    title: "Independence Day- Celebrating Aazadi Ka Amritkal",
    date: "08/15/2024",
    category: "Celebration",
  },
  {
    id: 72,
    title: "World Environment Day",
    date: "06/05/2024",
    category: "Celebration",
  },
  {
    id: 73,
    title: "4th Anniversary of National Education Policy (NEP) 2020",
    date: "07/27/2024",
    category: "Celebration",
  },
  {
    id: 74,
    title: "World Entrepreneurs Day",
    date: "08/21/2024",
    category: "Celebration",
  },
  {
    id: 75,
    title:
      "Building the Pipeline of Quality Innovations and Startups in HEIs with Ecosystem Enablers by Creating and Managing YUKTI Innovation and IPR Repository (YIIR)",
    date: "08/02/2024",
    category: "MIC Driven",
  },
  {
    id: 76,
    title:
      "Guiding Framework for Creating and Engaging Trained Faculty and Student IIC Members, Innovation Ambassadors (IA) in IIC Institutions, and Rewarding Mechanisms for IAs",
    date: "07/29/2024",
    category: "MIC Driven",
  },
  {
    id: 77,
    title:
      "Orientation cum Refreshers Session on Institution Innovation Council Objectives, Structure, Operation for IIC Institutions",
    date: "08/05/2024",
    category: "MIC Driven",
  },
  {
    id: 78,
    title:
      "Strengthening IIC Linkages with ATLs and SICs in Schools and the Framework for Providing Mentorship and Guidance",
    date: "08/31/2024",
    category: "MIC Driven",
  },
  {
    id: 79,
    title:
      "Demo Day/Exhibition/Poster Presentation of Start-Ups Linkage with Innovation Ambassadors/Experts for Mentorship Support",
    date: "08/01/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 80,
    title:
      "Organise an Inter/Intra Institutional Start-up Competition and Reward Best Start-ups.",
    date: "08/06/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 81,
    title:
      "Organising Innovation Entrepreneurship Outreach Program in Schools/Community",
    date: "08/09/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 82,
    title:
      "Session/ Panel discussion with innovation and Start-up Ecosystem Enablers from the region/state/national level",
    date: "08/13/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 83,
    title:
      "Session on Angel Investment/VC Funding Opportunity for Early Stage Entrepreneurs.",
    date: "08/14/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 84,
    title:
      "Organise Session on Start-up Minimum Viable Product/Business Boot Camp",
    date: "08/16/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 85,
    title:
      "Session on Accelerators/Incubation - Opportunities for Students Faculties - Early Stage Entrepreneurs",
    date: "08/21/2024",
    category: "IIC Calender Activity",
  },
  {
    id: 86,
    title:
      "Session on Innovation/Prototype Validation Converting Innovation into a Start-up",
    date: "08/23/2024",
    category: "IIC Calender Activity",
  },
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
