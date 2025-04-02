import Plagiarism from "../public/research/plagiarism-policy.pdf";
import Research_Remuneration_Form from "../public/research/Research_Remuneration_Form.pdf";
import NewResearchPolicy from "../public/research/NewResearchPolicy.pdf";
import Organogram from "../public/FooterPDf/Organogram.pdf";
const sitemap = [
  {
    title: "Home",
    linkTo: "/",
  },
  {
    title: "About Us",
    linkTo: "/about/",
    nestedLinks: [
      {
        title: "About Tula's",
        linkTo: "/about",
      },
      {
        title: "Vision & Mission",
        linkTo: "/vision-mission",
      },
      {
        title: "Organogram",
        linkTo: Organogram,
        target: "_blank",
      },
      {
        title: "Management Messages",
        linkTo: "/about/management-messages",
      },
      {
        title: "Approvals",
        linkTo: "/about/approval",
      },
      {
        title: "About Dehradun",
        linkTo: "/about-dehradun",
      },
      {
        title: "Contact Us",
        linkTo: "/contact",
      },
      {
        title: "Why Tula's",
        linkTo: "/about/why-tulas",
      },
      {
        title: "Blogs",
        linkTo: "/blog",
      },
    ],
  },
  {
    title: "Programs",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Department of Engineering",
        linkTo: "#",
        superNestedLinks: [
          {
            title: "Diploma",
            linkTo: "#",
            thirdNestedLinks: [
              {
                title: "Diploma in Civil Engineering",
                linkTo: "/diploma-in-civil-engineering",
              },
              {
                title: "Diploma in Mechanical Engineering",
                linkTo: "/diploma-mechanical-engineering",
              },
              {
                title: "Diploma in Computer Science Engineering",
                linkTo: "/diploma-computer-science-engineering",
              },
            ],
          },
          {
            title: "B.Tech",
            linkTo: "/btech",
            thirdNestedLinks: [
              {
                title: "Civil Engineering (CE)",
                linkTo: "/courses/btech/civil-engineering",
              },
              {
                title: "Computer Science & Engineering (CSE)",
                linkTo: "/courses/btech/computer-science",
              },
              {
                title: "Computer Science & Engineering (AI&ML)",
                linkTo:
                  "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning",
              },
              {
                title: "Computer Science & Engineering (Cyber Security)",
                linkTo:
                  "/courses/btech/computer-science-engineering-cyber-security",
              },
              {
                title: "Computer Science & Engineering( Data Science)",
                linkTo:
                  "/courses/btech/computer-science-engineering-data-science",
              },
              {
                title: "Electronics & Communication Engineering (ECE)",
                linkTo: "/courses/btech/electronics-and-communication-engg",
              },
              {
                title: "Electrical & Electronics Engineering (EEE)",
                linkTo: "/courses/btech/electrical-and-electronics-engg",
              },
              {
                title: "Mechanical Engineering (ME)",
                linkTo: "/courses/btech/mechanical-engineering",
              },
            ],
          },
          {
            title: "M.Tech",
            linkTo: "/mtech",
          },
        ],
      },
      {
        title: "Department of Applied Sciences and Humanities",
        linkTo: "/courses/applied-science",
      },
      {
        title: "Department of Agriculture",
        linkTo: "#",
        superNestedLinks: [
          {
            title: "B.Sc Agriculture",
            linkTo: "/b-sc-agriculture",
          },
        ],
      },
      {
        title: "Department of Mass Communiations",
        linkTo: "#",
        superNestedLinks: [
          {
            title: "BAJMC",
            linkTo: "/courses/bjmc",
          },
        ],
      },
      {
        title: "Graduate School of Business",
        linkTo: "#",
        superNestedLinks: [
          {
            title: "BBA",
            linkTo: "/courses/bba",
          },
          {
            title: "B.Com (Hons.)",
            linkTo: "/courses/bcom",
          },
          {
            title: "MBA",
            linkTo: "/courses/mba",
          },
        ],
      },
      {
        title: "Department of Computer Applications",
        linkTo: "#",
        superNestedLinks: [
          {
            title: "BCA",
            linkTo: "/courses/bca",
          },
          {
            title: "MCA",
            linkTo: "/courses/mca",
          },
        ],
      },
      {
        title: "Tula's Institue of Pharmacy",
        linkTo: "#",
        superNestedLinks: [
          {
            title: "B.Pharma",
            linkTo: "/courses/bpharma",
          },
          {
            title: "D.Pharma",
            linkTo: "/courses/dpharma",
          },
        ],
      },
    ],
  },
  {
    title: "Infrastructure",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Library",
        linkTo: "/infrastructure/library",
      },
      {
        title: "Computer Center",
        linkTo: "/infrastructure/computer-center",
      },
      {
        title: "Auditorium",
        linkTo: "/infrastructure/auditorium",
      },
      {
        title: "Lecture Theatre",
        linkTo: "/infrastructure/lecture-theatre",
      },
      {
        title: "Hostel & Mess Facilities",
        linkTo: "/infrastructure/hostel-and-mess",
      },
      {
        title: "Campus Facilities",
        linkTo: "/infrastructure/other-facilities",
      },
      {
        title: "Sports",
        linkTo: "/sports",
      },
      {
        title: "ICT Facilities",
        linkTo: "/ict-facilities",
      },
      {
        title: "Institute Video",
        linkTo:
          "https://drive.google.com/file/d/1EBffP1S9nRRnIiGXD6awmc9POIkF5QH1/view",
        target: "_blank",
      },
    ],
  },
  {
    title: "Campus Life",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Dehradun International Film Festival",
        linkTo: "/campus-life/celebrities",
      },
      {
        title: "Technical Fests",
        linkTo: "/campus-life/technical-fests",
      },
      {
        title: "Sanskriti- Cultural Fest",
        linkTo: "/campus-life/sanskriti",
      },
      {
        title: "NCC",
        linkTo: "/campus-life/ncc",
      },
      {
        title: "NSS",
        linkTo: "/campus-life/nss",
      },
      {
        title: "Vibgyor- Student Clubs",
        linkTo: "/campus-life/vibgyor",
      },
      {
        title: "Victree- Sports Clubs",
        linkTo: "/campus-life/victree",
      },
      {
        title: "Prominent Personalities",
        linkTo: "/campus-life/prominent-personalities",
      },
    ],
  },
  {
    title: "R&D (CIRE)",
    linkTo: "/research/",
    nestedLinks: [
      {
        title: "Research and Development (R&D) Cell",
        linkTo: "/research/research-and-development-rd-cell",
        superNestedLinks: [
          // {
          //   title: "Funded Research Projects",
          //   linkTo: "/research/research-and-development-rd-cell",
          // },
          {
            title: "Funded Projects and Grants",
            linkTo:
              "/research/research-and-development-rd-cell/funded-projects-and-grants",
          },
          {
            title: "Journal Publications",
            linkTo:
              "/research/research-and-development-rd-cell/journal-publications",
          },
          {
            title: "Conference Publications",
            linkTo:
              "/research/research-and-development-rd-cell/conference-publications",
          },
          {
            title: "Conferences Organized",
            linkTo:
              "/research/research-and-development-rd-cell/conferences-organized",
          },
          {
            title: "FDPs and Workshops",
            linkTo: "/research/fdps-workshops",
          },
          {
            title: "Research Policy",
            linkTo: NewResearchPolicy,
            target: "_blank",
          },
          {
            title: "Plagiarism Policy",
            linkTo: Plagiarism,
            target: "_blank",
          },
          {
            title: "Research Remuneration",
            linkTo: Research_Remuneration_Form,
            target: "_blank",
          },
        ],
      },
      {
        title: "Intellectual Property Rights",
        linkTo: "/research/intellectual-property-rights-ipr-cell",
        superNestedLinks: [
          {
            title: "Patents",
            linkTo: "/research/intellectual-property-rights-ipr-cell/patent",
          },
        ],
      },
      {
        title: "Entrepreneurship Development Cell",
        linkTo: "/research/entrepreneurship-development-cell",
      },
      {
        title: "Institute Innovation Council",
        linkTo: "/research/institute-innovation-council-iic",
        superNestedLinks: [
          {
            title: "IIC Events",
            linkTo: "/research/institute-innovation-council-iic/iic-events",
          },
          {
            title: "IAAS Student Branch",
            linkTo: "/research/iaas-student-branch",
          },
          {
            title: "IEEE Student Branch",
            linkTo: "/research/ieee-student-branch-stb17561",
          },
        ],
      },
      {
        title: "Tula’s Technology and Incubator (TTBI)",
        linkTo: "https://www.tulasincubator.com",
        target: "_blank",
      },
      {
        title: "AICTE IDEA LAB",
        linkTo: "/research/aicte-idea-lab",
      },
    ],
  },
  {
    title: "Admissions",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Admission Procedure- Eligibility",
        linkTo: "/admission-procedure",
      },
      {
        title: "Bank Details",
        linkTo: "/bank-details",
      },
      {
        title: "Pay Fee Online",
        linkTo: "/pay-fee-online",
      },
      {
        title: "E-Prospectus",
        linkTo: "/download-e-prospectus",
      },
    ],
  },
  {
    title: "Placements",
    linkTo: "#",
    nestedLinks: [
      // {
      //   title: "Placements Activities",
      //   linkTo: "/placements/placement-activites",
      // },
      // {
      //   title: "Corporate Relations",
      //   linkTo: "/placements/corporate-relations",
      // },
      // {
      //   title: "Placement Registration",
      //   linkTo: "/placements/registration-placement",
      // },
      // {
      //   title: "Ujwal Bhavishya",
      //   linkTo: "/ujjwal-bhavishya",
      // },
      // {
      //   title: "Industries Tie-ups",
      //   linkTo: "/placements/industries-tie-up",
      // },
      {
        title: "Placement at Tula’s",
        linkTo: "/placements/career-innovation-centre",
      },
      {
        title: "Technical Placement Record",
        linkTo: "/placements/technical-department",
      },
      {
        title: " Non-Technical Placement Record",
        linkTo: "/placements/non-technical-department",
      },
    ],
  },
  {
    title: "Alumni",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Alumni Login",
        linkTo: "https://alumni.tulas.edu.in",
        target: "_blank",
      },
      {
        title: "Alumni Testimonials",
        linkTo: "/alumni-testimonials",
      },
      {
        title: "Degree Request Form",
        linkTo: "/degree-request-form",
      },
    ],
  },
  {
    title: "ERP",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Teacher Login",
        linkTo: "https://teacher.camu.in",
        target: "_blank",
      },
      {
        title: "Student Login",
        linkTo: "https://student.camu.in",
        target: "_blank",
      },
    ],
  },
];
export default sitemap;
