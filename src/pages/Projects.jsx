import useScrollReveal from "../hooks/useScrollReveal.js";
import ProjectCard from "../components/ProjectCard.jsx";

const data = [
  {
    title: "Admin Dashboard (MUI + Firebase)",
    desc: "Role-based admin panel with Firestore data (payments, orders, teams), MUI tables & charts.",
    stack: ["React", "MUI", "Firebase", "Recharts"],
    live: "https://your-live-demo.com",
    repo: "https://github.com/backendfrontflip/admin-dashboard",
  },
  {
    title: "E‑commerce Frontend",
    desc: "Cart, wishlist, checkout flows with Firebase Auth and Firestore.",
    stack: ["React", "Tailwind", "Firebase"],
    live: "https://your-live-demo.com",
    repo: "https://github.com/backendfrontflip/ecommerce-frontend",
  },
];

export default function Projects() {
  useScrollReveal(".reveal");
  return (
    <section className="section py-16">
      <div className="mb-8 reveal">
        <h1 className="text-3xl font-semibold">Projects</h1>
        <p className="text-slate-400">Selected work that reflects quality and practicality.</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 reveal">
        {data.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
