import { motion } from "framer-motion";
import { ExternalLink, GraduationCap, BookOpen, Lock, Building } from "lucide-react";

// Related links data
const relatedLinks = [
  {
    id: 1,
    name: "Academic Bank of Credit",
    description: "National Academic Depository for credit accumulation and transfer",
    url: "https://abc.gov.in/",
    logo: "https://www.abc.gov.in/assets/UX4G_images/ministry_of_education.svg",
    icon: GraduationCap,
    color: "primary"
  },
  {
    id: 2,
    name: "Swayam",
    description: "Online education platform offering free courses",
    url: "https://swayam.gov.in/",
    logo: "https://storage.googleapis.com/swayam2_central/assets/img/swayam_logo.png",
    icon: BookOpen,
    color: "accent"
  },
  {
    id: 3,
    name: "Digi Locker",
    description: "Secure digital wallet for storing and sharing documents",
    url: "https://digilocker.gov.in/",
    logo: "https://img1.digitallocker.gov.in/digilocker-landing-page/assets/img/DigilockerLogo.svg",
    icon: Lock,
    color: "secondary"
  },
  {
    id: 4,
    name: "Kannur University",
    description: "Official website of Kannur University",
    url: "https://kannuruniversity.ac.in/",
    logo: "https://kannuruniversity.ac.in/static/images/logo.png",
    icon: Building,
    color: "primary"
  }
];

const RelatedLinksSection = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Related Links</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full">
                  {/* Logo/Icon Section */}
                  <div className="flex items-center justify-center h-16 mb-4">
                    <img
                      src={link.logo}
                      alt={`${link.name} logo`}
                      className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform duration-300"
                      onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                        // Fallback to icon if logo fails to load
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallbackDiv = target.nextElementSibling as HTMLElement;
                        if (fallbackDiv) {
                          fallbackDiv.style.display = 'flex';
                        }
                      }}
                    />
                    {/* Fallback Icon */}
                    <div className="hidden items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 text-center">
                    {link.name}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 text-center">
                    {link.description}
                  </p>

                  {/* External Link Indicator */}
                  <div className="flex items-center justify-center gap-2 text-accent text-sm font-semibold">
                    <span>Visit</span>
                    <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl p-8 border border-accent/20">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Important Resources
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              Access these essential educational and administrative resources for enhanced learning experience and academic services.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedLinksSection;
