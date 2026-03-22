import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import scienceImg from "@/assets/courses-science.jpg";
import commerceImg from "@/assets/courses-commerce.jpg";
import artsImg from "@/assets/courses-arts.jpg";

const departments = [
  {
    title: "Science & Technology",
    image: scienceImg,
    programmes: ["BCA", "BSc AI & Data Science"],
    desc: "Equipping students with cutting-edge skills in computer science, AI, and data analytics for the digital era.",
    color: "from-blue-600/80 to-cyan-500/80",
  },
  {
    title: "Commerce & Management",
    image: commerceImg,
    programmes: ["BBA Finance", "BBA Geriatric Care", "BBA Hospital Admin", "BCom Finance", "BCom Computer Apps", "BCom Cooperation", "BCom Logistics", "BCom Business Analytics"],
    desc: "Comprehensive business education with industry-linked internships and 100% placement-guaranteed programmes.",
    color: "from-amber-600/80 to-orange-500/80",
  },
  {
    title: "Arts & Humanities",
    image: artsImg,
    programmes: ["BA English", "MA English", "MCom Finance"],
    desc: "Fostering critical thinking, creativity, and communication through humanities and language studies.",
    color: "from-emerald-600/80 to-teal-500/80",
  },
];

const CoursesSection = () => (
  <section id="courses" className="section-padding bg-secondary/50 overflow-hidden">
    <div className="container">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Programmes</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Courses & Departments</h2>
        <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="h-1 bg-accent rounded-full mx-auto mt-4" />
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {departments.map((dept, i) => (
          <motion.div
            key={dept.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -10 }}
            className="group bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-border"
          >
            <div className="relative h-56 overflow-hidden">
              <motion.img
                src={dept.image}
                alt={dept.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${dept.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              <div className="absolute inset-0 bg-gradient-to-t from-college-navy/70 to-transparent" />
              <h3 className="absolute bottom-4 left-5 font-display text-xl font-bold text-primary-foreground z-10">{dept.title}</h3>

              {/* Animated corner accent */}
              <motion.div
                className="absolute top-0 right-0 w-16 h-16"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.2 }}
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[64px] border-t-accent border-l-[64px] border-l-transparent" />
              </motion.div>
            </div>
            <div className="p-6">
              <p className="text-sm text-muted-foreground mb-4">{dept.desc}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {dept.programmes.map((p) => (
                  <motion.span
                    key={p}
                    whileHover={{ scale: 1.05 }}
                    className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium cursor-default hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                  >
                    {p}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href="#admissions"
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-accent transition-colors group/link"
                whileHover={{ x: 5 }}
              >
                Learn more <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
