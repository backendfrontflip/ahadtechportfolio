export default function Footer() {
  return (
    <footer className="border-t border-white/5">
      <div className="section py-8 text-sm text-slate-400 flex flex-col sm:flex-row gap-2 sm:items-center justify-between">
        <p>© {new Date().getFullYear()} Abdulahad Sheid. All rights reserved.</p>
        <p className="text-slate-500">
          Built with React + Tailwind • Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
