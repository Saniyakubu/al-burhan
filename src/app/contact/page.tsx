import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { getCompanyProfile } from "@/sanity/queries";

export default async function ContactPage() {
  const profile = await getCompanyProfile();

  const phoneDisplay = profile.phoneDisplay || profile.phone || "+234 806 709 3195";
  const phoneInternational = profile.phoneInternational || "+2348067093195";
  const email = profile.email || "madrasatuburhan20@gmail.com";
  const whatsappUrl =
    profile.whatsappUrl ||
    "https://wa.me/2347055435599?text=Hello%20Al-Burhan%2C%20I%27d%20like%20to%20book%20a%20consultation.";
  const office = profile.office || "Sabon Gari, Zaria, Kaduna State, Nigeria";
  const cities = profile.cities || "Kaduna State, Nigeria";
  const noteOnCare =
    profile.noteOnCare ||
    "Please share what you would like help with when you contact us. Our team can explain the screening or therapy options available and advise on the next step. This website is for information and appointment enquiries; it is not a substitute for emergency medical care.";

  return (
    <div className="pb-16 sm:pb-24">
      {/* Header */}
      <header className="page-shell pt-10 text-center sm:pt-16 md:pt-24">
        <div className="eyebrow">CONTACT AL-BURHAN</div>
        <h1 className="display-title mx-auto mt-4 sm:mt-7 max-w-4xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
          Let’s begin with a conversation.
        </h1>
        <p className="mx-auto mt-4 sm:mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Reach our team to ask about a consultation, therapy session or herbal
          product in {cities}.
        </p>
      </header>

      {/* Contact Cards Grid */}
      <section className="page-shell mt-10 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-2">
        {/* Direct Lines */}
        <div className="modern-card p-6 sm:p-9 md:p-12">
          <p className="eyebrow">DIRECT LINES</p>
          <div className="mt-6 sm:mt-9 grid gap-3 sm:gap-4 text-sm sm:text-base">
            {/* Phone */}
            <a
              href={`tel:${phoneInternational}`}
              className="flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-border/80 bg-surface/80 p-4 transition-all duration-150 active:scale-[0.98] active:bg-muted hover:border-foreground/20"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                <Phone size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Call Centre
                </strong>
                <span className="block truncate font-medium text-foreground text-sm sm:text-base">
                  {phoneDisplay}
                </span>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground shrink-0" />
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-[#25D366]/30 bg-[#25D366]/5 p-4 transition-all duration-150 active:scale-[0.98] active:bg-[#25D366]/10 hover:border-[#25D366]/50"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                <MessageCircle size={19} />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-xs uppercase tracking-wider text-[#1e8d47]">
                  WhatsApp Consultation
                </strong>
                <span className="block truncate font-medium text-foreground text-sm sm:text-base">
                  Chat directly with our specialists
                </span>
              </div>
              <ArrowUpRight size={16} className="text-[#25D366] shrink-0" />
            </a>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3.5 sm:gap-4 rounded-2xl border border-border/80 bg-surface/80 p-4 transition-all duration-150 active:scale-[0.98] active:bg-muted hover:border-foreground/20"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-muted text-foreground">
                <Mail size={18} />
              </div>
              <div className="min-w-0 flex-1">
                <strong className="block text-xs uppercase tracking-wider text-muted-foreground">
                  Email
                </strong>
                <span className="block truncate font-medium text-foreground text-xs sm:text-sm">
                  {email}
                </span>
              </div>
              <ArrowUpRight size={16} className="text-muted-foreground shrink-0" />
            </a>
          </div>
        </div>

        {/* Visit Us / Location */}
        <div className="modern-card bg-foreground p-6 text-background sm:p-9 md:p-12 flex flex-col justify-between">
          <div>
            <p className="eyebrow border-background/20 bg-background/5 text-background">
              VISIT US
            </p>
            <div className="mt-8 flex h-12 w-12 items-center justify-center rounded-2xl bg-background/10 text-[#f2c96c]">
              <MapPin size={24} />
            </div>
            <h2 className="mt-5 text-2xl sm:text-3xl font-medium tracking-tight">
              {office.split(",")[0]?.trim() || "Sabon Gari"}, {office.split(",")[1]?.trim() || "Zaria"}.
            </h2>
            <p className="mt-2.5 max-w-sm text-sm sm:text-base leading-relaxed text-background/70">
              {office}. Contact the team ahead of your visit so we can help you
              plan the right appointment.
            </p>
          </div>
          <div className="mt-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="button-secondary w-full sm:w-auto border-background/25 bg-background/10 text-background hover:bg-background hover:text-foreground active:scale-95"
            >
              Message on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Note on Care */}
      <section className="page-shell mt-14 sm:mt-20 border-t border-border pt-12 sm:pt-16">
        <div className="grid items-start gap-6 sm:gap-8 md:grid-cols-2">
          <div>
            <p className="eyebrow">A NOTE ON CARE</p>
            <h2 className="display-title mt-4 sm:mt-6 text-2xl sm:text-4xl md:text-5xl">
              Start with the right information.
            </h2>
          </div>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-muted-foreground">
            {noteOnCare}
          </p>
        </div>
      </section>
    </div>
  );
}
