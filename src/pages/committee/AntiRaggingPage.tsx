import { motion } from "framer-motion";
import { ArrowLeft, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import CollegeFooter from "@/components/CollegeFooter";
import { useNavigate } from "react-router-dom";

const AntiRaggingPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center pt-8 bg-gradient-to-br from-red-600 to-red-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative z-10 container max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button
              variant="ghost"
              className="mb-6 text-white hover:bg-white/20"
              onClick={() => navigate("/committees")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Committees
            </Button>
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold">
                Anti Ragging Committee
              </h1>
            </div>
                      </motion.div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20">
            <path fill="hsl(var(--background))" d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120,768,120,672,120,576,120,480,120,384,120,288,120,192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-background">
        <div className="container max-w-4xl mx-auto px-4 space-y-8">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-8 border border-border shadow-lg"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
              Anti Ragging Committee
            </h2>
          </motion.div>

          {/* Committee Members */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20 rounded-2xl p-8 border border-red-200 dark:border-red-800"
          >
            <h2 className="font-heading text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-red-600" />
              Committee Members
            </h2>
            
            {/* Coordinator */}
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-1">Coordinator</h3>
                  <p className="text-muted-foreground">Manu Joseph</p>
                </div>
              </div>
            </div>

            {/* Members */}
            <div className="bg-white dark:bg-card p-6 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg text-foreground mb-4">Members</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "Jismy John",
                  "Panchayath President",
                  "Panchayath Member of the ward",
                  "SI of Police",
                  "College Union Chairman",
                  "College Union Vice Chairman"
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-red-50 dark:bg-red-950/20 rounded-lg">
                    <div className="w-8 h-8 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-red-700" />
                    </div>
                    <span className="text-sm text-foreground font-medium">{member}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CollegeFooter />
    </>
  );
};

export default AntiRaggingPage;
