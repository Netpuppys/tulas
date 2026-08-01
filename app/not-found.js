import Link from "next/link";
import MegaMenu from "@/component/Navbar/MegaMenu";
import NewNavbar from "@/component/Navbar/NewNavbar";
import NewFooter from "@/component/NewFooter";

export const metadata = {
  title: "Page Not Found | Tulas University, Dehradun",
  description:
    "The page you are looking for could not be found. Explore programmes, admissions and campus life at Tulas University, Dehradun.",
  robots: {
    index: false,
    follow: true,
  },
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses/" },
  { label: "Admission Procedure", href: "/admission-procedure/" },
  { label: "Placements", href: "/placements/career-innovation-centre/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact/" },
];

export default function NotFound() {
  return (
    <>
      <div className="hidden md:block">
        <MegaMenu />
      </div>

      <div className="block md:hidden">
        <NewNavbar fullBanner={true} />
      </div>

      <main className="w-full bg-white flex flex-col items-center justify-center px-4 py-20 md:py-28 text-center">
        <p className="text-[#f97316] text-6xl md:text-8xl font-bold leading-none">
          404
        </p>

        <h1 className="mt-6 text-2xl md:text-4xl text-[#263145] font-semibold">
          This page could not be found
        </h1>

        <p className="mt-4 max-w-xl text-sm md:text-base text-[#404040]">
          The page you are looking for may have been moved, renamed or is no
          longer available. Use the links below to continue browsing Tulas
          University.
        </p>

        <nav
          aria-label="Helpful links"
          className="mt-8 flex flex-wrap justify-center gap-3"
        >
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-[#f97316] px-5 py-2 text-sm text-[#f97316] transition-colors hover:bg-[#f97316] hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/apply-now/"
          className="mt-10 rounded-md bg-[#f97316] px-8 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
        >
          Apply Now
        </Link>
      </main>

      <NewFooter />
    </>
  );
}
