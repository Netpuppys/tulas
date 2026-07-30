// Files inside /public are already served from the site root in Next.js —
// no need (and no correct way) to `import` them. Reference the paths as plain strings.
const Plagiarism = "/research/plagiarism-policy.pdf";
const Research_Remuneration_Form = "/research/Research_Remuneration_Form.pdf";
const NewResearchPolicy = "/research/new-research-policy-tulas.pdf";
const Organogram = "/FooterPDf/Organogram.pdf"; // <-- verify this matches the real folder name/casing in /public

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
        title: "About Tulas",
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
        title: "Why Tulas",
        linkTo: "/about/why-tulas",
      },
      {
        title: "Blogs",
        linkTo: "/blog",
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
  title: "Programs",
  linkTo: "#",
  nestedLinks: [
    {
      title: "School Of Management & Commerce",
      linkTo: "#",
      superNestedLinks: [
        { title: "BBA", linkTo: "/courses/bba" },
        { title: "BBA Digital Marketing", linkTo: "/courses/bba/digital-marketing" },
        { title: "BBA Business Analytics", linkTo: "/courses/bba/business-analytics" },
        { title: "B.Com", linkTo: "/courses/bcom/" },
        { title: "B.Com (Hons.)", linkTo: "/courses/bcom-hons/" },
        {
          title: "MBA (All Specialisations)",
          linkTo: "/courses/mba",
          thirdNestedLinks: [
            { title: "Marketing", linkTo: "/courses/mba/marketing" },
            { title: "Human Resource Managment", linkTo: "/courses/mba/human-resource-managment" },
            { title: "International Business", linkTo: "/courses/mba/international-business" },
            { title: "Finance", linkTo: "/courses/mba/finance" },
            { title: "Agri-Business Management", linkTo: "/courses/mba/agri-business" },
            { title: "Digital Marketing", linkTo: "/courses/mba/digital-marketing" },
            { title: "Business Analytics", linkTo: "/courses/mba/business-analytics" },
          ],
        },
      ],
    },
    {
      title: "School Of Engineering",
      linkTo: "#",
      superNestedLinks: [
        {
          title: "B.Tech (All Specialisations)",
          linkTo: "/courses/btech/",
          thirdNestedLinks: [
            { title: "Civil Engineering (CE)", linkTo: "/courses/btech/civil-engineering/" },
            { title: "Mechanical Engineering (ME)", linkTo: "/courses/btech/mechanical-engineering/" },
            { title: "Electronics & Communication Engineering (ECE)", linkTo: "/courses/btech/electronics-and-communication-engg" },
            { title: "Electrical & Electronics Engineering (EEE)", linkTo: "/courses/btech/electrical-and-electronics-engg/" },
            { title: "Computer Science & Engineering (CSE)", linkTo: "/courses/btech/computer-science" },
            { title: "Computer Science & Engineering (AI&ML)", linkTo: "/courses/btech/computer-science-engineering-artifical-intelligence-and-machine-learning" },
            { title: "Computer Science & Engineering (Cyber Security)", linkTo: "/courses/btech/computer-science-engineering-cyber-security" },
            { title: "Computer Science & Engineering (Data Science)", linkTo: "/courses/btech/computer-science-engineering-data-science" },
            { title: "Computer Science & Engineering (Full Stack Development)", linkTo: "/courses/btech/computer-science" },
          ],
        },
        {
          title: "M.Tech (All Specialisations)",
          linkTo: "/courses/mtech/",
          thirdNestedLinks: [
            { title: "M.Tech Computer Science Engineering", linkTo: "/courses/mtech/computer-science" },
      { title: "M.Tech Thermal Engineering", linkTo: "/courses/mtech/thermal-engineering" },
      { title: "M.Tech Structural Engineering", linkTo: "/courses/mtech/structural-engineering" },
          ],
        },
        // { title: "M.Tech", linkTo: "/mtech" },
        {
          title: "Diploma",
          linkTo: "#",
          thirdNestedLinks: [
            { title: "Diploma in Civil Engineering", linkTo: "/courses/diploma-in-civil-engineering" },
            { title: "Diploma in Mechanical Engineering", linkTo: "/courses/diploma-in-mechanical-engineering" },
            { title: "Diploma in Computer Science Engineering", linkTo: "/courses/diploma-in-computer-science" },
          ],
        },
      ],
    },
    {
      title: "School Of Computer Applications",
      linkTo: "#",
      superNestedLinks: [
        { title: "BCA", linkTo: "/courses/bca/" },
        { title: "BCA Full Stack Software Development", linkTo: "/courses/bca/fullstack-devlopment" },
        { title: "BCA AI & ML", linkTo: "/courses/bca/artificial-intelligence-&-machine-learning" },
        { title: "BCA Cyber Security", linkTo: "/courses/bca/" },
        { title: "MCA", linkTo: "/courses/mca" },
        { title: "MCA Full Stack Software Development", linkTo: "/courses/mca/fullstack-development" },
        { title: "MCA AI & ML", linkTo: "/courses/mca/artificial-intelligence-&-machine-learning" },
      ],
    },
    {
      title: "School Of Mass Comm. & Journalism",
      linkTo: "#",
      superNestedLinks: [
        { title: "BAJMC", linkTo: "/courses/bjmc/" },
        { title: "BA (Hons.) JMC", linkTo: "/courses/bjmc/" },
      ],
    },
    {
      title: "School Of Pharmacy",
      linkTo: "#",
      superNestedLinks: [
        { title: "B.Pharma", linkTo: "/courses/bpharma/" },
        { title: "D.Pharma", linkTo: "/courses/dpharma" },
      ],
    },
    {
      title: "School Of Law",
      linkTo: "#",
      superNestedLinks: [
        { title: "LL.B", linkTo: "/courses/llb/" },
        { title: "B.A. LL.B", linkTo: "/courses/ba-llb/" },
        { title: "BBA LL.B", linkTo: "/courses/bba-llb/" },
      ],
    },
    {
      title: "School Of Agriculture",
      linkTo: "#",
      superNestedLinks: [
        { title: "B.Sc. (Hons.) Agriculture", linkTo: "/courses/bsc-agriculture/" },
        { title: "M.Sc. Agronomy", linkTo: "/courses/msc-agronomy" },
      ],
    },
  ],
},
  {
    title: "Admissions",
    linkTo: "#",
    nestedLinks: [
      { title: "Programs & Fee structure 2026",
        linkTo: "/tulas-programs"
      },
      // {
      //   title: "Admission Procedure- Eligibility",
      //   linkTo: "/admission-procedure",
      // },
      // {
      //   title: "Bank Details",
      //   linkTo: "/bank-details",
      // },
      {
        title: "Pay Fee Online",
        linkTo: "/pay-fee-online",
      },
       {
        title: "Brochure",
        linkTo: "/pay-fee-online",
      },
      // {
      //   title: "E-Prospectus",
      //   linkTo: "/download-e-prospectus",
      // },
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
              "/research/research-and-development-rd-cell/conference-organized",
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
            linkTo: "https://acrobat.adobe.com/id/urn:aaid:sc:AP:957d143a-c27f-4828-92d5-e9536adca5ce",
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
        title: "Tulas Technology and Incubator (TTBI)",
        linkTo: "https://ttbif.in/",
        target: "_blank",
      },
      {
        title: "AICTE IDEA LAB",
        linkTo: "/research/aicte-idea-lab",
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
        title: "Placement at Tulas",
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
    title: "Campus Life",
    linkTo: "#",
    nestedLinks: [
      {
        title: "Dehradun International Film Festival",
        linkTo: "/campus-life/celebrities",
      },
      {
        title: "Leadership Fests",
        linkTo: "/campus-life/leadership-fests",
      },
      {
        title: "Sanskriti- Cultural Fest",
        linkTo: "/campus-life/sanskriti",
      },
      {
        title: "NCC / NSS",
        linkTo: "/campus-life/ncc-nss",
      },
      // {
      //   title: "NSS",
      //   linkTo: "/campus-life/nss",
      // },
      {
        title: "Tulas Experiences",
        linkTo: "/campus-life/tulas-experiences/",
      },
      {
        title: "Student Clubs",
        linkTo: "/campus-life/student-clubs",
      },
      {
        title: "Freshers Orientation",
        linkTo: "/campus-life/freshers-orientation/",
      },
      {
        title: "Victree- Sports Clubs",
        linkTo: "/campus-life/victree",
      },
      {
        title: "Prominent Personalities",
        linkTo: "/campus-life/prominent-personalities",
      },
      {
        title: "Alumni Meet",
        linkTo: "/campus-life/alumni-meet",
      },
      { title: "Utkrisht", 
        linkTo: "/campus-life/technical-fests" },

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
  {
    title: "Blogs",
    linkTo: "/blog",
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
];
export default sitemap;