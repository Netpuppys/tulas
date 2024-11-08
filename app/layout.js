import { Inter } from "next/font/google";
import "./globals.css";
import { MobileProvider } from "@/component/IsMobileContext";

const inter = Inter({ subsets: ["latin"] });

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
        <meta
          name="robots"
          content="INDEX, FOLLOW, MAX-IMAGE-PREVIEW:LARGE, MAX-SNIPPET:-1, MAX-VIDEO-PREVIEW:-1"
        />
      </head>
      <body className={inter.className}>
        <MobileProvider>{children}</MobileProvider>
      </body>
    </html>
  );
}
