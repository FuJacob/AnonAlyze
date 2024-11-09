import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
        <Hero />
        <About />
      </main>
    </>
  );
}
