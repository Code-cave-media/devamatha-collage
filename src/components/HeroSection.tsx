import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCountUp } from "@/hooks/useCountUp";
import heroCampus from "@/assets/hero-campus.jpg";

const TypeWriter = ({ words }: { words: string[] }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = deleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!deleting && charIdx === word.length) {
        setTimeout(() => setDeleting(true), 1800);
        return;
      }
      if (deleting && charIdx === 0) {
        setDeleting(false);
        setWordIdx((prev) => (prev + 1) % words.length);
        return;
      }
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
    }, timeout);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, wordIdx, words]);

  return (
    <span className="text-accent">
      {words[wordIdx].slice(0, charIdx)}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <motion.div
        className="text-2xl md:text-3xl font-bold text-accent"
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-xs text-primary-foreground/60 mt-1">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.7, 0.95]);

  return (
    <section id="home" ref={sectionRef} className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <img src={heroCampus} alt="Deva Matha College Campus" className="w-full h-[120%] object-cover" />
      </motion.div>
      <motion.div className="absolute inset-0 bg-gradient-to-r from-college-navy via-college-navy/70 to-college-navy/40" style={{ opacity: overlayOpacity }} />

      {/* Floating decorative elements */}
      <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-accent/5 animate-float blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-college-sky/10 animate-float blur-2xl" style={{ animationDelay: "2s" }} />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="container relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-6 shimmer"
          >
            <Sparkles className="w-3.5 h-3.5 text-accent" />
            <span className="text-sm font-medium text-accent">Admissions Open 2025-26</span>
          </motion.div>

          <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="block"
            >
              Deva Matha
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="block"
            >
              <TypeWriter words={["College", "Excellence", "Future"]} />
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-display text-lg md:text-xl text-primary-foreground/80 italic mb-2"
          >
            Arts & Science · Paisakary, Kannur
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-base md:text-lg text-primary-foreground/70 mb-8 max-w-lg leading-relaxed"
          >
            Empowering students for a brighter future since 2003. Affiliated to the University of Kannur & ISO 9001:2015 Certified.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold text-base gap-2 shadow-lg shadow-accent/30">
                Apply Now <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
              <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold text-base gap-2">
                <BookOpen className="w-4 h-4" /> Know More
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex gap-8 mt-14 p-6 rounded-2xl bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10"
          >
            <StatCounter end={20} suffix="+" label="Years of Excellence" />
            <StatCounter end={15} suffix="+" label="Programmes" />
            <StatCounter end={2000} suffix="+" label="Students" />
            <StatCounter end={100} suffix="%" label="Placement Guarantee*" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/30 flex justify-center pt-2">
          <motion.div className="w-1.5 h-1.5 rounded-full bg-accent" animate={{ y: [0, 16, 0] }} transition={{ duration: 1.5, repeat: Infinity }} />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
