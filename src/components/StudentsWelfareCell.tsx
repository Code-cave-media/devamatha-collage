import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Users, BookOpen, DollarSign, Shield, Phone, Mail, MapPin, CheckCircle, Award } from "lucide-react";

const welfareCellData = {
  title: "Students' Welfare Cell",
  description: "The Student Welfare Cell is committed to promoting the overall well-being of students by ensuring the effective implementation of various welfare schemes and programmes. The Cell undertakes initiatives to facilitate scholarships, insurance, healthcare services, student aid funds, and other welfare measures in association with competent agencies, including the college management. It also provides guidance and counselling support to students, maintains systematic records of all welfare schemes, and gives special attention to the needs of differently abled students.",
  coordinator: "Remya M.P",
  members: ["Manu Joseph", "Sibichan Thomas", "Ramzeena", "Jain Antony"],
  functions: [
    "Scholarship Programs",
    "Health Insurance",
    "Financial Assistance",
    "Counselling Services",
    "Special Needs Support",
    "Hostel Welfare",
    "Transportation Services",
    "Career Guidance"
  ],
  contact: {
    phone: "+91 123 456 7890",
    email: "welfare@devamatha.ac.in",
    room: "Room 108, Admin Block"
  },
  image: "/img/welfare-cell.jpg"
};

const StudentsWelfareCell = () => {
  const [cellData, setCellData] = useState(null);

  useEffect(() => {
    setCellData(welfareCellData);
  }, []);

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-green-3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-green-3 rounded-full blur-[100px]" />
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
            <Heart className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Students' <span className="text-accent">Welfare Cell</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Supporting student well-being and academic success
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
                <Shield className="w-6 h-6 text-green-500 mr-3" />
                About the Cell
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {cellData.description}
              </p>

              {/* Key Functions */}
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
                <Users className="w-6 h-6 text-green-500 mr-3" />
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
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-green-600" />
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
                <Phone className="w-6 h-6 text-green-500 mr-3" />
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
            </div>
          </motion.div>
        </div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-green-10 via-accent/5 to-green-10 rounded-2xl p-8 border border-green-20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Student Welfare Services
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Scholarship */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 text-center">Scholarship Programs</h4>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Merit-based and need-based financial assistance
                </p>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                  Apply for Scholarship
                </button>
              </motion.div>

              {/* Health */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 text-center">Health Insurance</h4>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Comprehensive health coverage for students
                </p>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                  Get Health Card
                </button>
              </motion.div>

              {/* Counselling */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 text-center">Counselling Services</h4>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Mental health and academic support
                </p>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                  Book Counselling
                </button>
              </motion.div>

              {/* Special Needs */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl p-6"
              >
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2 text-center">Special Needs Support</h4>
                <p className="text-sm text-muted-foreground text-center mb-4">
                  Support for differently abled students
                </p>
                <button className="w-full px-4 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition-colors duration-300">
                  Get Support
                </button>
              </motion.div>
            </div>
          </div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-r from-green-10 via-accent/5 to-green-10 rounded-2xl p-8 border border-green-20">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Welfare Support?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact the Student Welfare Cell for assistance with any welfare-related concerns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition-colors duration-300">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Welfare Cell
                </button>
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300">
                  <Award className="w-4 h-4 mr-2" />
                  View All Services
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentsWelfareCell;
