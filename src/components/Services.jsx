import {
  Camera,
  Video,
  Globe,
  TrendingUp,
  Megaphone,
  BarChart3,
  Palette,
  Smartphone,
} from "lucide-react";
import { motion } from "motion/react";

const services = [
  {
    icon: Camera,
    title: "High-End Gaming PCs",
    description:
      "Latest high-performance gaming rigs with RTX graphics, high refresh rate monitors, and mechanical keyboards for the ultimate competitive edge.",
    image:
      "https://images.pexels.com/photos/7772220/pexels-photo-7772220.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Video,
    title: "Tournaments & Competitions",
    description:
      "Regular esports tournaments with prize pools, coaching sessions, and opportunities to compete with the gaming community.",
    image:
      "https://images.pexels.com/photos/7915288/pexels-photo-7915288.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Palette,
    title: "Premium Seats & Setup",
    description:
      "Ergonomic gaming chairs, noise-cancelling headsets, RGB lighting, and custom desk setups for maximum comfort.",
    image:
      "https://images.pexels.com/photos/371924/pexels-photo-371924.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Smartphone,
    title: "Streaming Studio",
    description:
      "Professional streaming setups with green screens, multi-camera systems, and broadcasting equipment for content creators.",
    image:
      "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Globe,
    title: "Gaming Cafe Lounge",
    description:
      "Comfortable social spaces, VR gaming zones, arcade games, and chill-out areas for breaks between matches.",
    image:
      "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: TrendingUp,
    title: "Food & Beverages",
    description:
      "Gamer's fuel: energy drinks, snacks, full meals, and specialty coffee to keep you going during intense sessions.",
    image:
      "https://images.pexels.com/photos/2438049/pexels-photo-2438049.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: Megaphone,
    title: "Community Events",
    description:
      "Meetups, LAN parties, gaming nights, and social events to connect with fellow gamers and build lasting friendships.",
    image:
      "https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: BarChart3,
    title: "Membership Rewards",
    description:
      "Loyalty program with exclusive perks, early tournament access, discounts on food, and special member events.",
    image:
      "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export function Services() {
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
    <section id="services" className="py-12 md:py-24 bg-[#0f0f1e]">
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
              Our Offerings
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{}}
          >
            Everything for the Ultimate Gaming Experience
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{}}
          >
            From state-of-the-art gaming PCs to tournaments and community events, we provide everything gamers need for an unforgettable experience.
          </motion.p>
        </motion.div>

        {/* Services Grid with Images */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-[#9333ea]/30 hover:border-[#06b6d4] hover:shadow-lg hover:shadow-[#9333ea]/30 transition-all duration-500 bg-[#1a1a2e]"
              variants={itemVariants}
              whileHover={{ y: -8 }}
            >
              {/* Image Background */}
              <div className="relative h-40 md:h-48 overflow-hidden">
                <motion.img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent"></div>

                {/* Icon */}
                <motion.div
                  className="absolute top-4 right-4 w-12 h-12 bg-[#9333ea]/30 backdrop-blur-sm rounded-lg flex items-center justify-center group-hover:bg-[#06b6d4] transition-colors"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <service.icon className="w-6 h-6 text-[#06b6d4]" />
                </motion.div>

                {/* Title on Image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <motion.h3
                    className="text-base md:text-lg font-bold text-white mb-1"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                </div>
              </div>

              {/* Description */}
              <div className="p-4 md:p-6">
                <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Effect Line */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-1 bg-[#06b6d4]"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                style={{ originX: 0 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-12 md:mt-16 text-center bg-linear-to-br from-[#1a1a2e] to-[#0f0f1e] rounded-2xl p-8 md:p-12 border border-[#9333ea]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{}}
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join the Arena?</h3>
          <p className="text-sm md:text-base text-gray-300 mb-6 max-w-2xl mx-auto">
            Choose the perfect membership plan and start your gaming journey with us. Access high-end gaming stations, tournaments, and a vibrant community.
          </p>
          <motion.button
            className="bg-[#9333ea] text-white px-6 md:px-8 py-3 rounded-lg hover:bg-[#7e22ce] transition-colors font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Memberships →
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
