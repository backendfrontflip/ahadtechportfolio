import useScrollReveal from "../hooks/useScrollReveal.js";
import Hero from "../components/Hero.jsx";

export default function Home() {
  useScrollReveal(".reveal");
  return (
    <>
      <Hero />
      <section className="section py-16 space-y-10">
        <div className="reveal">
          <h2 className="text-2xl font-semibold mb-3">Featured Projects</h2>
          <p className="text-slate-400 max-w-2xl">
            A few highlights demonstrating frontend & backend work, performance,
            accessibility, and clean UI engineering.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
          {/* Replace with your real projects */}
          {/* You can also pull from a JSON later */}
        </div>
      </section>
    </>
  );
}
