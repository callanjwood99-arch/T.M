import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const challenges = [
  {
    id: "clarity",
    number: "01",
    title: "Lack of Clarity & Direction",
    problem: "You're working hard, but it feels like you're moving in circles. Without a clear roadmap, every decision feels reactive instead of strategic — leaving you busy but not progressing.",
    solution: "Together, we'll define your goals, sharpen your focus, and build a strategy that drives measurable results."
  },
  {
    id: "systems",
    number: "02",
    title: "Broken or Non-Existent Systems",
    problem: "Everything depends on you. Tasks get repeated, processes aren't streamlined, and growth feels impossible without adding more hours.",
    solution: "We'll design simple, effective systems that give you consistency, control, and time to work on your business — not in it."
  },
  {
    id: "leadership",
    number: "03",
    title: "Team & Leadership Struggles",
    problem: "You can't do it all — but trusting others to do it right is hard. Lack of accountability, misalignment, or weak culture keeps you stuck in the daily grind.",
    solution: "I'll help you lead with clarity, empower your team, and build a culture that runs without constant supervision."
  },
  {
    id: "cashflow",
    number: "04",
    title: "Cash Flow & Profit Frustration",
    problem: "You're generating revenue, but profits don't reflect the effort. Money goes out faster than it comes in, and financial clarity is missing.",
    solution: "We'll uncover the numbers that matter, strengthen your cash flow, and create sustainable financial growth."
  },
  {
    id: "burnout",
    number: "05",
    title: "Burnout & Lack of Freedom",
    problem: "You started your business for freedom — but now it feels like the business owns you. Long hours, constant pressure, and little satisfaction.",
    solution: "We'll rebuild your business so it serves you — creating balance, freedom, and long-term success."
  }
];

const Challenges = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="challenges" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background orb */}
      <motion.div 
        className="absolute left-0 top-1/3 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.07) 0%, transparent 70%)'
        }}
        animate={{ 
          x: [-50, 30, -50],
          y: [0, 60, 0],
          scale: [1, 1.3, 1]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb */}
      <motion.div 
        className="absolute right-0 bottom-1/4 w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.05) 0%, transparent 70%)'
        }}
        animate={{ 
          x: [0, -40, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 0.5, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          >
            <Sparkles className="w-3 h-3 text-primary/20" />
          </motion.div>
        ))}
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              Common Obstacles
            </motion.span>
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              The 5 Hidden Challenges{" "}
              <motion.span 
                className="text-gradient-gold italic"
                animate={isInView ? {
                  backgroundPosition: ['0% center', '100% center', '0% center']
                } : {}}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                Holding Most Businesses Back
              </motion.span>
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Even successful businesses hit a wall. Growth slows, stress builds, and what once 
              felt exciting starts feeling heavy. If any of this sounds familiar — you're not alone.
            </motion.p>

            {/* Decorative line */}
            <motion.div
              className="w-16 h-0.5 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Accordion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <Accordion 
              type="single" 
              collapsible 
              className="space-y-4"
              value={openItem}
              onValueChange={setOpenItem}
            >
              {challenges.map((challenge, index) => (
                <motion.div key={challenge.id} variants={itemVariants}>
                  <AccordionItem
                    value={challenge.id}
                    className="glass-card rounded-xl border-none px-6 transition-all duration-500 hover:border-primary/20 overflow-hidden relative"
                  >
                    {/* Active state glow */}
                    <AnimatePresence>
                      {openItem === challenge.id && (
                        <motion.div
                          className="absolute inset-0 pointer-events-none"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          style={{
                            background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.05), transparent 70%)',
                            boxShadow: 'inset 0 0 60px hsl(43 50% 59% / 0.05)'
                          }}
                        />
                      )}
                    </AnimatePresence>

                    {/* Bottom border animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                      initial={{ scaleX: 0 }}
                      animate={openItem === challenge.id ? { scaleX: 1 } : { scaleX: 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    <AccordionTrigger className="py-6 hover:no-underline group relative z-10">
                      <div className="flex items-center gap-6 text-left">
                        <motion.span 
                          className="text-2xl font-serif transition-colors duration-300"
                          style={{ 
                            color: openItem === challenge.id ? 'hsl(43 50% 59%)' : 'hsl(43 50% 59% / 0.4)'
                          }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {challenge.number}
                        </motion.span>
                        <span className="font-serif text-lg md:text-xl font-medium group-hover:text-primary transition-colors duration-300">
                          {challenge.title}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <motion.div 
                        className="pl-16 space-y-4"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="text-muted-foreground leading-relaxed">
                          {challenge.problem}
                        </p>
                        <motion.div 
                          className="flex items-start gap-3 p-4 rounded-lg relative overflow-hidden"
                          style={{
                            background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.08), hsl(43 50% 59% / 0.02))'
                          }}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.15 }}
                        >
                          {/* Shimmer effect */}
                          <motion.div
                            className="absolute inset-0"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{ duration: 1.5, delay: 0.3 }}
                            style={{
                              background: 'linear-gradient(90deg, transparent, hsl(43 50% 59% / 0.1), transparent)'
                            }}
                          />
                          <motion.div
                            animate={{ x: [0, 3, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          </motion.div>
                          <p className="text-foreground relative z-10">
                            {challenge.solution}
                          </p>
                        </motion.div>
                      </motion.div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA Card */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div 
              className="glass-card inline-block p-8 md:p-10 rounded-2xl relative overflow-hidden"
              whileHover={{ scale: 1.02, y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Background glow */}
              <motion.div
                className="absolute inset-0"
                style={{
                  background: 'radial-gradient(circle at center, hsl(43 50% 59% / 0.08) 0%, transparent 70%)'
                }}
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 4, repeat: Infinity }}
              />

              {/* Corner accents */}
              <motion.div
                className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/20 rounded-tl-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1 }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/20 rounded-br-lg"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.1 }}
              />

              <div className="relative z-10">
                <h3 className="font-serif text-xl md:text-2xl font-medium mb-4">
                  You Don't Have to Do It{" "}
                  <motion.span 
                    className="text-gradient-gold italic"
                    animate={{
                      backgroundPosition: ['0% center', '100% center', '0% center']
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    Alone
                  </motion.span>
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Every one of these challenges can be fixed with the right strategy and guidance. 
                  Let's build a business that gives you control, clarity, and growth that lasts.
                </p>
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Button glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-full blur-lg opacity-0"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Button 
                    variant="luxury" 
                    size="lg" 
                    className="rounded-full relative overflow-hidden"
                    onClick={scrollToContact}
                  >
                    {/* Shimmer */}
                    <motion.div
                      className="absolute inset-0"
                      animate={{ x: ['100%', '-100%'] }}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                    <span className="relative z-10">Book Your Free Call</span>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
