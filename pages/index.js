import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import HeroSection from "../components/Hero";
import Navbar from "../components/navbar";
import Projects from "../components/projects";
import Work from "../components/work";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Ogar | Software Engineer</title>
        <meta name="portfolio" content="portfolio by David Ogar" />
        <link rel="icon" href="" />
      </Head>

      <Navbar />
      <main className="w-full h-auto">
        <HeroSection />
        <About />
        <Work />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
