import { company } from "@/lib/company";
import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  whatsappUrl?: string;
};

export function FloatingWhatsApp({ whatsappUrl }: FloatingWhatsAppProps) {
  const href = whatsappUrl ?? company.whatsappUrl;

  return (
    <div
      className="fixed right-4 z-40 group transition-all duration-300 sm:right-6 md:right-8"
      style={{
        bottom: "calc(4.75rem + env(safe-area-inset-bottom, 0px))",
      }}
    >
      {/* Slow pulse ring */}
      <div
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 heart-pulse-ring pointer-events-none"
        aria-hidden="true"
      />

      {/* The button */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-all duration-200 active:scale-90 hover:scale-105"
        aria-label="WhatsApp Al-Burhan"
      >
        <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" />
      </a>
    </div>
  );
}
