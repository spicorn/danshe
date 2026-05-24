import { Podcast } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  const currentYear = new Date().getFullYear();

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

  const linkVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.footer
      className="bg-[#0f0f1e] text-white py-8 md:py-12 border-t border-[#9333ea]/20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-4 gap-8 mb-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Brand */}
          <motion.div className="md:col-span-1" variants={itemVariants}>
            <motion.div className="flex items-center gap-2 mb-4" whileHover={{ scale: 1.05 }}>
              <span className="font-bold text-lg md:text-xl">UN</span>
              <div className="w-0.5 h-6 bg-[#FF0000]"></div>
              <span className="font-bold text-lg md:text-xl">REEL</span>
            </motion.div>
            <p className="text-gray-400 text-xs md:text-sm mb-4">
              Unreal stories with real impact
            </p>
            <div className="flex gap-3">
              {[0, 1, 2, 3].map((idx) => (
                <motion.a
                  key={idx}
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#FF0000] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Podcast className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Services</h4>
            <motion.ul className="space-y-2 text-xs md:text-sm text-gray-400" variants={containerVariants}>
              {[
                { label: "Brand Identity", href: "#services" },
                { label: "Photography", href: "#services" },
                { label: "Videography", href: "#services" },
                { label: "Web Design", href: "#services" },
                { label: "SEO & Marketing", href: "#services" },
              ].map((service, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <a
                    href={service.href}
                    className="hover:text-[#FF0000] transition-colors"
                  >
                    {service.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Company</h4>
            <motion.ul className="space-y-2 text-xs md:text-sm text-gray-400" variants={containerVariants}>
              {[
                { label: "About Us", href: "#about" },
                { label: "Pricing", href: "#pricing" },
                { label: "Portfolio", href: "#portfolio" },
                { label: "Case Studies", href: "#" },
                { label: "Contact", href: "#contact" },
              ].map((company, idx) => (
                <motion.li key={idx} variants={linkVariants}>
                  <a
                    href={company.href}
                    className="hover:text-[#FF0000] transition-colors"
                  >
                    {company.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="font-semibold mb-4 text-sm md:text-base">Stay Updated</h4>
            <p className="text-xs md:text-sm text-gray-400 mb-4">
              Get marketing tips and creative insights delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <motion.input
                type="email"
                placeholder="Your email"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-xs md:text-sm focus:outline-none focus:ring-2 focus:ring-[#FF0000]"
                whileFocus={{ scale: 1.02 }}
              />
              <motion.button
                className="bg-[#FF0000] px-4 py-2 rounded-lg hover:bg-[#cc0000] transition-colors text-xs md:text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Join
              </motion.button>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          className="pt-6 md:pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div>© {currentYear} UNREEL MEDIA. All rights reserved.</div>
          <motion.div className="flex gap-4 md:gap-6" variants={containerVariants}>
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ].map((policy, idx) => (
              <motion.a
                key={idx}
                href={policy.href}
                className="hover:text-[#FF0000] transition-colors"
                whileHover={{ x: 2 }}
                variants={linkVariants}
              >
                {policy.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
