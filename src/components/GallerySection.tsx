import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import heroImg from "@/assets/hero-campus.jpg";
import culturalImg from "@/assets/events-cultural.jpg";
import sportsImg from "@/assets/activities-sports.jpg";
import nssImg from "@/assets/activities-nss.jpg";

const images = [
  { src: heroImg, alt: "Campus Aerial View", span: "col-span-2 row-span-2" },
  { src: gallery1, alt: "College Building" },
  { src: gallery2, alt: "Graduation Ceremony" },
  { src: gallery3, alt: "Seminar Hall" },
  { src: gallery4, alt: "Campus Garden" },
  { src: culturalImg, alt: "Cultural Event" },
  { src: sportsImg, alt: "Sports Day" },
  { src: nssImg, alt: "NSS Community Service" },
];

const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="section-padding bg-secondary/50 overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Gallery</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Campus Life in Pictures</h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((img, i) => (
            <motion.div
              key={img.alt}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.03, zIndex: 10 }}
              className={`overflow-hidden rounded-xl cursor-pointer relative group ${img.span || ""}`}
              onClick={() => setSelectedImage(img.src)}
            >
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover aspect-square transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-college-navy/0 group-hover:bg-college-navy/40 transition-colors duration-300 flex items-center justify-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  className="text-primary-foreground font-medium text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-accent/80 px-3 py-1.5 rounded-full"
                >
                  View
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-college-navy/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-6 right-6 text-primary-foreground/80 hover:text-primary-foreground"
              whileHover={{ rotate: 90 }}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              src={selectedImage}
              alt="Gallery fullscreen"
              className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default GallerySection;
