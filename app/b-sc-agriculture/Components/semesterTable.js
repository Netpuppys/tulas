import React from "react";

const SemesterTable = () => {
  const semesterData = [
    {
      semester: "I SEMESTER",
      subjects: [
        { code: "BSAG 101", title: "Elementary Statistics" },
        { code: "BSAG 102", title: "Agriculture Meteorology" },
        { code: "BSAG 103", title: "Computer Application" },
        { code: "BSAG 104", title: "Sr & Spoken English" },
        {
          code: "BSAG 105",
          title: "Elementary Agriculture/Elementary Biology",
        },
        { code: "BSAG 106", title: "Mathematics" },
        { code: "BSAG 107", title: "Principles of Agronomy" },
        { code: "BSAG 108", title: "Rural Sociology & Educational Psychology" },
      ],
    },
    {
      semester: "II SEMESTER",
      subjects: [
        { code: "BSAG 201", title: "Fundamentals of Soil Science" },
        { code: "BSAG 202", title: "Fundamentals of Horticulture" },
        { code: "BSAG 203", title: "Elementary Plant Biochemistry" },
        { code: "BSAG 204", title: "Weed Management" },
        { code: "BSAG 205", title: "Elements of Genetics" },
        { code: "BSAG 206", title: "Introductory Entomology" },
        { code: "BSAG 207", title: "Introductory Plant Pathology" },
        { code: "BSAG 208", title: "Microbiology" },
      ],
    },
    {
      semester: "III SEMESTER",
      subjects: [
        { code: "BSAG 301", title: "Vegetable Production" },
        { code: "BSAG 302", title: "Irrigate Water Management" },
        {
          code: "BSAG 303",
          title: "Principles of Plant Breeding & Breeding of Field Crops",
        },
        { code: "BSAG 304", title: "Soil Fertility & Nutrient Management" },
        {
          code: "BSAG 305",
          title: "Agriculture Marketing & International Trade",
        },
        { code: "BSAG 306", title: "Field Crops I (Kharif)" },
        { code: "BSAG 307", title: "Crop Diseases & Pest Management" },
      ],
    },
    {
      semester: "IV SEMESTER",
      subjects: [
        { code: "BSAG 401", title: "Economic Entomology" },
        { code: "BSAG 402", title: "Introduction to Plant Biotechnology" },
        { code: "BSAG 403", title: "Field Crops II (Rabi)" },
        {
          code: "BSAG 404",
          title: "Agriculture Cooperation, Finance & Business Management",
        },
        { code: "BSAG 405", title: "Insect Pest & Pest Management" },
        { code: "BSAG 406", title: "Fruits & Plantation Crops" },
        { code: "BSAG 407", title: "Livestock Production" },
        { code: "BSAG 408", title: "Rainfed Agriculture" },
      ],
    },
    {
      semester: "V SEMESTER",
      subjects: [
        { code: "BSAG 501", title: "Poultry Management" },
        { code: "BSAG 502", title: "Mushroom Cultivation" },
        { code: "BSAG 503", title: "Elementary Crop Physiology" },
        { code: "BSAG 504", title: "Farm Machinery & Power" },
        {
          code: "BSAG 505",
          title: "Farm Management & Natural Resource Economics",
        },
        { code: "BSAG 506", title: "Fundamentals of Rural Development" },
        {
          code: "BSAG 507",
          title: "Post Harvest Management & Processing of Fruits & Vegetables",
        },
        { code: "BSAG 508", title: "Practical Crop Production-I" },
      ],
    },
    {
      semester: "VI SEMESTER",
      subjects: [
        { code: "BSAG 601", title: "Farming System & Sustainable Agriculture" },
        {
          code: "BSAG 602",
          title: "Conservation & Management of Soil & Water Resources",
        },
        { code: "BSAG 603", title: "Ornamental Horticulture" },
        { code: "BSAG 604", title: "Environment Science" },
        { code: "BSAG 605", title: "Silviculture & Agroforestry" },
        { code: "BSAG 606", title: "Seed Production & Processing Technology" },
        { code: "BSAG 607", title: "Practical Crop Production-II" },
      ],
    },
    {
      semester: "VII SEMESTER",
      subjects: [
        { code: "BSAG 701", title: "General Economics" },
        { code: "BSAG 702", title: "Breeding & Improvement of Farm Animals" },
        { code: "BSAG 703", title: "Principles of Animal Nutrition" },
        { code: "BSAG 704", title: "Element of Food Technology" },
        { code: "BSAG 705", title: "Human Food & Nutrition" },
        { code: "BSAG 706", title: "Soil Taxonomy, Survey & Remote Sensing" },
        {
          code: "BSAG 707",
          title: "Production Technology of Medicinal & Aromatic Plants",
        },
      ],
    },
    {
      semester: "VIII SEMESTER",
      subjects: [
        { code: "BSAG 801", title: "RAWE (Rural Agriculture Work Experience)" },
      ],
    },
  ];

  return (
    <div className="semester-container">
      {semesterData.map((semester, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center gap-6"
        >
          <h2 className="w-full py-2 text-[#3D0018] bg-white text-center rounded-full text-[30px]">
            {semester.semester}
          </h2>
          <table className="w-full mb-6">
            <thead>
              <tr>
                <th className="w-[30%]">SUBJECT CODE</th>
                <th className="w-[70%]">SUBJECT</th>
              </tr>
            </thead>
            <tbody>
              {semester.subjects.map((subject, idx) => (
                <tr key={idx}>
                  <td>{subject.code}</td>
                  <td>{subject.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
};

export default SemesterTable;
