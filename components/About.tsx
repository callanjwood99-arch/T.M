import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const textRevealVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: 0.5 + i * 0.1,
        duration: 0.6, 
        ease: [0.16, 1, 0.3, 1] 
      }
    })
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background accent */}
      <motion.div 
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.08) 0%, transparent 70%)'
        }}
        animate={{ 
          x: [0, 50, 0],
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary accent */}
      <motion.div 
        className="absolute left-0 bottom-0 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.05) 0%, transparent 70%)'
        }}
        animate={{ 
          y: [0, -30, 0],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-32 bg-gradient-to-b from-primary/20 via-primary/5 to-transparent"
            style={{
              left: `${30 + i * 20}%`,
              top: `${20 + i * 15}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleY: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div 
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div 
              className="relative aspect-[4/5] rounded-2xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(135deg, hsl(240 15% 12%) 0%, hsl(240 20% 8%) 50%, hsl(240 15% 10%) 100%)'
                }}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-center"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <motion.div 
                    className="w-36 h-36 rounded-full mx-auto mb-4 flex items-center justify-center relative"
                    style={{
                      background: 'radial-gradient(circle, hsl(43 50% 59% / 0.2) 0%, transparent 70%)'
                    }}
                  >
                    {/* Animated rings */}
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary/20"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                    <motion.div
                      className="absolute inset-0 rounded-full border border-primary/30"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.7, 0, 0.7] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    />
                    <motion.span 
                      className="font-serif text-5xl text-primary relative z-10"
                      animate={{ 
                        textShadow: [
                          '0 0 20px hsl(43 50% 59% / 0.3)',
                          '0 0 40px hsl(43 50% 59% / 0.5)',
                          '0 0 20px hsl(43 50% 59% / 0.3)'
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      TM
                    </motion.span>
                  </motion.div>
                </motion.div>
              </div>
              
              {/* Decorative frame with animation */}
              <motion.div 
                className="absolute inset-4 border border-primary/20 rounded-xl pointer-events-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1, delay: 0.6 }}
              />

              {/* Corner accents */}
              <motion.div
                className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/40 rounded-tl-lg"
                initial={{ opacity: 0, x: -10, y: -10 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
              <motion.div
                className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/40 rounded-br-lg"
                initial={{ opacity: 0, x: 10, y: 10 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.8 }}
              />
            </motion.div>
            
            {/* Floating accent card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 glass-card p-6 rounded-xl"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              whileHover={{ scale: 1.08, y: -8, boxShadow: '0 0 40px hsl(43 50% 59% / 0.2)' }}
            >
              <motion.p 
                className="text-4xl font-serif text-primary"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 1.2 }}
              >
                15+
              </motion.p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 1, delay: 1.4 }}
              />
            </motion.div>
          </motion.div>

          {/* Content side */}
          <motion.div 
            className="order-1 lg:order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.span 
              className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block"
              variants={itemVariants}
            >
              About
            </motion.span>
            
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
              variants={itemVariants}
            >
              Tonino{" "}
              <motion.span 
                className="text-gradient-gold italic"
                animate={{
                  backgroundPosition: ['0% center', '100% center', '0% center']
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                Macalle
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-sm text-muted-foreground mb-6 flex items-center gap-2"
              variants={itemVariants}
            >
              <motion.span
                className="w-8 h-px bg-primary/50"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
              34-year-old entrepreneur, husband, & father
            </motion.p>

            <motion.div 
              className="space-y-5 text-muted-foreground leading-relaxed mb-8"
              variants={itemVariants}
            >
              <motion.p
                custom={0}
                variants={textRevealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                I've walked the same path many business owners are on... long hours, 
                tough decisions, and the constant drive to build something that lasts.
              </motion.p>
              <motion.p
                custom={1}
                variants={textRevealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                Over the years, I've built and scaled companies across multiple industries, 
                learning firsthand what it takes to create <span className="text-foreground font-medium">real, sustainable success</span>. 
                I'm driven by old-school values, where integrity and a handshake go much 
                further than any hype.
              </motion.p>
              <motion.p
                custom={2}
                variants={textRevealVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                Through strategy, structure, and smart decision-making, I've built multiple 
                businesses and developed passive income streams that have given me
                <span className="text-foreground font-medium"> complete financial freedom</span>. Now, my mission is to help 
                other entrepreneurs achieve the same.
              </motion.p>
            </motion.div>

            <motion.div 
              className="luxury-divider mb-8"
              variants={itemVariants}
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />

            {/* Quote with luxury styling */}
            <motion.div 
              className="relative mb-8 pl-6"
              variants={itemVariants}
            >
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent"
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 0.8, delay: 1 }}
                style={{ transformOrigin: "top" }}
              />
              <Quote className="w-5 h-5 text-primary/40 mb-2" />
              <p className="text-sm italic text-muted-foreground">
                "My residential and commercial property portfolio speaks for itself — 
                a testament to what's possible when discipline, strategy, and integrity align."
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="inline-block relative"
              >
                {/* Button glow */}
                <motion.div
                  className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0"
                  whileHover={{ opacity: 0.5 }}
                  transition={{ duration: 0.3 }}
                />
                <Button 
                  variant="luxuryOutline" 
                  size="lg" 
                  className="group rounded-full relative"
                  onClick={scrollToContact}
                >
                  Let's Talk
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                  </motion.span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
