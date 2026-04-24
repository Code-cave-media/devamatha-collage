import { motion } from "framer-motion";
import { 
  FileText, 
  Phone, 
  Award, 
  Calendar, 
  BookOpen, 
  Users,
  ArrowRight
} from "lucide-react";

const quickLinks = [
  { icon: FileText, title: "Apply Online", description: "Submit your application", color: "bg-green-100 text-green-600" },
  { icon: Phone, title: "Admission Enquiry", description: "Get admission information", color: "bg-blue-100 text-blue-600" },
  { icon: Award, title: "University Results", description: "Check examination results", color: "bg-purple-100 text-purple-600" },
  { icon: Calendar, title: "Exam Timetable", description: "View exam schedules", color: "bg-orange-100 text-orange-600" },
  { icon: BookOpen, title: "Syllabus", description: "Download course syllabus", color: "bg-pink-100 text-pink-600" },
  { icon: Users, title: "Student Corner", description: "Student resources", color: "bg-indigo-100 text-indigo-600" }
];

const QuickLinksSection = () => (
  <section id="quicklinks" className="section-padding bg-background overflow-hidden">
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
          Resources
        </motion.p>
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Quick Links</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-accent rounded-full mx-auto mt-4"
        />
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {quickLinks.map((link, i) => (
          <motion.div
            key={link.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ 
              y: -8, 
              boxShadow: "0 20px 40px -8px hsl(213 65% 32% / 0.15)",
              scale: 1.02
            }}
            className="group bg-card rounded-2xl p-6 border border-border transition-all duration-300 cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <motion.div 
                whileHover={{ rotate: 10, scale: 1.1 }} 
                transition={{ type: "spring", stiffness: 300 }}
                className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${link.color}`}
              >
                <link.icon className="w-7 h-7" />
              </motion.div>
              <div className="flex-1">
                <h3 className="font-display text-lg font-semibold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                  {link.title}
                </h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
              <motion.div
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
                className="text-accent"
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default QuickLinksSection;
