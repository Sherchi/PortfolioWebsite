type ProjectPlaceholderProps = {
  title: string;
  category: string;
  colour: "cyan" | "violet" | "amber";
};

const colours = {
  cyan: "from-cyan-500/30 to-blue-950",
  violet: "from-violet-500/30 to-slate-950",
  amber: "from-amber-500/30 to-red-950",
};

export default function ProjectPlaceholder({
  title,
  category,
  colour,
}: ProjectPlaceholderProps) {
  return (
    <div
      className={`group relative aspect-[16/10] overflow-hidden rounded-xl border border-white/10 bg-gradient-to-br ${colours[colour]}`}
    >
      <div className="absolute inset-6 rounded-lg border border-white/10 bg-slate-950/50 p-5 shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:rotate-1">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </div>

        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
            {category}
          </p>
          <p className="mt-3 max-w-sm text-2xl font-semibold">{title}</p>
        </div>
      </div>

      <p className="absolute bottom-3 right-4 text-xs text-white/40">
        Image placeholder
      </p>
    </div>
  );
}