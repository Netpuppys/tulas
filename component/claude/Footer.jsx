import Link from "next/link";

const socialIcons = [
  { label: "Facebook", icon: "f" },
  { label: "LinkedIn", icon: "in" },
  { label: "YouTube", icon: "▶" },
  { label: "X", icon: "𝕏" },
  { label: "Instagram", icon: "◎" },
];

export default function Footer() {
  return (
    <footer className="w-full py-14 px-8" style={{ backgroundColor: "#fde8d8" }}>
      <div className="max-w-6xl mx-auto">

        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
          {/* Logo + Social */}
          <div className="flex flex-col items-start gap-6">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center text-4xl border-4 border-orange-200 mb-3">
                🎓
              </div>
              <div className="text-center">
                <div className="font-black text-2xl text-gray-900">TULAS</div>
                <div className="font-bold text-gray-700 text-sm">DEHRADUN</div>
                <div className="text-xs text-gray-500">Estd. 2006</div>
              </div>
            </div>
            <div className="flex gap-3">
              {socialIcons.map((s) => (
                <Link
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-700 font-bold text-sm hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                  {s.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Download Buttons */}
          <div className="flex flex-col gap-4">
            <Link href="#" className="border-2 border-orange-500 text-orange-500 font-black text-sm px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-colors tracking-wide">
              DOWNLOAD PROSPECTUS
            </Link>
            <Link href="#" className="border-2 border-orange-500 text-orange-500 font-black text-sm px-8 py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-colors tracking-wide">
              DOWNLOAD FEE STRUCTURE
            </Link>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          {/* Contact + Updates */}
          <div className="space-y-6">
            <div>
              <h4 className="font-black text-orange-500 text-base">Contact</h4>
              <p className="text-xs text-gray-600 mb-2">Tulas</p>
              <ul className="space-y-1.5">
                {["Email", "Call", "Landline", "Social Media"].map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-gray-700 text-sm flex items-center gap-1 hover:text-orange-500 transition-colors">
                      <span className="text-orange-500">▶</span> {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-orange-500 text-base">Updates</h4>
              <p className="text-xs text-gray-600 mb-2">Tulas</p>
              <ul className="space-y-1.5">
                {["News", "Blogs"].map((l) => (
                  <li key={l}>
                    <Link href="#" className="text-gray-700 text-sm flex items-center gap-1 hover:text-orange-500 transition-colors">
                      <span className="text-orange-500">▶</span> {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Accreditations */}
          <div>
            <h4 className="font-black text-orange-500 text-base">Accreditations</h4>
            <p className="text-xs text-gray-600 mb-2">Tulas</p>
            <ul className="space-y-1.5">
              {["AICTE", "AISHE", "UTU", "SDUU", "UBTER", "NIRF", "NAAC", "IQAC"].map((l) => (
                <li key={l}>
                  <Link href="#" className="text-gray-700 text-sm flex items-center gap-1 hover:text-orange-500 transition-colors">
                    <span className="text-orange-500">▶</span> {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Study at Tulas */}
          <div>
            <h4 className="font-black text-orange-500 text-base">Study at</h4>
            <p className="text-xs text-gray-600 mb-2">Tulas</p>
            <ul className="space-y-1.5">
              {["Programs", "Exam Details", "Code of Conduct", "Academic Calendar", "Handbook", "Holiday Calendar", "Internshala", "National Career Service", "National Scholarship Portal"].map((l) => (
                <li key={l}>
                  <Link href="#" className="text-gray-700 text-sm flex items-center gap-1 hover:text-orange-500 transition-colors">
                    <span className="text-orange-500">▶</span> {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Key Links */}
          <div>
            <h4 className="font-black text-orange-500 text-base">Other Key</h4>
            <p className="text-xs text-gray-600 mb-2">Links</p>
            <ul className="space-y-1.5">
              {["ICC", "Grievance", "Turnitin", "Anti Ragging", "Research Policy", "Plagiarism policy", "QuillBot Software", "Innovation & Startup policy", "Mandatory Disclosure"].map((l) => (
                <li key={l}>
                  <Link href="#" className="text-gray-700 text-sm flex items-center gap-1 hover:text-orange-500 transition-colors">
                    <span className="text-orange-500">▶</span> {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-orange-200 pt-6 text-center text-xs text-gray-600">
          Copyright © 2026 Tulas Institute, Dehradun | All Rights Reserved<br />
          Designed and Managed By{" "}
          <Link href="#" className="underline hover:text-orange-500">NetPuppys</Link>
        </div>
      </div>
    </footer>
  );
}
