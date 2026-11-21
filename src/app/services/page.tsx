import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleGauge, Dumbbell, Leaf } from "lucide-react";

const services = [
  {
    title: "Quantum Resonance Magnetic",
    tag: "Screening",
    desc: "Modern equipment-assisted screening to help us understand the health concerns you bring to us and recommend the next step with care.",
    icon: CircleGauge,
    image: "/al-burhan/product-herbal.jpg",
  },
  {
    title: "Gun massager therapy",
    tag: "Wellness therapy",
    desc: "Supportive massage focused on relaxation, muscle comfort and mobility as part of a considered wellness routine.",
    icon: Dumbbell,
    image: "/al-burhan/product-precious-detail.png",
  },
  {
    title: "Cupping therapy",
    tag: "Traditional therapy",
    desc: "A traditional wellness therapy delivered in a calm, clean environment by a team that takes your comfort seriously.",
    icon: Leaf,
    image: "/al-burhan/product-safety.jpg",
  },
  {
    title: "Herbal consultations",
    tag: "Natural remedies",
    desc: "A guided conversation about your goals, symptoms and suitable herbal products from the Al-Burhan range.",
    icon: Leaf,
    image: "/al-burhan/product-success.jpg",
  },
];

export default function ServicesPage() {
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
          const Icon = service.icon;
          return (
            <article
              key={service.title}
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
