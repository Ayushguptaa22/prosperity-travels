import React from "react";
import Navbar from "../components/navbar";
import Head from "next/head";
import Link from "next/link";
import Whywe from "../components/whywe";
import MidContent from "../components/midContent";
import AboutCards from "../components/aboutCards";
import Whatwedo from "../components/whatwedo";
import Careers from "../components/careers";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Prosperity Travels | Travel with Prosperity</title>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
        <Link
          href="https://fonts.googleapis.com/css2?family=Finlandica:wght@400;500&family=Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <MidContent />
      <Whywe />
      <Whatwedo />
      <AboutCards />
      <Careers />
    </div>
  );
}
