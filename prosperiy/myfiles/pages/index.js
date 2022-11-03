import Navbar from "../components/navbar";
import Head from "next/head";
import Link from "next/link";
import MidContent from "../components/midContent";
import { findDOMNode } from "react-dom";
import AboutCards from "../components/aboutCards";
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
      <AboutCards />
    </div>
  );
}
