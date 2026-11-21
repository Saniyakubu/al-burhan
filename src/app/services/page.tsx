import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CircleGauge,
  Dumbbell,
  Leaf,
  Sparkles,
  HeartPulse,
  ScanLine,
} from "lucide-react";
import { getServices } from "@/sanity/queries";

const ICON_MAP = {
  CircleGauge,
  Dumbbell,
  Leaf,
  Sparkles,
  HeartPulse,
  ScanLine,
};

export default async function ServicesPage() {
  const services = await getServices();

  return (
    <div className="pb-16 sm:pb-24">
      <header className="page-shell pt-10 sm:pt-16 md:pt-24">
        <div className="eyebrow">SERVICES & THERAPIES</div>
        <h1 className="display-title mt-4 sm:mt-7 max-w-4xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
          Thoughtful support for your wellbeing.
        </h1>
        <p className="mt-4 sm:mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Explore our screening, therapy and herbal consultation services. Every
          visit begins with listening and a clear conversation.
        </p>
      </header>

      <section className="page-shell mt-10 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2">
        {services.map((service) => {
          const Icon =
            ICON_MAP[service.icon as keyof typeof ICON_MAP] || Sparkles;

          return (
            <article
              key={service.id || service.title}
              className="modern-card grid overflow-hidden sm:grid-cols-[.85fr_1.15fr]"
            >
              <div className="relative min-h-[200px] sm:min-h-[240px] bg-muted/40">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow">{service.tag}</span>
                    <Icon size={19} className="text-[#a67931]" />
                  </div>
                  <h2 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h2>
                  <p className="mt-2.5 sm:mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">
                    {service.desc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-all hover:text-[#a67931] active:scale-95"
                  >
                    Book a visit <ArrowUpRight size={16} />
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
