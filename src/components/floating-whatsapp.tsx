import { company } from "@/lib/company";
import { MessageCircle } from "lucide-react";

type FloatingWhatsAppProps = {
  whatsappUrl?: string;
};

export function FloatingWhatsApp({ whatsappUrl }: FloatingWhatsAppProps) {
  const href = whatsappUrl ?? company.whatsappUrl;
  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Slow pulse ring */}
      <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 heart-pulse-ring"></div>
      
      {/* The button */}
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-[#25D366]/30 transition-transform duration-300 hover:scale-110"
        aria-label="WhatsApp Al-Burhan"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </div>
  );
}
