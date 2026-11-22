"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  Phone,
  MessageCircle,
  Home,
  Sparkles,
  HeartHandshake,
  MapPin,
  ChevronRight,
  Package,
} from "lucide-react";
import { useState, useEffect } from "react";
import { mainNav } from "@/lib/company";
import type { SanityCompanyProfile } from "@/sanity/queries";

type HeaderProps = {
  profile?: SanityCompanyProfile;
};

export function Header({ profile }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  const phoneInternational = profile?.phoneInternational;
  const phoneDisplay = profile?.phoneDisplay || profile?.phone;
  const whatsappUrl = profile?.whatsappUrl;
  const office = profile?.office;

  // Close menu on route change
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  // Prevent background scrolling when mobile menu drawer is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const navIcons = {
    "/": Home,
    "/products": Package,
    "/services": Sparkles,
    "/about": HeartHandshake,
    "/contact": MapPin,
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-xl transition-all"
        style={{
          paddingTop: "env(safe-area-inset-top, 0px)",
        }}
      >
        <div className="page-shell flex items-center justify-between gap-3 py-3 md:py-4">
          {/* Logo & Brand title */}
          <Link
            href="/"
            className="flex items-center gap-2.5 sm:gap-3 transition-opacity active:opacity-80"
            onClick={() => setOpen(false)}
          >
            <div className="relative h-10 w-10 sm:h-11 sm:w-11 shrink-0 overflow-hidden rounded-full border border-[#b68a3c]/40 bg-white shadow-sm">
              <Image
                src="/al-burhan/logo.png"
                alt="Al-Burhan logo"
                fill
                className="object-contain p-0.5"
                priority
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground md:text-base whitespace-nowrap">
                AL-BURHAN
              </span>
              <span className="text-[0.6rem] sm:text-xs font-medium text-muted-foreground tracking-normal truncate max-w-[130px] xs:max-w-[180px] sm:max-w-[240px] md:max-w-none">
                ISLAMIC HERBAL MEDICINE CENTRE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-5 xl:gap-8 text-sm font-medium lg:flex shrink-0"
            aria-label="Main"
          >
            {mainNav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors whitespace-nowrap hover:text-[#a67931] ${
                    isActive
                      ? "text-[#a67931] font-semibold underline underline-offset-8"
                      : "text-foreground/90"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Direct Call Button for Mobile (High intent) */}
            <a
              href={`tel:${phoneInternational}`}
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-transform active:scale-90 lg:hidden shrink-0"
              aria-label="Call Al-Burhan"
            >
              <Phone size={17} className="text-[#a67931]" />
            </a>

            {/* Book Consultation button on Desktop - guaranteed no text breaking */}
            <Link
              href="/contact"
              className="button-primary hidden lg:inline-flex whitespace-nowrap text-xs xl:text-sm px-4 py-2 xl:px-6 xl:py-2.5 shrink-0"
            >
              Book a consultation
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              className="inline-flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-border bg-surface text-foreground transition-transform active:scale-90 lg:hidden shrink-0"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      {/* Native Mobile Sheet Drawer */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex flex-col bg-background/95 backdrop-blur-2xl lg:hidden animate-in fade-in duration-200"
          style={{
            paddingTop: "env(safe-area-inset-top, 0px)",
            paddingBottom: "max(env(safe-area-inset-bottom, 0px), 16px)",
          }}
        >
          {/* Sheet Top Bar */}
          <div className="page-shell flex items-center justify-between border-b border-border/70 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="relative h-9 w-9 overflow-hidden rounded-full border border-[#b68a3c]/40 bg-white">
                <Image
                  src="/al-burhan/logo.png"
                  alt="Al-Burhan logo"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold tracking-tight">AL-BURHAN</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface transition-transform active:scale-90"
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          {/* Sheet Scrollable Content */}
          <div className="flex-1 overflow-y-auto px-4 py-6 page-shell">
            <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 px-2">
              Navigation
            </p>
            <nav className="flex flex-col gap-1.5" aria-label="Mobile Navigation">
              {mainNav.map((item) => {
                const IconComponent =
                  navIcons[item.href as keyof typeof navIcons] || Sparkles;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-medium transition-all active:scale-[0.98] ${
                      isActive
                        ? "bg-[#b68a3c]/15 text-[#a67931] font-semibold"
                        : "bg-surface/60 text-foreground hover:bg-muted"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                          isActive
                            ? "bg-[#a67931] text-white"
                            : "bg-muted text-foreground"
                        }`}
                      >
                        <IconComponent size={18} />
                      </div>
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight
                      size={18}
                      className={isActive ? "text-[#a67931]" : "text-muted-foreground/60"}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Quick Action Contact Cards */}
            <div className="mt-8">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3 px-2">
                Fast Contact
              </p>
              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${phoneInternational}`}
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 transition-transform active:scale-95"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground text-background">
                    <Phone size={17} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-foreground">
                      Call Center
                    </span>
                    <span className="block text-[0.7rem] text-muted-foreground truncate">
                      {phoneDisplay}
                    </span>
                  </div>
                </a>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-4 transition-transform active:scale-95"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle size={17} />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-foreground">
                      WhatsApp
                    </span>
                    <span className="block text-[0.7rem] text-muted-foreground">
                      Direct consultation
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Location & Hours Card */}
            <div className="mt-4 rounded-2xl border border-border bg-surface/70 p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    Centre Location
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {office}
                  </p>
                </div>
              </div>
            </div>

            {/* Primary Action Button */}
            <div className="mt-6">
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="button-primary w-full shadow-md"
              >
                Book a consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
