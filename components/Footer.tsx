import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.footer 
      className="py-16 border-t border-border/30 relative overflow-hidden"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
    >
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent opacity-50" />
      
      {/* Animated golden line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent, hsl(43 50% 59% / 0.5), transparent)'
        }}
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [-10, 10, -10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
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
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between gap-8"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-4"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div 
              className="w-12 h-12 rounded-full flex items-center justify-center relative"
              style={{
                background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.15), hsl(43 50% 59% / 0.05))'
              }}
            >
              {/* Animated ring */}
              <motion.div
                className="absolute inset-0 rounded-full border border-primary/20"
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, delay: 2 }}
              />
              <motion.span 
                className="font-serif text-lg text-primary"
                animate={{
                  textShadow: [
                    '0 0 10px hsl(43 50% 59% / 0.2)',
                    '0 0 20px hsl(43 50% 59% / 0.4)',
                    '0 0 10px hsl(43 50% 59% / 0.2)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                TM
              </motion.span>
            </motion.div>
            <div>
              <motion.p 
                className="font-serif text-xl"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 }}
              >
                T.Macalle
              </motion.p>
              <motion.p 
                className="text-xs text-muted-foreground tracking-wider"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 }}
              >
                Business Mentoring
              </motion.p>
            </div>
          </motion.div>

          {/* Disclaimer */}
          <motion.div 
            className="text-center max-w-md"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.div
              className="w-12 h-px mx-auto mb-3 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
            <p className="text-xs text-muted-foreground leading-relaxed">
              All mentoring sessions are held in strict confidence. Availability is limited 
              and suitability is assessed case-by-case.
            </p>
          </motion.div>

          {/* Copyright with animation */}
          <motion.div 
            className="text-right"
            initial={{ opacity: 0, x: 10 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6 }}
          >
            <motion.p 
              className="text-xs text-muted-foreground"
              whileHover={{ color: 'hsl(43 50% 59%)' }}
              transition={{ duration: 0.3 }}
            >
              © {new Date().getFullYear()} T.Macalle Business Mentoring
            </motion.p>
            <motion.p 
              className="text-xs text-muted-foreground/50 mt-1"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              Building Success Together
            </motion.p>
          </motion.div>
        </motion.div>

        {/* Bottom decorative line */}
        <motion.div
          className="mt-8 flex items-center justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <motion.div 
            className="w-8 h-px bg-gradient-to-r from-transparent to-primary/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{ transformOrigin: 'left' }}
          />
          <motion.div
            className="w-1.5 h-1.5 rounded-full bg-primary/30"
            animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div 
            className="w-8 h-px bg-gradient-to-l from-transparent to-primary/30"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
            style={{ transformOrigin: 'right' }}
          />
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
