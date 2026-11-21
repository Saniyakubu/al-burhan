import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <header className="grid gap-8 border-b border-border pb-12 md:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] md:items-end md:pb-16">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-5 max-w-3xl text-5xl text-foreground md:text-6xl lg:text-7xl">
          {title}
        </h1>
      </div>
      <div className="rounded-3xl border border-border bg-muted p-5 md:pb-1">
        <p className="max-w-md text-base leading-relaxed text-foreground/80 md:text-lg">{description}</p>
        {aside ? <div className="mt-5">{aside}</div> : null}
      </div>
    </header>
  );
}
