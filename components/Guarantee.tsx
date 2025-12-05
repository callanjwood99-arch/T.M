import { CheckCircle, Shield, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const guaranteeItems = [
  {
    title: "Two Complimentary Sessions",
    description: "In your first month, receive two free sessions to experience the value firsthand."
  },
  {
    title: "Full Refund Promise",
    description: "If not completely satisfied by month's end, receive a full refund — no questions asked."
  },
  {
    title: "Portfolio Tour",
    description: "See my commercial and residential property portfolio firsthand for full transparency."
  },
  {
    title: "Direct Tenant Access",
    description: "Speak directly with tenants for honest, first-hand feedback about working with me."
  }
];

const Guarantee = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
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
    <section className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.1, 0.4, 0.1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          >
            <Sparkles className="w-3 h-3 text-primary/20" />
          </motion.div>
        ))}
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="glass-card p-8 md:p-12 lg:p-16 rounded-3xl relative overflow-hidden"
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Animated decorative elements */}
            <motion.div 
              className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
              style={{
                background: 'radial-gradient(circle, hsl(43 50% 59% / 0.12) 0%, transparent 70%)'
              }}
              animate={{ 
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            
            {/* Animated ring accent */}
            <motion.div 
              className="absolute -bottom-12 -left-12 w-40 h-40 border border-primary/20 rounded-full"
              animate={{ rotate: 360, scale: [1, 1.1, 1] }}
              transition={{ rotate: { duration: 25, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-8 w-24 h-24 border border-primary/10 rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            {/* Corner accents */}
            <motion.div
              className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <motion.div
              className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-primary/20 rounded-br-xl"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            
            <div className="relative z-10">
              {/* Shield icon with animations */}
              <motion.div 
                className="flex items-center justify-center mb-8"
                initial={{ scale: 0, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
              >
                <motion.div 
                  className="w-20 h-20 rounded-full flex items-center justify-center relative"
                  style={{
                    background: 'radial-gradient(circle, hsl(43 50% 59% / 0.15) 0%, transparent 70%)'
                  }}
                >
                  {/* Animated rings */}
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.6, 0, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute inset-0 rounded-full border border-primary/20"
                    animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0, 0.4] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
                  />
                  <motion.div
                    animate={{
                      filter: [
                        'drop-shadow(0 0 10px hsl(43 50% 59% / 0.3))',
                        'drop-shadow(0 0 20px hsl(43 50% 59% / 0.5))',
                        'drop-shadow(0 0 10px hsl(43 50% 59% / 0.3))'
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Shield className="w-10 h-10 text-primary" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Header */}
              <motion.div 
                className="text-center mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <motion.span 
                  className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  Satisfaction Guarantee
                </motion.span>
                <motion.h2 
                  className="font-serif text-3xl md:text-4xl font-medium leading-tight mb-6"
                  initial={{ opacity: 0, y: 15 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  Helping You Grow Your Business{" "}
                  <motion.span 
                    className="text-gradient-gold italic"
                    animate={isInView ? {
                      backgroundPosition: ['0% center', '100% center', '0% center']
                    } : {}}
                    transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                  >
                    The Right Way
                  </motion.span>
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground max-w-2xl mx-auto leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  At TM Business Mentoring, your success is our priority. That's why we offer 
                  a satisfaction guarantee — we're that confident in what we do.
                </motion.p>

                {/* Decorative line */}
                <motion.div
                  className="w-16 h-0.5 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent"
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.7 }}
                />
              </motion.div>

              {/* Guarantee items */}
              <motion.div 
                className="grid md:grid-cols-2 gap-6 mb-10"
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                {guaranteeItems.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    className="flex items-start gap-4 group relative p-4 rounded-xl transition-all duration-300"
                    variants={itemVariants}
                    onHoverStart={() => setHoveredItem(index)}
                    onHoverEnd={() => setHoveredItem(null)}
                    whileHover={{ x: 8, backgroundColor: 'hsl(43 50% 59% / 0.05)' }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {/* Hover glow */}
                    <motion.div
                      className="absolute inset-0 rounded-xl opacity-0"
                      style={{
                        background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.08), transparent)'
                      }}
                      animate={hoveredItem === index ? { opacity: 1 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className="relative z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{
                          background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.2), hsl(43 50% 59% / 0.05))'
                        }}
                        animate={hoveredItem === index ? { scale: 1.1, rotate: [0, 5, -5, 0] } : { scale: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        <CheckCircle className="w-4 h-4 text-primary" />
                      </motion.div>
                    </motion.div>
                    <div className="relative z-10">
                      <motion.h4 
                        className="font-medium mb-1 group-hover:text-primary transition-colors duration-300"
                      >
                        {item.title}
                      </motion.h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Divider with animation */}
              <motion.div 
                className="luxury-divider mb-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                style={{ transformOrigin: "center" }}
              />

              {/* Quote and CTA */}
              <motion.div 
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <motion.p 
                  className="text-sm text-muted-foreground mb-8 italic max-w-lg mx-auto relative"
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ delay: 1.1 }}
                >
                  <span className="text-primary/30 text-2xl absolute -left-4 -top-2">"</span>
                  I don't work with just anyone — in fact, I say no more often than I say yes. 
                  I build long-term partnerships, not short-term transactions.
                  <span className="text-primary/30 text-2xl absolute -right-2 bottom-0">"</span>
                </motion.p>
                <motion.div
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Button glow */}
                  <motion.div
                    className="absolute -inset-2 bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 rounded-full blur-xl opacity-0"
                    whileHover={{ opacity: 0.6 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Button 
                    variant="luxury" 
                    size="xl" 
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
                    <span className="relative z-10">Book Your Free 45-Minute Session</span>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
