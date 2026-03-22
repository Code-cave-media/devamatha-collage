import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import AdmissionsSection from "@/components/AdmissionsSection";
import EventsSection from "@/components/EventsSection";
import GallerySection from "@/components/GallerySection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";
import CollegeFooter from "@/components/CollegeFooter";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <AboutSection />
    <CoursesSection />
    <AdmissionsSection />
    <EventsSection />
    <GallerySection />
    <ActivitiesSection />
    <ContactSection />
    <CollegeFooter />
  </div>
);

export default Index;
