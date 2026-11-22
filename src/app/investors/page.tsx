"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

export default function InvestorsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="font-sans pb-24 md:pb-32 bg-background">
      {/* Page Header */}
      <header className="pt-8 pb-12 md:pt-12 md:pb-16 relative overflow-hidden text-center page-shell">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="eyebrow justify-center mb-6">
            INVESTOR BRIEF
          </motion.div>
          <motion.h1 variants={fadeUp} className="display-title text-5xl md:text-7xl lg:text-8xl mb-8">
            Corporate overview.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            This document is structured to meet the standard of review expected by financial institutions, investors, and strategic partners.
          </motion.p>
        </motion.div>
      </header>

      {/* Structured Details */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start"
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-6">COMPANY DETAILS</p>
            <h2 className="display-title text-4xl md:text-5xl">Registered and verifiable.</h2>
          </motion.div>
          
          <motion.div variants={fadeUp} className="modern-card p-10 bg-background text-foreground shadow-sm">
            <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Company Name</dt>
                <dd className="text-xl font-medium tracking-tight">Savvy Prime Ltd</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Registration</dt>
                <dd className="text-xl font-medium tracking-tight">CAC Registered</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Founder</dt>
                <dd className="text-xl font-medium tracking-tight">Abdulsalam Haruna</dd>
              </div>
              <div>
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Operating Bases</dt>
                <dd className="text-xl font-medium tracking-tight">Kaduna and Worldwide</dd>
              </div>
              <div className="sm:col-span-2 pt-8 border-t border-border">
                <dt className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">Active Lines</dt>
                <dd className="text-xl font-medium tracking-tight">Value-sourcing and resale (Vehicles, Fashion)</dd>
              </div>
            </dl>
          </motion.div>
        </motion.div>
      </section>

      {/* Strategic Vision for Partners */}
      <section className="py-24 bg-background">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="eyebrow mb-6">INVESTMENT THESIS</p>
            <h2 className="display-title text-4xl md:text-5xl lg:text-6xl max-w-3xl">Scalable asset identification.</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-24">
            <motion.div variants={fadeUp} className="text-lg font-medium leading-relaxed text-muted-foreground">
              <p className="mb-6">The company&apos;s core competence is identifying undervalued assets (through local purchase, import, and auction channels) and moving them to the right customer through organised, repeatable sales processes.</p>
              <p>Savvy Prime&apos;s long-term strategy is a phased expansion from its current two-line foundation into real estate, agriculture, manufacturing, and professional consulting services - sequencing growth so that each new sector is added only once the current base is stable and generating consistent, documented performance.</p>
            </motion.div>
            <motion.div variants={fadeUp}>
              <div className="modern-card p-8 border-l-4 border-l-foreground bg-muted/30">
                <p className="font-serif text-2xl font-medium leading-tight mb-6">
                  &quot;To become a trusted, multi-sector Nigerian company known for turning sharp sourcing instinct into premium outcomes. Expanding from Kaduna to worldwide into a nationally recognized brand.&quot;
                </p>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-muted-foreground">Vision Statement</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Contact for verification */}
      <section className="py-24 bg-foreground text-background">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="h-16 w-16 rounded-2xl bg-background text-foreground flex items-center justify-center mb-10">
            <Briefcase className="h-8 w-8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="display-title text-4xl md:text-5xl lg:text-6xl mb-8">
            Request documentation
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl font-medium leading-relaxed text-background/80 mb-12">
            Sections marked with placeholders indicate data to be completed by the company (financial figures, registration numbers, and personnel) before external circulation.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4">
            <a href="/contact" className="button-secondary border-background/20 text-background hover:bg-background hover:text-foreground">
              Contact the team
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
