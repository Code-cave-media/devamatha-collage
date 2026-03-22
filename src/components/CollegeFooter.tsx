import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const CollegeFooter = () => (
  <footer className="bg-college-navy text-primary-foreground relative overflow-hidden">
    {/* Decorative top wave */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-college-sky to-accent" />

    <div className="container py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-display font-bold"
            >
              D
            </motion.div>
            <div>
              <h3 className="font-display text-lg font-bold">Deva Matha College</h3>
              <p className="text-xs text-primary-foreground/60">Arts & Science · Paisakary</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/60 leading-relaxed">
            Affiliated to the University of Kannur. ISO 9001:2015 Certified. Empowering students since 2003.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h4 className="font-display text-base font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {[
              { label: "About Us", href: "#about" },
              { label: "Programmes", href: "#courses" },
              { label: "Admissions", href: "#admissions" },
              { label: "Events", href: "#events" },
              { label: "Gallery", href: "#gallery" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.href}
                  className="hover:text-accent transition-colors inline-flex items-center gap-1 group"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Programmes */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h4 className="font-display text-base font-semibold mb-4">Programmes</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            {["BCA", "BA English", "BBA Finance", "BCom Finance", "BSc AI & Data Science", "MA English", "MCom Finance"].map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <h4 className="font-display text-base font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/60">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 shrink-0 mt-0.5" /> Paisakary P.O, Payyavoor, Kannur – 670633</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4" /> 9400161116</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4" /> info@devamathacollege.ac.in</li>
          </ul>
          <div className="flex gap-3 mt-5">
            {[
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <motion.a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-primary-foreground/40">
        <p>© 2025 Deva Matha College, Paisakary. All rights reserved.</p>
        <p>Designed with ❤️ for academic excellence</p>
      </div>
    </div>
  </footer>
);

export default CollegeFooter;
