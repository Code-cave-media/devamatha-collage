import { motion } from "framer-motion";
import { Shield, Users, Heart, Scale, MessageSquare } from "lucide-react";

// Committees data
const committees = [
  {
    id: 1,
    name: "Anti Ragging Cell",
    icon: Shield
  },
  {
    id: 2,
    name: "Women's Anti-Harassment Cell",
    icon: Heart
  },
  {
    id: 3,
    name: "Minority & OBC Cell",
    icon: Users
  },
  {
    id: 4,
    name: "SC/ST/OBC Cell",
    icon: Scale
  },
  {
    id: 5,
    name: "Students' Grievance Redressal Cell",
    icon: MessageSquare
  }
];

const CommitteesSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-accent/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Committees</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Committees Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {committees.map((committee, index) => {
            const Icon = committee.icon;
            return (
              <motion.div
                key={committee.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full flex flex-col items-center justify-center">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                    <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors duration-300 text-center">
                    {committee.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CommitteesSection;
