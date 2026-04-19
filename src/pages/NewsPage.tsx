import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ArrowRight, Users, Award, BookOpen, Microscope, Palette } from "lucide-react";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";

// Sample news and events data
const newsEvents = [
  {
    id: 1,
    type: "news",
    title: "University Rank Holders 2023 - Outstanding Achievement",
    date: "March 10, 2024",
    description: "Our students achieve outstanding results in university examinations with multiple rank holders across various programmes. The college celebrates this remarkable achievement as a testament to our commitment to academic excellence and student success.",
    image: "/img/Gallery/S61A9834.jpg",
    category: "Achievement",
    icon: Award,
    featured: true
  },
  {
    id: 2,
    type: "event",
    title: "Annual Sports Meet 2024",
    date: "March 15, 2024",
    time: "9:00 AM",
    location: "College Ground",
    description: "Join us for an exciting day of athletic competitions and sportsmanship.",
    image: "/img/Gallery/IMG_0743.jpg",
    category: "Sports",
    icon: Users
  },
  {
    id: 3,
    type: "event",
    title: "Science Exhibition 2024",
    date: "March 20, 2024",
    time: "10:00 AM",
    location: "College Auditorium",
    description: "Innovative projects and research presentations by our students.",
    image: "/img/Gallery/2002386514823039363ffd27e0a1f3b1.jpg",
    category: "Academic",
    icon: Microscope
  },
  {
    id: 4,
    type: "news",
    title: "New Computer Lab Inauguration",
    date: "March 8, 2024",
    description: "State-of-the-art computer lab with latest technology and equipment.",
    image: "/img/Gallery/2f56ba25d0a843f685bb9fa3e9073f35.jpg",
    category: "Infrastructure",
    icon: BookOpen
  },
  {
    id: 5,
    type: "event",
    title: "Cultural Fest - Kalakriti 2024",
    date: "March 25, 2024",
    time: "2:00 PM",
    location: "College Auditorium",
    description: "Annual cultural festival showcasing student talents in arts and music.",
    image: "/img/Gallery/4d6b759df1deedef308d017890e1076a.jpg",
    category: "Cultural",
    icon: Palette
  },
  {
    id: 6,
    type: "news",
    title: "MOU Signed with Industry Partner",
    date: "March 5, 2024",
    description: "Strategic partnership for internship and placement opportunities.",
    image: "/img/Gallery/52acc30ed63802b40674aa03b3f21e9d.jpg",
    category: "Partnership",
    icon: Users
  }
];

const NewsPage = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 border border-primary-foreground/30">
              <span className="text-sm font-medium">Home &gt; News & Events</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-4xl md:text-6xl font-black tracking-tighter leading-none mb-6"
          >
            College News & Events
          </motion.h1>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120,768,120,672,120,576,120,480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* News & Events Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[15%] left-[-10%] w-[40%] h-[40%] bg-accent/3 rounded-full blur-[100px]" />
          <div className="absolute bottom-[15%] right-[-10%] w-[40%] h-[40%] bg-primary/3 rounded-full blur-[100px]" />
        </div>

        <div className="container relative z-10">
          {/* News & Events Layout */}
          <div className="space-y-8">
            {/* Featured News Item */}
            <div
              className="relative bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl overflow-hidden border border-accent/20 shadow-2xl"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Featured Image */}
                <div className="relative h-64 lg:h-96">
                  <img
                    src={newsEvents.find(item => item.featured)?.image}
                    alt={newsEvents.find(item => item.featured)?.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Featured Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-accent font-semibold">{newsEvents.find(item => item.featured)?.date}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    {newsEvents.find(item => item.featured)?.title}
                  </h3>

                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    {newsEvents.find(item => item.featured)?.description}
                  </p>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-accent/20 blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-primary/20 blur-xl" />
            </div>

            {/* Regular News & Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsEvents.filter(item => !item.featured).map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card/50 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                  >
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-foreground mb-3 hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>

                      <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                        {item.description}
                      </p>

                      {/* Date */}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{item.date}</span>
                      </div>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default NewsPage;
