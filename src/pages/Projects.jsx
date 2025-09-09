import useScrollReveal from "../hooks/useScrollReveal.js";
import ProjectCard from "../components/ProjectCard.jsx";

const data = [
  {
    title: "Nova Saas",
    desc: "A modern SaaS platform dashboard designed for startups and businesses. Features include user management, analytics visualization, and a sleek UI built with React and TailwindCSS. Emphasizes scalability, clean layouts, and intuitive navigation.",
    stack: ["React", "TailwindCSS", "Framer Motion", "Chart.js"],
    live: "https://ahadtechprojects.github.io/novasaas/",
    repo: "https://github.com/ahadtechprojects/novasaas",
  },
  {
    title: "Shop-with-cochies – E-commerce Website",
    desc: "A full e-commerce solution with product listings, cart functionality, and secure checkout for a smooth shopping experience.",
    stack: ["React", "Tailwind", "Firebase", "Paystack"],
    live: "https://ahadtechprojects.github.io/shopwithcochies/#/shop",
    repo: "https://github.com/ahadtechprojects/shopwithcochies",
  },
  {
    title: "SkySwift – Flight Booking Website",
    desc: "A responsive flight booking platform where users can search, compare, and book flights seamlessly. Developed with React, it offers a smooth, traveler-friendly experience with a modern UI and fast navigation.",
    stack: ["React", "Tailwind", "Firebase", "React Router", "Framer Motion", "EmailJS", "Date-fns", "React Hot Toast", "Lucide React"],
    live: "https://ahadtechprojects.github.io/skywift/#/",
    repo: "https://github.com/ahadtechprojects/skywift",
  },
  {
    title: "MoneyMap – Fintech Platform",
    desc: "A personal finance app that enables users to create accounts, track expenses, monitor stocks, and analyze financial charts in real-time.",
    stack: ["React", "Tailwind", "Firebase", "Context API", "Chart.js"],
    live: "https://ahadtechprojects.github.io/moneymap/",
    repo: "https://github.com/ahadtechprojects/moneymap",
  },
  {
    title: "HirePro Agency Website",
    desc: "job-matching and recruitment platform connecting employers with job seekers. Includes listings, profiles, and application tracking.",
    stack: ["React", "Tailwind", "Firebase", "Framer Motion", "EmailJS", "React Router"],
    live: "https://github.com/ahadtechprojects/hireproagency",
    repo: "https://ahadtechprojects.github.io/hireproagency/",
  },
  {
    title: "Vault Wallet - Banking App",
    desc: "A sleek digital wallet app for managing balances, transaction history, and quick transfers, featuring light/dark mode and responsive UI.",
    stack: ["React", "Tailwind", "Firebase"],
    live: "https://your-live-demo.com",
    repo: "https://github.com/backendfrontflip/ecommerce-frontend",
  },
  {
    title: "LogiXpress – Shipping Company Website",
    desc: "A logistics company website with shipment tracking and booking features, offering a responsive and intuitive interface.",
    stack: ["React", "Tailwind", "Firebase"],
    live: "https://your-live-demo.com",
    repo: "https://github.com/backendfrontflip/ecommerce-frontend",
  },
  {
    title: "Resume Builder - Portfolio Website",
    desc: "A customizable tool for creating professional, ATS-friendly resumes with live preview, templates, and export options.",
    stack: ["React", "Tailwind", "Firebase", "React Router", "Framer Motion"],
    live: "https://github.com/ahadtechprojects/resumebuilder",
    repo: "https://ahadtechprojects.github.io/resumebuilder/",
  },
  {
    title: "Admin Dashboard - Material UI",
    desc: "Cart, wishlist, checkout flows with Firebase Auth and Firestore.",
    stack: ["React", "Tailwind", "Firebase", "Material UI", "Recharts", "React Router"],
    live: "https://your-live-demo.com",
    repo: "https://github.com/backendfrontflip/ecommerce-frontend",
  },
  {
    title: "Adventure Travel - Tourism Website",
    desc: "Cart, wishlist, checkout flows with Firebase Auth and Firestore.",
    stack: ["React", "Tailwind", "Firebase", "React Router", "Framer Motion", "React Render"],
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
