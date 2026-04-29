import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Lenis from "lenis";
import Index from "./pages/Index";
import CoursesPage from "./pages/CoursesPage";
import AboutPage from "./pages/AboutPage";
import DepartmentsPage from "./pages/DepartmentsPage";
import DepartmentDetailPage from "./pages/DepartmentDetailPage";
import GalleryPage from "./pages/GalleryPage";
import StudentsCornerPage from "./pages/StudentsCornerPage";
import AdmissionPage from "./pages/AdmissionPage";
import IQACPage from "./pages/IQACPage";
import NewsPage from "./pages/NewsPage";
import FacilitiesPage from "./pages/FacilitiesPage";
import CourseDetailPage from "./pages/CourseDetailPage";
import CommitteesPage from "./pages/CommitteesPage";
import AntiRaggingPage from "./pages/committee/AntiRaggingPage";
import SpecialProtectionPage from "./pages/committee/SpecialProtectionPage";
import WomenAntiHarassmentPage from "./pages/committee/WomenAntiHarassmentPage";
import StudentsGrievancePage from "./pages/committee/StudentsGrievancePage";
import InternshipMonitoringPage from "./pages/committee/InternshipMonitoringPage";
import CareerGuidancePage from "./pages/committee/CareerGuidancePage";
import StudentsWelfarePage from "./pages/committee/StudentsWelfarePage";
import NotFound from "./pages/NotFound";
import { LoadingScreen } from "./components/LoadingScreen";

const queryClient = new QueryClient();

let lenisInstance: Lenis | null = null;

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (lenisInstance) {
      lenisInstance.scrollTo(0, { immediate: true });
    }
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};

const App = () => {
  useEffect(() => {
    lenisInstance = new Lenis({
      autoRaf: true,
    });

    // Provide a fallback raf loop just in case autoRaf fails or for custom logic
    function raf(time: number) {
      lenisInstance!.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisInstance!.destroy();
      lenisInstance = null;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <LoadingScreen />
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/course/:courseId" element={<CourseDetailPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/departments" element={<DepartmentsPage />} />
            <Route path="/departments/:departmentId" element={<DepartmentDetailPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/students-corner" element={<StudentsCornerPage />} />
            <Route path="/admission" element={<AdmissionPage />} />
            <Route path="/iqac" element={<IQACPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
            <Route path="/committees" element={<CommitteesPage />} />
            <Route path="/committee/anti-ragging" element={<AntiRaggingPage />} />
            <Route path="/committee/special-protection" element={<SpecialProtectionPage />} />
            <Route path="/committee/women-anti-harassment" element={<WomenAntiHarassmentPage />} />
            <Route path="/committee/students-grievance" element={<StudentsGrievancePage />} />
            <Route path="/committee/internship-monitoring" element={<InternshipMonitoringPage />} />
            <Route path="/committee/career-guidance" element={<CareerGuidancePage />} />
            <Route path="/committee/students-welfare" element={<StudentsWelfarePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
