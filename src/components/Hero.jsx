import useScrollReveal from "../hooks/useScrollReveal";
import ahadpic from "../assets/ahadpic12.jpg";

export default function Hero() {
  useScrollReveal(".hero-reveal");
  return (
    <section className="section py-20 md:py-28">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="hero-reveal">
          <p className="text-accent font-semibold">Hello, I’m Abdulahad Sheid</p>
          <h1 className="mt-2 text-3xl md:text-5xl font-display font-extrabold leading-tight">
            Frontend & Backend Developer
          </h1>
          <p className="mt-4 text-slate-400 max-w-xl">
            I build fast, accessible, and delightful web experiences with React,
            Firebase, and modern tooling.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="/projects" className="px-4 py-2 rounded-md bg-accent/10 text-accent border border-accent/30 hover:shadow-glow">
              View Projects
            </a>
            <a href="/contact" className="px-4 py-2 rounded-md border border-white/10 hover:border-white/30">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-reveal">
          <div className="relative max-w-md mx-auto">
            <div className="absolute -inset-4 rounded-3xl bg-accent/10 blur-xl"></div>
            <img src={ahadpic} alt="Abdulahad" className="relative rounded-3xl border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
