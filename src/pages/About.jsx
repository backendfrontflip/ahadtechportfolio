import useScrollReveal from "../hooks/useScrollReveal";

export default function About() {
  useScrollReveal(".reveal");
  return (
    <section className="section py-16 space-y-6">
      <div className="reveal">
        <h1 className="text-3xl font-semibold">About</h1>
      </div>
      <p className="text-slate-300 max-w-3xl leading-7 reveal">
        I’m a developer based in Nigeria focused on building reliable products.
        I enjoy clean UI, solid architecture, and performant web apps.
        Current tools: React, Tailwind, Firebase, MUI, Vite.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 reveal">
        {["React", "TypeScript (optional)", "Tailwind", "MUI", "Firebase", "GitHub Actions", "Git"].map((s) => (
          <div key={s} className="bg-card/60 border border-white/5 rounded-lg p-4">{s}</div>
        ))}
      </div>
    </section>
  );
}
