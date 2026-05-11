import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Users, Trophy, Heart, Shield, FileText, Download, GraduationCap, ArrowRight } from "lucide-react";

const StudentPortal = () => {
  const [activeSection, setActiveSection] = useState("clubs");

  const sections = [
    {
      id: "clubs",
      title: "Student Clubs",
      description: "Explore our diverse range of student clubs and extracurricular activities",
      icon: Users,
      color: "bg-purple-500",
      component: "ClubsSection"
    },
    {
      id: "nss",
      title: "NSS Activities",
      description: "National Service Scheme activities and community service programs",
      icon: Heart,
      color: "bg-pink-500",
      component: "NssSection"
    },
    {
      id: "alumni",
      title: "Alumni Association",
      description: "Connect with our distinguished alumni network",
      icon: GraduationCap,
      color: "bg-blue-500",
      component: "AlumniSection"
    },
    {
      id: "forms",
      title: "Download Forms",
      description: "Access important documents and application forms",
      icon: FileText,
      color: "bg-green-500",
      component: "DownloadFormsSection"
    }
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-purple-3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-pink-3 rounded-full blur-[100px]" />
        <div className="absolute top-[50%] left-[30%] w-[30%] h-[30%] bg-blue-3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[30%] right-[30%] w-[30%] h-[30%] bg-green-3 rounded-full blur-[100px]" />
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
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Student <span className="text-accent">Portal</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Your gateway to campus life and opportunities
          </p>
        </motion.div>

        {/* Navigation Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {sections.map((section) => {
              const Icon = section.icon;
              const isActive = activeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    isActive
                      ? `${section.color} text-white shadow-lg scale-105`
                      : 'bg-card/80 hover:bg-card text-muted-foreground hover:text-foreground border border-border/60 hover:border-accent/40'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-semibold">{section.title}</span>
                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-white rounded-full ml-2"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Section Content */}
        <motion.div
          key={activeSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="min-h-[60vh]"
        >
          {activeSection === "clubs" && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-500 mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Student <span className="text-accent">Clubs</span>
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Discover your passion and join our vibrant student community
                </p>
              </motion.div>
              
              {/* Import ClubsSection component here */}
              <div className="bg-gradient-to-r from-purple-10 via-accent/5 to-purple-10 rounded-2xl p-8 border border-purple/20">
                <p className="text-center text-muted-foreground mb-6">
                  <Users className="w-5 h-5 inline mr-2" />
                  Explore our diverse range of student clubs and activities
                </p>
                <Link
                  to="/clubs"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300 mx-auto"
                >
                  View All Clubs
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeSection === "nss" && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <Heart className="w-8 h-8 text-pink-500 mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">
                    National <span className="text-accent">Service Scheme</span> (NSS)
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Empowering students through community service and social responsibility
                </p>
              </motion.div>
              
              {/* Import NssSection component here */}
              <div className="bg-gradient-to-r from-pink-10 via-accent/5 to-pink-10 rounded-2xl p-8 border border-pink-20">
                <p className="text-center text-muted-foreground mb-6">
                  <Heart className="w-5 h-5 inline mr-2" />
                  Join our community service initiatives and make a difference
                </p>
                <Link
                  to="/nss"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300 mx-auto"
                >
                  View NSS Activities
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeSection === "alumni" && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">
                    <span className="text-accent">Alumni</span> Association
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Connect with our distinguished graduates and build your network
                </p>
              </motion.div>
              
              {/* Import AlumniSection component here */}
              <div className="bg-gradient-to-r from-blue-10 via-accent/5 to-blue-10 rounded-2xl p-8 border border-blue-20">
                <p className="text-center text-muted-foreground mb-6">
                  <GraduationCap className="w-5 h-5 inline mr-2" />
                  Stay connected with fellow graduates and access exclusive benefits
                </p>
                <Link
                  to="/alumni"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300 mx-auto"
                >
                  View Alumni Network
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {activeSection === "forms" && (
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center mb-8"
              >
                <div className="inline-flex items-center justify-center mb-4">
                  <FileText className="w-8 h-8 text-green-500 mr-3" />
                  <h2 className="text-3xl font-bold text-foreground">
                    Download <span className="text-accent">Forms</span>
                  </h2>
                </div>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Access important documents and application forms
                </p>
              </motion.div>
              
              {/* Import DownloadFormsSection component here */}
              <div className="bg-gradient-to-r from-green-10 via-accent/5 to-green-10 rounded-2xl p-8 border border-green-20">
                <p className="text-center text-muted-foreground mb-6">
                  <Download className="w-5 h-5 inline mr-2" />
                  Get all your necessary forms and documents
                </p>
                <Link
                  to="/forms"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300 mx-auto"
                >
                  View All Forms
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}
        </motion.div>

        {/* Quick Access */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Quick Access
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <button
                onClick={() => setActiveSection("clubs")}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl"
              >
                <Users className="w-8 h-8 text-purple-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Student Clubs</h4>
                <p className="text-sm text-muted-foreground">Join clubs and activities</p>
              </button>
              
              <button
                onClick={() => setActiveSection("nss")}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl"
              >
                <Heart className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">NSS Activities</h4>
                <p className="text-sm text-muted-foreground">Community service</p>
              </button>
              
              <button
                onClick={() => setActiveSection("alumni")}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl"
              >
                <GraduationCap className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Alumni Network</h4>
                <p className="text-sm text-muted-foreground">Connect with graduates</p>
              </button>
              
              <button
                onClick={() => setActiveSection("forms")}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-xl"
              >
                <FileText className="w-8 h-8 text-green-500 mx-auto mb-3" />
                <h4 className="font-semibold text-foreground">Download Forms</h4>
                <p className="text-sm text-muted-foreground">Get documents</p>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StudentPortal;
