import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Award, Code, HeartPulse, Truck, Briefcase, Globe, Landmark, ChevronRight, Brain, Cpu, Dna, GraduationCap } from "lucide-react";

// Assign icons and eligibility information to courses
const newGenCourses = [
  {
    name: "BBA Hospital Administration",
    id: "bba-hospital-administration",
    icon: HeartPulse,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  },
  {
    name: "B.Com Logistics & Supply Chain Management",
    id: "bcom-logistics",
    icon: Truck,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  },
  {
    name: "B.Sc AI & Data Science",
    id: "bsc-ai-data-science",
    icon: Brain,
    eligibility: "A pass in Higher Secondary Examination with Mathematics as one of the major subjects."
  },
  {
    name: "B.Com Business Analytics",
    id: "bcom-business-analytics",
    icon: Cpu,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  }
];

const ugCourses = [
  {
    name: "BA English",
    id: "ba-english",
    icon: BookOpen,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  },
  {
    name: "Bachelor of Business Administration",
    id: "bba",
    icon: Briefcase,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  },
  {
    name: "Bachelor Computer Applications",
    id: "bca",
    icon: Code,
    eligibility: "A Pass in Higher Secondary Examination of the State or an Examination accepted by the University as equivalent thereto with Computer Science/Mathematics/Computer Application/Informatics Practice as one of the subjects."
  },
  {
    name: "B.Com Co-Operation",
    id: "bcom-cooperation",
    icon: Landmark,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  },
  {
    name: "B.Com Computer Application",
    id: "bca",
    icon: Code,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  },
  {
    name: "B.Com Finance",
    id: "bcom-finance",
    icon: Landmark,
    eligibility: "A pass in Higher Secondary Examination of the state or an Examination accepted by the University as equivalent thereto."
  }
];

const pgCourses = [
  {
    name: "MA English",
    id: "ma-english",
    icon: Globe,
    eligibility: "B.A. English/Functional English with not less than 45% marks or equivalent GPA excluding subsidiaries/Complementary Courses. B.A./B.Sc. with English as Common Course with not less than 45% marks"
  },
  {
    name: "M.Com Finance",
    id: "mcom-finance",
    icon: Landmark,
    eligibility: "U.G. Degree in B.Com/B.B.A./B.B.M/B.B.S with not less than 45% marks in Part III or equivalent GPA for Core and Complementary Courses"
  }
];

const CoursesSection = () => {
  const [activeTab, setActiveTab] = useState<"newgen" | "UG" | "PG">("newgen");
  const navigate = useNavigate();

  const currentCourses = activeTab === "newgen" ? newGenCourses : activeTab === "UG" ? ugCourses : pgCourses;

  return (
    <section id="courses" className="pt-16 pb-2 bg-background relative overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] left-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px] mix-blend-multiply" />
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center mb-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Programmes Offered</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Custom Segmented Control (Tabs) */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-secondary/80 p-1.5 rounded-2xl backdrop-blur-md border border-border/50 shadow-sm">
            <button
              onClick={() => setActiveTab("newgen")}
              className={`relative px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "newgen" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "newgen" && (
                <motion.div
                  layoutId="activeTabBox"
                  className="absolute inset-0 bg-background rounded-xl shadow-md border border-border/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Brain className="w-4 h-4" /> New Gen Programmes
              </span>
            </button>
            <button
              onClick={() => setActiveTab("UG")}
              className={`relative px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "UG" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "UG" && (
                <motion.div
                  layoutId="activeTabBox"
                  className="absolute inset-0 bg-background rounded-xl shadow-md border border-border/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> UG Programmes
              </span>
            </button>
            <button
              onClick={() => setActiveTab("PG")}
              className={`relative px-6 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeTab === "PG" ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {activeTab === "PG" && (
                <motion.div
                  layoutId="activeTabBox"
                  className="absolute inset-0 bg-background rounded-xl shadow-md border border-border/30"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" /> PG Programmes
              </span>
            </button>
          </div>
        </div>

        {/* Course Cards Grid */}
        <div className="min-h-[300px]">
          <div
            className={`grid gap-6 ${activeTab === "UG" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : activeTab === "PG" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"}`}
          >
            {currentCourses.map((course) => {
              const Icon = course.icon;
              return (
                <a
                  href="/courses"
                  key={course.name}
                  className="flex flex-col bg-gradient-to-br from-white to-gray-50 hover:from-accent/5 hover:to-primary/5 backdrop-blur-sm border border-gray-200 hover:border-accent/60 rounded-3xl p-7 transition-all duration-300 cursor-pointer overflow-hidden relative shadow-sm hover:shadow-xl hover:-translate-y-1"
                >
                  {/* Hover internal gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  <div className="absolute top-0 right-0 p-5 opacity-0 hover:opacity-100 transition-all translate-x-4 hover:translate-x-0 duration-300">
                    <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                      <ChevronRight className="w-4 h-4 text-accent" />
                    </div>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent to-primary text-white flex items-center justify-center mb-4 hover:scale-110 hover:shadow-lg transition-all duration-300 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-lg font-bold text-foreground mb-3 hover:text-accent transition-colors duration-300">
                    {course.name}
                  </h3>

                  <div className="flex-grow">
                    <div className="bg-accent/5 rounded-lg p-3 mb-4">
                      <p className="text-xs text-muted-foreground mb-1 font-semibold">Eligibility</p>
                      <p className="text-xs text-foreground leading-relaxed line-clamp-3">
                        {course.eligibility}
                      </p>
                    </div>
                  </div>

                    <div className="mt-auto">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/course/${course.id}`);
                        }}
                        className="w-full bg-gradient-to-r from-accent to-primary text-white hover:from-accent/90 hover:to-primary/90 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md hover:scale-105"
                      >
                        Know More
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
