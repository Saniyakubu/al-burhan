"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Package, Sparkles, HeartHandshake, PhoneCall } from "lucide-react";

export function MobileBottomNav() {
  const pathname = usePathname();

  const tabs = [
    { href: "/", label: "Home", icon: Home },
    { href: "/products", label: "Products", icon: Package },
    { href: "/services", label: "Services", icon: Sparkles },
    { href: "/about", label: "Story", icon: HeartHandshake },
    { href: "/contact", label: "Contact", icon: PhoneCall },
  ];

  return (
    <nav
      aria-label="Mobile Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 lg:hidden border-t border-border/70 bg-surface/90 backdrop-blur-xl shadow-[0_-4px_20px_rgba(0,0,0,0.04)]"
      style={{
        paddingBottom: "max(env(safe-area-inset-bottom, 0px), 8px)",
      }}
    >
      <div className="mx-auto flex max-w-lg items-center justify-around px-1 py-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`relative flex flex-1 flex-col items-center justify-center py-1 text-center transition-all duration-150 active:scale-90 ${
                isActive
                  ? "text-[#a67931] font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {/* Active pill background indicator for native Android Material / iOS feel */}
              <div
                className={`flex h-8 w-11 sm:w-12 items-center justify-center rounded-full transition-colors duration-200 ${
                  isActive ? "bg-[#b68a3c]/15" : "bg-transparent"
                }`}
              >
                <Icon size={18} strokeWidth={isActive ? 2.3 : 1.9} />
              </div>
              <span className="mt-0.5 text-[0.65rem] sm:text-[0.68rem] tracking-tight whitespace-nowrap">
                {tab.label}
              </span>
              {isActive && (
                <span className="absolute -top-1 h-1 w-5 rounded-full bg-[#a67931]" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
