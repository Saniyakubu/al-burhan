import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowUpRight, Eye, HeartHandshake } from "lucide-react";
import { getCompanyProfile } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "About Al-Burhan Islamic Herbal Medicine Centre",
  description:
    "Learn about Al-Burhan Islamic Herbal Medicine Centre, our faith-guided approach, mission, vision, and herbal wellness care in Zaria, Kaduna.",
  keywords: ["Al-Burhan", "Islamic herbal medicine", "herbal medicine Zaria", "herbal centre Kaduna"],
};

export default async function AboutPage() {
  const profile = await getCompanyProfile();

  return (
    <div className="pb-16 sm:pb-24">
      <header className="page-shell pt-10 text-center sm:pt-16 md:pt-24">
        <div className="eyebrow">OUR STORY</div>
        <h1 className="display-title mx-auto mt-4 max-w-5xl text-3xl sm:text-5xl md:text-7xl">
          Herbal care grounded in faith and community.
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {profile.aboutStory}
        </p>
      </header>

      <section className="page-shell mt-12 grid gap-5 md:grid-cols-2">
        <article className="modern-card p-6 md:p-14">
          <HeartHandshake className="mb-6 h-12 w-12 rounded-2xl bg-foreground p-3 text-background" />
          <p className="eyebrow">OUR MISSION</p>
          <p className="mt-5 text-lg font-medium leading-relaxed text-foreground/80">{profile.mission}</p>
        </article>
        <article className="modern-card p-6 md:p-14">
          <Eye className="mb-6 h-12 w-12 rounded-2xl bg-foreground p-3 text-background" />
          <p className="eyebrow">OUR VISION</p>
          <p className="mt-5 text-lg font-medium leading-relaxed text-foreground/80">{profile.vision}</p>
        </article>
      </section>

      <section className="page-shell mt-14 grid items-center gap-8 border-t border-border pt-12 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">HOW WE WORK</p>
          <h2 className="display-title mt-4 text-3xl md:text-6xl">{profile.howWeWorkTitle}</h2>
        </div>
        <div className="text-base leading-relaxed text-muted-foreground">
          <p>{profile.howWeWorkText}</p>
          <Link href="/contact" className="button-primary mt-7 inline-flex">Start a conversation <ArrowUpRight size={17} /></Link>
        </div>
      </section>

      <section className="page-shell mt-14 border-t border-border pt-12 sm:mt-20 sm:pt-16">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_.8fr] md:gap-14">
          <div>
            <p className="eyebrow">CAC REGISTERED</p>
            <h2 className="display-title mt-4 text-3xl md:text-5xl">
              A registered company you can trust.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Al-Burhan Islamic Herbal Medicine Centre Ltd is incorporated in
              Nigeria as a private company limited by shares and registered
              with the Corporate Affairs Commission (CAC).
            </p>
            <p className="mt-4 text-sm font-semibold text-foreground">
              Company registration number: 9695781
            </p>
          </div>
          <a
            href="/al-burhan/certificate-of-incorporation.png"
            target="_blank"
            rel="noreferrer"
            className="modern-card block overflow-hidden bg-white p-3 shadow-sm transition-shadow hover:shadow-xl"
            aria-label="View Al-Burhan certificate of incorporation"
          >
            <Image
              src="/al-burhan/certificate-of-incorporation.png"
              alt="Certificate of Incorporation for Al-Burhan Islamic Herbal Medicine Centre Ltd"
              width={1200}
              height={1600}
              className="h-auto w-full"
            />
            <span className="block px-2 pb-1 pt-3 text-center text-xs font-semibold text-muted-foreground">
              View certificate of incorporation
            </span>
          </a>
        </div>
      </section>
    </div>
  );
}
