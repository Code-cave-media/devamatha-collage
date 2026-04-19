import { motion } from "framer-motion";
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";

const CollegeFooter = () => (
  <footer className="bg-white text-gray-800 relative overflow-hidden border-t border-gray-200">
    {/* Decorative top wave */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-blue-500 to-accent" />

    <div className="container py-14">
      <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="mb-4">
            <img
              src="/img/logo&typo.png"
              alt="Deva Matha College"
              className="h-16 w-auto object-contain"
            />
          </div>
          <p className="text-sm text-gray-600 leading-relaxed">
            Paisakary P O, Payyavoor<br />
            Kannur Dist. Kerala, 670633.<br />
            Phone: 04602939190<br />
            <a href="https://share.google/0h73lBiiS8bt844Ue" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
              Location Map
            </a>
          </p>
        </motion.div>

        {/* Related Links */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
          <h4 className="font-display text-base font-semibold mb-4">Related Links</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { label: "Academic Bank of Credit", url: "https://abc.gov.in/" },
              { label: "Swayam", url: "https://swayam.gov.in/" },
              { label: "Digi Locker", url: "https://digilocker.gov.in/" },
              { label: "Kannur University", url: "https://kannuruniversity.ac.in/" },
            ].map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-1 group text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* K Reap Portal */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
          <h4 className="font-display text-base font-semibold mb-4">K Reap Portal</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              { label: "K Reap Portal", url: "#" },
              { label: "Course Selection", url: "https://kannuradm.kreap.co.in/applicant/?#/login?client=KANNUR" },
              { label: "Student Login", url: "https://kannurops.kreap.co.in/studentLogin/?#/kannur/studentLogin" },
              { label: "College Login", url: "https://kannurops.kreap.co.in/?#/kannur" },
            ].map((link) => (
              <li key={link.label}>
                <motion.a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors inline-flex items-center gap-1 group text-gray-700"
                  whileHover={{ x: 5 }}
                >
                  {link.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </li>
            ))}
            <li className="pt-2">
              <span className="font-semibold text-gray-700">K-reap Contact</span>
              <br />
              <span className="text-gray-600">+91-497-271-5185</span>
            </li>
          </ul>
        </motion.div>

        {/* Committees */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
          <h4 className="font-display text-base font-semibold mb-4">Committees</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            {[
              "Anti Ragging Cell",
              "Women's Anti-Harassment Cell",
              "Students' Grievance Redressal Cell",
              "Students Welfare Cell"
            ].map((committee) => (
              <li key={committee}>{committee}</li>
            ))}
          </ul>
        </motion.div>

        {/* Contact */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
          <h4 className="font-display text-base font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-gray-700">Administrator</span>
              <span className="text-gray-600">918870260</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-gray-700">Office</span>
              <span className="text-gray-600">04602939190</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-gray-700">Admission Nodal Officer</span>
              <span className="text-gray-600">9400111818</span>
            </li>
            <li className="flex flex-col gap-0.5">
              <span className="font-semibold text-gray-700">Email</span>
              <span className="text-gray-600">dmc@devamathacollege.ac.in</span>
            </li>
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
                className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-gray-300"
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

    <div className="border-t border-gray-200">
      <div className="container py-4 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 Deva Matha College, Paisakary. All rights reserved.</p>
        <p>Powered by: Code Cave</p>
      </div>
    </div>
  </footer>
);

export default CollegeFooter;
