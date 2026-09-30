interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  text?: string;
}

export function SectionTitle({ eyebrow, title, text }: SectionTitleProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow && (
        <div className="text-sm font-black uppercase tracking-[0.2em] text-red-500">
          {eyebrow}
        </div>
      )}

      <h2 className="mt-3 text-4xl font-black uppercase tracking-tight text-white md:text-5xl">
        {title}
      </h2>

      {text && <p className="mt-5 text-lg leading-8 text-white/60">{text}</p>}
    </div>
  );
}