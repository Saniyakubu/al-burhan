import type { Metadata } from "next";
import { ProductGalleryClient } from "@/components/product-gallery-client";
import { getProducts, getProductCategories, getContacts } from "@/sanity/queries";

export const metadata: Metadata = {
  title: "Herbal Product Gallery | Al-Burhan",
  description:
    "Explore natural Islamic herbal medicines, therapeutic wellness teas, and clinical remedies from Al-Burhan Islamic Herbal Medicine Centre Ltd in Zaria, Kaduna State.",
};

export default async function ProductsPage() {
  const [products, categories, contacts] = await Promise.all([
    getProducts(),
    getProductCategories(),
    getContacts(),
  ]);

  return (
    <div className="pb-16 sm:pb-24">
      {/* Page Header */}
      <header className="page-shell pt-10 text-center sm:pt-16 md:pt-24">
        <div className="eyebrow">NATURAL HERBAL RANGE</div>
        <h1 className="display-title mx-auto mt-4 sm:mt-7 max-w-4xl text-3xl sm:text-5xl md:text-7xl lg:text-8xl">
          Herbal Product Gallery
        </h1>
        <p className="mx-auto mt-4 sm:mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg md:text-xl">
          Explore botanical remedies, wellness teas and restorative preparations
          crafted with faith, care, and quality. Tap any product photo to read
          full formulation details, dosage, and health benefits.
        </p>
      </header>

      {/* Main Interactive Gallery Section */}
      <section className="page-shell mt-10 sm:mt-16">
        <ProductGalleryClient
          initialProducts={products}
          categories={categories}
          phoneInternational={contacts.phoneInternational}
          whatsappUrl={contacts.whatsappUrl}
        />
      </section>
    </div>
  );
}
