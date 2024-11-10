import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Purpose from "../components/purpose";
import Header from "../components/header";
import React from 'react';
import Background from "../components/background";

export default function Home() {
  return (
    <>
    <Background />
      <Header />
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 animate-fadeIn2" id="Home">
        <Hero />
        <Purpose />
        <About />
      </main></>
  );
}
