"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company as fallbackCompany } from "@/lib/company";
import type { SiteProfile } from "@/lib/site-profile";

type ContactPageClientProps = {
  profile: SiteProfile;
};

export function ContactPageClient({ profile }: ContactPageClientProps) {
  const company = {
    name: profile.name ?? fallbackCompany.name,
    email: profile.email ?? fallbackCompany.email,
    office: profile.office ?? fallbackCompany.office,
    cities: profile.cities ?? fallbackCompany.cities,
    whatsapp: profile.whatsappUrl ?? fallbackCompany.whatsappUrl,
    tiktok: profile.tiktok ?? fallbackCompany.tiktok,
    instagram: profile.instagram ?? fallbackCompany.instagram,
    phone: profile.phone ?? fallbackCompany.phoneDisplay,
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="font-sans pb-24 md:pb-32 bg-background">
      <header className="pt-8 pb-12 md:pt-12 md:pb-16 relative overflow-hidden text-center page-shell">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="eyebrow justify-center mb-6">
            CONTACT
          </motion.div>
          <motion.h1 variants={fadeUp} className="display-title text-5xl md:text-7xl lg:text-8xl mb-8">
            {company.name}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Reach us by phone, email, WhatsApp, TikTok, Instagram, or visit the office in Kaduna.
          </motion.p>
        </motion.div>
      </header>

      <section className="py-12 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="page-shell grid gap-6 lg:grid-cols-3"
        >
          <motion.div variants={fadeUp} className="modern-card p-8 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-foreground text-background flex items-center justify-center mb-6">
                <Phone className="h-6 w-6" />
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground mb-6">Direct Lines</p>
              <div className="flex flex-col gap-5 text-base font-medium text-muted-foreground">
                <a href={`tel:${fallbackCompany.phoneInternational}`} className="flex items-center gap-4 transition-colors hover:text-foreground">
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center">
                    <Phone className="h-4 w-4" />
                  </div>
                  {company.phone}
                </a>
                <a href={`mailto:${company.email}`} className="flex items-center gap-4 transition-colors hover:text-foreground">
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="truncate">{company.email}</span>
                </a>
                <a href={company.whatsapp} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition-colors hover:text-foreground">
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center text-[#25D366]">
                    <MessageCircle className="h-4 w-4" />
                  </div>
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="modern-card p-8 flex flex-col justify-between">
            <div>
              <div className="h-12 w-12 rounded-xl bg-foreground text-background flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6" />
              </div>
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-foreground mb-4">Office Address</p>
              <p className="text-2xl font-medium leading-tight text-foreground mb-2">
                {company.office}
              </p>
              <p className="text-sm font-medium text-muted-foreground">
                {company.cities}
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">Social</p>
              <div className="flex flex-col gap-4 text-base font-medium text-muted-foreground">
                <a href={company.tiktok} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition-colors hover:text-foreground">
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center">
                    <span className="text-[0.65rem] font-bold">TT</span>
                  </div>
                  TikTok
                </a>
                <a href={company.instagram} target="_blank" rel="noreferrer" className="flex items-center gap-4 transition-colors hover:text-foreground">
                  <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center">
                    <span className="text-[0.65rem] font-bold">IG</span>
                  </div>
                  Instagram
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="modern-card overflow-hidden min-h-[420px]">
            <iframe
              title="Map showing New Millennium City, Kaduna"
              src={`https://www.google.com/maps?q=${encodeURIComponent(company.office)}&output=embed`}
              className="h-[420px] w-full bg-white"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
