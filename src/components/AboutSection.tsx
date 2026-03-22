import { motion } from "framer-motion";
import { Target, Eye, BookOpen, GraduationCap } from "lucide-react";
import aboutImg from "@/assets/about-college.jpg";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const AboutSection = () => (
  <section id="about" className="section-padding bg-background overflow-hidden">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-accent font-semibold text-sm uppercase tracking-widest mb-2"
        >
          About Us
        </motion.p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">A Legacy of Academic Excellence</h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-accent rounded-full mx-auto mt-4"
        />
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -3 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <img src={aboutImg} alt="College Library" className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]" />
          {/* Floating badge */}
          <motion.div
            className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-5 rounded-2xl shadow-xl"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <GraduationCap className="w-8 h-8 mb-1" />
            <p className="font-display font-bold text-lg">Since</p>
            <p className="font-display font-bold text-2xl text-accent">2003</p>
          </motion.div>
          {/* Decorative border */}
          <div className="absolute -inset-3 border-2 border-accent/20 rounded-2xl -z-10" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.p variants={item} className="text-muted-foreground leading-relaxed mb-6">
            Deva Matha College, a self-financing venture affiliated to the University of Kannur, started functioning from the Academic Year 2003–04 under the Syro-Malabar Metropolitan Archdioceses of Thalassery. The College is situated on a hillock with a panoramic view, encircled by the majestic Western Ghats in the Payyavoor Panchayath, Kannur.
          </motion.p>
          <motion.p variants={item} className="text-muted-foreground leading-relaxed mb-8">
            The institution opened its portals to the rural youth, especially from the middle and lower strata of society, with the vision of bringing all-round development to the region through quality higher education.
          </motion.p>

          <motion.div variants={container} className="grid sm:grid-cols-2 gap-5">
            {[
              { icon: Target, title: "Our Mission", desc: "To provide holistic education that nurtures intellectual, moral, and social development." },
              { icon: Eye, title: "Our Vision", desc: "To be a centre of excellence committed to academic, cultural, and spiritual formation." },
              { icon: BookOpen, title: "Our Values", desc: "Integrity, inclusivity, innovation, and service to society." },
            ].map((cardItem) => (
              <motion.div
                key={cardItem.title}
                variants={item}
                whileHover={{ y: -5, boxShadow: "0 12px 30px -8px hsl(213 65% 32% / 0.15)" }}
                className="p-5 rounded-xl bg-secondary border border-border transition-all duration-300 cursor-default"
              >
                <motion.div whileHover={{ rotate: 10, scale: 1.1 }} transition={{ type: "spring" }}>
                  <cardItem.icon className="w-8 h-8 text-primary mb-3" />
                </motion.div>
                <h4 className="font-display text-lg font-semibold text-foreground mb-1">{cardItem.title}</h4>
                <p className="text-sm text-muted-foreground">{cardItem.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutSection;
