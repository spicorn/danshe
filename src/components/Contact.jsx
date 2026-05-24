import { Mail, Phone, Send } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(
      "Thank you for your interest! We'll get back to you within 24 hours.",
    );
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="contact" className="py-12 md:py-24 bg-[#0f0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          <motion.div className="inline-block px-4 py-1.5 bg-[#9333ea]/20 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
            <span className="text-[#06b6d4] text-xs md:text-sm font-medium">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Join Our Gaming Community?
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact us to book your gaming sessions, join tournaments, or rent our streaming studio. Let's level up together!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form */}
          <motion.div
            className="bg-[#1a1a2e] rounded-2xl p-6 md:p-8 shadow-sm border border-[#9333ea]/30"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: "name", label: "Full Name *", placeholder: "Dancel Mautsa", type: "text" },
                { name: "email", label: "Email Address *", placeholder: "unreel@gmail.com", type: "email" },
                { name: "company", label: "Company Name", placeholder: "Your Company", type: "text" },
              ].map((field, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label htmlFor={field.name} className="block text-sm font-medium mb-2">
                    {field.label}
                  </label>
                  <motion.input
                    type={field.type}
                    id={field.name}
                    name={field.name}
                    value={formData[field.name]}
                    onChange={handleChange}
                    required={field.name !== "company"}
                    className="w-full px-4 py-3 rounded-lg border border-[#9333ea]/30 bg-[#0f0f1e] text-white focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent"
                    placeholder={field.placeholder}
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project *
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#9333ea]/30 bg-[#0f0f1e] text-white focus:outline-none focus:ring-2 focus:ring-[#9333ea] focus:border-transparent resize-none"
                  placeholder="I'm interested in..."
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-[#9333ea] text-white px-8 py-4 rounded-lg hover:bg-[#7e22ce] transition-all flex items-center justify-center gap-2 font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-4 md:mb-6">Let's Connect</h3>
              <p className="text-sm md:text-base text-gray-300 mb-6 md:mb-8">
                Ready to join the ultimate gaming arena? Reach out to us to book your first session, inquire about membership, or rent our professional streaming studio.
              </p>
            </motion.div>

            <motion.div className="space-y-4 md:space-y-6" variants={containerVariants}>
              {[
                { icon: Mail, title: "Email Us", links: ["hello@unreelmedia.com"] },
                { icon: Phone, title: "Call Us", links: ["+263 71 753 1571", "+263 78 782 8366"] },
              ].map((contact, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-start gap-4"
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#9333ea]/20 rounded-lg flex items-center justify-center shrink-0"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                  >
                    <contact.icon className="w-6 h-6 text-[#06b6d4]" />
                  </motion.div>
                  <div>
                    <div className="font-semibold mb-1 text-sm md:text-base">{contact.title}</div>
                    {contact.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={contact.icon === Mail ? `mailto:${link}` : `tel:${link}`}
                        className="text-xs md:text-sm text-gray-300 hover:text-[#06b6d4] transition-colors block"
                      >
                        {link}
                      </a>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Box */}
            <motion.div
              className="bg-[#1a1a2e] text-white rounded-2xl p-6 md:p-8 mt-6 md:mt-8 border border-[#9333ea]/30"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -8 }}
            >
              <h4 className="text-lg md:text-xl font-bold mb-3">Try Before You Commit</h4>
              <p className="text-xs md:text-sm text-gray-300 mb-6">
                Not ready for a retainer? Start with our discounted one-month
                trial offer and experience the UNREEL difference.
              </p>
              <motion.button
                className="bg-[#FF0000] text-white px-6 py-3 rounded-lg hover:bg-[#cc0000] transition-all font-medium text-sm md:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn About Trial
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
