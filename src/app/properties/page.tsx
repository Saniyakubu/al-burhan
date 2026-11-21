"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck, Target, TrendingUp } from "lucide-react";

export default function PropertiesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
  };

  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="font-sans pb-24 md:pb-32 bg-background">
      {/* Page Header */}
      <header className="pt-8 pb-12 md:pt-12 md:pb-16 relative overflow-hidden text-center page-shell">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl mx-auto">
          <motion.div variants={fadeUp} className="eyebrow justify-center mb-6">
            SAVVY PRIME LTD
          </motion.div>
          <motion.h1 variants={fadeUp} className="display-title text-5xl md:text-7xl lg:text-8xl mb-8">
            Savvy Prime Properties.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Powered by Savvy Prime Ltd. Our dedicated real estate division, focused on identifying undervalued land assets and establishing a strong commercial presence.
          </motion.p>
        </motion.div>
      </header>

      {/* Sourcing Strategy */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:max-w-none rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/properties-bg.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <p className="font-serif text-2xl italic font-medium">"Sharp sourcing instinct turned into premium outcomes."</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUp} className="order-1 lg:order-2">
            <p className="eyebrow mb-6">LONG-TERM STRATEGY</p>
            <h2 className="display-title text-4xl md:text-5xl mb-8">Calculated, phased expansion.</h2>
            <div className="flex flex-col gap-6 text-lg font-medium text-muted-foreground leading-relaxed">
              <p>
                Savvy Prime Properties represents our calculated, phased expansion into the real estate sector. Our long-term strategy dictates that growth into new sectors occurs only once our foundational businesses (Savvy Wheels and Style Savvy) are fully stable and generating consistent, documented performance.
              </p>
              <p>
                Our real estate approach applies the exact same core competency that drives our other lines: identifying undervalued opportunity. We focus on securing prime land and properties that offer significant upside and immediate value.
              </p>
              <p>
                By establishing a robust commercial footprint in key locations starting with New Millennium City, Kaduna, we are positioning Savvy Prime Properties to become a trusted name in the Nigerian real estate market. We don't just acquire land; we turn sharp sourcing instinct into dependable, high-standard value for our clients.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-foreground text-background">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="h-16 w-16 rounded-2xl bg-background text-foreground flex items-center justify-center mb-10">
            <Building2 className="h-8 w-8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="display-title text-4xl md:text-5xl lg:text-6xl mb-8">
            The Property Standard
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl font-medium leading-relaxed text-background/80 mb-12">
            Every property acquired by Savvy Prime Properties will be moved to the right customer through organised, repeatable sales processes. We apply our core sourcing instinct to ensure the end client receives an asset that represents true, dependable value.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4">
            <a href="/contact" className="button-secondary border-background/20 text-background hover:bg-background hover:text-foreground">
              Contact Us
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
