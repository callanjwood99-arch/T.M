import { Shield, Eye, Handshake, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const features = [
  {
    icon: TrendingUp,
    title: "Real-World Experience",
    description: "I've built successful commercial and residential property portfolios from decades of real-world business experience."
  },
  {
    icon: Eye,
    title: "Results You Can See",
    description: "I'll personally show you tangible results, including tours of my own portfolio and opportunities to speak with tenants and clients directly."
  },
  {
    icon: Shield,
    title: "Complete Confidentiality",
    description: "Every conversation is private and protected. You can speak freely, knowing your business and personal details stay between us."
  },
  {
    icon: Handshake,
    title: "Partnership, Not Promises",
    description: "If you're an entrepreneur who is ready to take action, I'll invest the same level of commitment and integrity that built my own success."
  }
];

const WhyChoose = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="why-choose" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0 bg-gradient-dark" />
      
      {/* Animated golden particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: 'radial-gradient(circle, hsl(43 50% 59% / 0.6) 0%, transparent 70%)'
            }}
            animate={{
              y: [-30, 30, -30],
              x: [-20, 20, -20],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Large floating orb */}
      <motion.div
        className="absolute -right-32 top-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.06) 0%, transparent 70%)'
        }}
        animate={{
          x: [0, 30, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="container px-6 relative z-10">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span 
            className="text-xs font-semibold tracking-[0.25em] uppercase text-primary mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
          >
            The Difference
          </motion.span>
          <motion.h2 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Why Entrepreneurs{" "}
            <motion.span 
              className="text-gradient-gold italic"
              animate={isInView ? {
                backgroundPosition: ['0% center', '100% center', '0% center']
              } : {}}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              Choose
            </motion.span>{" "}
            to Work With Me
          </motion.h2>

          {/* Animated underline */}
          <motion.div
            className="w-20 h-0.5 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={cardVariants}
              whileHover={{ 
                y: -12, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300, damping: 20 }
              }}
              onHoverStart={() => setHoveredCard(index)}
              onHoverEnd={() => setHoveredCard(null)}
              className="glass-card p-8 rounded-2xl group cursor-pointer relative overflow-hidden"
            >
              {/* Animated border glow */}
              <motion.div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.1), transparent 50%, hsl(43 50% 59% / 0.05))'
                }}
              />

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-24 h-24 opacity-0 group-hover:opacity-100"
                style={{
                  background: 'radial-gradient(circle at top right, hsl(43 50% 59% / 0.15), transparent 70%)'
                }}
                initial={{ scale: 0 }}
                animate={hoveredCard === index ? { scale: 1 } : { scale: 0 }}
                transition={{ duration: 0.4 }}
              />

              {/* Shimmer effect on hover */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                animate={hoveredCard === index ? { x: '100%' } : { x: '-100%' }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                style={{
                  background: 'linear-gradient(90deg, transparent, hsl(43 50% 59% / 0.1), transparent)'
                }}
              />
              
              <div className="flex items-start gap-5 relative z-10">
                <motion.div 
                  className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.15), hsl(43 50% 59% / 0.05))'
                  }}
                  whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Icon glow */}
                  <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100"
                    animate={hoveredCard === index ? { 
                      boxShadow: ['inset 0 0 20px hsl(43 50% 59% / 0)', 'inset 0 0 20px hsl(43 50% 59% / 0.3)', 'inset 0 0 20px hsl(43 50% 59% / 0)']
                    } : {}}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <feature.icon className="w-6 h-6 text-primary relative z-10" />
                </motion.div>
                <div>
                  <motion.h3 
                    className="font-serif text-xl font-medium mb-3 group-hover:text-primary transition-colors duration-300"
                  >
                    {feature.title}
                  </motion.h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
              
              {/* Card number with animation */}
              <motion.span
                className="absolute top-4 right-4 text-7xl font-serif text-primary/5 group-hover:text-primary/15 transition-all duration-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {String(index + 1).padStart(2, '0')}
              </motion.span>

              {/* Bottom border animation */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent"
                initial={{ scaleX: 0 }}
                animate={hoveredCard === index ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChoose;
