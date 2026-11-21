import type { ReactNode } from "react";

type PageIntroProps = {
  eyebrow: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
};

export function PageIntro({ eyebrow, title, description, aside }: PageIntroProps) {
  return (
    <header className="grid gap-6 sm:gap-8 border-b border-border pb-8 sm:pb-12 md:grid-cols-[minmax(0,1.35fr)_minmax(15rem,0.65fr)] md:items-end md:pb-16">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="display-title mt-3.5 sm:mt-5 max-w-3xl text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-foreground">
          {title}
        </h1>
      </div>
      <div className="rounded-2xl sm:rounded-3xl border border-border bg-muted/60 p-4 sm:p-5 md:pb-3">
        <p className="max-w-md text-sm sm:text-base leading-relaxed text-foreground/85 md:text-lg">
          {description}
        </p>
        {aside ? <div className="mt-4 sm:mt-5">{aside}</div> : null}
      </div>
    </header>
  );
}
