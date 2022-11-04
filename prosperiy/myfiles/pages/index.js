import React from "react";
import Navbar from "../components/navbar";
import Head from "next/head";
import Link from "next/link";
import Whywe from "../components/whywe";
import MidContent from "../components/midContent";
import AboutCards from "../components/aboutCards";
import Whatwedo from "../components/whatwedo";
import Careers from "../components/careers";
import Footer from "../components/footer";
import Slider from "../components/Slider";
import { SliderData } from "../components/SliderData";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Prosperity Travels | Travel with Prosperity</title>
        <Link rel="preconnect" href="https://fonts.googleapis.com" />
        <Link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>
      <Navbar />
      <MidContent />
      <Slider slides={SliderData} />
      <Whywe />
      <Whatwedo />
      <AboutCards />
      <Slider />
      <Careers />
      <Footer />
    </div>
  );
}
