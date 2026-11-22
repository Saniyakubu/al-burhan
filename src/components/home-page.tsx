"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CircleGauge, Dumbbell, HeartPulse, Leaf, ScanLine, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import type { SanityCompanyProfile, SanityContacts, SanityService } from "@/sanity/queries";

const ICON_MAP = { ScanLine, HeartPulse, Sparkles, CircleGauge, Dumbbell, Leaf };

type HomePageProps = {
  services: SanityService[];
  profile: SanityCompanyProfile;
  contacts: SanityContacts;
};

export function HomePage({ services, profile, contacts }: HomePageProps) {
  const location = contacts.cities?.split(",")[0]?.trim();

  return (
    <div>
      <section className="soft-grid relative overflow-hidden py-10 sm:py-16 md:py-24">
        <div className="page-shell grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_.95fr]">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="eyebrow mb-4 sm:mb-6">ISLAMIC HERBAL MEDICINE CENTRE</div>
            <h1 className="display-title max-w-3xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
              Natural care for <span className="text-[#a67931]">whole-person</span> wellbeing.
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:mt-7 sm:text-lg md:text-xl">
              Herbal remedies, health screening, and wellness therapies in {location}.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:gap-4">
              <Link href="/products" className="button-primary w-full sm:w-auto">
                View products <ArrowUpRight size={17} />
              </Link>
              <Link href="/services" className="button-secondary w-full sm:w-auto">
                Explore services
              </Link>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              CAC registered company · RC 9695781
            </p>
            <div className="mt-8 flex gap-8 border-t border-border pt-5 text-sm text-muted-foreground sm:mt-12 sm:pt-6">
              {profile.yearEstablished && (
                <div>
                  <strong className="block text-xl font-semibold text-foreground sm:text-2xl">{profile.yearEstablished}</strong>
                  <span className="text-xs sm:text-sm">serving the community</span>
                </div>
              )}
              {location && (
                <div>
                  <strong className="block text-xl font-semibold text-foreground sm:text-2xl">{location}</strong>
                  <span className="text-xs sm:text-sm">Kaduna State</span>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] bg-[#2a1c10] p-3 shadow-xl sm:min-h-[420px] sm:rounded-[2.5rem] sm:p-4">
            <div className="relative h-full min-h-[296px] overflow-hidden rounded-[1.4rem] sm:min-h-[390px] sm:rounded-[2rem]">
              <Image src="/al-burhan/logo.png" alt="Al-Burhan Islamic Herbal Medicine Centre logo" fill className="object-contain p-6 sm:p-12" priority />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1f140b]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white sm:bottom-7 sm:left-7 sm:right-7">
                <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f2c96c]">Rooted in trust</p>
                <p className="mt-1 text-base font-medium sm:text-2xl">Quality. Integrity. Care.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-14 sm:py-20 md:py-28">
        <div className="page-shell">
          <div className="flex items-end justify-between gap-4">
            <div>
              <div className="eyebrow">OUR SERVICES</div>
              <h2 className="display-title mt-4 text-3xl sm:text-4xl md:text-6xl">Care that starts with listening.</h2>
            </div>
            <Link href="/services" className="hidden text-sm font-semibold underline underline-offset-8 sm:inline-flex">See all services</Link>
          </div>
          <div className="mt-8 grid gap-4 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
            {services.slice(0, 3).map((service, index) => {
              const Icon = ICON_MAP[service.icon as keyof typeof ICON_MAP] || Sparkles;
              return (
                <motion.article key={service.id} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="modern-card p-6 sm:p-8">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-foreground text-background"><Icon size={20} /></div>
                  <p className="text-xs font-bold uppercase tracking-[.18em] text-muted-foreground">{service.tag}</p>
                  <h3 className="mt-2 text-xl font-semibold tracking-tight">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.desc}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-foreground py-12 text-background sm:py-16">
        <div className="page-shell flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow border-background/20 bg-background/5 !text-background">HERBAL RANGE</p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">Find the right product for your needs.</h2>
          </div>
          <Link href="/products" className="button-secondary border-background/25 bg-background/10 !text-background hover:bg-background hover:text-foreground">
            View products <ArrowUpRight size={17} />
          </Link>
        </div>
      </section>
    </div>
  );
}
