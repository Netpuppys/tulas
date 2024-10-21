import Plagiarism from "../public/research/plagiarism-policy.pdf";
import Research_Remuneration_Form from "../public/research/Research_Remuneration_Form.pdf";
import NewResearchPolicy from "../public/research/NewResearchPolicy.pdf";
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
        title: "About",
        linkTo: "/about/",
      },
      {
        title: "Management Messages",
        linkTo: "/about/management-messages",
      },
      {
        title: "Approval",
        linkTo: "/about/approval/",
      },
      {
        title: "About Dehradun",
        linkTo: "/about-dehradun/",
      },
      {
        title: "Contact",
        linkTo: "/contact/",
      },
      {
        title: "Why Tula's",
        linkTo: "/about/why-tulas/",
      },
      {
        title: "Blog",
        linkTo: "/blog/",
      },
    ],
  },
  {
    title: "Programs",
    nestedLinks: [
      {
        title: "Department Of Engineering",
        superNestedLinks: [
          {
            title: "B.Tech",
            linkTo: "/btech/",
            thirdNestedLinks: [
              {
                title: "Civil Engineering",
                linkTo: "/courses/btech/civil-engineering/",
              },
              {
                title: "Computer Science & Engineering",
                linkTo: "/courses/btech/computer-science/",
              },
              {
                title: "Computer Science & Engineering (AI&ML)",
                linkTo:
                  "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning/",
              },
              {
                title: "Computer Science & Engineering (Cyber Security)",
                linkTo:
                  "/courses/btech/computer-science-engineering-cyber-security/",
              },
              {
                title: "Computer Science & Engineering( Data Science)",
                linkTo:
                  "/courses/btech/computer-science-engineering-data-science/",
              },
              {
                title: "Electronics & Communication Engineering",
                linkTo: "/courses/btech/electronics-and-communication-engg/",
              },
              {
                title: "Electrical & Electronics Engineering",
                linkTo: "/courses/btech/electrical-and-electronics-engg/",
              },
              {
                title: "Mechanical Engineering",
                linkTo: "/courses/btech/mechanical-engineering/",
              },
            ],
          },
          {
            title: "Diploma",
            thirdNestedLinks: [
              {
                title: "Diploma in Civil Engineering",
                linkTo: "/diploma-in-civil-engineering/",
              },
              {
                title: "Diploma in Mechanical Engineering",
                linkTo: "/diploma-mechanical-engineering/",
              },
              {
                title: "Diploma in Computer Science Engineering",
                linkTo: "/diploma-computer-science-engineering/",
              },
            ],
          },
          {
            title: "M.Tech",
            linkTo: "/mtech/",
          },
          {
            title: "Department of Applied Sciences and Engineering",
            linkTo: "/courses/applied-science/",
          },
        ],
      },
      {
        title: "Department of Agriculture",
        superNestedLinks: [
          {
            title: "B.Sc Agriculture",
            linkTo: "/b-sc-agriculture/",
          },
        ],
      },
      {
        title: "Department of Mass Communiations",
        superNestedLinks: [
          {
            title: "BAJMC",
            linkTo: "/courses/bjmc/",
          },
        ],
      },
      {
        title: "Graduate School of Business",
        superNestedLinks: [
          {
            title: "BBA",
            linkTo: "/courses/bba/",
          },
          {
            title: "MBA",
            linkTo: "/courses/mba/",
          },
          {
            title: "B.Com (Hons.)",
            linkTo: "/courses/bcom/",
          },
        ],
      },
      {
        title: "Department of Computer Applications",
        linkTo: "",
        superNestedLinks: [
          {
            title: "BCA",
            linkTo: "/courses/bca/",
          },
          {
            title: "MCA",
            linkTo: "/courses/mca/",
          },
        ],
      },
    ],
  },
  {
    title: "Infrastructure",
    linkTo: "/infrastructure/",
    nestedLinks: [
      {
        title: "Library",
        linkTo: "/infrastructure/library/",
      },
      {
        title: "Computer Center",
        linkTo: "/infrastructure/computer-center/",
      },
      {
        title: "Auditorium",
        linkTo: "/infrastructure/auditorium/",
      },
      {
        title: "Lecture Theatre",
        linkTo: "/infrastructure/lecture-theatre/",
      },
      {
        title: "Hostel & Mess Facilities",
        linkTo: "/infrastructure/hostel-and-mess/",
      },
      {
        title: "Other Facilities",
        linkTo: "/infrastructure/other-facilities/",
      },
      {
        title: "Sports",
        linkTo: "/sports/",
      },
      {
        title: "ICT Facilities",
        linkTo: "/ict-facilities/",
      },
      {
        title: "Institute Video",
        linkTo:
          "https://drive.google.com/file/d/1EBffP1S9nRRnIiGXD6awmc9POIkF5QH1/view",
      },
      {
        title: "ERP",
        superNestedLinks: [
          {
            title: "Teacher Login",
            linkTo: "https://teacher.camu.in/",
          },
          {
            title: "Student Login",
            linkTo: "https://student.camu.in/",
          },
        ],
      },
    ],
  },
  {
    title: "R&D (CIRE)",
    linkTo: "/research/",
    nestedLinks: [
      {
        title: "Research and Development (R&D) Cell",
        linkTo: "/research/research-and-development-rd-cell/",
        superNestedLinks: [
          // {
          //   title: "Funded Research Projects",
          //   linkTo: "/research/research-and-development-rd-cell/",
          // },
          {
            title: "Funded Projects and Grants",
            linkTo:
              "/research/research-and-development-rd-cell/funded-projects-and-grants/",
          },
          {
            title: "Journal Publications",
            linkTo:
              "/research/research-and-development-rd-cell/journal-publications/",
          },
          {
            title: "Conference Publications",
            linkTo:
              "/research/research-and-development-rd-cell/conference-publications/",
          },
          {
            title: "Conferences Organized",
            linkTo:
              "/research/research-and-development-rd-cell/conferences-organized/",
          },
          {
            title: "FDPs and Workshops",
            linkTo: "/research/fdps-workshops/",
          },
          {
            title: "Research Policy",
            linkTo: NewResearchPolicy,
          },
          {
            title: "Plagiarism Policy",
            linkTo: Plagiarism,
          },
          {
            title: "Research Remuneration",
            linkTo: Research_Remuneration_Form,
          },
        ],
      },
      {
        title: "Intellectual Property Rights",
        linkTo: "/research/intellectual-property-rights-ipr-cell/",
        superNestedLinks: [
          {
            title: "Patents",
            linkTo: "/research/intellectual-property-rights-ipr-cell/patent/",
          },
        ],
      },
      {
        title: "Entrepreneurship Development Cell",
        linkTo: "/research/entrepreneurship-development-cell/",
      },
      {
        title: "Web Development Cell",
        linkTo: "/research/web-development-cell/",
      },
      {
        title: "Institute Innovation Council",
        linkTo: "/research/institute-innovation-council-iic/",
        superNestedLinks: [
          {
            title: "IIC Events",
            linkTo: "/research/institute-innovation-council-iic/iic-events/",
          },
          {
            title: "IAAS Events",
            linkTo: "/research/institute-innovation-council-iic/iaas-events/",
          },
          {
            title: "IEEE SB Events",
            linkTo: "/research/institute-innovation-council-iic/ieee-sb-events/",
          },
        ],
      },
      {
        title: "Tula’s Technology and Incubator (TTBI)",
        linkTo: "https://www.tulasincubator.com/",
      },
    ],
  },
  {
    title: "Admissions",
    nestedLinks: [
      {
        title: "Admission Procedure",
        linkTo: "/admission-procedure/",
      },
      {
        title: "Bank Details",
        linkTo: "/bank-details/",
      },
      {
        title: "E-Prospectus",
        linkTo: "/download-e-prospectus/",
      },
      {
        title: "Pay Fee Online",
        linkTo: "/pay-fee-online/",
      },
    ],
  },
  {
    title: "Placements",
    nestedLinks: [
      {
        title: "Placements Activities",
        linkTo: "/placements/placement-activites/",
      },
      {
        title: "Corporate Relations",
        linkTo: "/placements/corporate-relations/",
      },
      {
        title: "Placement Registration",
        linkTo: "/placements/registration-placement/",
      },
      {
        title: "Ujwal Bhavishya",
        linkTo: "/ujjwal-bhavishya/",
      },
      {
        title: "Industries Tie-ups",
        linkTo: "/placements/industries-tie-up/",
      },
      {
        title: "Career Innovation Centre",
        linkTo: "/placements/career-innovation-centre/"
      }
    ],
  },
  {
    title: "Alumni",
    nestedLinks: [
      {
        title: "Alumni Login",
        linkTo: "https://alumni.tulas.edu.in/",
      },
      {
        title: "Alumni Testimonials",
        linkTo: "/alumni-testimonials/",
      },
      {
        title: "Degree Request Form",
        linkTo: "/degree-request-form/",
      },
    ],
  },
];
export default sitemap;
