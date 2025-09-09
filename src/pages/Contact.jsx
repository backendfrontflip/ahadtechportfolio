import { useState } from "react";
import useScrollReveal from "../hooks/useScrollReveal";

export default function Contact() {
  useScrollReveal(".reveal");
  const [status, setStatus] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Sending…");
    // Formspree: replace with your endpoint
    const endpoint = "https://formspree.io/f/yourid";
    const form = new FormData(e.currentTarget);
    const res = await fetch(endpoint, { method: "POST", body: form, headers: { Accept: "application/json" }});
    setStatus(res.ok ? "Thanks! I’ll reply shortly." : "Something went wrong. Try again.");
    if (res.ok) e.currentTarget.reset();
  }

  return (
    <section className="section py-16">
      <div className="mb-8 reveal">
        <h1 className="text-3xl font-semibold">Contact</h1>
        <p className="text-slate-400">Let’s build something great.</p>
      </div>

      <form onSubmit={handleSubmit} className="reveal grid gap-4 max-w-xl">
        <input className="bg-card/60 border border-white/10 rounded-md px-3 py-2" name="name" placeholder="Your name" required />
        <input className="bg-card/60 border border-white/10 rounded-md px-3 py-2" type="email" name="email" placeholder="you@example.com" required />
        <textarea className="bg-card/60 border border-white/10 rounded-md px-3 py-2 h-32" name="message" placeholder="Your message" required></textarea>
        <button className="justify-self-start px-4 py-2 rounded-md bg-accent/10 text-accent border border-accent/30 hover:shadow-glow">
          Send
        </button>
        <p className="text-sm text-slate-400">{status}</p>
      </form>
    </section>
  );
}
