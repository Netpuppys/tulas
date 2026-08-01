import { Inter } from "next/font/google";
import "./globals.css";
import { MobileProvider } from "@/component/IsMobileContext";
import Script from "next/script";
import { UtmProvider } from "@/component/utmParams";
import HideUniversity from "./HideUniversity";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://tulas.edu.in"),
  // Every page supplies its own title; this is the fallback only.
  title: {
    default:
      "Tulas University in Dehradun, Uttarakhand | Admission Open 2026",
    template: "%s",
  },
  description:
    "Tulas University, Dehradun is a UGC approved, NAAC A+ accredited university offering B.Tech, MBA, BBA, BCA, MCA, B.Pharm, LLB and B.Sc Agriculture programmes.",
  // Emitted once, from one place. Per-page metadata (for example the
  // thank-you pages) overrides this correctly.
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  // Default Open Graph values. Pages that set their own openGraph title /
  // description / url override these instead of duplicating them.
  openGraph: {
    siteName: "Tulas University",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://tulas-assets.s3.ap-south-1.amazonaws.com/BannerImage3.webp",
        width: 1200,
        height: 630,
        alt: "Tulas University, Dehradun",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@tulas_University",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&family=Dynalight&family=Oswald:wght@200..700&family=Reem+Kufi:wght@400..700&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap&family=Fasthand&display=swap"
          rel="stylesheet"
        ></link>
        {/*
          robots and og:* tags are no longer hardcoded here. They lived in this
          head block and were therefore emitted identically on every page,
          overriding per-page values. They now come from the `metadata` export
          above, which Next.js merges correctly with each page's own metadata.
        */}
        {/* Google Tag Manager */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtm.js?id=GTM-WX6R6WSL"
        />
        <Script
          id="gtag-1"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WX6R6WSL');
            `,
          }}
        />
        
        {/* Meta Pixel */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1001916883544560');
              fbq('track', 'PageView');
            `,
          }}
        />
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: "Tulas University",
              url: "https://tulas.edu.in/",
              logo: "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "0135-2699300",
                contactType: "customer service",
                areaServed: ["IN", "NP"],
                availableLanguage: ["en", "Hindi"],
              },
              sameAs: [
                "https://www.facebook.com/tulasUniversitydehradun/",
                "https://twitter.com/tulas_University",
                "https://www.instagram.com/tulasUniversitydehradun/",
                "https://www.youtube.com/@TulasUniversitydehradun",
                "https://www.linkedin.com/school/tula's-University/",
              ],
            }),
          }}
        />

        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "WebSite",
              name: "Tulas University",
              url: "https://tulas.edu.in/",
              // The previous SearchAction pointed at a malformed target URL
              // ("...{search_term_string}https://tulas.edu.in/apply-now/") and
              // the site has no on-site search endpoint, so it has been
              // removed rather than left as an invalid entity.
            }),
          }}
        />

        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Tulas University",
              image:
                "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png",
              "@id": "",
              url: "https://tulas.edu.in/",
              telephone: "0135-2699300",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Tulas University, Dhoolkot, Post Office: Selaqui, Chakrata Road",
                addressLocality: "Dehradun",
                postalCode: "248011",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/tulasUniversitydehradun/",
                "https://twitter.com/tulas_University",
                "https://www.instagram.com/tulasUniversitydehradun/",
                "https://www.youtube.com/@TulasUniversitydehradun",
                "https://www.linkedin.com/school/tula's-University/",
              ],
            }),
          }}
        />
        {/*
          The site-wide "BlogPosting" schema was removed. It declared every
          single page on the domain to be one blog article published on
          2023-11-15 and pointing at /blog/, which is invalid structured data
          and conflicts with the CollegeOrUniversity entity above. Article
          schema belongs on individual blog posts only.
        */}
      </head>
      <body className={`${inter.className} font-sans`}>

        <HideUniversity/>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WX6R6WSL"
            height="0"
            width="0"
            className="hidden opacity-0"
          ></iframe>
        </noscript>
        <noscript>
          <img
            height="1"
            width="1"
            className="hidden opacity-0"
            src="https://www.facebook.com/tr?id=1001916883544560&ev=PageView&noscript=1"
          />
        </noscript>

        <MobileProvider>
          <UtmProvider>{children}</UtmProvider>
        </MobileProvider>

          <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "pu9ur843jb");
            `,
          }}
        />
      </body>
    </html>
  );
}
