import { motion } from "framer-motion";
import { Calendar, Megaphone, FileText, Bell } from "lucide-react";

const announcements = [
  {
    icon: Megaphone,
    title: "Admission 2026 Open",
    date: "March 2026",
    description: "Applications are now open for the academic year 2026-27",
    type: "admission"
  },
  {
    icon: FileText,
    title: "Semester Exam Updates",
    date: "March 15, 2026",
    description: "Examination schedule for even semester examinations",
    type: "exam"
  },
  {
    icon: Bell,
    title: "University Notifications",
    date: "March 10, 2026",
    description: "Latest updates from Kannur University",
    type: "university"
  },
  {
    icon: Calendar,
    title: "College Events",
    date: "March 8, 2026",
    description: "Upcoming cultural and academic events",
    type: "event"
  }
];

const getIconColor = (type: string) => {
  switch(type) {
    case 'admission': return 'text-green-600 bg-green-100';
    case 'exam': return 'text-blue-600 bg-blue-100';
    case 'university': return 'text-purple-600 bg-purple-100';
    case 'event': return 'text-orange-600 bg-orange-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

const NewsSection = () => (
  <section id="news" className="section-padding bg-secondary/50 overflow-hidden">
    <div className="container">
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        className="text-center mb-14"
      >
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-accent font-semibold text-sm uppercase tracking-widest mb-2"
        >
          Updates
        </motion.p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Latest News & Announcements</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-accent rounded-full mx-auto mt-4"
        />
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {announcements.map((announcement, i) => (
          <motion.div
            key={announcement.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 40px -8px hsl(213 65% 32% / 0.15)",
              scale: 1.02
            }}
            className="bg-card rounded-2xl p-6 border border-border transition-all duration-300 cursor-pointer group"
          >
            <div className="flex items-start gap-4">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${getIconColor(announcement.type)}`}
              >
                <announcement.icon className="w-6 h-6" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {announcement.title}
                </h3>
                <p className="text-xs text-muted-foreground mb-2">{announcement.date}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{announcement.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-center mt-12"
      >
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-accent/30 text-accent hover:bg-accent hover:text-accent-foreground font-semibold transition-all duration-300"
        >
          View All Announcements
        </motion.button>
      </motion.div>
    </div>
  </section>
);

export default NewsSection;
