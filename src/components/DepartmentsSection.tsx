import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Users, Award, Briefcase, Monitor, TrendingUp, Trophy, Languages } from "lucide-react";

// Department data from DepartmentsPage
const departments = [
  {
    id: "english",
    name: "English",
    description: "Department of English Language and Literature",
    icon: BookOpen,
    color: "primary",
    image: "https://c8.alamy.com/comp/2WXXEYY/library-bookshelf-with-book-titles-by-english-historical-detective-author-anne-perry-juliet-marion-hulme-popular-bestselling-fiction-books-2WXXEYY.jpg",
    faculty: 12,
    events: 8
  },
  {
    id: "malayalam",
    name: "Malayalam",
    description: "Department of Malayalam Language and Literature",
    icon: Languages,
    color: "accent",
    image: "https://images.pexels.com/photos/2908984/pexels-photo-2908984.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    faculty: 8,
    events: 6
  },
  {
    id: "hindi",
    name: "Hindi",
    description: "Department of Hindi Language and Literature",
    icon: Languages,
    color: "secondary",
    image: "https://i0.wp.com/journal.bookwormgoa.in/wp-content/uploads/2017/12/Zia-Library-6-e1514650089629.jpg?resize=810%2C536",
    faculty: 6,
    events: 4
  },
  {
    id: "management",
    name: "Management Studies",
    description: "Department of Business Administration and Management",
    icon: Briefcase,
    color: "primary",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&h=600&fit=crop",
    faculty: 10,
    events: 12
  },
  {
    id: "computer",
    name: "Computer Application",
    description: "Department of Computer Science and Applications",
    icon: Monitor,
    color: "accent",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&h=600&fit=crop",
    faculty: 15,
    events: 10
  },
  {
    id: "commerce",
    name: "Commerce",
    description: "Department of Commerce and Finance",
    icon: TrendingUp,
    color: "secondary",
    image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?q=80&w=800&h=600&fit=crop",
    faculty: 18,
    events: 15
  },
  {
    id: "physical-education",
    name: "Physical Education",
    description: "Department of Physical Education and Sports",
    icon: Trophy,
    color: "primary",
    image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&h=600&fit=crop",
    faculty: 5,
    events: 20
  },
  {
    id: "non-teaching",
    name: "Non Teaching Staff",
    description: "Administrative and Support Staff",
    icon: Users,
    color: "accent",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=800&h=600&fit=crop",
    faculty: 25,
    events: 5
  }
];

const DepartmentsSection = () => {
  return (
    <section id="departments" className="-mt-4 pt-0 pb-12 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-accent/3 rounded-full blur-[100px]" />
        <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[100px]" />
      </div>

      <div className="container relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Departments</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Departments Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {departments.map((dept, index) => (
            <motion.div
              key={dept.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-3">
                {/* Image Section */}
                <div className="relative h-32 overflow-hidden">
                  <img
                    src={dept.image}
                    alt={dept.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>

                {/* Content Section */}
                <div className="p-4">
                  <h3 className="text-xl font-bold text-foreground text-center group-hover:text-accent transition-colors duration-300">
                    {dept.name}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DepartmentsSection;
