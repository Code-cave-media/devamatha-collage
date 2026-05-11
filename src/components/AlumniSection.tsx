import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Users, Calendar, MapPin, Award, Briefcase, Heart, Star, Mail } from "lucide-react";

const alumniData = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    graduationYear: "2015",
    degree: "B.Tech Computer Science",
    currentRole: "Senior Software Engineer",
    company: "Microsoft",
    location: "Bangalore",
    achievements: [
      "University Gold Medalist",
      "Published Research Papers",
      "Tech Innovation Award"
    ],
    image: "/img/alumni-1.jpg"
  },
  {
    id: 2,
    name: "John Smith",
    graduationYear: "2018",
    degree: "B.Commerce",
    currentRole: "Business Analyst",
    company: "Deloitte",
    location: "Mumbai",
    achievements: [
      "Best Outgoing Student",
      "National Quiz Champion"
    ],
    image: "/img/alumni-2.jpg"
  },
  {
    id: 3,
    name: "Priya Kumar",
    graduationYear: "2020",
    degree: "B.Sc Physics",
    currentRole: "Research Scientist",
    company: "ISRO",
    location: "Thiruvananthapuram",
    achievements: [
      "National Science Fair Winner",
      "Space Research Fellowship"
    ],
    image: "/img/alumni-3.jpg"
  },
  {
    id: 4,
    name: "Maria Fernandez",
    graduationYear: "2017",
    degree: "BA English",
    currentRole: "Content Writer",
    company: "The Hindu",
    location: "Chennai",
    achievements: [
      "Literary Award Winner",
      "Published Author"
    ],
    image: "/img/alumni-4.jpg"
  },
  {
    id: 5,
    name: "Rahul Sharma",
    graduationYear: "2019",
    degree: "BBA",
    currentRole: "Marketing Manager",
    company: "Amazon",
    location: "Bangalore",
    achievements: [
      "Best Marketing Campaign",
      "Young Entrepreneur Award"
    ],
    image: "/img/alumni-5.jpg"
  },
  {
    id: 6,
    name: "Anita Patel",
    graduationYear: "2016",
    degree: "B.Sc Chemistry",
    currentRole: "PhD Researcher",
    company: "IIT Madras",
    location: "Chennai",
    achievements: [
      "National Chemistry Olympiad",
      "Research Publication"
    ],
    image: "/img/alumni-6.jpg"
  }
];

const AlumniSection = () => {
  const [alumni, setAlumni] = useState([]);

  useEffect(() => {
    setAlumni(alumniData);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-blue-3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-blue-3 rounded-full blur-[100px]" />
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
            <span className="text-accent">Alumni</span> Association
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with our distinguished graduates and build your network
          </p>
        </motion.div>

        {/* Alumni Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((person, index) => {
            return (
              <motion.div
                key={person.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  {/* Alumni Photo */}
                  <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={person.image}
                      alt={person.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Alumni Info */}
                  <h3 className="text-xl font-bold text-foreground mb-2 text-center">
                    {person.name}
                  </h3>
                  <p className="text-sm text-muted-foreground text-center mb-4">
                    Class of {person.graduationYear} • {person.degree}
                  </p>

                  {/* Current Position */}
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Briefcase className="w-4 h-4 text-accent" />
                    <span className="text-sm text-muted-foreground">{person.currentRole}</span>
                  </div>

                  {/* Company & Location */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-center gap-2">
                      <Award className="w-4 h-4 text-accent" />
                      <span>{person.company}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <MapPin className="w-4 h-4 text-accent" />
                      <span>{person.location}</span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2 text-center">Achievements</h4>
                    <div className="flex flex-wrap justify-center gap-2">
                      {person.achievements.map((achievement, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connect Button */}
                  <button className="w-full mt-4 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300">
                    Connect
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
              Join Our Alumni Network
            </h3>
            <p className="text-muted-foreground mb-6">
              Stay connected with fellow graduates and access exclusive alumni benefits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300">
                <Mail className="w-4 h-4 mr-2" />
                Join Newsletter
              </button>
              <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300">
                <Users className="w-4 h-4 mr-2" />
                Register as Alumni
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AlumniSection;
