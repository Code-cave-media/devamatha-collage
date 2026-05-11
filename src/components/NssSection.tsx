import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Users, Calendar, MapPin, Award, BookOpen, Target, HandHeart } from "lucide-react";

const nssData = [
  {
    id: 1,
    title: "Blood Donation Camp",
    description: "Regular blood donation camps organized in collaboration with district hospitals, saving lives and promoting community service.",
    icon: Heart,
    date: "Last Saturday of every month",
    participants: 150,
    image: "/img/nss-blood.jpg"
  },
  {
    id: 2,
    title: "Cleanliness Drive",
    description: "Swachh Bharat Abhiyan and campus cleanliness initiatives to maintain a clean and green environment.",
    icon: Target,
    date: "Every Sunday",
    participants: 200,
    image: "/img/nss-clean.jpg"
  },
  {
    id: 3,
    title: "Health Awareness",
    description: "Health check-up camps and awareness programs for students and local community.",
    icon: Users,
    date: "First Monday of every month",
    participants: 120,
    image: "/img/nss-health.jpg"
  },
  {
    id: 4,
    title: "Tree Plantation Drive",
    description: "Environmental conservation through tree plantation and green campus initiatives.",
    icon: Award,
    date: "Monsoon season",
    participants: 300,
    image: "/img/nss-tree.jpg"
  },
  {
    id: 5,
    title: "Rural Development",
    description: "Adopting villages and working on rural development projects.",
    icon: MapPin,
    date: "Quarterly",
    participants: 80,
    image: "/img/nss-rural.jpg"
  },
  {
    id: 6,
    title: "Disaster Relief",
    description: "Emergency response and relief activities during natural disasters.",
    icon: HandHeart,
    date: "As needed",
    participants: 250,
    image: "/img/nss-relief.jpg"
  }
];

const NssSection = () => {
  const [nssActivities, setNssActivities] = useState([]);

  useEffect(() => {
    setNssActivities(nssData);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-red-3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-red-3 rounded-full blur-[100px]" />
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
            National <span className="text-accent">Service Scheme</span> (NSS)
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Empowering students through community service and social responsibility
          </p>
        </motion.div>

        {/* NSS Activities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {nssActivities.map((activity, index) => {
            const Icon = activity.icon;
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>

                <div className="p-6">
                  {/* Activity Icon */}
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>

                  {/* Activity Info */}
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {activity.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 text-center leading-relaxed">
                    {activity.description}
                  </p>

                  {/* Activity Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{activity.date}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-muted-foreground">{activity.participants} Participants</span>
                    </div>
                  </div>

                  {/* Join Button */}
                  <button className="w-full mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300">
                    Join Activity
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
              Join NSS Today
            </h3>
            <p className="text-muted-foreground mb-6">
              Be part of our community service initiatives and make a difference in society.
            </p>
            <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300">
              Register for NSS
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default NssSection;
