export default function ProjectCard({ title, desc, stack = [], live, repo, img }) {
  return (
    <article className="group bg-card/60 border border-white/5 rounded-xl p-4 hover:border-accent/40 transition">
      {img && (
        <img
          src={img}
          alt={title}
          className="aspect-video w-full object-cover rounded-md mb-3"
          loading="lazy"
        />
      )}

      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-slate-400 text-sm mb-3">{desc}</p>

      <ul className="flex flex-wrap gap-2 mb-4">
        {stack.map((s) => (
          <li key={s} className="text-xs text-slate-300 border border-white/10 px-2 py-1 rounded">
            {s}
          </li>
        ))}
      </ul>

      <div className="flex gap-2">
        {live && (
          <a
            className="px-3 py-2 text-sm rounded-md bg-accent/10 text-accent border border-accent/30 hover:shadow-glow"
            href={live}
            target="_blank"
            rel="noreferrer"
          >
            Live
          </a>
        )}
        {repo && (
          <a
            className="px-3 py-2 text-sm rounded-md border border-white/10 hover:border-white/30"
            href={repo}
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        )}
      </div>
    </article>
  );
}
