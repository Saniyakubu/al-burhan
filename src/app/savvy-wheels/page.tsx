"use client";

import { motion } from "framer-motion";
import { CarFront, ShieldCheck, Target, TrendingUp } from "lucide-react";

export default function SavvyWheelsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="font-sans pb-24 md:pb-32 bg-background">
      {/* Page Header */}
      <header className="pt-8 pb-12 md:pt-12 md:pb-16 relative overflow-hidden text-center page-shell">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="eyebrow justify-center mb-6">
            SAVVY PRIME LTD
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="display-title text-5xl md:text-7xl lg:text-8xl mb-8"
          >
            Savvy Wheels.
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            Our dedicated car brand. We identify undervalued vehicle assets
            through local purchase, import, and auction channels.
          </motion.p>
        </motion.div>
      </header>

      {/* Sourcing Strategy */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="page-shell grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: "url('/vehicles-bg.jpg')" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl italic font-medium">
                  "Sharp sourcing instinct turned into premium outcomes."
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <p className="eyebrow mb-6">SOURCING</p>
            <h2 className="display-title text-4xl md:text-5xl mb-8">
              Three channel acquisition.
            </h2>
            <div className="flex flex-col gap-6 text-lg font-medium text-muted-foreground leading-relaxed">
              <p>
                Savvy Wheels operates on a robust three channel acquisition
                model to ensure a consistent supply of premium inventory: local
                purchase, import channels, and auction markets.
              </p>
              <p>
                We identify motivated sellers and undervalued assets directly
                within the Nigerian market for rapid turnaround, while
                simultaneously sourcing high-quality foreign-used vehicles to
                meet the demand for reliable, premium models.
              </p>
              <p>
                By leveraging both local and international auction environments,
                we secure inventory at the most competitive baseline prices
                possible, ensuring our end-customers always receive true value.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-foreground text-background">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={stagger}
          className="page-shell flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div
            variants={fadeUp}
            className="h-16 w-16 rounded-2xl bg-background text-foreground flex items-center justify-center mb-10"
          >
            <CarFront className="h-8 w-8" />
          </motion.div>
          <motion.h2
            variants={fadeUp}
            className="display-title text-4xl md:text-5xl lg:text-6xl mb-8"
          >
            The Resale Standard
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-xl font-medium leading-relaxed text-background/80 mb-12"
          >
            Every vehicle acquired by Savvy Prime is moved to the right customer
            through organised, repeatable sales processes. We do not just buy
            and sell; we apply our sourcing instinct to ensure the end customer
            receives an asset that represents true, dependable value.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4">
            <a
              href="/contact"
              className="button-secondary border-background/20 text-background hover:bg-background hover:text-foreground"
            >
              Request Inventory
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
