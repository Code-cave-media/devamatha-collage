import { motion } from "framer-motion";
import { FileText, CalendarDays, CheckCircle, Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  { icon: FileText, title: "Check Eligibility", desc: "Review the eligibility criteria for your desired programme." },
  { icon: CalendarDays, title: "Submit Application", desc: "Fill in the online application form with required documents." },
  { icon: CheckCircle, title: "Admission Confirmation", desc: "Receive your admission letter and complete the fee payment." },
];

const AdmissionsSection = () => (
  <section id="admissions" className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
    {/* Animated background patterns */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full border border-primary-foreground/5"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full border border-primary-foreground/5"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-college-sky/5 blur-3xl" />
    </div>

    <div className="container relative z-10">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 200 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-accent" />
          <p className="text-accent font-semibold text-sm uppercase tracking-widest">Admissions</p>
          <Sparkles className="w-5 h-5 text-accent" />
        </motion.div>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">How to Apply</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-accent rounded-full mx-auto"
        />
        <p className="text-primary-foreground/70 mt-3 max-w-lg mx-auto">Admissions are open for the academic year 2025-26. Follow these simple steps to join the Deva Matha family.</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 mb-12 relative">
        {/* Connecting line */}
        <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-accent/30 to-transparent -translate-y-1/2" />

        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, type: "spring", stiffness: 150 }}
            whileHover={{ y: -8, scale: 1.03 }}
            className="text-center p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm relative hover:bg-primary-foreground/10 transition-colors duration-300"
          >
            <motion.div
              className="w-16 h-16 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-5 relative"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <step.icon className="w-7 h-7 text-accent" />
              <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-xs font-bold">
                {i + 1}
              </div>
            </motion.div>
            <h3 className="font-display text-xl font-bold mb-2">{step.title}</h3>
            <p className="text-primary-foreground/70 text-sm">{step.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-4"
      >
        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2 shadow-lg shadow-accent/30">
            Apply Online <ArrowRight className="w-4 h-4" />
          </Button>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
          <Button size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 font-semibold gap-2">
            <Download className="w-4 h-4" /> Download Prospectus
          </Button>
        </motion.div>
      </motion.div>

      <p className="text-center text-primary-foreground/50 text-sm mt-6">
        Admission Nodal Officer: 9400111818 | 9447282104 | 9188702610
      </p>
    </div>
  </section>
);

export default AdmissionsSection;
