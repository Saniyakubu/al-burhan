import Link from "next/link";
import { ArrowUpRight, Eye, HeartHandshake } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pb-16 sm:pb-24">
      {/* Header */}
      <header className="page-shell pt-10 text-center sm:pt-16 md:pt-24">
        <div className="eyebrow">OUR STORY</div>
        <h1 className="display-title mx-auto mt-4 sm:mt-7 max-w-5xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
          Herbal care grounded in faith and community.
        </h1>
        <p className="mx-auto mt-4 sm:mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Al-Burhan Islamic Herbal Medicine Centre Ltd was established to provide
          quality natural herbal solutions and contribute to the wellbeing of
          the community.
        </p>
      </header>

      {/* Mission & Vision */}
      <section className="page-shell mt-12 sm:mt-20 grid gap-5 sm:gap-6 md:grid-cols-2">
        <article className="modern-card p-6 sm:p-9 md:p-14">
          <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-foreground text-background">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <p className="eyebrow">OUR MISSION</p>
          <p className="mt-5 sm:mt-7 text-lg sm:text-2xl font-medium leading-relaxed text-foreground/80">
            To provide safe, effective herbal medicines made from natural herbs
            and plants, guided by the Qur’an and Sunnah of the Prophet Muhammad
            (S.A.W.), for the health and wellbeing of the community.
          </p>
        </article>

        <article className="modern-card p-6 sm:p-9 md:p-14">
          <div className="mb-6 sm:mb-8 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-foreground text-background">
            <Eye className="h-6 w-6" />
          </div>
          <p className="eyebrow">OUR VISION</p>
          <p className="mt-5 sm:mt-7 text-lg sm:text-2xl font-medium leading-relaxed text-foreground/80">
            To become a trusted herbal healthcare company known for quality,
            integrity and improving community health across Nigeria and beyond.
          </p>
        </article>
      </section>

      {/* How We Work */}
      <section className="page-shell mt-14 sm:mt-20 grid items-center gap-8 sm:gap-12 border-t border-border pt-12 sm:pt-20 md:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="eyebrow">HOW WE WORK</p>
          <h2 className="display-title mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl">
            Listen first. Screen carefully. Care naturally.
          </h2>
        </div>
        <div className="text-base sm:text-lg leading-relaxed text-muted-foreground">
          <p>
            Our team begins with a conversation and health screening using
            modern diagnostic equipment. We then discuss an appropriate care
            pathway and herbal remedies made from natural herbs and plants.
          </p>
          <p className="mt-4 sm:mt-6">
            Our product range includes The Safety, The Success, Precious, Your
            Happiness, My Dear, Joint Pain Relief and Spiritual Problems Cure.
          </p>
          <div className="mt-7 sm:mt-9">
            <Link
              href="/contact"
              className="button-primary w-full sm:w-auto shadow-md"
            >
              Start a conversation <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
