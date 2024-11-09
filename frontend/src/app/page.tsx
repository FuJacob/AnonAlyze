import Navbar from "../components/navbar";
import Hero from "../components/hero";
import About from "../components/about";
import Submit from "../components/submit";
import Purpose from "../components/purpose";
export default function Home() {
  return (
    <>
      <Navbar />
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10 animate-fadeIn2" id="Home">
        <Hero />
        <Submit />
        <Purpose />
        <About />
      </main>
    </>
  );
}
