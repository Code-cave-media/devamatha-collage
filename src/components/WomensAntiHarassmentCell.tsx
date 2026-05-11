import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Shield, Users, MessageSquare, Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle } from "lucide-react";

const womensCellData = {
  title: "Women's Anti-Harassment Cell",
  description: "\"Educate a man, you educate an individual; educate a woman, you educate a family.\" The College Women's Cell endeavours to empower women and promote gender sensitivity, thereby fostering a safe and congenial environment on the campus. The Cell also functions as a Women's Grievance Redressal Committee, addressing issues and concerns related to women students and staff.",
  coordinator: "Jismy John",
  members: ["Monisha Mohandas", "Sarisa David", "Amitha Benny"],
  functions: [
    "Grievance Redressal",
    "Counseling Services",
    "Awareness Programs",
    "Legal Assistance",
    "Safety Initiatives"
  ],
  contact: {
    phone: "+91 123 456 7890",
    email: "womenscell@devamatha.ac.in",
    room: "Room 105, Admin Block"
  },
  image: "/img/womens-cell.jpg"
};

const WomensAntiHarassmentCell = () => {
  const [cellData, setCellData] = useState(null);

  useEffect(() => {
    setCellData(womensCellData);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-pink-3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-pink-3 rounded-full blur-[100px]" />
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
          <div className="inline-flex items-center justify-center mb-4">
            <Shield className="w-8 h-8 text-pink-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Women's <span className="text-accent">Anti-Harassment Cell</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Creating a safe and empowering environment for women
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Description */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <MessageSquare className="w-6 h-6 text-pink-500 mr-3" />
                About the Cell
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {cellData.description}
              </p>

              {/* Functions */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground mb-3">Key Functions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {cellData.functions.map((func, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-muted-foreground">{func}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Coordinator */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Users className="w-6 h-6 text-pink-500 mr-3" />
                Coordinator
              </h3>
              <p className="text-xl font-semibold text-accent mb-2">
                {cellData.coordinator}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Cell Coordinator
              </p>

              {/* Members */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground mb-3">Cell Members</h4>
                <div className="space-y-2">
                  {cellData.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-pink-600" />
                      </div>
                      <span className="text-muted-foreground">{member}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Phone className="w-6 h-6 text-pink-500 mr-3" />
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">{cellData.contact.email}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">{cellData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-accent" />
                  <span className="text-muted-foreground">{cellData.contact.room}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <button className="flex-1 px-4 py-3 bg-pink-500 text-white rounded-lg font-semibold hover:bg-pink-600 transition-colors duration-300">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Report Grievance
                </button>
                <button className="flex-1 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Contact Cell
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-pink-10 via-accent/5 to-pink-10 rounded-2xl p-8 border border-pink/20 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Emergency Support
            </h3>
            <p className="text-muted-foreground mb-6">
              For immediate assistance and emergency support, please contact our 24/7 helpline.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-6 py-3 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition-colors duration-300">
                <Phone className="w-4 h-4 mr-2" />
                24/7 Helpline
              </button>
              <button className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold hover:bg-red-600 transition-colors duration-300">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Emergency Contact
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WomensAntiHarassmentCell;
