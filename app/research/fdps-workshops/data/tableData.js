import React from "react";

const tableData = [
  {
    year: "2022-23",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 9",
    projects: [
      {
        id: 1,
        type: "FDP",
        title: "Raspberry Pi and its Interfacing",
        date: "27/02/2023 to 03/03/2023",
      },
      {
        id: 2,
        type: "FDP",
        title: "SKILL DEVELOPMENT FOR EMPLOYABILITY",
        date: "16/01/2023 to 20/01/2023",
      },
      {
        id: 3,
        type: "FDP",
        title: "Blended learning and Flipped classroom",
        date: "27/02/2023 to 03/03/2023",
      },
      {
        id: 4,
        type: "FDP",
        title:
          "AICTE Recognized Faculty Development Programme on Optical Materials and Devices Conducted by Applied Science Department, at NITTR,Chandigarh.",
        date: "16/01/2023 to 20/01/2023",
      },
      {
        id: 5,
        type: "FDP",
        title: "Effective  Research  Methodology and Publication",
        date: "13/02/2023 to 19/02/2023",
      },
      {
        id: 6,
        type: "FDP",
        title:
          "7 दिवसीय कार्यशाला विषय: एन. ए. ए. सी. (NAAC) मूल्यांकन एवं प्रत्यायन",
        date: "09/03/2023 to 15/03/2023",
      },
      {
        id: 7,
        type: "FDP",
        title: "RECENT ADVANCEMENT IN SCIENCE & TECHNOLOGY",
        date: "06/03/2023 to 10/03/2023",
      },
      {
        id: 8,
        type: "FDP",
        title:
          "Emerging & innovative approach in managt. IT &  Comm. in Teaching & Research",
        date: "09/06/2022 to 15/06/2022",
      },
      {
        id: 9,
        type: "FDP",
        title: "CYBER SECURITY ICT ACADEMY",
        date: "13/08/2022 to 12/08/2022",
      },
      {
        id: 10,
        type: "FDP",
        title: "Electric Vehicle : Impact and Recent Advancement",
        date: "14/11/2022 to 18/11/2022",
      },
      {
        id: 11,
        type: "FDP",
        title: "Innovation Ambassador (IA) Training",
        date: "20/09/2022 to 27/09/2022",
      },
      {
        id: 12,
        type: "FDP",
        title: "Advance Research Instruments",
        date: "23/08/2022 to 29/08/2022",
      },
      {
        id: 13,
        type: "FDP",
        title: "Interdisciplinary Translation Science and Engineering",
        date: "18/07/2022 to 22/07/2022",
      },
      {
        id: 14,
        type: "FDP",
        title: "A step by step guide to write a good research paper",
        date: "18/03/2023 to 27/03/2023",
      },
      {
        id: 15,
        type: "FDP",
        title: "FDP On Innovative Teaching and Learning Pedagogy",
        date: "01/04/2023 to 08/04/2023",
      },
      {
        id: 16,
        type: "FDP",
        title:
          "Transformation of teaching-learning process through Digital platform",
        date: "09/04/2023 to 15/04/2023",
      },
      {
        id: 17,
        type: "FDP",
        title: "Supply Chain Management & Technologies",
        date: "24/04/2023 to 28/04/2023",
      },
      {
        id: 18,
        type: "FDP",
        title:
          "One Week International FDP on AI Empowered Futuristic Computing Paradigm",
        date: "08/05/2023 to 12/05/2023",
      },
      {
        id: 19,
        type: "FDP",
        title: "Supply chain management and technology",
        date: "24/04/2023 to 28/04/2023",
      },
      {
        id: 20,
        type: "FDP",
        title: "Machine Learning",
        date: "27/03/2023 to 02/04/2023",
      },
      {
        id: 21,
        type: "FDP",
        title: "supply chain management",
        date: "24/04/2023 to 28/04/2023",
      },
      {
        id: 22,
        type: "FDP",
        title: "ANSYS-EM Software (in collaboration with ANSYS)",
        date: "27/02/2023 to 03/03/2023",
      },
      {
        id: 23,
        type: "FDP",
        title:
          "Design of High Frequency of Antenna for Real Time Application (DHARA)",
        date: "14/03/2023 to 18/03/2023",
      },
      {
        id: 24,
        type: "FDP",
        title: "Innovative teaching and learning pedagogy",
        date: "01/04/2023 to 08/04/2023",
      },
      {
        id: 25,
        type: "FDP",
        title:
          "Modelling, Simulation and fabrication of advanced electronics devices",
        date: "15/04/2023 to 19/04/2023",
      },
      {
        id: 26,
        type: "FDP",
        title:
          "Design of high frequency antenna for real-time application (DHARA)",
        date: "14/03/2023 to 18/03/2023",
      },
      {
        id: 27,
        type: "FDP",
        title: "Emerging trends in Electronics communication and IOT",
        date: "04/07/2022 to 08/07/2022",
      },
      {
        id: 28,
        type: "FDP",
        title: "Design of High Frequency Antenna for Real Time Application",
        date: "14/03/2023 to 18/05/2023",
      },
      {
        id: 29,
        type: "FDP",
        title: "Supply Chain Management and Technologies",
        date: "14/04/2023 to 28/04/2023",
      },
      {
        id: 30,
        type: "FDP",
        title: "FDP on Personality Development",
        date: "06/06/2022 to 10/06/2022",
      },
      {
        id: 31,
        type: "FDP",
        title: "Industry 4.0",
        date: "16/01/2023 to 20/01/2023",
      },
      {
        id: 32,
        type: "FDP",
        title: "Optical materials and devices",
        date: "16/01/2023 to 20/01/2023",
      },
      {
        id: 33,
        type: "FDP",
        title: "Artificial intelligence, Graphic Era University",
        date: "08/05/2023 to 12/05/2023",
      },
      {
        id: 34,
        type: "FDP",
        title: "Assess for Success: Marketing Analytics and Measurement",
        date: "27/02/2023 to 27/03/2023",
      },
      {
        id: 35,
        type: "FDP",
        title: "New Dimension extension management",
        date: "20/03/2023 to 22/03/2023",
      },
      {
        id: 36,
        type: "FDP",
        title:
          "Quality Improvement in Technical Education through outcome based Education",
        date: "04/10/2022 to 05/10/2022",
      },
      {
        id: 37,
        type: "FDP",
        title: "One week online FDP on Research Methodology",
        date: "22/08/2022 to 26/08/2022",
      },
      {
        id: 38,
        type: "FDP",
        title: "DIGITAL PEDAGOGICAL TOOLS FOR ACADEMIC ENRICHMENT (DPTAE-2022)",
        date: "23/02/2022 to 28/02/2022",
      },
      {
        id: 39,
        type: "FDP",
        title: "One week FDP on Research Methodology",
        date: "22/08/2022 to 26/08/2022",
      },
      {
        id: 40,
        type: "FDP",
        title: "Research Methodology",
        date: "22/08/2022 to 26/08/2022",
      },
      {
        id: 41,
        type: "FDP",
        title: "Developing Employee Skills",
        date: "24/04/2023 to 28/04/2023",
      },
      {
        id: 42,
        type: "FDP",
        title: "Disaster Risk Reduction for Sustainable Development",
        date: "22/08/2022 to 26/08/2022",
      },
      {
        id: 43,
        type: "FDP",
        title: "Advancement of Technology in Civil Engineering",
        date: "28/09/2022 to 05/10/2022",
      },
      {
        id: 44,
        type: "FDP",
        title: "Innovative Teaching and Learning Pedagogy",
        date: "27/05/2023 to 31/05/2023",
      },
      {
        id: 45,
        type: "FDP",
        title: "Creativity, Innovation and Design Thinking",
        date: "29/05/2023 to 02/06/2023",
      },
      {
        id: 46,
        type: "FDP",
        title: "Amazon Web Services",
        date: "22/08/2022 to 27/08/2023",
      },
      {
        id: 47,
        type: "FDP",
        title: "Cyber security",
        date: "03/08/2022 to 12/08/2022",
      },
      {
        id: 48,
        type: "FDP",
        title: "Data Analysis using R Studio",
        date: "27/05/2023 to 31/05/2023",
      },
      {
        id: 49,
        type: "FDP",
        title:
          "Innovative teaching learning practices for preparation of NEP-2020",
        date: "06/02/2020 to 10/02/2023",
      },
      {
        id: 50,
        type: "FDP",
        title: "Discrete Mathematics",
        date: "13/06/2023 to 17/06/2023",
      },
      {
        id: 51,
        type: "FDP",
        title: "5-days national workshop on applied mathematics and computing",
        date: "19/06/2023 to 23/06/2023",
      },
      {
        id: 52,
        type: "FDP",
        title: "Microsoft Power BI Data Analyst Associate",
        date: "19/06/2023 to 23/06/2023",
      },
      {
        id: 53,
        type: "FDP",
        title: "7 Days FDP on Innovative Teaching and Learning Pedagogy",
        date: "01/04/2023 to 08/04/2023",
      },
      {
        id: 54,
        type: "FDP",
        title: "IIC Innovation Ambassador Training Foundation Level (ECE)",
        date: "01/09/2022 to 27/09/2022",
      },
      {
        id: 55,
        type: "FDP",
        title: "AWS (CSE)",
        date: "22/08/2022 to 27/09/2022",
      },
      {
        id: 56,
        type: "FDP",
        title: "VLSI Devices and Circuits for AI Applications (ECE)",
        date: "19/09/2022 to 23/09/2022",
      },
      {
        id: 57,
        type: "FDP",
        title: "Microsoft Power BI Data Analyst Associate",
        date: "10/07/2023 to 14/07/2023",
      },
      {
        id: 58,
        type: "Workshop",
        title: "Soft Skills",
        date: "23/12/2021 to 23/12/2021",
      },
      {
        id: 59,
        type: "Workshop",
        title: "Workshop on Industrial and Robotics",
        date: "10/01/2023 to 14/01/2022",
      },
      {
        id: 60,
        type: "Workshop",
        title: "Research Paper Writing",
        date: "12/02/2022 to 12/02/2022",
      },
      {
        id: 61,
        type: "Workshop",
        title: "IPR and Patent Drafting Technique",
        date: "23/03/2022 to 25/03/2022",
      },
      {
        id: 62,
        type: "Workshop",
        title: "National Intellectual Property Awareness Mission (NIPAM)",
        date: "26/04/2022 to 26/04/2022",
      },
      {
        id: 63,
        type: "Workshop",
        title: "Effective Curriculum Delivery",
        date: "08/08/2022 to 10/08/2022",
      },
      {
        id: 64,
        type: "Workshop",
        title: "2 Days Training on LibSys Software",
        date: "26/08/2022 to 27/08/2022",
      },
      {
        id: 65,
        type: "Workshop",
        title: "Deep Neural Network",
        date: "29/08/2022 to 02/09/2022",
      },
      {
        id: 66,
        type: "Workshop",
        title: "Learning Tally. ERP9",
        date: "02/02/2021 to 02/02/2021",
      },
    ],
  },
  {
    year: "2021-22",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 44",
    projects: [
      {
        id: 1,
        type: "Guest Lecture",
        title: "Guest Lecture on Dehradun’s history & culture",
        date: "14/12/2021",
      },
      {
        id: 2,
        type: "Workshop",
        title: "Digital Marketing Training",
        date: "06/12/2021 to 11/12/2021",
      },
      {
        id: 3,
        type: "Event",
        title: "Technical Quiz / Introductory session on machine learning",
        date: "24/12/2021",
      },
      {
        id: 4,
        type: "Webinar",
        title: "Webinar on “Green Computing And IOT”",
        date: "09/12/2021",
      },
      {
        id: 5,
        type: "Short term Course",
        title: "Internet of things",
        date: "01/12/2021 to 05/12/2021",
      },
      {
        id: 6,
        type: "Guest Lecture",
        title: "Women Empowerment",
        date: "19/11/2021",
      },
      {
        id: 7,
        type: "Guest Lecture",
        title: "Investment Banking",
        date: "29/10/2021",
      },
      {
        id: 8,
        type: "Workshop",
        title: "Workshop on photography",
        date: "10/09/2021",
      },
      { id: 9, type: "FDP", title: "Research Writing", date: "10/08/2021" },
      {
        id: 10,
        type: "Guest Lecture",
        title: "DESIGN OF ROTARY INTERSECTIONS",
        date: "23/07/2021",
      },
      {
        id: 11,
        type: "Webinar",
        title: "Cleaning of Unwanted Thoughts",
        date: "07/11/2021",
      },
      {
        id: 12,
        type: "Webinar",
        title:
          "Overview of HELM Training Program and Discovering the Personality",
        date: "26/06/2021",
      },
      {
        id: 13,
        type: "Webinar",
        title: "Be with yoga, be at home",
        date: "21/06/2021",
      },
      {
        id: 14,
        type: "Guest Lecture",
        title: "SOIL EXPLORATION",
        date: "18/06/2021",
      },
      {
        id: 15,
        type: "Expert Talk",
        title: "Mental Health in the COVID scenario",
        date: "29/05/2021",
      },
      {
        id: 16,
        type: "Workshop",
        title:
          "Workshop on Development of Entrepreneurship and Start-Up Ecosystem",
        date: "22/03/2021 to 24/03/2021",
      },
      {
        id: 17,
        type: "Workshop",
        title: "5 Days Student Development Program on “ANSYS”",
        date: "15/03/2021 to 19/03/2021",
      },
      {
        id: 18,
        type: "Workshop",
        title: "One Week Short Term Program on Revit Technology",
        date: "08/03/2021 to 12/03/2021",
      },
      {
        id: 19,
        type: "Workshop",
        title: "One Week Short Term Program on 2D Design",
        date: "04/03/2021 to 09/03/2021",
      },
      {
        id: 20,
        type: "Guest Lecture",
        title: "FINANCIAL BUDGET 2022-2023",
        date: "07/03/2022",
      },
      {
        id: 21,
        type: "Guest Lecture",
        title: "Imperatives of Being an Entrepreneur",
        date: "09/03/2022",
      },
      {
        id: 22,
        type: "Workshop",
        title: "Stock Market, Financial Market and Strategies",
        date: "08/03/2021 to 12/03/2021",
      },
      {
        id: 23,
        type: "Guest Lecture",
        title: "Cloud Computing",
        date: "06/03/2021",
      },
      {
        id: 24,
        type: "Workshop",
        title: "Workshop on Screen Writing & Theatre",
        date: "04/03/2021",
      },
      {
        id: 25,
        type: "Workshop",
        title: "One Week Short Term Technical Program on ETABS Technology",
        date: "02/03/2021 to 06/03/2021",
      },
      {
        id: 26,
        type: "Workshop",
        title:
          "One Week Short Term Technical Program on Solid Works and 3D Printing",
        date: "02/03/2021 to 06/03/2021",
      },
      {
        id: 27,
        type: "Guest Lecture",
        title: "How to Invest in IPO",
        date: "05/03/2022",
      },
      {
        id: 28,
        type: "Guest Lecture",
        title: "Depository Services",
        date: "05/03/2022",
      },
      {
        id: 29,
        type: "Guest Lecture",
        title: "DRONE A NEW BIRD IN THE SKY",
        date: "03/03/2022",
      },
      {
        id: 30,
        type: "Workshop",
        title: "One Week Short Term Technical Program on PLC and SCADA",
        date: "01/03/2021 to 05/03/2021",
      },
      {
        id: 31,
        type: "Guest Lecture",
        title:
          "Expert Talk on Internet of Things and Its Application in Different Fields",
        date: "05/03/2021",
      },
      {
        id: 32,
        type: "Guest Lecture",
        title: "Guest Lecture on Scope of Mechanical Engineering in Defense",
        date: "24/02/2021",
      },
      {
        id: 33,
        type: "Workshop",
        title: "Workshop on Remote Sensing and GIS, Science and Sensor",
        date: "25/02/2021 to 26/02/2021",
      },
      {
        id: 34,
        type: "Workshop",
        title: "One Week Short Term Program on Robotics Technology",
        date: "22/02/2021 to 26/02/2021",
      },
      {
        id: 35,
        type: "Workshop",
        title: "One Week Short Term Technical Program on Civil AutoCAD",
        date: "15/02/2021 to 19/02/2021",
      },
      {
        id: 36,
        type: "Workshop",
        title: "2 Days Program on Renewable and Sustainable Energy",
        date: "15/02/2021 to 16/02/2021",
      },
      {
        id: 37,
        type: "Workshop",
        title: "Workshop on Scope of Thermal Engineering in Industry",
        date: "10/02/2021",
      },
      {
        id: 38,
        type: "Guest Lecture",
        title:
          "Expert Talk on Machine Learning and Computer Vision by Dr. Asha CS and Dr. Munendra Singh",
        date: "08/02/2021 to 09/02/2021",
      },
      {
        id: 39,
        type: "Workshop",
        title: "Workshop on Career Options in Civil Engineering",
        date: "05/02/2021 to 06/02/2021",
      },
      {
        id: 40,
        type: "Workshop",
        title: "Workshop on Skills Required in Industry",
        date: "22/01/2021",
      },
      {
        id: 41,
        type: "Workshop",
        title: "Workshop on Energy Recovery System in Electric Vehicles",
        date: "12/01/2021",
      },
      {
        id: 42,
        type: "Workshop",
        title: "Workshop on CNC Programming and Manufacturing",
        date: "11/01/2021",
      },
      {
        id: 43,
        type: "Workshop",
        title: "Induction Program on Theme of Life Skills & Soft Skills",
        date: "05/01/2021 to 15/01/2021",
      },
      {
        id: 44,
        type: "Workshop",
        title: "Workshop on Exam Reforms & Bloom’s Taxonomy",
        date: "11/01/2021 to 17/01/2021",
      },
    ],
  },
  {
    year: "2020-21",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 19",
    projects: [
      {
        id: 1,
        type: "FDP",
        title: "FDP on Outcome Based Education at Tula’s",
        date: "01/12/2020 to 06/12/2020",
      },
      {
        id: 2,
        type: "Workshop",
        title: "Workshop Application of Machine Vision and Deep Learning",
        date: "20/11/2020 to 21/11/2020",
      },
      {
        id: 3,
        type: "Workshop",
        title: "Workshop on Python for Mechanical and Civil Engineering",
        date: "04/11/2020 to 07/11/2020",
      },
      {
        id: 4,
        type: "Workshop",
        title: "5 Days Workshop on MatLab and Simulink",
        date: "14/09/2020 to 18/09/2020",
      },
      {
        id: 5,
        type: "Workshop",
        title: "Short Term Program on Android Development",
        date: "14/09/2020 to 18/09/2020",
      },
      {
        id: 6,
        type: "Workshop",
        title: "Workshop on Fusion 360 at Tula’s Institute",
        date: "14/09/2020 to 17/09/2020",
      },
      {
        id: 7,
        type: "Workshop",
        title:
          "Online Internship Program on Opportunities for R&D and Tech Driven Start-Up",
        date: "20/06/2020 to 15/07/2020",
      },
      {
        id: 8,
        type: "Guest Lecture",
        title: "Role of Tech and Blended Learning",
        date: "14/05/2020",
      },
      {
        id: 9,
        type: "Workshop",
        title: "6 Days Web Development Training for Students",
        date: "30/03/2020 to 04/04/2020",
      },
      {
        id: 10,
        type: "FDP",
        title: "FDP on Outcome Based Education at Tula’s",
        date: "16/03/2020 to 21/03/2020",
      },
      {
        id: 11,
        type: "Workshop",
        title: "Six Days Training for Students",
        date: "16/03/2020 to 21/03/2020",
      },
      {
        id: 12,
        type: "Workshop",
        title: "Entrepreneurship Development Program for Females",
        date: "16/03/2020 to 18/03/2020",
      },
      {
        id: 13,
        type: "Workshop",
        title:
          "Three Days Workshop on Scope of GIS and Remote Sensing in Different Fields",
        date: "24/02/2020 to 26/02/2020",
      },
      {
        id: 14,
        type: "Guest Lecture",
        title: "Lecture Series on Applications of Civil Engineering",
        date: "24/02/2020 to 26/02/2020",
      },
      {
        id: 15,
        type: "Guest Lecture",
        title: "Invited Talk on Overview of Hydropower",
        date: "10/02/2020",
      },
      {
        id: 16,
        type: "FDP",
        title: "Two Days Faculty Development Program on Advance Excel",
        date: "07/02/2020 to 08/02/2020",
      },
      {
        id: 17,
        type: "Guest Lecture",
        title: "Invited Talk on Industry 4.0",
        date: "31/01/2020",
      },
      {
        id: 18,
        type: "Workshop",
        title: "Hackthon 2020 at Tula’s",
        date: "22/01/2020 to 23/01/2020",
      },
      {
        id: 19,
        type: "Workshop",
        title:
          "Short Term Course on Advancements in Manufacturing and MAT Processing",
        date: "02/01/2020 to 06/01/2020",
      },
    ],
  },
  {
    year: "2019-20",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 23",
    projects: [
      {
        id: 1,
        type: "FDP",
        title: "Two Days FDP on Latex and Research Writing",
        date: "12-13 Dec. 2019",
      },
      {
        id: 2,
        type: "Guest Lecture",
        title: "Guest Lecture on Advances in Engineering Chemistry",
        date: "27-28 Nov. 2019",
      },
      {
        id: 3,
        type: "Workshop",
        title: "Short Term Course on Application of Remote Sensing & GIS",
        date: "24-27 Nov. 2019",
      },
      {
        id: 4,
        type: "Workshop",
        title:
          "Workshop on Application of Remote Sensing and GIS in Natural Resource Management",
        date: "20-23 Nov. 2019",
      },
      {
        id: 5,
        type: "Guest Lecture",
        title: "Seminar on Life Skills",
        date: "19 Nov. 2019",
      },
      {
        id: 6,
        type: "Workshop",
        title: "Short Term Course on Digital Marketing",
        date: "16-19 Sept. 2019",
      },
      {
        id: 7,
        type: "FDP",
        title: "FDP on Advance Excel",
        date: "15-17 Nov. 2019",
      },
      {
        id: 8,
        type: "Workshop",
        title: "Workshop in Unlock Your Genius by Vedic Neuro",
        date: "11-12 Nov. 2019",
      },
      {
        id: 9,
        type: "Workshop",
        title: "Workshop on HV HC Power Electronics",
        date: "21 Oct. 2019",
      },
      {
        id: 10,
        type: "Workshop",
        title: "Workshop on Inbound Marketing",
        date: "17 Oct. 2019",
      },
      {
        id: 11,
        type: "Workshop",
        title: "Start-Up Boot Camp",
        date: "10-11 Oct. 2019",
      },
      {
        id: 12,
        type: "Workshop",
        title: "Workshop on IPR and Patents",
        date: "25 Sept. 2019",
      },
      {
        id: 13,
        type: "Workshop",
        title: "Workshop on Digital Marketing",
        date: "18-19 Sept. 2019",
      },
      {
        id: 14,
        type: "Workshop",
        title: "Student Induction Program",
        date: "19 Aug.-7 Sept. 2019",
      },
      {
        id: 15,
        type: "FDP",
        title: "Image Processing & Signal Processing Using SCILAB",
        date: "5-9 Aug. 2019",
      },
      {
        id: 16,
        type: "FDP",
        title:
          "FDP on Virtual Instrumentation and Signal Analysis Using Lab View",
        date: "1-6 July 2019",
      },
      {
        id: 17,
        type: "FDP",
        title: "Exam Reforms Workshop by AICTE New Delhi",
        date: "27 May 2019",
      },
      {
        id: 18,
        type: "Workshop",
        title: "Workshop on IoT and Data Analytics in Education",
        date: "23-24 May 2019",
      },
      {
        id: 19,
        type: "Workshop",
        title: "Workshop on Internet of Things for Building Smarter World",
        date: "8 Apr. 2019",
      },
      {
        id: 20,
        type: "FDP",
        title:
          "FDP on Role of Mobile Computing and Computer in Technical Education and Teaching Learning Process",
        date: "5-7 April 2019",
      },
      {
        id: 21,
        type: "Workshop",
        title: "Punarutthan: A women Self Defence Workshop",
        date: "23 Feb. 2019",
      },
      {
        id: 22,
        type: "Guest Lecture",
        title: "Invited Talk on Development of Entrepreneurship & Start-Up",
        date: "22 Feb. 2019",
      },
      {
        id: 23,
        type: "FDP",
        title: "Web Application Security Audit Through ICT",
        date: "7-11 Jan. 2019",
      },
    ],
  },
  {
    year: "2018-19",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 40",
    projects: [
      {
        id: 1,
        type: "Workshop",
        title:
          "Workshop on Emerging Technology IOT by Dr. Vinay Rishiwal, MJP Rohilkhand University",
        date: "22 Nov. 2018",
      },
      {
        id: 2,
        type: "Guest Lecture",
        title: "Seminar on IEEE Awareness & Anger Management",
        date: "27 Oct. 2018",
      },
      {
        id: 3,
        type: "Workshop",
        title: "Workshop on AWS & Cloud Enablement (Amazon)",
        date: "5-8 Oct. 2018",
      },
      {
        id: 4,
        type: "Workshop",
        title:
          "Interactive Workshop on Emerging Trends in Agribusiness & Allied Sciences",
        date: "30 Aug.-1 Sept. 2018",
      },
      {
        id: 5,
        type: "FDP",
        title:
          "Faculty Development Program on “Internet of Things (IoT) and Its Implementation with Cloud” by Electronics and ICT Academy",
        date: "14-18 May 2018",
      },
      {
        id: 6,
        type: "Guest Lecture",
        title:
          "Guest Lecture on Networking Concepts and Application in Defence Scenario by Trilok Kumar Saini, Scientist–E, DEAL, DRDO.",
        date: "28-Apr-18",
      },
      {
        id: 7,
        type: "Workshop",
        title: "Startup India",
        date: "27-Apr-18",
      },
      {
        id: 8,
        type: "Workshop",
        title: "Seekha Aur Kamao Course on Organic Mushroom Cultivation",
        date: "9-Apr-18",
      },
      {
        id: 9,
        type: "Workshop",
        title: "Workshop On Skill Development & Placement by Team Life Page",
        date: "9-Apr-18",
      },
      {
        id: 10,
        type: "Workshop",
        title: "Workshop on Safety Measures During Use of Pesticides in Farms",
        date: "24-Mar-18",
      },
      {
        id: 11,
        type: "Workshop",
        title: "Hands on Training on DNA Isolation",
        date: "24-Mar-18",
      },
      {
        id: 12,
        type: "Workshop",
        title: "Workshop on Auto CAD-2D",
        date: "23-24 March 2018",
      },
      {
        id: 13,
        type: "Workshop",
        title: "Workshop on Draw IT",
        date: "23-24 March 2018",
      },
      {
        id: 14,
        type: "Workshop",
        title: "Workshop on Self Financial Planning",
        date: "23-24 March 2018",
      },
      {
        id: 15,
        type: "Workshop",
        title: "Workshop on Electro Nerd",
        date: "22-23 March 2018",
      },
      {
        id: 16,
        type: "Workshop",
        title: "Workshop on Revit Architecture & 3D Printing",
        date: "22-23 March 2018",
      },
      {
        id: 17,
        type: "Workshop",
        title: "Workshop on Android",
        date: "22-23 March 2018",
      },
      {
        id: 18,
        type: "Workshop",
        title: "Workshop on Digital Marketing",
        date: "22-23 March 2018",
      },
      {
        id: 19,
        type: "Workshop",
        title: "Workshop on IOT",
        date: "21-23 March 2018",
      },
      {
        id: 20,
        type: "Workshop",
        title: "Workshop on Strength Cube Testing",
        date: "21-23 March 2018",
      },
      {
        id: 21,
        type: "Workshop",
        title: "Workshop on Vehicle Dynamics",
        date: "21-23 March 2018",
      },
      {
        id: 22,
        type: "Workshop",
        title: "Workshop on 3-D Printing",
        date: "21-22 March 2018",
      },
      {
        id: 23,
        type: "Workshop",
        title: "Workshop on MatLab & Data Acquisition",
        date: "21-22 March 2018",
      },
      {
        id: 24,
        type: "Workshop",
        title: "Workshop on PLC Automation",
        date: "21-22 March 2018",
      },
      {
        id: 25,
        type: "Workshop",
        title: "Workshop on Python",
        date: "19-21 March 2018",
      },
      {
        id: 26,
        type: "Workshop",
        title: "Workshop on GST & ITR",
        date: "19-21 March 2018",
      },
      {
        id: 27,
        type: "Workshop",
        title: "Workshop on MS Office",
        date: "19-20 March 2018",
      },
      {
        id: 28,
        type: "Workshop",
        title: "Workshop on CPM/PERT",
        date: "19-20 March 2018",
      },
      {
        id: 29,
        type: "Workshop",
        title: "Workshop on Search Engine Optimisation",
        date: "19-20 March 2018",
      },
      {
        id: 30,
        type: "Workshop",
        title: "Workshop on Demonstration of Electric Car",
        date: "19-20 March 2018",
      },
      {
        id: 31,
        type: "Workshop",
        title: "Workshop on CAD Software (Solid Works)",
        date: "19-20 March 2018",
      },
      {
        id: 32,
        type: "Workshop",
        title: "Workshop on Embedded Programming and Robotics",
        date: "18-20 March 2018",
      },
      {
        id: 33,
        type: "Workshop",
        title: "Workshop on ETAP: Electrical Transient and Analysis Program",
        date: "18-20 March 2018",
      },
      {
        id: 34,
        type: "Workshop",
        title: "Workshop on Estimation and Costing",
        date: "18-20 March 2018",
      },
      {
        id: 35,
        type: "Workshop",
        title: "Workshop on Ethical Hacking",
        date: "17-18 March 2018",
      },
      {
        id: 36,
        type: "Workshop",
        title: "Workshop on Cracking Placement",
        date: "17-18 March 2018",
      },
      {
        id: 37,
        type: "Workshop",
        title:
          "Eye-Dea Lab Series 1.0, Intellectual Property Enabled Entrepreneurship Development Program",
        date: "13-Mar-18",
      },
      {
        id: 38,
        type: "Workshop",
        title: "Introduction to GATE Preparation",
        date: "17 Feb. 2018",
      },
      {
        id: 39,
        type: "Workshop",
        title:
          "Creating Awareness About Entrepreneurship Promoting Government Support Schemes for Start-Up and Importance of Intellectual Property Rights",
        date: "31 Jan.-1 Feb. 2018",
      },
      {
        id: 40,
        type: "FDP",
        title: "Big Data with Hadoop",
        date: "2-7 Jan. 2018",
      },
    ],
  },
  {
    year: "2017-18",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 37",
    projects: [
      {
        id: 1,
        type: "FDP",
        title: "FDP on Computer Based Product Design and Manufacturing",
        date: "9-13 Dec. 2017",
      },
      {
        id: 2,
        type: "Workshop",
        title: "Self Defence Workshop for Women",
        date: "9 Nov. 2017",
      },
      {
        id: 3,
        type: "Workshop",
        title: "Workshop On Advance Excel",
        date: "1 Nov. 2017",
      },
      {
        id: 4,
        type: "Workshop",
        title: "60 Hour Auto-Cad Training Program",
        date: "9 Oct. 2017",
      },
      {
        id: 5,
        type: "FDP",
        title: "5 Days FDP and Workshop on Basic IoT Applications",
        date: "25-29 Sept. 2017",
      },
      {
        id: 6,
        type: "Workshop",
        title: "Workshop On SCADA Animation",
        date: "22 Sept. 2017",
      },
      {
        id: 7,
        type: "Workshop",
        title: "Workshop on FPGA",
        date: "20-21 Sept. 2017",
      },
      {
        id: 8,
        type: "Workshop",
        title: "Workshop on Linux",
        date: "18-19 Sept. 2017",
      },
      {
        id: 9,
        type: "Workshop",
        title: "Workshop on Survey Camp",
        date: "7-8 Sept. 2017",
      },
      {
        id: 10,
        type: "Workshop",
        title:
          "IEEE National Workshop On Research Paper Writing and Intellectual Property Rights",
        date: "25-Mar-17",
      },
      {
        id: 11,
        type: "Workshop",
        title: "Workshop on Cracking The Marketing Plan",
        date: "23 Feb. 2017",
      },
      {
        id: 12,
        type: "Workshop",
        title: "Workshop on RAC",
        date: "22-23 Feb. 2017",
      },
      {
        id: 13,
        type: "Workshop",
        title: "Workshop on Cost & Estimation",
        date: "22-23 Feb. 2017",
      },
      {
        id: 14,
        type: "Workshop",
        title: "Workshop on Ansys Workbench",
        date: "22-23 Feb. 2017",
      },
      {
        id: 15,
        type: "Workshop",
        title: "Workshop on Machine Shop",
        date: "22-23 Feb. 2017",
      },
      {
        id: 16,
        type: "Workshop",
        title: "Workshop on Android",
        date: "22-23 Feb. 2017",
      },
      {
        id: 17,
        type: "Workshop",
        title: "Workshop on PLC Program & SCADA Animation",
        date: "22-23 Feb. 2017",
      },
      {
        id: 18,
        type: "Workshop",
        title: "Workshop on Electronic Kit Usage",
        date: "22-23 Feb. 2017",
      },
      {
        id: 19,
        type: "Workshop",
        title: "Workshop on IOT",
        date: "22-23 Feb. 2017",
      },
      {
        id: 20,
        type: "Workshop",
        title: "Workshop on Cracking The Interview & Group Discussion",
        date: "21 Feb. 2017",
      },
      {
        id: 21,
        type: "Workshop",
        title: "Workshop on Dot Net",
        date: "20-21 Feb. 2017",
      },
      {
        id: 22,
        type: "Workshop",
        title: "Workshop on Civil 3D",
        date: "20-21 Feb. 2017",
      },
      {
        id: 23,
        type: "Workshop",
        title: "Workshop on Python",
        date: "20-21 Feb. 2017",
      },
      {
        id: 24,
        type: "Workshop",
        title: "Workshop on Robotics",
        date: "20-21 Feb. 2017",
      },
      {
        id: 25,
        type: "Workshop",
        title: "Workshop on Scientific Calculator",
        date: "20-21 Feb. 2017",
      },
      {
        id: 26,
        type: "Workshop",
        title: "Workshop on Auto CAD",
        date: "20-21 Feb. 2017",
      },
      {
        id: 27,
        type: "Workshop",
        title: "Workshop on Casting",
        date: "20-21 Feb. 2017",
      },
      {
        id: 28,
        type: "Workshop",
        title: "Workshop on Total Station",
        date: "20-21 Feb. 2017",
      },
      {
        id: 29,
        type: "Workshop",
        title: "Workshop on CNC",
        date: "20-21 Feb. 2017",
      },
      {
        id: 30,
        type: "Workshop",
        title: "Workshop on English Learning",
        date: "20-21 Feb. 2017",
      },
      {
        id: 31,
        type: "Workshop",
        title: "Workshop on Quadcopter",
        date: "18-19 Feb. 2017",
      },
      {
        id: 32,
        type: "Workshop",
        title: "Workshop on The Logic of Logistic & Supply Chain",
        date: "18 Feb. 2017",
      },
      {
        id: 33,
        type: "Workshop",
        title: "Workshop on GIS",
        date: "17 Feb. 2017",
      },
      {
        id: 34,
        type: "Workshop",
        title: "Workshop on PHP WEB Development",
        date: "16-17 Feb. 2017",
      },
      {
        id: 35,
        type: "Workshop",
        title: "Workshop on MS Office",
        date: "16-17 Feb. 2017",
      },
      {
        id: 36,
        type: "Workshop",
        title: "Two Days Workshop on Basics of Financial Markets",
        date: "10-11 Feb. 2017",
      },
      {
        id: 37,
        type: "Workshop",
        title:
          "Reinventing Yourself with Motivation and Innovation Using Human Wisdom",
        date: "9 Feb. 2017",
      },
    ],
  },
  {
    year: "2016-17",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 5",
    projects: [
      {
        id: 1,
        type: "Guest Lecture",
        title: "Guest Lecture On Smarter Grid",
        date: "18 Nov. 2016",
      },
      {
        id: 2,
        type: "Workshop",
        title: "Workshop on Basics of Vehicle Dynamics",
        date: "20-22 Oct. 2016",
      },
      {
        id: 3,
        type: "Workshop",
        title: "Workshop on Embedded System Development",
        date: "17-19 Oct. 2016",
      },
      {
        id: 4,
        type: "Workshop",
        title: "Workshop on Virtual Labs",
        date: "7 Oct. 2016",
      },
      {
        id: 5,
        type: "Workshop",
        title: "Workshop on Advances in Powder Metallurgy",
        date: "16 Sept. 2016",
      },
    ],
  },
  {
    year: "2015-16",
    projects: [],
  },
  {
    year: "Total Number of FDP, Workshop and Guest Lectures Organized: 1",
    projects: [
      {
        id: 1,
        type: "Workshop",
        title: "Inauguration of Virtual Lab",
        date: "Sept. 2015",
      },
    ],
  },
];

const TableComponent = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>S.No.</th>
          <th>FDP/ Workshop/ Guest Lecture</th>
          <th>Title</th>
          <th>Date</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((yearData, yearIndex) => (
          <React.Fragment key={yearIndex}>
            <tr>
              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {yearData.year}
              </td>
            </tr>
            {yearData.projects.map((project, index) => (
              <tr key={project.id}>
                <td>{index + 1}</td>
                <td>{project.type}</td>
                <td>{project.title}</td>
                <td>{project.date}</td>
              </tr>
            ))}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;
