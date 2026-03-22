import { motion } from "framer-motion";
import { Trophy, Palette, Heart, Users } from "lucide-react";
import sportsImg from "@/assets/activities-sports.jpg";
import nssImg from "@/assets/activities-nss.jpg";
import culturalImg from "@/assets/events-cultural.jpg";
import gallery2 from "@/assets/gallery-2.jpg";

const activities = [
  { icon: Trophy, title: "Sports & Games", desc: "Volleyball, cricket, athletics, and more. State and university-level participation.", image: sportsImg },
  { icon: Palette, title: "Cultural Activities", desc: "Arts day, dance, music, drama — celebrating Kerala's rich cultural heritage.", image: culturalImg },
  { icon: Heart, title: "NSS & Social Service", desc: "Community service, tree planting, blood donation camps, and rural engagement.", image: nssImg },
  { icon: Users, title: "Clubs & Forums", desc: "Debate club, literary forum, women's cell, anti-ragging cell, and student union.", image: gallery2 },
];

const ActivitiesSection = () => (
  <section id="activities" className="section-padding bg-background overflow-hidden">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Student Life</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Activities & Clubs</h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="h-1 bg-accent rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((act, i) => (
          <motion.div
            key={act.title}
            initial={{ opacity: 0, rotateY: 30 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            whileHover={{ y: -10 }}
            className="group relative rounded-2xl overflow-hidden h-80 cursor-pointer"
          >
            <motion.img
              src={act.image}
              alt={act.title}
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-college-navy/95 via-college-navy/40 to-transparent group-hover:from-college-navy/100 transition-all duration-500" />

            <div className="absolute bottom-0 p-5 w-full">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                transition={{ type: "spring" }}
                className="inline-block"
              >
                <act.icon className="w-8 h-8 text-accent mb-3" />
              </motion.div>
              <h4 className="font-display text-lg font-bold text-primary-foreground mb-1">{act.title}</h4>
              <p className="text-xs text-primary-foreground/70 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">{act.desc}</p>
            </div>

            {/* Hover border accent */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-accent/40 transition-colors duration-500" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ActivitiesSection;
