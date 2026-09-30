import { Button } from "./Button";

interface EmptyStateProps {
  title: string;
  text: string;
  buttonText?: string;
  buttonTo?: string;
}

export function EmptyState({
  title,
  text,
  buttonText = "В каталог",
  buttonTo = "/catalog",
}: EmptyStateProps) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-8">
      <h2 className="text-3xl font-black uppercase text-white">{title}</h2>
      <p className="mt-4 max-w-xl text-white/60">{text}</p>

      <Button to={buttonTo} className="mt-7">
        {buttonText}
      </Button>
    </div>
  );
}