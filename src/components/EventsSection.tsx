import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import eventImg from "@/assets/events-cultural.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import sportsImg from "@/assets/activities-sports.jpg";

const events = [
  {
    title: "Principal Emerges Victorious in University Senate Election",
    date: "2024",
    category: "News",
    desc: "Dr. M. J. Mathew, our principal, has emerged triumphant in the recent University Senate election, securing a seat in the highest decision-making body.",
    image: gallery3,
  },
  {
    title: "Frosty Fest 23 — X-citing Xmas Envelops Campus!",
    date: "Dec 2023",
    category: "Event",
    desc: "The campus was transformed into a festive wonderland with heartwarming nativity plays, dance performances, and soulful musical renditions.",
    image: eventImg,
  },
  {
    title: "BBA Hospital Administration Students Visit Hospital",
    date: "Nov 2023",
    category: "Academic",
    desc: "Students embarked on an enlightening visit to St. Joseph's Hospital, Karuvanchal for practical exposure to hospital operations.",
    image: gallery2,
  },
  {
    title: "Campus Comes Alive with Onam Celebrations!",
    date: "Sep 2023",
    category: "Event",
    desc: "Vibrant Pookalam, traditional attire, and rhythmic beats filled the campus as students united to celebrate the rich cultural heritage of Kerala.",
    image: sportsImg,
  },
];

const categories = ["All", "News", "Event", "Academic"];

const EventsSection = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? events : events.filter(e => e.category === filter);

  return (
    <section id="events" className="section-padding bg-background overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">News & Events</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Latest Happenings</span>
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center gap-2 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${filter === cat ? "bg-primary text-primary-foreground shadow-md" : "bg-secondary text-muted-foreground hover:bg-secondary/80"}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {filtered.map((ev, i) => (
              <motion.div
                key={ev.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-border group cursor-pointer"
              >
                <div className="h-44 overflow-hidden relative">
                  <motion.img
                    src={ev.image}
                    alt={ev.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-bold uppercase px-2 py-1 rounded-full bg-accent text-accent-foreground">{ev.category}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground mb-2">
                    <Calendar className="w-3.5 h-3.5" /> {ev.date}
                  </div>
                  <h4 className="font-display text-sm font-bold text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">{ev.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-3">{ev.desc}</p>
                  <motion.span
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3"
                    whileHover={{ x: 5 }}
                  >
                    Read more <ArrowRight className="w-3 h-3" />
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default EventsSection;
