import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Camera, Heart, Eye, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeGallery = () => {
  // Sample gallery data - using local Gallery images
  const galleryImages = [
    {
      id: 1,
      thumbnail: "/img/Gallery/IMG_0743.jpg",
      title: "College Campus",
      category: "Campus",
      date: "2024-03-15",
      likes: 234
    },
    {
      id: 2,
      thumbnail: "/img/Gallery/S61A9834.jpg",
      title: "Campus View",
      category: "Campus",
      date: "2024-03-10",
      likes: 456
    },
    {
      id: 3,
      thumbnail: "/img/Gallery/2002386514823039363ffd27e0a1f3b1.jpg",
      title: "College Building",
      category: "Campus",
      date: "2024-03-08",
      likes: 189
    },
    {
      id: 4,
      thumbnail: "/img/Gallery/2f56ba25d0a843f685bb9fa3e9073f35.jpg",
      title: "Campus Life",
      category: "Events",
      date: "2024-03-05",
      likes: 321
    },
    {
      id: 5,
      thumbnail: "/img/Gallery/4d6b759df1deedef308d017890e1076a.jpg",
      title: "College Event",
      category: "Events",
      date: "2024-03-01",
      likes: 567
    },
    {
      id: 6,
      thumbnail: "/img/Gallery/52acc30ed63802b40674aa03b3f21e9d.jpg",
      title: "Academic Activity",
      category: "Academics",
      date: "2024-02-28",
      likes: 278
    },
    {
      id: 7,
      thumbnail: "/img/Gallery/70c9d5947f8f125ba7c322f86f46e62f.jpg",
      title: "Sports Activity",
      category: "Sports",
      date: "2024-02-25",
      likes: 412
    },
    {
      id: 8,
      thumbnail: "/img/Gallery/9f3970a02bb4ea51782149ce39daa9b2.jpg",
      title: "Cultural Event",
      category: "Events",
      date: "2024-02-20",
      likes: 298
    },
    {
      id: 9,
      thumbnail: "/img/Gallery/b1016e3a51bd4a19761c853e4741964b.jpg",
      title: "Campus View",
      category: "Campus",
      date: "2024-02-18",
      likes: 345
    },
    {
      id: 10,
      thumbnail: "/img/Gallery/b1c5706e807659d82f261ea2784acac0.jpg",
      title: "College Facility",
      category: "Facilities",
      date: "2024-02-15",
      likes: 267
    },
    {
      id: 11,
      thumbnail: "/img/Gallery/c3344a007c23c5037a5bc717aa181930.jpg",
      title: "Campus Landscape",
      category: "Campus",
      date: "2024-02-12",
      likes: 423
    },
    {
      id: 12,
      thumbnail: "/img/Gallery/dc9712ab40d0670125c1f8a762491038.jpg",
      title: "Student Activity",
      category: "Events",
      date: "2024-02-10",
      likes: 389
    },
    {
      id: 13,
      thumbnail: "/img/Gallery/e642b61029eca7ac8f9ee7adb67abb12.jpg",
      title: "Academic Building",
      category: "Academics",
      date: "2024-02-08",
      likes: 456
    }
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...galleryImages, ...galleryImages];

  return (
    <section className="w-full bg-background relative -mt-4">
      {/* Section Heading */}
      <div className="container px-4 py-4 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">College Snapshots</span>
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="h-1 bg-accent rounded-full mx-auto mb-6"
        />
      </div>

      {/* Auto-scrolling Gallery Strip */}
      <div className="relative w-full h-48 md:h-56 overflow-hidden">
        <div
          className="flex gap-0"
          style={{
            animation: 'scroll 20s linear infinite'
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={`${image.id}-${index}`}
              className="flex-shrink-0 w-80 h-48 md:h-56 relative overflow-hidden group cursor-pointer"
              onClick={() => window.location.href = '/gallery'}
            >
              <img
                src={image.thumbnail}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CTA Button on the right side */}
      <div className="absolute right-0 top-28 h-[calc(100%-7rem)] w-48 md:w-56 bg-gradient-to-l from-black/70 via-black/50 to-transparent flex items-center justify-center z-10">
        <a
          href="/gallery"
          className="bg-white text-black hover:bg-gray-100 font-bold px-4 py-2 md:px-6 md:py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2 text-sm md:text-base border-2 border-white/30 whitespace-nowrap"
          style={{ marginRight: '60px' }}
        >
          <Camera className="w-4 h-4 md:w-5 md:h-5" />
          View all
          <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
        </a>
      </div>
      
      {/* Add CSS animation to head */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${galleryImages.length * 320}px);
            }
          }
        `
      }} />
    </section>
  );
};

export default HomeGallery;
