import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Trophy, Heart, BookOpen, Music, Palette, Camera, Gamepad2, Microscope, Globe, Dumbbell } from "lucide-react";

const clubsData = [
  {
    id: 1,
    name: "Arts Club",
    description: "Fostering creativity and artistic expression through various art forms and cultural activities.",
    icon: Palette,
    color: "bg-purple-500",
    members: 45,
    schedule: "Every Wednesday"
  },
  {
    id: 2,
    name: "Science Club",
    description: "Exploring scientific discoveries and conducting experiments to expand knowledge.",
    icon: Microscope,
    color: "bg-blue-500",
    members: 38,
    schedule: "Every Thursday"
  },
  {
    id: 3,
    name: "Sports Club",
    description: "Promoting physical fitness and team spirit through various sports activities.",
    icon: Dumbbell,
    color: "bg-green-500",
    members: 52,
    schedule: "Every Monday & Friday"
  },
  {
    id: 4,
    name: "Music Club",
    description: "Nurturing musical talent and organizing cultural performances.",
    icon: Music,
    color: "bg-pink-500",
    members: 28,
    schedule: "Every Tuesday"
  },
  {
    id: 5,
    name: "Photography Club",
    description: "Capturing moments and developing photography skills.",
    icon: Camera,
    color: "bg-yellow-500",
    members: 22,
    schedule: "Every Saturday"
  },
  {
    id: 6,
    name: "Gaming Club",
    description: "Organizing gaming tournaments and promoting strategic thinking.",
    icon: Gamepad2,
    color: "bg-indigo-500",
    members: 35,
    schedule: "Every Friday"
  }
];

const ClubsSection = () => {
  const [clubs, setClubs] = useState([]);

  useEffect(() => {
    setClubs(clubsData);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-purple/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-pink/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student <span className="text-accent">Clubs</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your passion and join our vibrant student community
          </p>
        </motion.div>

        {/* Clubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clubs.map((club, index) => {
            const Icon = club.icon;
            return (
              <motion.div
                key={club.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  {/* Club Icon */}
                  <div className={`w-16 h-16 ${club.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Club Info */}
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {club.name}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-center leading-relaxed">
                    {club.description}
                  </p>

                  {/* Club Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{club.members} Members</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <BookOpen className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{club.schedule}</span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <button className="w-full mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300">
                    Join Club
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Want to Start a New Club?
            </h3>
            <p className="text-muted-foreground mb-6">
              We encourage students to pursue their interests and start new clubs. Contact the student affairs office for more information.
            </p>
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300">
              Contact Student Affairs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClubsSection;
