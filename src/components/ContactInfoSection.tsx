import { motion } from "framer-motion";
import { Phone, Mail, User, MessageSquare } from "lucide-react";

const ContactInfoSection = () => {
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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Get In Touch</span>
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="h-1 bg-accent rounded-full mx-auto"
          />
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {/* Administrator Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="group"
          >
            <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                <User className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Administrator
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>918870260</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Admission Nodal Officer Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="group"
          >
            <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                <MessageSquare className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Admission Nodal Officer
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>9400111818</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="group"
          >
            <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                <Mail className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Email
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="break-all">dmc@devamathacollege.ac.in</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* General Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="group"
          >
            <div className="relative bg-card/60 hover:bg-card/80 backdrop-blur-sm border border-border/60 hover:border-accent/40 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:-translate-y-2 h-full">
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/10 group-hover:bg-accent/20 transition-colors duration-300 mb-4">
                <Phone className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                Office
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="w-4 h-4 text-accent" />
                  <span>9188702610</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-accent/10 via-primary/5 to-accent/10 rounded-3xl p-8 border border-accent/20">
            <h4 className="text-lg font-semibold text-foreground mb-3">
              Reach Out to Us
            </h4>
            <p className="text-muted-foreground leading-relaxed">
              For admissions, general inquiries, or any assistance, please feel free to contact us using the information provided above.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
