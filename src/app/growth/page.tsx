"use client";

import { motion } from "framer-motion";
import { Building2, LineChart, Target, Sprout, Briefcase } from "lucide-react";

export default function GrowthPage() {
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
            LONG-TERM STRATEGY
          </motion.div>
          <motion.h1 variants={fadeUp} className="display-title text-5xl md:text-7xl lg:text-8xl mb-8">
            Growth Roadmap.
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl font-medium text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A phased expansion strategy. Each new sector is added only once the current base is stable and generating consistent performance.
          </motion.p>
        </motion.div>
      </header>

      {/* Strategy Principle */}
      <section className="py-24 bg-muted/30 border-y border-border">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-24 items-start"
        >
          <motion.div variants={fadeUp}>
            <p className="eyebrow mb-6">PRINCIPLE</p>
            <h2 className="display-title text-4xl md:text-5xl">Expansion in sequence.</h2>
          </motion.div>
          <motion.div variants={fadeUp} className="modern-card p-8 md:p-12 text-lg font-medium leading-relaxed text-muted-foreground">
            <p className="mb-6">Savvy Prime&apos;s long-term strategy is a phased expansion from its current two-line foundation (vehicles and fashion) into real estate, agriculture, manufacturing, and professional consulting services.</p>
            <p>The core competency, identifying undervalued assets and moving them to the right customer, remains constant across all planned sectors.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* Target Sectors */}
      <section className="py-24 bg-background">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <p className="eyebrow mb-6">TARGET SECTORS</p>
            <h2 className="display-title text-4xl md:text-5xl lg:text-6xl max-w-3xl">Strategic phases of expansion.</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeUp} className="modern-card p-10 flex flex-col items-start text-left">
              <div className="h-14 w-14 rounded-xl bg-foreground text-background flex items-center justify-center mb-8">
                <Building2 className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Real Estate</h3>
              <p className="text-muted-foreground font-medium mb-6">The immediate next phase. We will apply our sourcing strategies to acquire, develop, and trade undervalued land and property assets.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="modern-card p-10 flex flex-col items-start text-left">
              <div className="h-14 w-14 rounded-xl bg-foreground text-background flex items-center justify-center mb-8">
                <Sprout className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Agriculture</h3>
              <p className="text-muted-foreground font-medium mb-6">Building resilient supply chains by entering the agricultural sector, focusing on sustainable practices and food security.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="modern-card p-10 flex flex-col items-start text-left">
              <div className="h-14 w-14 rounded-xl bg-foreground text-background flex items-center justify-center mb-8">
                <Target className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Manufacturing</h3>
              <p className="text-muted-foreground font-medium mb-6">Developing local manufacturing capabilities to reduce import dependency and create high-margin domestic products.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="modern-card p-10 flex flex-col items-start text-left">
              <div className="h-14 w-14 rounded-xl bg-foreground text-background flex items-center justify-center mb-8">
                <Briefcase className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">Consulting Services</h3>
              <p className="text-muted-foreground font-medium mb-6">Providing professional advisory services leveraging our cross-sector operational expertise to help other businesses scale.</p>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Execution Call */}
      <section className="py-24 bg-foreground text-background">
        <motion.div 
          initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={stagger}
          className="page-shell flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <motion.div variants={fadeUp} className="h-16 w-16 rounded-2xl bg-background text-foreground flex items-center justify-center mb-10">
            <LineChart className="h-8 w-8" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="display-title text-4xl md:text-5xl lg:text-6xl mb-8">
            Partner in our expansion
          </motion.h2>
          <motion.p variants={fadeUp} className="text-xl font-medium leading-relaxed text-background/80 mb-12">
            Savvy Prime is structured to scale. If you represent an entity interested in our operational roadmap, we are open to strategic conversations regarding our upcoming phases.
          </motion.p>
          <motion.div variants={fadeUp} className="flex gap-4">
            <a href="/investors" className="button-secondary border-background/20 text-background hover:bg-background hover:text-foreground">
              Read Investor Brief
            </a>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
