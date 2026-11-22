import Link from "next/link";
import { ArrowUpRight, Eye, HeartHandshake } from "lucide-react";
import { getCompanyProfile } from "@/sanity/queries";

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
    </div>
  );
}
