import { useState } from "react";
import { motion } from "framer-motion";
import { User, Award, BookOpen } from "lucide-react";

// Leadership data with minimal text
const leadershipTeam = [
  {
    id: 1,
    name: "His Grace Mar Joseph Pamplany",
    title: "Patron",
    role: "Bishop of Kannur",
    image: "/img/patron.jpg",
    icon: User
  },
  {
    id: 2,
    name: "Rev. Fr. Noble Onamkulam",
    title: "Manager",
    role: "Manager, Deva Matha College",
    image: "https://www.devamathacollege.ac.in/img/images/Rev.Fr.NobleOnamkulam_120.jpg",
    icon: Award
  },
  {
    id: 3,
    name: "Dr. M. J. Mathew",
    title: "Principal",
    role: "Principal, Deva Matha College",
    image: "/img/principal.jpg",
    icon: BookOpen
  }
];

const LeadershipSection = () => {
  return (
    <section className="pt-8 pb-16 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10">


        {/* Leadership Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 pt-4">
          {leadershipTeam.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7, ease: "easeOut" }}
                className="group relative w-full max-w-[420px] mx-auto lg:max-w-none"
              >
                {/* Title at top center */}
                <div className="text-center mb-4">
                  <div className="text-4xl md:text-5xl font-display font-bold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">{member.title}</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: 60 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="h-1 bg-accent rounded-full mx-auto mt-2"
                  />
                </div>

                {/* The Image container */}
                <div className="relative h-[24rem] lg:h-[28rem] w-full rounded-[2.5rem] overflow-hidden shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] bg-card border border-border/60 group-hover:border-accent/50 transition-all duration-700 group-hover:-translate-y-2">

                  {/* Subtle color overlay */}
                  <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration: 700" />

                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-top filter brightness-[0.9] group-hover:brightness-105 transition-transform duration-[1.5s] group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Smooth Gradient for text visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration:700 z-10" />

                  {/* Bottom Content Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col items-center text-center transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <h3 className="font-heading text-2xl lg:text-3xl font-bold text-white mb-4 max-w-[95%] leading-tight drop-shadow-xl group-hover:text-accent transition-colors duration:300">
                      {member.name}
                    </h3>
                  </div>
                </div>
                
                {/* Glow effect behind */}
                <div className="absolute inset-x-8 -bottom-6 h-12 bg-accent/40 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
