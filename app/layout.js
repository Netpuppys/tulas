import { Inter } from "next/font/google";
import "./globals.css";
import { MobileProvider } from "@/component/IsMobileContext";
import Script from "next/script";
import { UtmProvider } from "@/component/utmParams";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=BenchNine:wght@300;400;700&family=Dynalight&family=Oswald:wght@200..700&family=Reem+Kufi:wght@400..700&family=Zilla+Slab:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Fasthand&display=swap"
          rel="stylesheet"
        />

        {/* SEO Meta */}
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />

        {/* OG */}
        <meta property="og:title" content="Tula's Institute, Dehradun" />
        <meta
          property="og:description"
          content="Looking for the Top Engineering and Degree College in Dehradun(Uttarakhand)? Look No Further Than Tula's Institute. We Offer the Best Engineering Courses Across India. Visit Now!"
        />
        <meta
          property="og:image"
          content="https://tulas-assets.s3.ap-south-1.amazonaws.com/BannerImage3.webp"
        />
        <meta property="og:image:alt" content="Tula's Institute, Dehradun" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* ================= GOOGLE TAG MANAGER (SEO GUY) ================= */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MDRPG4GC');
            `,
          }}
        />

        {/* ================= MICROSOFT CLARITY (SEO GUY) ================= */}
        <Script
          id="clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;
                  t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];
                  y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "pu9ur843jb");
            `,
          }}
        />

        {/* ================= META PIXEL ================= */}
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

        {/* ================= SCHEMAS (UNCHANGED) ================= */}
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollegeOrUniversity",
              name: "Tula's Institute",
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
                "https://www.facebook.com/tulasinstitutedehradun/",
                "https://twitter.com/tulas_institute",
                "https://www.instagram.com/tulasinstitutedehradun/",
                "https://www.youtube.com/@TulasInstitutedehradun",
                "https://www.linkedin.com/school/tula's-institute/",
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
              name: "Tula's Institute",
              url: "https://tulas.edu.in/",
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://tulas.edu.in/{search_term_string}https://tulas.edu.in/apply-now/",
                "query-input": "required name=search_term_string",
              },
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
              name: "Tula's Institute",
              image:
                "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png",
              url: "https://tulas.edu.in/",
              telephone: "0135-2699300",
              address: {
                "@type": "PostalAddress",
                streetAddress:
                  "Tula's Institute, Dhoolkot, Post Office: Selaqui, Chakrata Road",
                addressLocality: "Dehradun",
                postalCode: "248011",
                addressCountry: "IN",
              },
              sameAs: [
                "https://www.facebook.com/tulasinstitutedehradun/",
                "https://twitter.com/tulas_institute",
                "https://www.instagram.com/tulasinstitutedehradun/",
                "https://www.youtube.com/@TulasInstitutedehradun",
                "https://www.linkedin.com/school/tula's-institute/",
              ],
            }),
          }}
        />

        <Script
          id="blogposting-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              mainEntityOfPage: {
                "@type": "WebPage",
                "@id": "https://tulas.edu.in/blog/",
              },
              headline:
                "Best Engineering & Degree College in Dehradun, Uttarakhand | Tula's Institute",
              description:
                "Stay Updated With the Latest Insights, News, and Academic Advancements at Tula's Institute.",
              image:
                "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png",
              author: {
                "@type": "Organization",
                name: "Tula's Institute",
                url: "https://tulas.edu.in/",
              },
              publisher: {
                "@type": "Organization",
                name: "Tula's Institute",
                logo: {
                  "@type": "ImageObject",
                  url: "https://tulas.edu.in/_next/static/media/TulasLogo.f88dd71b.png",
                },
              },
              datePublished: "2023-11-15",
              dateModified: "2023-11-16",
            }),
          }}
        />
      </head>

      <body className={inter.className}>
        {/* GTM noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MDRPG4GC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Meta Pixel noscript */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1001916883544560&ev=PageView&noscript=1"
          />
        </noscript>

        <MobileProvider>
          <UtmProvider>{children}</UtmProvider>
        </MobileProvider>
      </body>
    </html>
  );
}
