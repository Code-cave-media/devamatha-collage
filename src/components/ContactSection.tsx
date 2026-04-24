import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="section-padding bg-secondary/50 overflow-hidden">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-2">Contact</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary">Get In Touch</span>
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: 80 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="h-1 bg-accent rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="space-y-5 mb-8">
              {[
                { icon: MapPin, label: "Address", value: "Devamatha Arts & Science College\nPaisakkary P O,\nPayyavoor Via,\nKannur Dt. – 670632" },
                { icon: Phone, label: "Phone", value: "9188702610" },
                { icon: Mail, label: "Email", value: "dmc@devamathacollege.ac.in" },
                { icon: Clock, label: "Office Hours", value: "Mon – Sat: 9:00 AM – 4:30 PM" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-card transition-colors duration-300 cursor-default"
                >
                  <motion.div
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="space-y-1">
                    <p className="text-sm font-semibold text-foreground">{item.label}</p>
                    <p className="text-sm text-muted-foreground whitespace-pre-line">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Important Contacts */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h4 className="font-display text-lg font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-3">
                {[
                  { role: "Administrator", phone: "918870260" },
                  { role: "Admission Nodal Officer", phone: "9400111818" }
                ].map((contact, i) => (
                  <motion.div
                    key={contact.role}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center justify-between p-3 rounded-lg bg-secondary/50"
                  >
                    <span className="text-sm font-medium text-foreground">{contact.role}</span>
                    <span className="text-sm text-accent font-semibold">{contact.phone}</span>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border/50">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="w-4 h-4 text-accent" />
                  <span>dmc@devamathacollege.ac.in</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden h-56 bg-muted border border-border shadow-lg"
            >
              <iframe
                title="Deva Matha College Location"
                src="https://maps.app.goo.gl/vh8KW1TJ2L6jzQiU6"
                className="w-full h-full border-0"
                allowFullScreen
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border space-y-5 relative overflow-hidden"
              whileHover={{ boxShadow: "0 20px 50px -12px hsl(213 65% 32% / 0.15)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-accent/5 rounded-bl-full" />

              <h3 className="font-display text-xl font-bold text-foreground mb-2">Send us a message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <motion.div whileFocus={{ scale: 1.02 }}>
                  <Input placeholder="Your Name" className="bg-secondary/50 focus:ring-2 focus:ring-accent/30 transition-all" />
                </motion.div>
                <Input type="email" placeholder="Email Address" className="bg-secondary/50 focus:ring-2 focus:ring-accent/30 transition-all" />
              </div>
              <Input placeholder="Subject" className="bg-secondary/50 focus:ring-2 focus:ring-accent/30 transition-all" />
              <Textarea placeholder="Your Message" rows={5} className="bg-secondary/50 focus:ring-2 focus:ring-accent/30 transition-all" />
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold gap-2">
                  {submitted ? (
                    <>
                      <CheckCircle className="w-4 h-4" /> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" /> Send Message
                    </>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
