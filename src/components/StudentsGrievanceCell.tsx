import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FileText, Users, MessageSquare, Phone, Mail, MapPin, Clock, AlertTriangle, CheckCircle, Scale } from "lucide-react";

const grievanceCellData = {
  title: "Students' Grievance Redressal Cell",
  description: "The Student Grievance Redressal (SGR) Cell addresses the grievances of students and provides appropriate solutions to ensure a smooth functioning of the College. The Cell also functions as a Discipline Committee on the campus.",
  convener: "Shaijo P.S",
  members: ["Manu Joseph", "Sibichan Thomas", "Ramzeena", "Jain Antony"],
  functions: [
    "Grievance Handling",
    "Disciplinary Actions",
    "Conflict Resolution",
    "Policy Implementation",
    "Student Rights Protection"
  ],
  contact: {
    phone: "+91 123 456 7890",
    email: "grievance@devamatha.ac.in",
    room: "Room 106, Admin Block"
  },
  image: "/img/grievance-cell.jpg"
};

const StudentsGrievanceCell = () => {
  const [cellData, setCellData] = useState(null);

  useEffect(() => {
    setCellData(grievanceCellData);
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
          <div className="inline-flex items-center justify-center mb-4">
            <FileText className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Students' <span className="text-accent">Grievance Redressal Cell</span> (SGR)
            </h2>
          </div>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ensuring student welfare and maintaining campus discipline
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
                <FileText className="w-6 h-6 text-blue-500 mr-3" />
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
            {/* Convener */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/60 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center">
                <Users className="w-6 h-6 text-blue-500 mr-3" />
                Convener
              </h3>
              <p className="text-xl font-semibold text-accent mb-2">
                {cellData.convener}
              </p>
              <p className="text-sm text-muted-foreground mb-6">
                Cell Convener
              </p>

              {/* Members */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold text-foreground mb-3">Cell Members</h4>
                <div className="space-y-2">
                  {cellData.members.map((member, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-blue-600" />
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
                <Phone className="w-6 h-6 text-blue-500 mr-3" />
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
                <button className="flex-1 px-4 py-3 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition-colors duration-300">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Submit Grievance
                </button>
                <button className="flex-1 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300">
                  <Clock className="w-4 h-4 mr-2" />
                  Track Status
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Process Flow */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-blue-10 via-accent/5 to-blue-10 rounded-2xl p-8 border border-blue/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Grievance Redressal Process
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Submit</h4>
                <p className="text-sm text-muted-foreground">Fill grievance form with details</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Review</h4>
                <p className="text-sm text-muted-foreground">Cell reviews and acknowledges</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Investigate</h4>
                <p className="text-sm text-muted-foreground">Thorough investigation of issues</p>
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-foreground">Resolve</h4>
                <p className="text-sm text-muted-foreground">Provide solutions within timeframe</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentsGrievanceCell;
