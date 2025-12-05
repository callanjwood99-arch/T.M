import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Send, Sparkles, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [completedFields, setCompletedFields] = useState<Set<string>>(new Set());
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent successfully! I'll be in touch personally.", {
      icon: <CheckCircle className="w-5 h-5 text-emerald-500" />
    });
    setIsSubmitting(false);
    setCompletedFields(new Set());
    (e.target as HTMLFormElement).reset();
  };

  const handleBlur = (fieldName: string, value: string) => {
    setFocusedField(null);
    if (value.trim()) {
      setCompletedFields(prev => new Set([...prev, fieldName]));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const inputFields = [
    { id: 'name', label: 'Your Name', type: 'text', placeholder: 'Enter your name...' },
    { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number...' },
    { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email address...' },
  ];

  return (
    <section id="contact" className="py-24 lg:py-32 relative overflow-hidden" ref={ref}>
      {/* Animated background effects */}
      <motion.div 
        className="absolute inset-0 bg-gradient-hero"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 1 }}
      />
      
      {/* Primary orb */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.08) 0%, transparent 70%)'
        }}
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Secondary orb */}
      <motion.div 
        className="absolute top-1/4 -right-32 w-[400px] h-[400px] rounded-full blur-3xl"
        style={{
          background: 'radial-gradient(circle, hsl(43 50% 59% / 0.05) 0%, transparent 70%)'
        }}
        animate={{ 
          x: [0, -30, 0],
          y: [0, 20, 0]
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${10 + i * 12}%`,
              top: `${15 + (i % 4) * 20}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0, 0.6, 0],
              rotate: [0, 180, 360],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.7,
            }}
          >
            <Sparkles className="w-4 h-4 text-primary/30" />
          </motion.div>
        ))}
      </div>
      
      <div className="container px-6 relative z-10">
        <div className="max-w-2xl mx-auto">
          <motion.div 
            className="text-center mb-12"
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
              Get In Touch
            </motion.span>
            <motion.h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Book Your Free{" "}
              <motion.span 
                className="text-gradient-gold italic"
                animate={isInView ? {
                  backgroundPosition: ['0% center', '100% center', '0% center']
                } : {}}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              >
                45-Minute
              </motion.span>{" "}
              Session
            </motion.h2>
            <motion.p 
              className="text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
            >
              Take the first step toward clarity, structure, and sustainable growth — 
              and I'll be in touch personally to schedule your session.
            </motion.p>

            {/* Animated underline */}
            <motion.div
              className="w-16 h-0.5 mx-auto mt-6 bg-gradient-to-r from-transparent via-primary to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </motion.div>

          <motion.form 
            onSubmit={handleSubmit} 
            className="glass-card p-8 md:p-10 rounded-2xl space-y-6 relative overflow-hidden"
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Form glow effect */}
            <AnimatePresence>
              {focusedField && (
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: 'radial-gradient(circle at center, hsl(43 50% 59% / 0.05) 0%, transparent 70%)'
                  }}
                />
              )}
            </AnimatePresence>

            {/* Animated border */}
            <motion.div
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: 'linear-gradient(135deg, hsl(43 50% 59% / 0.2), transparent 50%, hsl(43 50% 59% / 0.1))',
                padding: '1px',
                WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                WebkitMaskComposite: 'xor',
                maskComposite: 'exclude'
              }}
              animate={focusedField ? { opacity: 1 } : { opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            
            <motion.div 
              className="space-y-6 relative z-10"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {inputFields.map((field, index) => (
                <motion.div 
                  key={field.id}
                  className="space-y-2" 
                  variants={itemVariants}
                >
                  <label htmlFor={field.id} className="text-sm font-medium flex items-center gap-2">
                    {field.label} <span className="text-primary">*</span>
                    <AnimatePresence>
                      {completedFields.has(field.id) && (
                        <motion.span
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ type: "spring", stiffness: 500, damping: 25 }}
                        >
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                        </motion.span>
                      )}
                    </AnimatePresence>
                  </label>
                  <motion.div
                    className="relative"
                    animate={focusedField === field.id ? { scale: 1.01 } : { scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {/* Input glow effect */}
                    <motion.div
                      className="absolute -inset-0.5 rounded-lg opacity-0 blur-sm"
                      style={{ background: 'hsl(43 50% 59% / 0.3)' }}
                      animate={focusedField === field.id ? { opacity: 0.5 } : { opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="h-12 bg-background/50 border-border/50 focus:border-primary/50 rounded-lg transition-all duration-300 relative z-10"
                      onFocus={() => setFocusedField(field.id)}
                      onBlur={(e) => handleBlur(field.id, e.target.value)}
                    />
                  </motion.div>
                </motion.div>
              ))}

              <motion.div className="space-y-2" variants={itemVariants}>
                <label htmlFor="message" className="text-sm font-medium flex items-center gap-2">
                  Your Message <span className="text-primary">*</span>
                  <AnimatePresence>
                    {completedFields.has('message') && (
                      <motion.span
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 500, damping: 25 }}
                      >
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </label>
                <motion.div
                  className="relative"
                  animate={focusedField === 'message' ? { scale: 1.01 } : { scale: 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="absolute -inset-0.5 rounded-lg opacity-0 blur-sm"
                    style={{ background: 'hsl(43 50% 59% / 0.3)' }}
                    animate={focusedField === 'message' ? { opacity: 0.5 } : { opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your business and goals..."
                    className="min-h-[140px] bg-background/50 border-border/50 focus:border-primary/50 rounded-lg resize-none transition-all duration-300 relative z-10"
                    onFocus={() => setFocusedField('message')}
                    onBlur={(e) => handleBlur('message', e.target.value)}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  {/* Button glow */}
                  <motion.div
                    className="absolute -inset-1 bg-gradient-to-r from-primary/40 via-primary to-primary/40 rounded-lg blur-lg opacity-0"
                    whileHover={{ opacity: 0.5 }}
                    transition={{ duration: 0.3 }}
                  />
                  <Button
                    type="submit"
                    variant="luxury"
                    size="xl"
                    className="w-full rounded-lg relative overflow-hidden"
                    disabled={isSubmitting}
                  >
                    {/* Shimmer effect */}
                    <motion.div
                      className="absolute inset-0"
                      initial={{ x: '-100%' }}
                      animate={!isSubmitting ? { x: ['100%', '-100%'] } : {}}
                      transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                      style={{
                        background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)'
                      }}
                    />
                    
                    {isSubmitting ? (
                      <motion.span
                        className="flex items-center relative z-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full mr-2"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        Sending...
                      </motion.span>
                    ) : (
                      <span className="relative z-10 flex items-center">
                        Send Message
                        <motion.span
                          className="ml-2"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.span>
                      </span>
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              className="flex items-center justify-center gap-4 mt-6 pt-6 border-t border-border/30"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-emerald-500"
                animate={{ scale: [1, 1.2, 1], opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <p className="text-xs text-muted-foreground">
                100% confidential • No spam ever • Personal response guaranteed
              </p>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
