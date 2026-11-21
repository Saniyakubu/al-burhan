import Link from "next/link";
import { company, mainNav } from "@/lib/company";
import type { SanityCompanyProfile } from "@/sanity/queries";

type FooterProps = {
  profile?: SanityCompanyProfile;
};

export function Footer({ profile }: FooterProps) {
  const office = profile?.office || company.office;
  const phoneDisplay = profile?.phoneDisplay || profile?.phone || company.phoneDisplay;
  const phoneInternational = profile?.phoneInternational || company.phoneInternational;
  const email = profile?.email || company.email;

  return (
    <footer className="border-t border-border bg-surface pb-28 sm:pb-24 lg:pb-12">
      <div className="page-shell grid gap-8 sm:gap-10 py-10 md:py-12 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-serif text-2xl font-semibold tracking-tight text-foreground">
            Al-Burhan
          </p>
          <p className="mt-2.5 max-w-sm text-xs sm:text-sm leading-relaxed text-muted-foreground">
            Natural care guided by the Qur’an and Sunnah, with thoughtful
            screening, herbal remedies and wellness therapies for the community.
          </p>
        </div>

        <div>
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[.18em] text-foreground">
            Explore
          </p>
          <div className="grid gap-2.5 text-sm text-muted-foreground">
            {mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="py-0.5 transition-colors hover:text-foreground active:text-[#a67931]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-3.5 text-xs font-bold uppercase tracking-[.18em] text-foreground">
            Visit & Connect
          </p>
          <div className="grid gap-2.5 text-sm text-muted-foreground">
            <span>{office}</span>
            <a
              href={`tel:${phoneInternational}`}
              className="py-0.5 transition-colors hover:text-foreground active:text-[#a67931]"
            >
              {phoneDisplay}
            </a>
            <a
              href={`mailto:${email}`}
              className="py-0.5 transition-colors hover:text-foreground active:text-[#a67931]"
            >
              {email}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="page-shell flex flex-col gap-2 py-5 text-xs text-muted-foreground md:flex-row md:justify-between">
          <span>
            © {new Date().getFullYear()} Al-Burhan Islamic Herbal Medicine Centre Ltd.
          </span>
          <span>Quality • Integrity • Community wellbeing</span>
        </div>
      </div>
    </footer>
  );
}
