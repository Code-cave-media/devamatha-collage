import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Clock, CheckCircle, Star, TrendingUp, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";

// Programme data
const programmes = [
  {
    id: "ba-english",
    title: "BA English",
    category: "Undergraduate",
    duration: "3 Years",
    icon: BookOpen,
    color: "primary",
    overview: "Comprehensive study of English language and literature, developing critical thinking, communication skills, and cultural awareness.",
    scope: "Teaching, Journalism, Content Writing, Publishing, Civil Services, Corporate Communications, Public Relations",
    eligibility: "10+2 with minimum 50% marks in English and overall aggregate",
    highlights: ["Literature Studies", "Communication Skills", "Critical Analysis", "Cultural Studies"]
  },
  {
    id: "bba",
    title: "BBA",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Briefcase,
    color: "accent",
    overview: "Foundation in business administration, management principles, and entrepreneurial skills for modern business challenges.",
    scope: "Management Trainee, Business Analyst, Marketing Executive, HR Executive, Entrepreneur, Banking Sector",
    eligibility: "10+2 with minimum 50% marks in any stream",
    highlights: ["Business Fundamentals", "Management Skills", "Leadership Training", "Entrepreneurship"]
  },
  {
    id: "bca",
    title: "BCA",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Target,
    color: "secondary",
    overview: "Comprehensive computer applications programme covering programming, software development, and IT infrastructure management.",
    scope: "Software Developer, System Analyst, IT Consultant, Web Developer, Database Administrator, Network Engineer",
    eligibility: "10+2 with Mathematics and minimum 50% marks",
    highlights: ["Programming Languages", "Software Development", "Database Management", "Web Technologies"]
  },
  {
    id: "bcom-cooperation",
    title: "B.Com Co-Operation",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Users,
    color: "primary",
    overview: "Specialized commerce programme focusing on cooperative principles, rural development, and financial management.",
    scope: "Cooperative Banks, Rural Development, Financial Services, Government Sector, NGO Management",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: ["Cooperative Principles", "Rural Banking", "Financial Management", "Development Studies"]
  },
  {
    id: "bcom-ca",
    title: "B.Com Computer Application",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Target,
    color: "accent",
    overview: "Integration of commerce education with computer applications, preparing students for the digital business environment.",
    scope: "Accounting Software, E-commerce, Financial Analysis, IT Auditing, Business Intelligence",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: ["Accounting Software", "E-commerce", "Financial Systems", "Business Analytics"]
  },
  {
    id: "bcom-finance",
    title: "B.Com Finance",
    category: "Undergraduate",
    duration: "3 Years",
    icon: TrendingUp,
    color: "secondary",
    overview: "Advanced commerce programme with specialization in financial management, investment analysis, and corporate finance.",
    scope: "Banking, Investment Banking, Financial Planning, Corporate Finance, Insurance, Stock Market",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: ["Financial Management", "Investment Analysis", "Corporate Finance", "Risk Management"]
  },
  {
    id: "bcom-ba",
    title: "B.Com Business Analytics",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Target,
    color: "primary",
    overview: "Modern commerce programme combining business knowledge with data analytics skills for data-driven decision making.",
    scope: "Business Analyst, Data Analyst, Financial Analyst, Market Research, Consulting",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: ["Data Analytics", "Business Intelligence", "Statistical Analysis", "Predictive Modeling"]
  },
  {
    id: "bba-ha",
    title: "BBA Hospital Administration",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Users,
    color: "accent",
    overview: "Specialized management programme focusing on healthcare administration, hospital operations, and medical services management.",
    scope: "Hospital Administrator, Healthcare Manager, Medical Services, Healthcare Consulting, Pharma Sector",
    eligibility: "10+2 with minimum 50% marks in any stream",
    highlights: ["Healthcare Management", "Hospital Operations", "Medical Services", "Healthcare Systems"]
  },
  {
    id: "bcom-logistics",
    title: "B.Com Logistics & Supply Chain Management",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Briefcase,
    color: "secondary",
    overview: "Specialized commerce programme focusing on logistics, supply chain operations, and global trade management.",
    scope: "Logistics Manager, Supply Chain Analyst, Operations Manager, Procurement Executive, Export-Import",
    eligibility: "10+2 with Commerce and minimum 50% marks",
    highlights: ["Logistics Management", "Supply Chain", "Global Trade", "Operations Management"]
  },
  {
    id: "bsc-ai",
    title: "B.Sc AI & Data Science",
    category: "Undergraduate",
    duration: "3 Years",
    icon: Target,
    color: "primary",
    overview: "Cutting-edge programme in artificial intelligence and data science, covering machine learning, deep learning, and big data analytics.",
    scope: "AI Engineer, Data Scientist, Machine Learning Engineer, Research Scientist, AI Consultant",
    eligibility: "10+2 with Mathematics and Computer Science, minimum 60% marks",
    highlights: ["Machine Learning", "Deep Learning", "Big Data Analytics", "AI Applications"]
  },
  {
    id: "ma-english",
    title: "MA English",
    category: "Postgraduate",
    duration: "2 Years",
    icon: BookOpen,
    color: "accent",
    overview: "Advanced study of English literature, linguistics, and critical theory, developing scholarly research and analytical skills.",
    scope: "Teaching, Research, Content Writing, Publishing, Civil Services, Academic Administration",
    eligibility: "BA English with minimum 55% marks",
    highlights: ["Advanced Literature", "Literary Theory", "Research Methodology", "Critical Analysis"]
  },
  {
    id: "mcom-finance",
    title: "M.Com Finance",
    category: "Postgraduate",
    duration: "2 Years",
    icon: TrendingUp,
    color: "secondary",
    overview: "Advanced study in financial management, investment analysis, and corporate finance with research and practical applications.",
    scope: "Financial Manager, Investment Analyst, Finance Consultant, Banking Sector, Teaching",
    eligibility: "B.Com with minimum 55% marks",
    highlights: ["Advanced Finance", "Investment Strategies", "Financial Research", "Corporate Finance"]
  }
];

const ProgrammeCard = ({ programme, index, navigate }: { programme: typeof programmes[0]; index: number; navigate: any }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px -12px hsl(var(--primary) / 0.15)" }}
      className="bg-card rounded-2xl border border-border shadow-lg overflow-hidden group"
    >
      {/* Header */}
      <div className={`p-6 bg-gradient-to-r from-${programme.color}/10 to-${programme.color}/5 border-b border-border`}>
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-${programme.color}/20 rounded-xl flex items-center justify-center">
            <programme.icon className={`w-6 h-6 text-${programme.color}`} />
          </div>
          <div className="text-right">
            <span className="text-xs font-semibold text-${programme.color} uppercase tracking-wide">
              {programme.category}
            </span>
            <p className="text-sm text-muted-foreground">{programme.duration}</p>
          </div>
        </div>
        
        <h3 className="font-heading text-xl font-bold text-foreground mb-2 group-hover:text-${programme.color} transition-colors">
          {programme.title}
        </h3>
        
        <p className="text-muted-foreground text-sm">
          {programme.overview}
        </p>
      </div>

      {/* Always Visible Content */}
      <div className="p-6 space-y-4">
        {/* Scope */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Target className="w-4 h-4 text-accent" />
            Career Scope
          </h4>
          <p className="text-sm text-muted-foreground">{programme.scope}</p>
        </div>

        {/* Eligibility */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-accent" />
            Eligibility
          </h4>
          <p className="text-sm text-muted-foreground">{programme.eligibility}</p>
        </div>

        {/* Highlights */}
        <div>
          <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
            <Star className="w-4 h-4 text-accent" />
            Highlights
          </h4>
          <div className="flex flex-wrap gap-2">
            {programme.highlights.map((highlight, idx) => (
              <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full">
                {highlight}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-background border-t border-border">
        <div className="flex items-center justify-between">
          <Button
            size="sm"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/course/${programme.id}`);
            }}
          >
            Know More
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

const CoursesPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const filteredProgrammes = programmes.filter(programme => {
    if (activeTab === "all") return true;
    if (activeTab === "ug") return programme.category === "Undergraduate";
    if (activeTab === "pg") return programme.category === "Postgraduate";
    return true;
  });

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-2 sm:px-3 md:px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30">
              <BookOpen className="w-4 h-4" />
              <span className="text-sm font-medium">Academic Programmes</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-bold mb-6"
          >
            Programmes
          </motion.h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Programmes Overview */}
      <section className="section-padding bg-background">
        <div className="container max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Choose Your Programme
            </h2>
            <div className="w-20 h-1 bg-accent rounded-full mx-auto"></div>
          </motion.div>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex p-1 bg-card rounded-xl border border-border shadow-lg">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "all"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Programmes
              </button>
              <button
                onClick={() => setActiveTab("ug")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "ug"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Undergraduate
              </button>
              <button
                onClick={() => setActiveTab("pg")}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === "pg"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Postgraduate
              </button>
            </div>
          </div>

          {/* Programme Cards */}
          <div className="space-y-8 mb-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 align-start justify-items-center max-w-7xl mx-auto px-2 sm:px-3 md:px-4">
                  {filteredProgrammes.map((programme, index) => (
                    <ProgrammeCard key={programme.id} programme={programme} index={index} navigate={navigate} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default CoursesPage;
