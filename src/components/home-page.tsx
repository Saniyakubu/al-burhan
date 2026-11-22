"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  HeartPulse,
  ScanLine,
  Sparkles,
  CircleGauge,
  Dumbbell,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";
import type { SanityCompanyProfile, SanityContacts, SanityService } from "@/sanity/queries";

const ICON_MAP = {
  ScanLine,
  HeartPulse,
  Sparkles,
  CircleGauge,
  Dumbbell,
  Leaf,
};

type HomePageProps = {
  services: SanityService[];
  profile: SanityCompanyProfile;
  contacts: SanityContacts;
};

export function HomePage({
  services: initialServices,
  profile,
  contacts,
}: HomePageProps) {
  const displayServices = initialServices.slice(0, 3).map((s) => ({
    title: s.title,
    text: s.desc,
    icon: ICON_MAP[s.icon as keyof typeof ICON_MAP] || Sparkles,
  }));

  const yearEstablished = profile.yearEstablished;
  const cities = contacts.cities;
  return (
    <div>
      {/* Hero Section */}
      <section className="soft-grid relative overflow-hidden py-10 sm:py-16 md:py-24">
        <div className="page-shell grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="eyebrow mb-4 sm:mb-6">
              ISLAMIC HERBAL MEDICINE CENTRE
            </div>
            <h1 className="display-title max-w-3xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
              Natural care for{" "}
              <span className="text-[#a67931]">whole person</span> wellbeing.
            </h1>
            <p className="mt-4 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground md:text-xl">
              Al-Burhan Islamic Herbal Medicine Centre Ltd combines herbal
              knowledge, modern screening equipment and compassionate wellness
              therapies for our community.
            </p>
            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link href="/contact" className="button-primary w-full sm:w-auto">
                Book a consultation <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/services"
                className="button-secondary w-full sm:w-auto"
              >
                Explore services
              </Link>
            </div>
            <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-8 border-t border-border pt-5 sm:pt-6 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-border/70 bg-surface/60 p-3.5 sm:border-0 sm:bg-transparent sm:p-0">
                <strong className="block text-xl sm:text-2xl font-semibold text-foreground">
                  {yearEstablished}
                </strong>
                <span className="text-xs sm:text-sm">
                  serving the community
                </span>
              </div>
              <div className="rounded-2xl border border-border/70 bg-surface/60 p-3.5 sm:border-0 sm:bg-transparent sm:p-0">
                <strong className="block text-xl sm:text-2xl font-semibold text-foreground">
                  {cities?.split(",")[0]?.trim()}
                </strong>
                <span className="text-xs sm:text-sm">
                  {cities?.split(",").slice(1).join(",").trim()}
                </span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-[320px] sm:min-h-[420px] md:min-h-[500px] overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem] bg-[#2a1c10] p-3 sm:p-4 shadow-xl"
          >
            <div className="relative h-full min-h-[296px] sm:min-h-[390px] md:min-h-[468px] overflow-hidden rounded-[1.4rem] sm:rounded-[2rem]">
              <Image
                src="/al-burhan/logo.png"
                alt="Al-Burhan Islamic Herbal Medicine Centre logo"
                fill
                className="object-contain p-6 sm:p-12 md:p-16"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f140b]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-7 sm:left-7 sm:right-7 flex items-end justify-between text-white">
                <div>
                  <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[.2em] text-[#f2c96c]">
                    Rooted in trust
                  </p>
                  <p className="mt-1 text-base sm:text-2xl font-medium">
                    Quality. Integrity. Care.
                  </p>
                </div>
                <span className="rounded-full border border-white/30 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.65rem] sm:text-xs">
                  Al-Burhan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="border-y border-border bg-foreground py-14 sm:py-20 md:py-28 text-background">
        <div className="page-shell grid gap-8 sm:gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow border-background/20 bg-background/5 text-background">
              WHAT WE OFFER
            </div>
            <h2 className="display-title mt-4 sm:mt-7 text-3xl sm:text-4xl md:text-6xl">
              Care with intention.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base sm:text-xl leading-relaxed text-background/75 md:text-2xl">
              From natural herbal remedies to supportive therapies and health
              screening, our work is guided by faith, careful listening and a
              commitment to the wellbeing of every person who walks through our
              doors.
            </p>
            <Link
              href="/about"
              className="mt-6 sm:mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#f2c96c] transition-opacity active:opacity-75"
            >
              Learn about Al-Burhan <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 sm:py-20 md:py-28">
        <div className="page-shell">
          <div className="flex flex-col justify-between gap-4 sm:gap-6 md:flex-row md:items-end">
            <div>
              <div className="eyebrow">OUR SERVICES</div>
              <h2 className="display-title mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl">
                A considered approach to care.
              </h2>
            </div>
            <Link
              href="/services"
              className="text-sm font-semibold underline underline-offset-8 transition-opacity active:opacity-75"
            >
              See all services
            </Link>
          </div>
          <div className="mt-8 sm:mt-12 grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayServices.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.article
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={service.title}
                  className="modern-card p-6 sm:p-8 flex flex-col justify-between"
                >
                  <div>
                    <div className="mb-6 sm:mb-12 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl bg-foreground text-background">
                      <Icon size={20} />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[.18em] text-muted-foreground">
                      0{i + 1}
                    </p>
                    <h3 className="mt-2.5 sm:mt-3 text-xl sm:text-2xl font-semibold tracking-tight">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {service.text}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Herbal Range Section */}
      <section className="bg-[#e8dfce] py-14 sm:py-20 md:py-28">
        <div className="page-shell grid items-center gap-8 sm:gap-10 lg:grid-cols-[1.1fr_.9fr]">
          <div>
            <div className="eyebrow">FROM OUR HERBAL RANGE</div>
            <h2 className="display-title mt-4 sm:mt-7 max-w-2xl text-3xl sm:text-5xl md:text-7xl">
              Products made with purpose.
            </h2>
            <p className="mt-4 sm:mt-7 max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
              Explore selected Al-Burhan herbal products including Precious, The
              Safety and The Success. Ask our team about the right product for
              your needs.
            </p>
            <div className="mt-6 sm:mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                href="/products"
                className="button-primary w-full sm:w-auto shadow-md"
              >
                View product gallery <ArrowUpRight size={17} />
              </Link>
              <Link
                href="/contact"
                className="button-secondary w-full sm:w-auto"
              >
                Speak with our team
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            <Link
              href="/products"
              className="group relative aspect-[.85] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-black/5 shadow-sm block"
            >
              <Image
                src="/al-burhan/product-precious.png"
                alt="Al-Burhan Precious herbal tea"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                  View in Gallery
                </span>
              </div>
            </Link>
            <Link
              href="/products"
              className="group relative mt-5 sm:mt-12 aspect-[.85] overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] border border-black/5 shadow-sm block"
            >
              <Image
                src="/al-burhan/product-success.jpg"
                alt="Al-Burhan The Success herbal product"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="rounded-full bg-surface/90 px-3 py-1 text-xs font-semibold text-foreground shadow-sm">
                  View in Gallery
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
