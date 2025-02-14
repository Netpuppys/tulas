import React from "react";

const tableData = [
  {
    year: "2023-24",
    projects: [
      {
        id: 1,
        name: "An Organized Review of Machine Learning (ML) Perspectives in Manufacturing and Quality Control Processes",
        principalInvestigator: "Raman Batra; Gaurav Mittal; Ananya Saha",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "The Implementation of Integration of ML Algorithm for the Design of Stability System for Grid System",
        principalInvestigator: "Priyanka Chandani; Sandip Vijay; Soumya K",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 3,
        name: "Comparing Fault Location Methods in Transmission Lines",
        principalInvestigator: "Preeti Gera; Musheer Waqar; Manivasagam",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 4,
        name: "Revisiting Power System Stability: Definitions And Classifications",
        principalInvestigator: "Feon Jaison; Neeti Taneja; Musheer Waqar",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Enhancing Rural Power Distribution Through Scada and GPRS Automation During the Covid-19 Pandemic in Peru",
        principalInvestigator: "Nishant Saxena; Murugan R; Mayank Deep Khare",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "A Technical Bas System Through Cetralised System for Grid Systems in Transmission of Data",
        principalInvestigator:
          "Raviraj Singh Kurmi; Ashish Gupta; Ramkumar Krishnamoorthy",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Optimizing Self-Healing Distribution Networks with Smart RMUS",
        principalInvestigator: "M.S. Nidhya; Himanshu Sharma; Ashish Gupta",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 8,
        name: "Prevention of Security Against Attacks in Order to Balance the System Using Optimization",
        principalInvestigator: "A Kannagi; Santosh Kumar; Priya Vishwakarma",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 9,
        name: "5G in Smart Cities: Enhancing Urban Futures for Sustainable Growth",
        principalInvestigator: "Anita Rajvanshi; Prerna Mahajan; Alka Singh",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 10,
        name: "A Novel Approach to Optimize EV's Dealing and Charging",
        principalInvestigator: "Sandip Vijay; Gobi N; Ambrish Kumar Sharma",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 11,
        name: "An Overview of Power System Framework for Ensuring Scalability in Networks",
        principalInvestigator:
          "Rahul Kumar Sharma; Ahmad Jamal; Thiruvenkadam T",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 12,
        name: "Syncope Prevention in Electric Power System Networks and Challenges in Implementation",
        principalInvestigator: "Raman Batra; Ahmad Jamal; Adlin Jebakumari S",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 13,
        name: "Optimizing Power Flow with HVDC Lines and FACTS for Improved Power System Stability",
        principalInvestigator: "Karthikeyan M P; Nisha; Raghav Garg",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 14,
        name: "System Health Monitoring System Implementation: A Fact System",
        principalInvestigator:
          "Ramkumar Krishnamoorthy; Sarabjeet Kaur; Bharti Kalra",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 15,
        name: "IoT And IIoT Integrated Spruce Grid System",
        principalInvestigator: "Anand Kumar Gupta; R Raghavendra; Alisha Sikri",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 16,
        name: "Implementing Smart Grids via Cognitive Radio: An Overview",
        principalInvestigator: "Bharti Kalra; Febin Prakash; Himanshi Sharma",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 17,
        name: "The Electricity Management for Domestic Applications Through Hybrid Grid",
        principalInvestigator: "Sanjay Kumar; Bharti Kalra; Kannagi A",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 18,
        name: "Impact on Efficiency of Reactors via Bubbles",
        principalInvestigator: "Ajay Kumar; Ahmad Jamal; Prerna Mahajan",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 19,
        name: "Radiation Level Calculation and Energy Conversion Ratio Finding in Hybrid PV System",
        principalInvestigator: "M N Nachappa; Chhaya Agarwal; Rakesh Kumar",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 20,
        name: "The Implementation of Green Technology Through Energy Management for Achieving Industry 4.0",
        principalInvestigator: "Thiruvenkadam T; Raman Batra; Rakesh Kumar",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 21,
        name: "Use of Different Control Strategies to Design Converters and Inverters for Sustainable Grids",
        principalInvestigator:
          "Anand Kumar Gupta; Karthikeyan M P; Raman Batra",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 22,
        name: "The Implementation of Integration of ML Algorithm for the Design of Stability System for Grid System",
        principalInvestigator: "Priyanka Chandani; Sandip Vijay; Soumya K",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 23,
        name: "Addressing Power Grid Stability With Grid-Forming Converters in Future Energy Systems",
        principalInvestigator: "Kumud Saxena; Sandip Vijay; R Kamalraj",
        department:
          "2023 International Conference on Power Energy, Environment & Intelligent Control (PEEIC)",
        year: "2023",
        amount: "979-8-3503-5776-9",
        fundingAgency: "IEEE",
      },
      {
        id: 24,
        name: "Influence of high-intensity horizontal mould vibration on the density, grain refinement and mechanical characteristics of a die cast aluminium alloy (LM21)",
        principalInvestigator:
          "Yadav, Siddharth; Kumar, Santosh; Tewari, Satya Prakash; Ram, Subhash Chandra; Prasad, Rabindra; Sinha, Nitesh Kumar; Deo, Manish; Singh, Jayant Kumar;",
        department:
          "Proceedings of the Institution of Mechanical Engineers, Part E: Journal of Process Mechanical Engineering",
        year: "2023",
        amount: "2041-3009",
        fundingAgency: "SAGE Publications Sage UK: London, England",
      },
      {
        id: 25,
        name: "A literature review on Al-Si alloy matrix based in situ Al-Mg2Si FG-composites: Synthesis, microstructure features, and mechanical characteristics",
        principalInvestigator:
          "Ram, Subhash Chandra; Chattopadhyay, Kausik; Bhushan, Awani;",
        department:
          "Proceedings of the Institution of Mechanical Engineers, Part C: Journal of Mechanical Engineering Science",
        year: "2023",
        amount: "2041-2983",
        fundingAgency: "SAGE Publications Sage UK: London, England",
      },
      {
        id: 26,
        name: "Role of Cloud Computing in Goods and Services Tax (GST) and Future Application",
        principalInvestigator:
          "Kumar, Rakesh; Kathuria, Samta; Malholtra, Rupa Khanna; Kumar, Anil; Gehlot, Anita; Joshi, Kapil;",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: "2023",
        amount: "978-1-6654-9199-0",
        fundingAgency: "IEEE",
      },
      {
        id: 27,
        name: "E-Recruitment using Artificial Intelligence as Preventive Measures",
        principalInvestigator:
          "Gusain, Akshita; Singh, Tilottama; Pandey, Shweta; Pachourui, Vikrant; Singh, Rajesh; Kumar, Anil;",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: "2023",
        amount: "978-1-6654-9199-0",
        fundingAgency: "IEEE",
      },
      {
        id: 28,
        name: "Imperative Role of Artificial Intelligence and Big Data in Finance and Banking Sector",
        principalInvestigator:
          "Kumar, Rakesh; Grover, Neha; Singh, Rajesh; Kathuria, Samta; Kumar, Anil; Bansal, Aditi;",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: "2023",
        amount: "978-1-6654-9199-0",
        fundingAgency: "IEEE",
      },
      {
        id: 29,
        name: "Prediction and detection of nutrition deficiency using machine learning",
        principalInvestigator:
          "Mishra, Amit Kumar; Tripathi, Neha; Gupta, Ashish; Upadhyay, Deepak; Pandey, Neeraj Kumar;",
        department:
          "2023 International Conference on Device Intelligence, Computing and Communication Technologies (DICCT)",
        year: "2023",
        amount: "978-1-6654-7491-7",
        fundingAgency: "IEEE",
      },
      {
        id: 30,
        name: "Significance of Emerging Technological Advancements in Transition of Green Economy",
        principalInvestigator:
          "Rautela, Reeta; Kumar, Shravan; Pandey, Shweta; Prakash, Namrata; Malik, Praveen Kumar; Kumar, Anil;",
        department: "2023 IEEE Devices for Integrated Circuit (DevIC)",
        year: "2023",
        amount: "979-8-3503-4726-5",
        fundingAgency: "IEEE",
      },
      {
        id: 31,
        name: "Design of a Reliable Copyright Management System Based on Blockchain",
        principalInvestigator:
          "Nautiyal, Radhika; Jha, Radhey Shyam; Kathuria, Samta; Gehlot, Anita; Kumar, Anil; Malik, Praveen Kumar;",
        department: "2023 IEEE Devices for Integrated Circuit (DevIC)",
        year: "2023",
        amount: "979-8-3503-4726-5",
        fundingAgency: "IEEE",
      },
      {
        id: 32,
        name: "An Intelligent and Effective Framework for Reduction of Diabetes Risk",
        principalInvestigator:
          "Mishra, Amit Kumar; Tripathi, Neha; Gupta, Ashish; Pandey, Neeraj Kumar; Rana, Deepak Singh; Diwakar, Manoj;",
        department:
          "2023 International Conference on Computational Intelligence, Communication Technology and Networking (CICTN)",
        year: "2023",
        amount: "979-8-3503-3802-7",
        fundingAgency: "IEEE",
      },
      {
        id: 33,
        name: "Speed Analysis on Client Server Architecture Using HTTP/2 Over HTTP/1: A Generic Review",
        principalInvestigator:
          "Kumar, Anuj; Murugesan, Raja Kumar; Chaudhary, Harshita; Singh, Neha; Joshi, Kapil;",
        department:
          "International Conference On Emerging Trends In Expert Applications & Security",
        year: "2023",
        amount: "978-981-99-1945-1",
        fundingAgency: "Springer, Singapore",
      },
      {
        id: 34,
        name: "Automatic Speed Control of Vehicles in Speed Limit Zones Using IR Sensor",
        principalInvestigator:
          "Kukreti, Riya; Pal, Ritu; Dimri, Pratibha; Koli, Sakshi; Joshi, Kapil;",
        department:
          "International Conference On Emerging Trends In Expert Applications & Security",
        year: "2023",
        amount: "978-981-99-1945-1",
        fundingAgency: "Springer, Singapore",
      },
      {
        id: 35,
        name: "Imperative role of customer segmentation technique for customer retention using machine learning techniques",
        principalInvestigator:
          "Koli, Sakshi; Singh, Rajesh; Mishra, Rashmi; Badhani, Preeti;",
        department:
          "2023 International Conference on Artificial Intelligence and Smart Communication (AISC)",
        year: "2023",
        amount: "979-8-3503-2230-9",
        fundingAgency: "IEEE",
      },
      {
        id: 36,
        name: "Revolutionizing IoT Network Security with Deep Learning-Anomaly Detection Model",
        principalInvestigator:
          "Vyas, Manish; Vijayaganth, R; Chandhok, Jigyasha; Srivastava, Aviral; Arumugam, S; Tiwari, Mohit;",
        department:
          "2023 4th International Conference on Electronics and Sustainable Communication Systems (ICESC)",
        year: "2023",
        amount: "979-8-3503-0009-3",
        fundingAgency: "IEEE",
      },
      {
        id: 37,
        name: "LSTM Approach for Efficient Stock Market Prediction",
        principalInvestigator:
          "Kumar, Sanjiv; Aggarwal, Utkarsh; Gautam, Pratiksha; Tuteja, Aryan; Matta, Priya; Maurya, Sudhanshu;",
        department:
          "2023 3rd International Conference on Intelligent Technologies (CONIT)",
        year: "2023",
        amount: "979-8-3503-3860-7",
        fundingAgency: "IEEE",
      },
      {
        id: 38,
        name: "Application and Issues of Blockchain Technology",
        principalInvestigator:
          "Dhami, Ankita; Pareek, Prabhav Sachin; Maurya, Sudhanshu; Matta, Priya; Rawat, Vandana; Manu, Mehul;",
        department:
          "2023 5th International Conference on Inventive Research in Computing Applications (ICIRCA)",
        year: "2023",
        amount: "979-8-3503-2142-5",
        fundingAgency: "IEEE",
      },
      {
        id: 39,
        name: "The Contribution of Blockchain-based Supply Chain Finance to Sustainability and Social Responsibility",
        principalInvestigator:
          "Ahmad, Vasim; Goel, Richa; Goyal, Lalit; Venaik, Anita; Kumar, Rakesh;",
        department:
          "2023 Second International Conference on Augmented Intelligence and Sustainable Systems (ICAISS)",
        year: "2023",
        amount: "979-8-3503-2579-9",
        fundingAgency: "IEEE",
      },
      {
        id: 40,
        name: "Two-way Robust Authentication Method to Prevent Shoulder Surfing Attack",
        principalInvestigator: "Goyal, Ashtha; Matta, Priya;",
        department:
          "2023 Second International Conference on Augmented Intelligence and Sustainable Systems (ICAISS)",
        year: "2023",
        amount: "979-8-3503-2579-9",
        fundingAgency: "IEEE",
      },
      {
        id: 41,
        name: "Beyond the Basics: A Study of Advanced Techniques for Detecting and Preventing SQL Injection Attacks",
        principalInvestigator: "Goyal, Ashtha; Matta, Priya;",
        department:
          "2023 4th International Conference on Smart Electronics and Communication (ICOSEC)",
        year: "2023",
        amount: "979-8-3503-0088-8",
        fundingAgency: "IEEE",
      },
      {
        id: 42,
        name: "A Sampling-Based Logistic Regression Model for Credit Card Fraud Estimation",
        principalInvestigator:
          "Patra, Prapti; Vedansh, Srijal; Ved, Vishisht; Singh, Anup; Mishra, Sushruta; Kumar, Anil;",
        department:
          "Proceedings of Data Analytics and Management: ICDAM 2023, Volume 4",
        year: "2024",
        amount: "978-981-99-6553-3",
        fundingAgency: "Springer Nature",
      },
      {
        id: 43,
        name: "A Sampling-Based Logistic Regression Model for Credit Card Fraud Estimation Check for updates",
        principalInvestigator:
          "Patra, Prapti; Vedansh, Srijal; Ved, Vishisht; Singh, Anup; Mishra, Sushruta; Kumar, Anil;",
        department: "International Conference on Data Analytics & Management",
        year: "2023",
        amount: "978-981-99-6544-1",
        fundingAgency: "Springer",
      },
      {
        id: 44,
        name: "Digital adder circuits: A review of power, delay, area and transistor count",
        principalInvestigator:
          "Kumar, Prabhanshu; Sharma, Deepak Kumar; Sushivam, Sushivam; Barthwal, Shivangi; Prasad, Brijesh;",
        department: "AIP Conference Proceedings",
        year: "2024",
        amount: "1551-7616",
        fundingAgency: "AIP Publishing",
      },
      {
        id: 45,
        name: "Sorting an Array with Backtrack & Comparison with Bubble Sort",
        principalInvestigator:
          "Arora, Jigyasha; Pant, Suman; Vijay, Sandip; Bhardwaj, Suyash; Ahmad, Vasim;",
        department:
          "2023 2nd International Conference on Automation, Computing and Renewable Systems (ICACRS)",
        year: "2023",
        amount: "979-8-3503-4023-5",
        fundingAgency: "IEEE",
      },
      {
        id: 46,
        name: "Investigating the Emerging Market of Augmented Reality (AR) in Online Education",
        principalInvestigator:
          "Amir, Mohd; Ahmad, Vasim; Arora, Jigyasha; Lakshendra, Anant; Ballabh, Samita; Verma, Tulika Uniyal;",
        department:
          "2023 2nd International Conference on Automation, Computing and Renewable Systems (ICACRS)",
        year: "2023",
        amount: "979-8-3503-4023-5",
        fundingAgency: "IEEE",
      },
      {
        id: 47,
        name: "Effect of Anti-Reflective and Dust Spreading on Performance of Solar PV Panels",
        principalInvestigator:
          "Dabral, Atulesh; Kumar, Rahul; Ram, SC; Morey, Amit; Mohan, Sumit; Sharma, Devesh;",
        department: "IOP Conference Series: Earth and Environmental Science",
        year: "2024",
        amount: "1755-1315",
        fundingAgency: "IOP Publishing",
      },
      {
        id: 48,
        name: "Numerical Analysis of Out-of-Plane Crushing of Reinforced Honeycomb Core and Effect of Cell Parameters on its Properties",
        principalInvestigator:
          "Mohan, Sumit; Gautam, Anupam; Bahuguna, Anurag; Jain, Ankit; Ram, SC;",
        department: "IOP Conference Series: Earth and Environmental Science",
        year: "2024",
        amount: "1755-1315",
        fundingAgency: "IOP Publishing",
      },
    ],
  },
  {
    year: "2022-23",
    projects: [
      {
        id: 1,
        name: "Switching and Analog/RF performance improvement of Graded Channel Double Gate Junctionless FET: A Simulation Study",
        principalInvestigator:
          "Kumar, Shivam; Joshi, Rajendra; Joshi, Tripuresh; Semwal, Sunil",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "An Innovative Approach to Neonatal Intensive Unit Care System for New Born babies",
        principalInvestigator:
          "Tiwari, Rajinder; Raina, Gurpreet; Semwal, Sunil",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 3,
        name: "Artificial Intelligence Based Visually Impaired Assist System",
        principalInvestigator:
          "Shinghal, Deepti; Shinghal, Kshitij; Saxena, Shuchita; Saxena, Amit; Saxena, Nishant; Sharma, Amit",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 4,
        name: "Intelligent Control and Stability Assessment of Smart Grid Required for Electric Vehicles",
        principalInvestigator:
          "Shinghal, Deepti; Saxena, Amit; Saxena, Nishant; Shinghal, Kshitij; Misra, Rajul; Saxena, Shuchita",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Harmonics Mitigation Based on Fuzzy Logic Controller",
        principalInvestigator:
          "Chakravorty, Abhishek; Vidhyarthi, Vrij Mohan; Arya, Apoorv",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "A Simulation Study of Si/SiGe Dual Insulator Double Gate Heterostructure Junctionless FET (DI-DG-HJL-FET) for RF Applications",
        principalInvestigator:
          "Sharma, Deepak Kumar; Joshi, Rajendra; Joshi, Tripuresh; Dhuliya, Priyanka",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Analyzing Consumer Behavior Predictions: A Review of Machine Learning Techniques",
        principalInvestigator:
          "Mathur, Nikhil; Kumar, Sachin; Joshi, Tripuresh; Dhuliya, Piyush",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 8,
        name: "Electric Vehicles (EV's): A brief review",
        principalInvestigator:
          "Dhuliya, Piyush; Kathait, Shailendra Singh; Semwal, Sunil; Joshi, Tripuresh; Pathela, Mukesh",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 9,
        name: "Design a Heat-Transfer Device That is More Effective for Better Solar Energy Resource and Utilization",
        principalInvestigator:
          "Michael, Aakash; Sutradhar, Bijoy; Michael, Ashish; Sharma, Devesh",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 10,
        name: "Synthesis and mechanical characterization of natural fibre polymer matrix laminated hybrid composites reinforced with glass-fibre and flax-fibre synthesized by hand-lay-up techniques",
        principalInvestigator:
          "Kumar, Adarsh; Shah, Pankaj Kumar; Singh, Ritwik; Chand, Ayush; Yadav, Siddharth; Ram, SC",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 11,
        name: "Next Generation Ultra-sensitive Surface Plasmon Resonance Biosensors",
        principalInvestigator:
          "Uniyal, Arun; Gotam, Sandeep; Ram, Tika; Chauhan, Brajlata; Jha, Ankit; Pal, Amrindra",
        department:
          "4th International Conference, MIND 2022, January 19–20, 2023, Proceedings, Part I",
        year: 2023,
        amount: "978-3-031-24367-7",
        fundingAgency: "Springer",
      },
      {
        id: 12,
        name: "Pothole Detection and Warning System for Intelligent Vehicles",
        principalInvestigator:
          "Giri, Jatin; Bisht, Rohit Singh; Yadav, Kashish; Bhatnagar, Navdeep; Johari, Suchi",
        department:
          "5th International Conference on Communications and Cyber-Physical Engineering (ICCCE 2022), Hyderabad, India",
        year: 2023,
        amount: "978-981-19-8086-2",
        fundingAgency: "Springer",
      },
      {
        id: 13,
        name: "Role of Cloud Computing in Goods and Services Tax (GST) and Future Application",
        principalInvestigator:
          "Kumar, Rakesh; Kathuria, Samta; Malholtra, Rupa Khanna; Kumar, Anil; Gehlot, Anita; Joshi, Kapil",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: 2023,
        amount: "978-1-6654-9199-0",
        fundingAgency: "IEEE",
      },
      {
        id: 14,
        name: "E-Recruitment using Artificial Intelligence as Preventive Measures",
        principalInvestigator:
          "Gusain, Akshita; Singh, Tilottama; Pandey, Shweta; Pachourui, Vikrant; Singh, Rajesh; Kumar, Anil",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: 2023,
        amount: "978-1-6654-9199-1",
        fundingAgency: "IEEE",
      },
      {
        id: 15,
        name: "Imperative Role of Artificial Intelligence and Big Data in Finance and Banking Sector",
        principalInvestigator:
          "Kumar, Rakesh; Grover, Neha; Singh, Rajesh; Kathuria, Samta; Kumar, Anil; Bansal, Aditi",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: 2023,
        amount: "978-1-6654-9199-2",
        fundingAgency: "IEEE",
      },
      {
        id: 16,
        name: "Prediction and detection of nutrition deficiency using machine learning",
        principalInvestigator:
          "Mishra, Amit Kumar; Tripathi, Neha; Gupta, Ashish; Upadhyay, Deepak; Pandey, Neeraj Kumar",
        department:
          "2023 International Conference on Device Intelligence, Computing and Communication Technologies,(DICCT)",
        year: 2023,
        amount: "978-1-6654-7491-7",
        fundingAgency: "IEEE",
      },
      {
        id: 17,
        name: "Significance of Emerging Technological Advancements in Transition of Green Economy",
        principalInvestigator:
          "Rautela, Reeta; Kumar, Shravan; Pandey, Shweta; Prakash, Namrata; Malik, Praveen Kumar; Kumar, Anil",
        department: "2023 IEEE Devices for Integrated Circuit (DevIC)",
        year: 2023,
        amount: "979-8-3503-4726-5",
        fundingAgency: "IEEE",
      },
      {
        id: 18,
        name: "Design of a Reliable Copyright Management System Based on Blockchain",
        principalInvestigator:
          "Nautiyal, Radhika; Jha, Radhey Shyam; Kathuria, Samta; Gehlot, Anita; Kumar, Anil; Malik, Praveen Kumar",
        department: "2023 IEEE Devices for Integrated Circuit (DevIC)",
        year: 2023,
        amount: "979-8-3503-4726-5",
        fundingAgency: "IEEE",
      },
      {
        id: 19,
        name: "Optimization Methods for Image Edge Detection Using Ant and Bee Colony Techniques",
        principalInvestigator:
          "Kumar, Sachin; Kumar, Sandeep; Kumar, Brajendra; Sharma, Sandeep; Chaudhary, Harshita",
        department:
          "Advances in Information Communication Technology and Computing: Proceedings of AICTC 2022",
        year: 2023,
        amount: "978-981-19-9888-1",
        fundingAgency: "Springer",
      },
      {
        id: 20,
        name: "Unconventional to Automated Attendance Marking Using Image Processing",
        principalInvestigator:
          "Pradhan, Abhiujjwal; Pal, Ritu; Kumar, Sachin; Koli, Sakshi; Kalra, Bharti; Nawaz, Waris",
        department:
          "Advances in Information Communication Technology and Computing: Proceedings of AICTC 2022",
        year: 2023,
        amount: "978-981-19-9888-1",
        fundingAgency: "Springer",
      },
      {
        id: 21,
        name: "An Intelligent and Effective Framework for Reduction of Diabetes Risk",
        principalInvestigator:
          "Mishra, Amit Kumar; Tripathi, Neha; Gupta, Ashish; Pandey, Neeraj Kumar; Rana, Deepak Singh; Diwakar, Manoj",
        department:
          "2023 International Conference on Computational Intelligence, Communication Technology and Networking (CICTN)",
        year: 2023,
        amount: "979-8-3503-3802-7",
        fundingAgency: "IEEE",
      },
      {
        id: 22,
        name: "Speed Analysis on Client Server Architecture Using HTTP/2 Over HTTP/1: A Generic Review",
        principalInvestigator:
          "Kumar, Anuj; Murugesan, Raja Kumar; Chaudhary, Harshita; Singh, Neha; Joshi, Kapil",
        department:
          "International Conference On Emerging Trends In Expert Applications & Security",
        year: 2023,
        amount: "978-981-99-1909-3",
        fundingAgency: "Springer, Singapore",
      },
      {
        id: 23,
        name: "Automatic Speed Control of Vehicles in Speed Limit Zones Using IR Sensor",
        principalInvestigator:
          "Kukreti, Riya; Pal, Ritu; Dimri, Pratibha; Koli, Sakshi; Joshi, Kapil",
        department:
          "International Conference On Emerging Trends In Expert Applications & Security",
        year: 2023,
        amount: "978-981-99-1909-3",
        fundingAgency: "Springer, Singapore",
      },
      {
        id: 24,
        name: "Influences of forced frequency and its Static Analysis of Kaplan Turbine Shaft with Different Engineering Materials",
        principalInvestigator:
          "Gautam, Anupam; Bahuguna, Anurag; Kumar, Rahul; Morey, Amit; Sachin, Sachin; Pal, Shubham; Ram, SC",
        department:
          "2022 2nd International Conference on Innovative Sustainable Computational Technologies (CISCT)",
        year: 2022,
        amount: "978-1-6654-7416-0",
        fundingAgency: "IEEE",
      },
      {
        id: 25,
        name: "Comparative Study of Performance Measure of Modified Stepped Solar Still with Conventional Solar Still for Water Desalination Processes",
        principalInvestigator:
          "Pal, Shubham; Dixit, Aman; Raj, Beauty; Pal, KapilKumar; Saiprakash, Gatla; Ram, SC; Gautam, Anupam",
        department:
          "2022 2nd International Conference on Innovative Sustainable Computational Technologies (CISCT)",
        year: 2022,
        amount: "978-1-6654-7416-0",
        fundingAgency: "IEEE",
      },
      {
        id: 26,
        name: "Imperative role of customer segmentation technique for customer retention using machine learning techniques",
        principalInvestigator:
          "Koli, Sakshi; Singh, Rajesh; Mishra, Rashmi; Badhani, Preeti",
        department:
          "2023 International Conference on Artificial Intelligence and Smart Communication (AISC)",
        year: 2023,
        amount: "979-8-3503-2230-9",
        fundingAgency: "IEEE",
      },
      {
        id: 27,
        name: "Comparing Performance And Computational Efficiency Of Face Recognition Approaches",
        principalInvestigator:
          "Bisht, Eshani Akanksha; Prabhat, Purnendu; Kumar, Sachin",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "978-1-6654-7439-9",
        fundingAgency: "IEEE",
      },
      {
        id: 28,
        name: "Delay Tolerant and Energy Reduced Task Allocation in Internet of Things with Cloud Systems",
        principalInvestigator:
          "Patil, Dipak Raghunath; Borkar, Bharat; Markad, Ashok; Kadlag, Sunil; Kumbhkar, Makhan; Jamal, Ahmad",
        department:
          "2022 International Interdisciplinary Humanitarian Conference for Sustainability (IIHC)",
        year: 2022,
        amount: "978-1-6654-5687-6",
        fundingAgency: "IEEE",
      },
      {
        id: 29,
        name: "Design and Fabrication of Eco-Kart Vehicle Using AISI 4130(CHROMOLY) Alloys as Chassis Material",
        principalInvestigator:
          "Utkarsh, A., Khan, M., Alam, S., Srivastav, A., Thapa, K., Jain, A., & Ram, S. C.",
        department:
          "2nd International Conference on Innovative Sustainable Computational Technologies (CISCT)",
        year: 2022,
        amount: "978-1-6654-7416-0",
        fundingAgency: "IEEE",
      },
      {
        id: 30,
        name: "Role of industrial automation in terms of providing predictive maintenance in the transportation and logistics sector",
        principalInvestigator:
          "Mohamed Dawood Shamout; Pavan Kumar Chaubey; Priyanka Agarwal; Ibrahim A I Adwan; Anuj Kumar Sharma; Ajay Singh",
        department:
          "2022 International Interdisciplinary Humanitarian Conference for Sustainability (IIHC)",
        year: 2023,
        amount: "978-1-6654-5687-6",
        fundingAgency: "IEEE",
      },
      {
        id: 31,
        name: "Revolutionizing IoT Network Security with Deep Learning-Anomaly Detection Model",
        principalInvestigator:
          "Manish Vyas, R Vijayaganth, Jigyasha Chandhok, Aviral Srivastava, S Arumugam, Mohit Tiwari",
        department:
          "2023 4th International Conference on Electronics and Sustainable Communication Systems (ICESC)",
        year: 2023,
        amount: "979-8-3503-0009-3",
        fundingAgency: "IEEE",
      },
      {
        id: 32,
        name: "LSTM Approach for Efficient Stock Market Prediction",
        principalInvestigator:
          "Sanjiv Kumar, Utkarsh Aggarwal, Pratiksha Gautam, Aryan Tuteja, Priya Matta, Sudhanshu Maurya",
        department:
          "3rd International Conference on Intelligent Technologies (CONIT)",
        year: 2023,
        amount: "979-8-3503-3860-7",
        fundingAgency: "IEEE",
      },
    ],
  },
  {
    year: "2021-22",
    projects: [
      {
        id: 1,
        name: "Solar Based Electric Vehicle charging Station",
        principalInvestigator:
          "D Tirumala Tarun, Prasanth Bokka, G.G Raja Sekhar, Katuri Rayudu, Sandeep Khantwal, Vinay Negi",
        department:
          "2022 3rd International Conference for Emerging Technology (INCET)",
        year: 2022,
        amount: "978-1-7281-1793-5",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "Energy-Efficient Routing Protocol for Congestion Control in Wireless Sensor Network",
        principalInvestigator:
          "Bhumika Gupta, Kamal Kumar Gola, Narayan Jee, Pratibha Dimri",
        department:
          "2022 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET)",
        year: 2022,
        amount: "1869-1951",
        fundingAgency: "IEEE",
      },
      {
        id: 3,
        name: "Design and Implementation of Fractional Order Controllers Using Nelder-Mead Algorithm",
        principalInvestigator:
          "Deeksha Naithani, M Chaturvedi, PK Juneja, Prabhat Kumar, Sheetal Kapoor",
        department:
          "2021 International Conference on Computational Performance Evaluation (ComPE)",
        year: 2021,
        amount: "",
        fundingAgency: "IEEE",
      },
      {
        id: 4,
        name: "Web Crawler based Caching Technique for efficient Downloading",
        principalInvestigator: "Navdeep Bhatnagar, Suchi Johari",
        department:
          "2021 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "",
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Correlation Coefficient Model for Analyzing Effect of Temperature on COVID19 cases in India",
        principalInvestigator: "Navdeep Bhatnagar, Suchi Johari",
        department:
          "2022 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "",
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "Audio-augmentation based Badminton System for Visually Impaired Person",
        principalInvestigator:
          "Sahabzada Betab Badar, Sachin Choudhary, Zahid Ansari, Sohavan Kumar, Deepak Kumar Sharma, Shashi Ranjan, Prabhanshu Kumar, Sushivam Singh",
        department:
          "2021 IEEE 8th Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON)",
        year: 2021,
        amount: "",
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Slope Instability Detection Using IoT with the Help of Ecological Indicators",
        principalInvestigator:
          "Sunil Semwal, Piyush Dhuliya, Vikalp Joshi, Diwaker Pant",
        department:
          "Sixth International Conference on Intelligent Computing and Applications",
        year: 2021,
        amount: "",
        fundingAgency: "Springer",
      },
      {
        id: 8,
        name: "Correlation Coefficient Model for Analyzing Effect of Temperature on COVID19 cases in India",
        principalInvestigator: "Bhatnagar, Navdeep; Johari, Suchi;",
        department:
          "2021 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "",
        fundingAgency: "IEEE Xplorer",
      },
      {
        id: 9,
        name: "Web Crawler based Caching Technique for efficient Downloading",
        principalInvestigator: "Bhatnagar, Navdeep; Johari, Suchi;",
        department:
          "2021 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "",
        fundingAgency: "IEEE Xplorer",
      },
    ],
  },
  {
    year: "2021",
    projects: [
      {
        id: 1,
        name: "Audio-augmentation based Badminton System for Visually Impaired Person",
        principalInvestigator:
          "Sahabzada Betab Badar, Sachin Choudhary, Zahid Ansari, Sohavan Kumar, Deepak Kumar Sharma, Shashi Ranjan, Prabhanshu Kumar, Sushivam Singh",
        department:
          "2021 IEEE 8th Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON)",
        year: 2021,
        amount: "2687-7759",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "Advancements and Challenges: Antenna Miniaturization for IoT Applications",
        principalInvestigator: "Dr. Sandip Vijay",
        department: "Next-Generation Antennas:",
        year: 2021,
        amount: "9781119791867",
        fundingAgency: "Wiley-Scrivener imprint",
      },
      {
        id: 3,
        name: "Stable Optimized Link Heuristic Using Cross-Layiring for QoS of Secured HANETs",
        principalInvestigator: "Dr. Sandip Vijay",
        department: "Lecture Notes in Electrical Engineering:",
        year: 2021,
        amount: "978-981-15-5341-7",
        fundingAgency: "Springer",
      },
      {
        id: 4,
        name: "A Prejudice Faced by Indian Women in the Corporate World",
        principalInvestigator: "Navjyoti Singhal",
        department:
          "Commerce and Management-A New Perspective: Gender Discrimination",
        year: 2021,
        amount: "978-81-949439-9-0",
        fundingAgency: "Imperial Publications",
      },
      {
        id: 5,
        name: "A Textbook of Dravya Engineering (Hydraulics)",
        principalInvestigator: "Ankit Jain",
        department: "NA",
        year: 2018,
        amount: "978-93-85933-58-5",
        fundingAgency: "Nano Edge Publication",
      },
      {
        id: 6,
        name: "Effect of Apple Cider Varities on Chemical & Sensory Prop. Of Cider",
        principalInvestigator: "Bhawana Gahtori",
        department: "NA",
        year: 2021,
        amount: "6203306541",
        fundingAgency: "LAP Lambert Academic Publishing",
      },
      {
        id: 7,
        name: "Proceedings of International Conference on Machine Intelligence and Data Science Applications:",
        principalInvestigator: "Suman Pant",
        department:
          "Web Crawlers for Ranking of Websites Based on Web Traffic and Page Views",
        year: 2021,
        amount: "978-981-33-4087-9",
        fundingAgency: "Springer",
      },
    ],
  },
  {
    year: "2020",
    projects: [
      {
        id: 1,
        name: "Essence of Blockchain Technology in Wireless Sensor Network: A brief study",
        principalInvestigator: "Diwaker Pant",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov, 2020",
        amount: "978-1-7281-9786-9",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "Fundamentals of Entomology ( As Per ICAR New Syllabus )",
        principalInvestigator: "Pravesh Kumar Sehgal",
        department: "NA",
        year: "2020",
        amount: "NA",
        fundingAgency: "NA",
      },
      {
        id: 3,
        name: "Fundamentals of Entomology ( As Per ICAR New Syllabus )",
        principalInvestigator: "Pravesh Kumar Sehgal",
        department: "National Book As per new syllabus ICAR",
        year: "Dec. 2020",
        amount: "ISBN:978-81-947357-3-1",
        fundingAgency: "Kalyani Publishers New Delhi, India",
      },
      {
        id: 4,
        name: "Pests of Field Crop and Stored Grains and Their Management ( As Per ICAR New Syllabus )",
        principalInvestigator: "Pravesh Kumar Sehgal",
        department: "National Book As per new syllabus ICAR",
        year: "Dec. 2020",
        amount: "ISBN:978-81-947357-4-8",
        fundingAgency: "Kalyani Publishers New Delhi, India",
      },
      {
        id: 5,
        name: "Cloud Agent-Based Encryption Mechanism (CAEM): A Security Framework Model for Improving Adoption, Implementation and Usage of Cloud Computing Technology",
        principalInvestigator: "Sanjeev Kumar",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "Ensemble Classifiers for Brain Cyborgs",
        principalInvestigator: "Sunil Semwal",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 8,
        name: "Analyzing the Impact of Variation in Hole Block Layer Thickness on OLED Performance",
        principalInvestigator: "Shubham Negi",
        department:
          "4th International Conference (Online) on Recent Trends in Communication & Electronics (ICCE-2020)",
        year: "28-29 Nov. 2020",
        amount: "9781003193838",
        fundingAgency: "CRC Press, Taylor and Francis",
      },
      {
        id: 9,
        name: "Ad-Libbed Hand Motion Acknowledgement Framework Utilizing PCA",
        principalInvestigator: "Vishant Kumar. Saurabh Singh, Ramnarayan Pal",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 10,
        name: "Finite Element Analysis Based on Mechanical Vibration Characteristics of Femur Bone",
        principalInvestigator: "Anamika Bhandari, Trivendra Bisht",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 11,
        name: "A Review on Multi Touch Sensor Technology Using Touch Event Generator",
        principalInvestigator: "Ramnarayan Pal, Saurabh Singh, Vishant Kumar",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 12,
        name: "Domination of Technological Tools in Cartographic Advancement: Perspective of Spatial Analysis",
        principalInvestigator: "Sanjeev Kumar",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 13,
        name: "IoT Based Modified Hybrid Blended Learning Model for Education",
        principalInvestigator: "Nishant Saxena",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 14,
        name: "IoT Based Intelligent Adaptive Control Education System",
        principalInvestigator: "Nishant Saxena",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 15,
        name: "Proximity Coupled Microstrip Patch Antenna for Gain Enhancement",
        principalInvestigator: "Nishant Saxena",
        department:
          "2020 International Conference on Advances in Computing, Communication & Materials (ICACCM)",
        year: "Nov. 2020",
        amount: "978-1-7281-9785-2",
        fundingAgency: "IEEE",
      },
      {
        id: 16,
        name: "Rain Attenuation a Bottleneck Issue for Next Generation of Internet and Communication Technology",
        principalInvestigator: "Diwaker Pant, Sunil Semwal",
        department:
          "14th USSTC at Uttarakhand State Council for Science and Technology",
        year: "Feb 2020",
        amount: "",
        fundingAgency: "",
      },
      {
        id: 17,
        name: "Channel Capacity Analysis of Wireless System Under ORA Scheme Over κ − μ/Inverse Gamma and η − μ/ Inverse Gamma Composite Fading Models",
        principalInvestigator: "Diwaker Pant",
        department:
          "2020 International Conference on Electrical and Electronics Engineering (ICE3-2020)",
        year: "Feb 2020",
        amount: "978-1-7281-5847-1",
        fundingAgency: "IEEE",
      },
      {
        id: 18,
        name: "Average Channel Capacity over Mixture Gamma Distribution",
        principalInvestigator: "Diwaker Pant",
        department:
          "2020 International Conference on Electrical and Electronics Engineering (ICE3-2020)",
        year: "Feb 2020",
        amount: "978-1-7281-5847-1",
        fundingAgency: "IEEE",
      },
      {
        id: 19,
        name: "A Land Use Land Cover Classification Model Using Deep CNN",
        principalInvestigator: "Sandeep Kumain, Raj Singh",
        department:
          "International Conference on Innovative Engineering Design-2020 (ICOIED-2020)",
        year: "18-20 Jan. 2020",
        amount: "",
        fundingAgency: "",
      },
    ],
  },
  {
    year: "2019",
    projects: [
      {
        id: 1,
        name: "Effect of Nano-Silica on Self Compacting Concrete as Partial Replacement of Cement",
        principalInvestigator: "Ashish Kumar, Rohin Sharma, Preeti Kumari",
        department:
          "International Conference on Experimentation and Progression in Engineering",
        year: "Nov 2019",
        amount: "",
        fundingAgency: "",
      },
      {
        id: 2,
        name: "Smart Multipurpose Robotic Car",
        principalInvestigator: "Sandeep Chand Kumain",
        department: "ICDLAIR 2019, MNIT Jaipur",
        year: "2019",
        amount: "978-3-030-67186-0",
        fundingAgency: "Springer",
      },
      {
        id: 3,
        name: "VBNC: Voting Based Noise Classification Framework Using Deep CNN",
        principalInvestigator: "Sandeep Chand Kumain",
        department: "ICDLAIR 2019, MNIT Jaipur",
        year: "2019",
        amount: "978-3-030-67186-0",
        fundingAgency: "Springer",
      },
      {
        id: 4,
        name: "Introducing Speckle Noise Data-Set and A Deep Learning Based Model for Speckle Noise Level Identification",
        principalInvestigator: "Sandeep Chand Kumain",
        department:
          "Fifth International Conference on Advances in Computing, Communication and Automation ICACCA 2019",
        year: "2019",
        amount: "",
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Forest Characterization at Community Level Using Temporal Sentinel-2 Data in Nandhaur Landscape of Western Himalaya Management of Natural Resources",
        principalInvestigator: "Raj Singh",
        department: "1st International Conservation Conference (ICC-2019)",
        year: "2019",
        amount: "",
        fundingAgency: "",
      },
      {
        id: 6,
        name: "Identifying and Using Viable Alternative Energy Resources (WIND Energy)",
        principalInvestigator:
          "Sachin Kumar, Lokesh Kumar, Monika Belwal, Sandeep Kumar",
        department:
          "2019 Women Institute of Technology Conference on Electrical and Computer Engineering (WITCON ECE)",
        year: "2019",
        amount: "978-1-7281-5204-2",
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Security Designs for the Cloud, IOT, and Social Networking: Security and Challenges in Mobile Cloud Computing",
        principalInvestigator: "Minakshi Memoria",
        department: "NA",
        year: "2019",
        amount: "9781119593171",
        fundingAgency: "Scrivener Publishing, Wiley",
      },
      {
        id: 8,
        name: "Smart Meters for Domestic Consumers: Innovative Methods for Identifying Appliances using NIALM",
        principalInvestigator: "S. Semwal, N. Saxena",
        department:
          "2019 Women Institute of Technology Conference on Electrical and Computer Engineering (WITCON ECE)",
        year: "2019",
        amount: "978-1-7281-5204-2",
        fundingAgency: "IEEE",
      },
      {
        id: 9,
        name: "A Survey on Content Based Crawling for Deep and Surface Web",
        principalInvestigator: "Suchi Johari",
        department:
          "Fifth International Conference on Image Information Processing (ICIIP -2019)",
        year: "2019",
        amount: "978-1-7281-0899-5",
        fundingAgency: "IEEE",
      },
      {
        id: 10,
        name: "Effect of Thickness of Double Hole Block Layers on Performance of OLED: An Analysis",
        principalInvestigator: "Shubham Negi",
        department:
          "International Conference on Signal Processing, VLSI and Communication (ICSPVCE-2019)",
        year: "2019",
        amount: "",
        fundingAgency: "IEEE",
      },
    ],
  },
  {
    year: "2018",
    projects: [
      {
        id: 1,
        name: "Virtual Instrumentation for Power Quality Measurement",
        principalInvestigator: "Abhishek Chakravorty",
        department:
          "2018 3rd International Conference on Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "Comparative Harmonic Analysis of Diode Clamped Multilevel Inverter",
        principalInvestigator: "Abhishek Chakravorty",
        department:
          "2018 3rd International Conference on Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785",
        fundingAgency: "IEEE",
      },
      {
        id: 3,
        name: "A 50V Multi Gate RF LMOS on InGaAs",
        principalInvestigator: "Abhishek Chakravorty",
        department:
          "2018 3rd International Conference On Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5386-5002-8",
        fundingAgency: "IEEE",
      },
      {
        id: 4,
        name: "Implementation of AES Employing Systolic Array and Pipelining Approach",
        principalInvestigator: "Sonam Negi",
        department:
          "2018 3rd International Conference On Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785-5",
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Smart Learning Based on Augmented Reality with Android Platform and its Applicability",
        principalInvestigator: "Yogita Bahuguna",
        department:
          "2018 3rd International Conference On Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785-5",
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "Enhancing Bank Security System Using Face Recognition, Iris Scanner and Palm Vein Technology",
        principalInvestigator: "Raj Gusain",
        department:
          "2018 3rd International Conference On Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785-5",
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Processor Specific Green Counter Based on HSTL IO Standard Design on 90nm FPGA",
        principalInvestigator: "Sushant Shekhar",
        department:
          "2018 3rd International Conference On Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785-5",
        fundingAgency: "IEEE",
      },
      {
        id: 8,
        name: "A 100 V Lateral Trench Power MOSFET on InGaAs/InP",
        principalInvestigator: "Sushant Shekhar",
        department:
          "2018 3rd International Conference On Internet of Things: Smart Innovation and Usages (IoT-SIU)",
        year: "2018",
        amount: "978-1-5090-6785-5",
        fundingAgency: "IEEE",
      },
      {
        id: 9,
        name: "Fuzzy Logic Controller Based Compensation of Power System For Line Harmonic Reduction",
        principalInvestigator: "Abhishek Chakravorty",
        department:
          "3rd IEEE International Conference on Engineering Technology (ICETECH)",
        year: "2018",
        amount: "NA",
        fundingAgency: "NA",
      },
      {
        id: 10,
        name: "Approaches in Microbial Fuel Cell Array Arrangement for Conventional DC Battery Charger",
        principalInvestigator: "Abhishek Chakravorty",
        department: "IEEE ICISC 2018",
        year: "2018",
        amount: "978-1-5090-6785",
        fundingAgency: "IEEE",
      },
      {
        id: 11,
        name: "A Simulation-Based Comparison on Code Excited Linear Prediction (CELP) Coder at Different Bit Rates",
        principalInvestigator: "Swati Joshi",
        department:
          "Proceedings of International Conference on Recent Advancement on Computer and Communication",
        year: "2018",
        amount: "978-981-10-8198-9_31",
        fundingAgency: "Springer",
      },
      {
        id: 12,
        name: "Design and Implementation of a Green Traffic Light Controller on FPGA Using VHDL",
        principalInvestigator: "Sushant Shekhar",
        department:
          "Advances in Intelligent Systems and Computing book series (AISC, volume 732)",
        year: "2018",
        amount: "978-981-10-8533-8",
        fundingAgency: "Springer",
      },
      {
        id: 13,
        name: "Hybrid Approach for Securing IoT Communication Using Authentication and Data Confidentiality",
        principalInvestigator: "Sunita Bisht, Anita Joshi",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 14,
        name: "Improvising-AODV Routing Protocol by Modifying Route Discovery Mechanism in VANET",
        principalInvestigator: "Sunita Bisht, Anita Joshi",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 15,
        name: "Generation of Light Energy by Utilization of Electrical Energy Without Consumption of Electrical Energy Through Harness of Wind Energy Generated by Ceiling Fans",
        principalInvestigator: "Deepak Punetha",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 16,
        name: "Hierarchical Routing Protocols in WSN: A Brief Survey",
        principalInvestigator: "Anshika Bhalla, Pramod Kumar",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 17,
        name: "Comparative Study and Analysis of Wireless Mesh Networks on AODV and DSR",
        principalInvestigator: "Shashi Bhushan, Vibhor Sharma",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 18,
        name: "Modteen: Modified Threshold Energy Efficient Network in Wireless Sensor Networks",
        principalInvestigator: "Anshika Bhalla",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 19,
        name: "A Serial-outline Discovery of Data with or Without Obsolete Database",
        principalInvestigator: "Pramod Kumar",
        department:
          "2017 3rd International Conference on Advances in Computing, Communication & Automation (ICACCA) (Fall)",
        year: "2017",
        amount: "978-1-5090-6403-8",
        fundingAgency: "IEEE",
      },
      {
        id: 20,
        name: "Comparative Study of Rate of Convergence & Complex Dynamics of Trigonometric Functions Using Jungck Ishikawa Iteration Scheme",
        principalInvestigator: "Suman Pant",
        department:
          "2017 IEEE International Conference on Computing Communication and Automation (ICCCA 2017)",
        year: "2017",
        amount: "978-1-5090-6471-7",
        fundingAgency: "IEEE",
      },
    ],
  },
];
const tableDataBook = [
  {
    year: "2022-23",
    projects: [
      {
        id: 1,
        name: "Role of Cloud Computing in Goods and Services Tax (GST) and Future Application",
        principalInvestigator:
          "Kumar, Rakesh; Kathuria, Samta; Malholtra, Rupa Khanna; Kumar, Anil; Gehlot, Anita; Joshi, Kapil",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: 2023,
        amount: "1443-1447",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "E-Recruitment using Artificial Intelligence as Preventive Measures",
        principalInvestigator:
          "Gusain, Akshita; Singh, Tilottama; Pandey, Shweta; Pachourui, Vikrant; Singh, Rajesh; Kumar, Anil",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: 2023,
        amount: "516-522",
        fundingAgency: "IEEE",
      },
      {
        id: 3,
        name: "Imperative Role of Artificial Intelligence and Big Data in Finance and Banking Sector",
        principalInvestigator:
          "Kumar, Rakesh; Grover, Neha; Singh, Rajesh; Kathuria, Samta; Kumar, Anil; Bansal, Aditi",
        department:
          "2023 International Conference on Sustainable Computing and Data Communication Systems (ICSCDS)",
        year: 2023,
        amount: "523-527",
        fundingAgency: "IEEE",
      },
      {
        id: 4,
        name: "Prediction and detection of nutrition deficiency using machine learning",
        principalInvestigator:
          "Mishra, Amit Kumar; Tripathi, Neha; Gupta, Ashish; Upadhyay, Deepak; Pandey, Neeraj Kumar",
        department:
          "2023 International Conference on Device Intelligence, Computing and Communication Technologies (DICCT)",
        year: 2023,
        amount: "978-1-6654-7491-7",
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Switching and Analog/RF performance improvement of Graded Channel Double Gate Junctionless FET: A Simulation Study",
        principalInvestigator:
          "Kumar, Shivam; Joshi, Rajendra; Joshi, Tripuresh; Semwal, Sunil",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "An Innovative Approach to Neonatal Intensive Unit Care System for New Born babies",
        principalInvestigator:
          "Tiwari, Rajinder; Raina, Gurpreet; Semwal, Sunil",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Artificial Intelligence Based Visually Impaired Assist System",
        principalInvestigator:
          "Shinghal, Deepti; Shinghal, Kshitij; Saxena, Shuchita; Saxena, Amit; Saxena, Nishant; Sharma, Amit",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 8,
        name: "Intelligent Control and Stability Assessment of Smart Grid Required for Electric Vehicles",
        principalInvestigator:
          "Shinghal, Deepti; Saxena, Amit; Saxena, Nishant; Shinghal, Kshitij; Misra, Rajul; Saxena, Shuchita",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 9,
        name: "Harmonics Mitigation Based on Fuzzy Logic Controller",
        principalInvestigator:
          "Chakravorty, Abhishek; Vidhyarthi, Vrij Mohan; Arya, Apoorv",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 10,
        name: "A Simulation Study of Si/SiGe Dual Insulator Double Gate Heterostructure Junctionless FET (DI-DG-HJL-FET) for RF Applications",
        principalInvestigator:
          "Sharma, Deepak Kumar; Joshi, Rajendra; Joshi, Tripuresh; Dhuliya, Priyanka",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 11,
        name: "Analyzing Consumer Behavior Predictions: A Review of Machine Learning Techniques",
        principalInvestigator:
          "Mathur, Nikhil; Kumar, Sachin; Joshi, Tripuresh; Dhuliya, Piyush",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 12,
        name: "Electric Vehicles (EV's): A brief review",
        principalInvestigator:
          "Dhuliya, Piyush; Kathait, Shailendra Singh; Semwal, Sunil; Joshi, Tripuresh; Pathela, Mukesh",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 13,
        name: "Design a Heat-Transfer Device That is More Effective for Better Solar Energy Resource and Utilization",
        principalInvestigator:
          "Michael, Aakash; Sutradhar, Bijoy; Michael, Ashish; Sharma, Devesh",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
      {
        id: 14,
        name: "Synthesis and mechanical characterization of natural fibre polymer matrix laminated hybrid composites reinforced with glass-fibre and flax-fibre synthesized by hand-lay-up techniques",
        principalInvestigator:
          "Kumar, Adarsh; Shah, Pankaj Kumar; Singh, Ritwik; Chand, Ayush; Yadav, Siddharth; Ram, SC",
        department:
          "2022 International Conference on Advances in Computing, Communication and Materials (ICACCM)",
        year: 2022,
        amount: "2642-7354",
        fundingAgency: "IEEE",
      },
    ],
  },
  {
    year: "2021-22",
    projects: [
      {
        id: 1,
        name: "Solar Based Electric Vehicle charging Station",
        principalInvestigator:
          "D Tirumala Tarun, Prasanth Bokka, G.G Raja Sekhar, Katuri Rayudu, Sandeep Khantwal, Vinay Negi",
        department:
          "2022 3rd International Conference for Emerging Technology (INCET)",
        year: 2022,
        amount: "978-1-7281-1793-5",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "Energy-Efficient Routing Protocol for Congestion Control in Wireless Sensor Network",
        principalInvestigator:
          "Bhumika Gupta, Kamal Kumar Gola, Narayan Jee, Pratibha Dimri",
        department:
          "2022 International Conference on Wireless Communications Signal Processing and Networking (WiSPNET)",
        year: 2022,
        amount: "1869-1951",
        fundingAgency: "IEEE",
      },
      {
        id: 3,
        name: "Design and Implementation of Fractional Order Controllers Using Nelder-Mead Algorithm",
        principalInvestigator:
          "Deeksha Naithani, M Chaturvedi, PK Juneja, Prabhat Kumar, Sheetal Kapoor",
        department:
          "2021 International Conference on Computational Performance Evaluation (ComPE)",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "IEEE",
      },
      {
        id: 4,
        name: "Web Crawler based Caching Technique for efficient Downloading",
        principalInvestigator: "Navdeep Bhatnagar, Suchi Johari",
        department:
          "2021 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "IEEE",
      },
      {
        id: 5,
        name: "Correlation Coefficient Model for Analyzing Effect of Temperature on COVID19 cases in India",
        principalInvestigator: "Navdeep Bhatnagar, Suchi Johari",
        department:
          "2022 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "IEEE",
      },
      {
        id: 6,
        name: "Audio-augmentation based Badminton System for Visually Impaired Person",
        principalInvestigator:
          "Sahabzada Betab Badar, Sachin Choudhary, Zahid Ansari, Sohavan Kumar, Deepak Kumar Sharma, Shashi Ranjan, Prabhanshu Kumar, Sushivam Singh",
        department:
          "2021 IEEE 8th Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON)",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "IEEE",
      },
      {
        id: 7,
        name: "Slope Instability Detection Using IoT with the Help of Ecological Indicators",
        principalInvestigator:
          "Sunil Semwal, Piyush Dhuliya, Vikalp Joshi, Diwaker Pant",
        department:
          "Sixth International Conference on Intelligent Computing and Applications",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "springer",
      },
      {
        id: 8,
        name: "Correlation Coefficient Model for Analyzing Effect of Temperature on COVID19 cases in India",
        principalInvestigator: "Bhatnagar, Navdeep; Johari, Suchi",
        department:
          "2021 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "IEEE Xplorer",
      },
      {
        id: 9,
        name: "Web Crawler based Caching Technique for efficient Downloading",
        principalInvestigator: "Bhatnagar, Navdeep; Johari, Suchi",
        department:
          "2021 Sixth International Conference on Image Information Processing (ICIIP)",
        year: 2021,
        amount: "", // No ISBN provided
        fundingAgency: "IEEE Xplorer",
      },
    ],
  },
  {
    year: "2020-21",
    projects: [
      {
        id: 1,
        name: "Audio-augmentation based Badminton System for Visually Impaired Person",
        principalInvestigator:
          "Sahabzada Betab Badar, Sachin Choudhary, Zahid Ansari, Sohavan Kumar, Deepak Kumar Sharma, Shashi Ranjan, Prabhanshu Kumar, Sushivam Singh",
        department:
          "2021 IEEE 8th Uttar Pradesh Section International Conference on Electrical, Electronics and Computer Engineering (UPCON)",
        year: 2021,
        amount: "2687-7759",
        fundingAgency: "IEEE",
      },
      {
        id: 2,
        name: "Advancements and Challenges: Antenna Miniaturization for IoT Applications",
        principalInvestigator: "Dr. Sandip Vijay",
        department: "Next-Generation Antennas:",
        year: 2021,
        amount: "9781119791867",
        fundingAgency: "Wiley-Scrivener imprint",
      },
      {
        id: 3,
        name: "Stable Optimized Link Heuristic Using Cross-Layiring for QoS of Secured HANETs",
        principalInvestigator: "Dr. Sandip Vijay",
        department: "Lecture Notes in Electrical Engineering:",
        year: 2021,
        amount: "978-981-15-5341-7",
        fundingAgency: "Springer",
      },
      {
        id: 4,
        name: "A Prejudice Faced by Indian Women in the Corporate World",
        principalInvestigator: "Navjyoti Singhal",
        department:
          "Commerce and Management-A New Perspective: Gender Discrimination",
        year: 2021,
        amount: "978-81-949439-9-0",
        fundingAgency: "Imperial Publications",
      },
      {
        id: 5,
        name: "Effect of Apple Cider Varities on Chemical & Sensory Prop. Of Cider",
        principalInvestigator: "Bhawana Gahtori",
        department: "NA",
        year: 2021,
        amount: "6203306541",
        fundingAgency: "LAP Lambert Academic Publishing",
      },
      {
        id: 6,
        name: "Proceedings of International Conference on Machine Intelligence and Data Science Applications:",
        principalInvestigator: "Suman Pant",
        department:
          "Web Crawlers for Ranking of Websites Based on Web Traffic and Page Views",
        year: 2021,
        amount: "978-981-33-4087-9",
        fundingAgency: "Springer",
      },
      {
        id: 7,
        name: "A Textbook of Dravya Engineering (Hydraulics)",
        principalInvestigator: "Ankit Jain",
        department: "NA",
        year: 2018,
        amount: "978-93-85933-58-5",
        fundingAgency: "Nano Edge Publication",
      },
    ],
  },
];

const TableComponent = () => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Title of the book/chapters published</th>
            <th>Name of the teacher</th>
            <th>Title of the proceedings of the department</th>
            <th>Year of publication</th>
            <th>ISBN/ISSN number of the proceeding</th>
            <th>Name of the publisher</th>
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
                  <td>{project.name}</td>
                  <td>{project.principalInvestigator}</td>
                  <td>{project.department}</td>
                  <td>{project.year}</td>
                  <td>{project.amount}</td>
                  <td>{project.fundingAgency}</td>
                </tr>
              ))}
            </React.Fragment>
          ))}
        </tbody>
      </table>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="px-12 cursor-pointer md:px-20 w-full text-center py-2 bg-white text-[20px] md:text-[28px] font-[MontserratMedium] text-[#3D001B] hover:bg-[#3D001B] hover:text-white">
          Book/ Book Chapter
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>Title of the book/chapters published</th>
              <th>Name of the teacher</th>
              <th>Title of the proceedings of the conference</th>
              <th>Year of publication</th>
              <th>ISBN/ISSN number of the proceeding</th>
              <th>Name of the publisher</th>
            </tr>
          </thead>
          <tbody>
            {tableDataBook.map((yearData, yearIndex) => (
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
                    <td>{project.name}</td>
                    <td>{project.principalInvestigator}</td>
                    <td>{project.department}</td>
                    <td>{project.year}</td>
                    <td>{project.amount}</td>
                    <td>{project.fundingAgency}</td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default TableComponent;
