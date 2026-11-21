"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, HeartPulse, ScanLine, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const services = [
  {
    title: "Quantum Resonance Magnetic",
    text: "Modern diagnostic screening to help identify health concerns before choosing a care pathway.",
    icon: ScanLine,
  },
  {
    title: "Gun massager therapy",
    text: "Targeted massage support for tired muscles, mobility and everyday recovery.",
    icon: HeartPulse,
  },
  {
    title: "Cupping therapy",
    text: "A traditional wellness practice delivered with care, cleanliness and attention.",
    icon: Sparkles,
  },
];
export function HomePage() {
  return (
    <div>
      <section className="soft-grid relative overflow-hidden py-20 md:py-28">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="eyebrow mb-7">ISLAMIC HERBAL MEDICINE CENTRE</div>
            <h1 className="display-title max-w-3xl text-6xl md:text-8xl">
              Natural care for{" "}
              <span className="text-[#a67931]">whole-person</span> wellbeing.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Al-Burhan Islamic Herbal Medicine Centre Ltd combines herbal
              knowledge, modern screening equipment and compassionate wellness
              therapies for our community.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/contact" className="button-primary">
                Book a consultation <ArrowUpRight size={17} />
              </Link>
              <Link href="/services" className="button-secondary">
                Explore services
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-8 border-t border-border pt-6 text-sm text-muted-foreground">
              <span>
                <strong className="block text-2xl text-foreground">2015</strong>{" "}
                serving the community
              </span>
              <span>
                <strong className="block text-2xl text-foreground">
                  Zaria
                </strong>{" "}
                Kaduna State
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[520px] overflow-hidden rounded-[2.5rem] bg-[#2a1c10] p-4 shadow-2xl"
          >
            <div className="relative h-full min-h-[488px] overflow-hidden rounded-[2rem]">
              <Image
                src="/al-burhan/logo.png"
                alt="Al-Burhan Islamic Herbal Medicine Centre logo"
                fill
                className="object-contain p-8 md:p-16"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f140b]/45 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between text-white">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f2c96c]">
                    Rooted in trust
                  </p>
                  <p className="mt-2 text-2xl font-medium">
                    Quality. Integrity. Care.
                  </p>
                </div>
                <span className="rounded-full border border-white/30 px-3 py-1 text-xs">
                  Al-Burhan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <section className="border-y border-border bg-foreground py-20 text-background md:py-28">
        <div className="page-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow border-background/20 bg-background/5 text-background">
              WHAT WE OFFER
            </div>
            <h2 className="display-title mt-7 text-5xl md:text-6xl">
              Care with intention.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-xl leading-relaxed text-background/70 md:text-2xl">
              From natural herbal remedies to supportive therapies and health
              screening, our work is guided by faith, careful listening and a
              commitment to the wellbeing of every person who walks through our
              doors.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f2c96c]"
            >
              Learn about Al-Burhan <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">OUR SERVICES</div>
              <h2 className="display-title mt-6 text-5xl md:text-6xl">
                A considered approach to care.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold underline underline-offset-8"
            >
              See all services
            </Link>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={service.title}
                  className="modern-card p-8"
                >
                  <div className="mb-16 flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                    <Icon size={21} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-muted-foreground">
                    0{i + 1}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {service.text}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>
      <section className="bg-[#e8dfce] py-20 md:py-28">
        <div className="page-shell grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="eyebrow">FROM OUR HERBAL RANGE</div>
            <h2 className="display-title mt-7 max-w-2xl text-5xl md:text-7xl">
              Products made with purpose.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Explore selected Al-Burhan herbal products including Precious, The
              Safety and The Success. Ask our team about the right product for
              your needs.
            </p>
            <Link href="/contact" className="button-primary mt-9">
              Speak with our team <ArrowUpRight size={17} />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative aspect-[.85] overflow-hidden rounded-[2rem]">
              <Image
                src="/al-burhan/product-precious.png"
                alt="Al-Burhan Precious herbal tea"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative mt-12 aspect-[.85] overflow-hidden rounded-[2rem]">
              <Image
                src="/al-burhan/product-success.jpg"
                alt="Al-Burhan The Success herbal product"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
