"use client";

export default function LandingInternshipSection() {
  return (
    <section className="bg-white pb-6 mt-5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center gap-10">

          <div className="w-full">
            {/* Heading */}
            <h2 className="text-center text-[clamp(36px,5vw,36px)] font-medium mb-10 leading-snug">
              <span className="text-orange-500 font-extrabold">Ranked Among</span>{" "}
              <br/>
              <span className="text-gray-800 font-extrabold">India’s Leading Institutes</span>
            </h2>

{/*
              Ranking band.

              Previously this rendered two next/image elements and hid one with
              `md:hidden` / `hidden md:block`. CSS `display:none` does not
              stop the browser downloading an image, so every visitor pulled
              both rankingmobile.png and rankingdesktop.png.

              A single picture element lets the browser fetch only the variant it
              will display. Layout is unchanged.
            */}
            <picture className="block w-full">
              <source
                media="(min-width: 768px)"
                srcSet="/landingPage/rankingdesktop.png"
              />
              <img
                src="/landingPage/rankingmobile.png"
                alt="Tula's Institute ranked among India's top private colleges"
                width={1000}
                height={3378}
                decoding="async"
                className="block mx-auto mb-6 w-[100%] h-auto rounded-xl md:w-full md:aspect-[21/9] md:object-cover md:rounded-2xl"
              />
            </picture>
          </div>

        </div>
      </div>
    </section>
  );
}