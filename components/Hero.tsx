import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.03,
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const headlineText = "Unlock Your";
  const highlightText = "Full Potential";

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />
      
      {/* Primary floating orb with golden glow */}
      <motion.div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.15) 0%, hsl(43 50% 59% / 0.05) 50%, transparent 70%)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Secondary floating orb */}
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl"
        animate={{ 
          x: [0, 80, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Tertiary orb for depth */}
      <motion.div 
        className="absolute top-1/3 left-1/4 w-[300px] h-[300px] bg-primary/3 rounded-full blur-3xl"
        animate={{ 
          x: [0, -40, 0],
          y: [0, 60, 0],
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />

      {/* Floating golden particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100, -20],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Floating sparkle icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [0, 180, 360],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary/30" />
          </motion.div>
        ))}
      </div>
      
      {/* Subtle grid pattern with fade */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.015 }}
        transition={{ duration: 3, delay: 1 }}
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px',
          maskImage: 'radial-gradient(ellipse at center, black 0%, transparent 70%)'
        }}
      />

      {/* Animated corner accents */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-l-2 border-t-2 border-primary/20 rounded-tl-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.2 }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-32 h-32 border-r-2 border-b-2 border-primary/20 rounded-br-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1.4 }}
      />

      <div className="container relative z-10 px-6 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow with shimmer effect */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.span 
              className="inline-block px-5 py-2.5 text-xs font-semibold tracking-[0.25em] uppercase text-primary border border-primary/30 rounded-full mb-8 relative overflow-hidden"
              whileHover={{ scale: 1.05, borderColor: "hsl(43 50% 59% / 0.8)" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {/* Shimmer effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 2 }}
              />
              <span className="relative z-10">Business Mentoring</span>
            </motion.span>
          </motion.div>

          {/* Main headline with letter-by-letter animation */}
          <motion.h1 
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="inline-block overflow-hidden">
              {headlineText.split('').map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                  style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </span>{" "}
            <span className="inline-block overflow-hidden">
              <motion.span 
                className="text-gradient-gold italic inline-block"
                initial={{ opacity: 0, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                {highlightText}
              </motion.span>
            </span>
          </motion.h1>

          {/* Animated underline */}
          <motion.div
            className="w-24 h-0.5 mx-auto mb-8 bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          />

          {/* Subheadline with fade up */}
          <motion.p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
          >
            Let's unlock your full potential... personally & professionally... 
            and grow your business the right way, together.
          </motion.p>

          {/* Supporting text */}
          <motion.p 
            className="text-base text-muted-foreground/80 max-w-xl mx-auto mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            If you're <span className="text-foreground font-medium">serious about growth</span>, 
            I'll help you build clarity, structure, and lasting success — with a satisfaction 
            guarantee and a mentor who's walked the path himself.
          </motion.p>

          {/* CTA with enhanced hover effects */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              {/* Button glow effect */}
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-primary/50 via-primary to-primary/50 rounded-full blur-lg opacity-0"
                whileHover={{ opacity: 0.6 }}
                transition={{ duration: 0.3 }}
              />
              <Button 
                variant="luxury" 
                size="xl" 
                className="group rounded-full relative"
                onClick={scrollToContact}
              >
                Book Your Free Call
                <motion.span
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust indicator with typing effect feel */}
          <motion.div 
            className="mt-10 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-emerald-500"
              animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <p className="text-sm text-muted-foreground/60 italic">
              Privacy is 100% guaranteed — Every conversation stays completely confidential.
            </p>
          </motion.div>
        </div>

        {/* Decorative animated lines */}
        <motion.div 
          className="absolute bottom-24 left-1/2 -translate-x-1/2 w-px h-24 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-b from-primary via-primary/50 to-transparent"
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
