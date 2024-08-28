// pages/index.js
"use client";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Tula's Institute | Best Engineering College in Dehradun, Uttarakhand
        </title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, viewport-fit=cover"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
        <meta http-equiv="x-ua-compatible" content="IE=edge" />
      </Head>

      <iframe
        className="w-full h-screen"
        allow="autoplay"
        allowvr="true"
        allowFullScreen
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        oallowfullscreen="true"
        msallowfullscreen="true"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        src="https://s3.ap-south-1.amazonaws.com/tulas.edu/tour.html"
      />
    </>
  );
}
