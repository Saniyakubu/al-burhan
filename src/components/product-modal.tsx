"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, CheckCircle2, MessageCircle, Phone, Clock, Sparkles } from "lucide-react";
import type { Product } from "@/sanity/queries";

type ProductModalProps = {
  product: Product | null;
  onClose: () => void;
  phoneInternational?: string;
};

export function ProductModal({ product, onClose, phoneInternational }: ProductModalProps) {
  // Prevent background scroll when modal is active
  useEffect(() => {
    if (!product) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  const whatsappHref = `https://wa.me/2347055435599?text=${encodeURIComponent(
    `Hello Al-Burhan, I am interested in inquiring about/ordering: ${product.name}. Please guide me on availability and dosage.`
  )}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/65 backdrop-blur-md p-0 sm:p-4 md:p-6 animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex flex-col w-full max-w-2xl max-h-[90vh] sm:max-h-[85vh] overflow-hidden rounded-t-[2rem] sm:rounded-[2rem] border border-border bg-surface shadow-2xl animate-in slide-in-from-bottom-6 sm:zoom-in-95 duration-200"
      >
        {/* Mobile drag handle indicator */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden">
          <div className="h-1.5 w-12 rounded-full bg-border" />
        </div>

        {/* Modal Header Bar with Close button */}
        <div className="flex items-center justify-between border-b border-border/80 px-5 sm:px-7 py-3.5 bg-surface/80 backdrop-blur-sm sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <span className="eyebrow">{product.category}</span>
            {product.badge && (
              <span className="rounded-full bg-[#b68a3c]/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-wider text-[#a67931]">
                {product.badge}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background text-foreground transition-all active:scale-90 hover:bg-muted"
          >
            <X size={18} />
          </button>
        </div>

        {/* Scrollable Modal Content */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-7 py-5 space-y-6">
          {/* Product Image & Main Title */}
          <div className="grid gap-5 sm:grid-cols-[1.1fr_1.3fr] items-center">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-muted/30 border border-border/70 shadow-inner">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(min-width: 640px) 300px, 100vw"
              />
            </div>
            <div>
              <h2
                id="modal-product-title"
                className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground"
              >
                {product.name}
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm font-medium text-[#a67931]">
                {product.tagline}
              </p>
              <div className="mt-4 rounded-xl border border-border/80 bg-background/60 p-3">
                <div className="flex items-start gap-2.5">
                  <Clock size={16} className="text-[#a67931] shrink-0 mt-0.5" />
                  <div>
                    <span className="block text-[0.7rem] font-bold uppercase tracking-wider text-muted-foreground">
                      Directions / Dosage
                    </span>
                    <span className="block text-xs sm:text-sm text-foreground/90 mt-0.5">
                      {product.dosage}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Detailed Description */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 flex items-center gap-1.5">
              <Sparkles size={14} className="text-[#a67931]" /> Full Description & Formulation Notes
            </h3>
            <p className="text-sm sm:text-base leading-relaxed text-foreground/85 whitespace-pre-line">
              {product.fullDesc}
            </p>
          </div>

          {/* Targeted Health Benefits */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Key Health Benefits
            </h3>
            <ul className="grid gap-2 sm:grid-cols-2">
              {product.benefits.map((benefit, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-background/50 p-2.5 text-xs sm:text-sm text-foreground/90"
                >
                  <CheckCircle2 size={16} className="text-[#25D366] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Ingredients */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
              Natural Botanical Actives
            </h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {product.ingredients.map((ing, i) => (
                <span
                  key={i}
                  className="rounded-lg border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-foreground/80"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Action Footer */}
        <div className="border-t border-border bg-surface px-5 sm:px-7 py-3.5 flex flex-col sm:flex-row gap-2.5 sm:items-center sm:justify-between sticky bottom-0">
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all active:scale-95 shadow-md hover:bg-[#20ba5a]"
          >
            <MessageCircle size={18} />
            Order / Enquire on WhatsApp
          </a>

          <a
            href={phoneInternational ? `tel:${phoneInternational}` : undefined}
            className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-xs sm:text-sm font-medium text-foreground transition-all active:scale-95 hover:bg-muted"
          >
            <Phone size={16} className="text-[#a67931]" />
            Call Specialist
          </a>
        </div>
      </div>
    </div>
  );
}
