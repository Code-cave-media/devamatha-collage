import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, FileText, Calendar, Users, Clock, CheckCircle, AlertCircle, BookOpen, Award } from "lucide-react";

const formsData = [
  {
    id: 1,
    title: "Admission Form",
    description: "Apply for undergraduate and postgraduate programs. Fill out the form with required documents and submit before the deadline.",
    icon: FileText,
    category: "Academic",
    deadline: "June 30, 2024",
    downloadUrl: "/forms/admission-form.pdf",
    fileSize: "2.3 MB",
    required: true,
    image: "/img/form-admission.jpg"
  },
  {
    id: 2,
    title: "Scholarship Application",
    description: "Apply for merit-based and need-based scholarships. Submit your application with supporting documents.",
    icon: Award,
    category: "Financial Aid",
    deadline: "July 15, 2024",
    downloadUrl: "/forms/scholarship-form.pdf",
    fileSize: "1.8 MB",
    required: false,
    image: "/img/form-scholarship.jpg"
  },
  {
    id: 3,
    title: "Examination Form",
    description: "Download semester examination forms and hall tickets. Important for all registered students.",
    icon: BookOpen,
    category: "Academic",
    deadline: "Varies",
    downloadUrl: "/forms/exam-form.pdf",
    fileSize: "1.2 MB",
    required: true,
    image: "/img/form-exam.jpg"
  },
  {
    id: 4,
    title: "Certificate Request",
    description: "Request academic certificates, transcripts, and other official documents.",
    icon: FileText,
    category: "Administrative",
    deadline: "2 weeks processing",
    downloadUrl: "/forms/certificate-request.pdf",
    fileSize: "800 KB",
    required: false,
    image: "/img/form-certificate.jpg"
  },
  {
    id: 5,
    title: "Hostel Application",
    description: "Apply for college hostel accommodation. Limited seats available on first-come-first-served basis.",
    icon: Users,
    category: "Student Services",
    deadline: "August 15, 2024",
    downloadUrl: "/forms/hostel-form.pdf",
    fileSize: "1.5 MB",
    required: false,
    image: "/img/form-hostel.jpg"
  },
  {
    id: 6,
    title: "Library Card",
    description: "Apply for library membership and access to digital resources.",
    icon: BookOpen,
    category: "Student Services",
    deadline: "Ongoing",
    downloadUrl: "/forms/library-form.pdf",
    fileSize: "500 KB",
    required: false,
    image: "/img/form-library.jpg"
  },
  {
    id: 7,
    title: "Sports Registration",
    description: "Register for inter-collegiate sports tournaments and competitions.",
    icon: Award,
    category: "Extracurricular",
    deadline: "Varies by event",
    downloadUrl: "/forms/sports-form.pdf",
    fileSize: "900 KB",
    required: false,
    image: "/img/form-sports.jpg"
  },
  {
    id: 8,
    title: "Internship Application",
    description: "Apply for industry internships and training programs through college placement cell.",
    icon: Users,
    category: "Career Development",
    deadline: "Rolling basis",
    downloadUrl: "/forms/internship-form.pdf",
    fileSize: "1.1 MB",
    required: false,
    image: "/img/form-internship.jpg"
  }
];

const DownloadFormsSection = () => {
  const [forms, setForms] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    setForms(formsData);
  }, []);

  const categories = ["all", "Academic", "Financial Aid", "Administrative", "Student Services", "Extracurricular", "Career Development"];

  const filteredForms = selectedCategory === "all" 
    ? forms 
    : forms.filter(form => form.category === selectedCategory);

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Download <span className="text-accent">Forms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access important documents and applications for students
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-card/80 hover:bg-card text-muted-foreground hover:text-foreground"
                }`}
              >
                {category === "all" ? "All Forms" : category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Forms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredForms.map((form, index) => {
            const Icon = form.icon;
            return (
              <motion.div
                key={form.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                <div className="p-6">
                  {/* Form Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {form.title}
                        </h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          form.required 
                            ? "bg-red-100 text-red-600" 
                            : "bg-green-100 text-green-600"
                        }`}>
                          {form.required ? "Required" : "Optional"}
                        </span>
                      </div>
                    </div>
                    {form.deadline && (
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>Deadline: {form.deadline}</span>
                      </div>
                    )}
                  </div>

                  {/* Form Image */}
                  <div className="relative h-32 overflow-hidden rounded-lg mb-4">
                    <img
                      src={form.image}
                      alt={form.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>

                  {/* Form Description */}
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {form.description}
                  </p>

                  {/* Form Details */}
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <div className="flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Download className="w-4 h-4" />
                        <span>{form.fileSize}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <FileText className="w-4 h-4" />
                        <span>PDF</span>
                      </span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <button
                    onClick={() => window.open(form.downloadUrl, '_blank')}
                    className="w-full mt-4 px-4 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <Download className="w-4 h-4" />
                    Download Form
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <div className="bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Need Help with Forms?
              </h3>
              <p className="text-muted-foreground mb-6">
                Contact the student affairs office for assistance with form filling and document submission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-xl font-semibold hover:bg-accent/90 transition-colors duration-300">
                  <AlertCircle className="w-4 h-4 mr-2" />
                  Get Help
                </button>
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Form Guidelines
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadFormsSection;
