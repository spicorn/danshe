import { useState } from "react";
import {
  Check,
  Globe,
  Users,
  Code,
  ShoppingCart,
  Search,
  Mail,
  Smartphone,
  MapPin,
  BarChart,
  Palette,
  Trophy,
  Clock,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const mediaPricingTiers = [
  {
    name: "Casual Gamer",
    price: "$25",
    description: "Perfect for casual gaming sessions",
    features: [
      "Hourly access to gaming stations",
      "Standard PC setup",
      "Basic headset and mouse",
      "WiFi access",
      "10% food discount",
      "Community chat access",
    ],
    popular: false,
  },
  {
    name: "Pro Gamer",
    price: "$80",
    description: "Most popular - ideal for competitive players",
    features: [
      "Unlimited monthly gaming hours",
      "High-end gaming PC (RTX 4090)",
      "Premium peripherals",
      "Priority booking",
      "20% food & drinks discount",
      "Tournament access",
      "Coaching sessions",
    ],
    popular: true,
  },
  {
    name: "Elite Streamer",
    price: "$150+",
    description: "Full streaming & tournament package",
    features: [
      "Dedicated streaming setup",
      "Multi-camera professional rig",
      "Green screen & lighting",
      "Editing software included",
      "Unlimited gaming hours",
      "Tournament participation",
      "Coaching & mentoring",
      "24/7 support",
    ],
    popular: false,
  },
];

const websitePricingTiers = [
  {
    name: "LAN Party",
    price: "$5/hour",
    priceLabel: "FROM",
    description: "Casual gaming with friends",
    icon: Globe,
    features: [
      { text: "30 Gaming Stations", icon: Globe },
      { text: "Quad-core Processors", icon: Mail },
      { text: "HD Gaming Displays", icon: Code },
      { text: "Standard Peripherals", icon: Smartphone },
      { text: "Snack Shop", icon: Search },
      { text: "WiFi Access", icon: Palette },
      { text: "Lounge Area", icon: Mail },
    ],
    popular: false,
  },
  {
    name: "Tournament Suite",
    price: "$100/day",
    priceLabel: "FROM",
    description: "Professional tournament hosting",
    icon: BarChart,
    features: [
      { text: "Dedicated Tournament Area", icon: Globe },
      { text: "Pro-Level PCs", icon: Mail },
      { text: "Spectator Monitors", icon: Code },
      { text: "Professional Setup", icon: Smartphone },
      { text: "Casting Equipment", icon: Search },
      { text: "Tournament Management", icon: MapPin },
      { text: "Prize Pool Setup", icon: BarChart },
      { text: "Streaming Integration", icon: Palette },
      { text: "VIP Lounge", icon: Palette },
      { text: "Catering Options", icon: Mail },
    ],
    popular: true,
  },
  {
    name: "Studio Rental",
    price: "$50/hour",
    priceLabel: "FROM",
    description: "Professional streaming studio",
    icon: ShoppingCart,
    features: [
      { text: "Soundproof Studio", icon: Globe },
      { text: "Multi-Camera Setup", icon: Mail },
      { text: "Professional Lighting", icon: Code },
      { text: "Green Screen", icon: Smartphone },
      { text: "Streaming Software", icon: ShoppingCart },
      { text: "Editing Workstation", icon: ShoppingCart },
      { text: "Audio Mixing Board", icon: Search },
      { text: "Archive Storage", icon: MapPin },
      { text: "Technical Support", icon: BarChart },
    ],
    popular: false,
  },
];

export function Pricing() {
  const [activeTab, setActiveTab] = useState("membership");

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="pricing" className="py-12 md:py-24 bg-[#0f0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          <motion.div className="inline-block px-4 py-1.5 bg-[#9333ea]/20 rounded-full mb-4" whileHover={{ scale: 1.05 }}>
            <span className="text-[#06b6d4] text-xs md:text-sm font-medium">Pricing Plans</span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{}}
          >
            Flexible Gaming Membership Plans
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{}}
          >
            Choose the perfect plan for your gaming style. From casual sessions to professional tournaments and streaming.
          </motion.p>
        </motion.div>

        {/* Tab Switcher */}
        <motion.div
          className="flex justify-center mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{}}
        >
          <div className="inline-flex bg-[#1a1a2e] rounded-xl p-1.5 shadow-sm border border-[#9333ea]/30">
            <motion.button
              onClick={() => setActiveTab("membership")}
              className={`relative px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "membership"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "membership" && (
                <motion.div
                  className="absolute inset-0 bg-[#9333ea] rounded-lg"
                  layoutId="tab-bg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                <Users className="w-5 h-5" />
                Membership
              </span>
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("sessions")}
              className={`relative px-6 md:px-8 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === "sessions"
                  ? "text-white"
                  : "text-gray-400 hover:text-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {activeTab === "sessions" && (
                <motion.div
                  className="absolute inset-0 bg-[#9333ea] rounded-lg"
                  layoutId="tab-bg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
                <Clock className="w-5 h-5" />
                Hourly & Events
              </span>
            </motion.button>
          </div>
        </motion.div>

        {/* Membership Packages */}
        <AnimatePresence mode="wait">
          {activeTab === "membership" && (
            <motion.div
              key="membership"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {mediaPricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                      tier.popular
                        ? "bg-linear-to-br from-[#9333ea]/25 to-[#1a1a2e] text-white shadow-2xl ring-2 ring-[#06b6d4]/60 border border-[#06b6d4]/40"
                        : "bg-[#1a1a2e] border border-[#9333ea]/30 text-gray-200 hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#9333ea]/20"
                    }`}
                    variants={itemVariants}
                    whileHover={{ y: tier.popular ? -12 : -8, scale: 1.02 }}
                  >
                    {tier.popular && (
                      <motion.div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-[#0f0f1e] px-6 py-1.5 rounded-full text-sm font-medium shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.div>
                    )}

                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className="text-3xl md:text-4xl font-bold text-[#06b6d4]">{tier.price}</span>
                        <span
                          className={`ml-2 text-sm md:text-base ${
                            tier.popular ? "text-gray-300" : "text-gray-400"
                          }`}
                        >
                          /month
                        </span>
                      </div>
                      <p
                        className={`text-sm ${
                          tier.popular ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {tier.description}
                      </p>
                    </div>

                    <motion.ul
                      className="space-y-3 mb-8"
                      variants={containerVariants}
                    >
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          variants={itemVariants}
                        >
                          <Check
                            className="w-5 h-5 mt-0.5 shrink-0 text-[#06b6d4]"
                          />
                          <span className="text-xs md:text-sm">{feature}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        tier.popular
                          ? "bg-[#9333ea] text-white hover:bg-[#7e22ce]"
                          : "bg-[#9333ea]/20 text-white border border-[#9333ea]/50 hover:bg-[#9333ea]/40"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Get Started
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="bg-[#1a1a2e] rounded-2xl p-6 md:p-8 border border-[#9333ea]/30"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-lg md:text-xl font-bold mb-4 text-white">Popular Add-Ons</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                    { title: "Extra Gaming Hour", price: "From $8/hr" },
                    { title: "Private Booth Rental", price: "From $15/hr" },
                    { title: "VR Gaming Session", price: "From $12/session" },
                    { title: "Pro Coaching Session", price: "From $25/hr" },
                  ].map((addon, idx) => (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-lg transition-colors hover:bg-[#2a2a3e]"
                    >
                      <div className="font-semibold text-[#06b6d4] mb-1">
                        {addon.title}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400">
                        {addon.price}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hourly & Event Packages */}
        <AnimatePresence mode="wait">
          {activeTab === "sessions" && (
            <motion.div
              key="sessions"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {websitePricingTiers.map((tier, index) => (
                  <motion.div
                    key={index}
                    className={`relative rounded-2xl p-6 md:p-8 transition-all duration-300 ${
                      tier.popular
                        ? "bg-linear-to-br from-[#9333ea]/25 to-[#1a1a2e] text-white shadow-2xl ring-2 ring-[#06b6d4]/60 border border-[#06b6d4]/40"
                        : "bg-[#1a1a2e] border border-[#9333ea]/30 text-gray-200 hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#9333ea]/20"
                    }`}
                    variants={itemVariants}
                    whileHover={{ y: tier.popular ? -12 : -8, scale: 1.02 }}
                  >
                    {tier.popular && (
                      <motion.div
                        className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#06b6d4] text-[#0f0f1e] px-6 py-1.5 rounded-full text-sm font-medium shadow-lg"
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Most Popular
                      </motion.div>
                    )}

                    <motion.div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 ${
                        tier.popular ? "bg-[#9333ea]" : "bg-[#9333ea]/20"
                      }`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      <tier.icon
                        className={`w-7 h-7 ${
                          tier.popular ? "text-white" : "text-[#06b6d4]"
                        }`}
                      />
                    </motion.div>

                    <div className="mb-6">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="flex items-baseline mb-2">
                        <span className={`text-sm mr-2 ${
                          tier.popular ? "text-gray-300" : "text-gray-400"
                        }`}>
                          {tier.priceLabel}
                        </span>
                        <span className="text-3xl md:text-4xl font-bold text-[#06b6d4]">{tier.price}</span>
                      </div>
                      <p
                        className={`text-sm ${
                          tier.popular ? "text-gray-300" : "text-gray-400"
                        }`}
                      >
                        {tier.description}
                      </p>
                    </div>

                    <motion.ul
                      className="space-y-3 mb-8"
                      variants={containerVariants}
                    >
                      {tier.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          className="flex items-start gap-3"
                          variants={itemVariants}
                        >
                          <div
                            className={`w-5 h-5 mt-0.5 rounded flex items-center justify-center shrink-0 ${
                              tier.popular ? "bg-[#06b6d4]/20" : "bg-[#9333ea]/20"
                            }`}
                          >
                            <feature.icon
                              className="w-3 h-3 text-[#06b6d4]"
                            />
                          </div>
                          <span className="text-xs md:text-sm">{feature.text}</span>
                        </motion.li>
                      ))}
                    </motion.ul>

                    <motion.button
                      className={`w-full py-3 rounded-lg font-medium transition-all ${
                        tier.popular
                          ? "bg-[#9333ea] text-white hover:bg-[#7e22ce]"
                          : "bg-[#9333ea]/20 text-white border border-[#9333ea]/50 hover:bg-[#9333ea]/40"
                      }`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Book Now
                    </motion.button>
                  </motion.div>
                ))}
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="bg-[#1a1a2e] rounded-2xl p-6 md:p-8 border border-[#9333ea]/30"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <motion.div
                      className="w-12 h-12 bg-[#9333ea]/20 rounded-lg flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Trophy className="w-6 h-6 text-[#06b6d4]" />
                    </motion.div>
                    <h3 className="text-lg md:text-xl font-bold text-white">What You Get</h3>
                  </div>
                  <ul className="space-y-3">
                    {[
                      { icon: Search, title: "Premium gaming stations", subtitle: "PC, PlayStation & Xbox setups" },
                      { icon: Users, title: "Play with friends", subtitle: "LAN parties and group bookings" },
                      { icon: Check, title: "Tournament-ready gear", subtitle: "Pro PCs, casting & spectator screens" },
                      { icon: Mail, title: "Easy booking", subtitle: "Reserve booths online or walk in" },
                    ].map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        whileHover={{ x: 5 }}
                      >
                        <item.icon className="w-5 h-5 text-[#06b6d4] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-medium text-sm md:text-base text-white">{item.title}</div>
                          <div className="text-xs md:text-sm text-gray-400">
                            {item.subtitle}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-linear-to-br from-[#9333ea]/30 to-[#1a1a2e] text-white rounded-2xl p-6 md:p-8 border border-[#9333ea]/30"
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  <h3 className="text-lg md:text-xl font-bold mb-4">Cafe Perks</h3>
                  <ul className="space-y-4">
                    {[
                      { title: "Pay-as-you-go or daily rates", subtitle: "No long-term commitment required" },
                      { title: "Food & drink discounts", subtitle: "Fuel up between matches at the cafe" },
                      { title: "Extended hours on weekends", subtitle: "Late-night gaming when you need it" },
                    ].map((benefit, idx) => (
                      <motion.li
                        key={idx}
                        className="flex items-start gap-3"
                        whileHover={{ x: 5 }}
                      >
                        <Check className="w-5 h-5 text-[#06b6d4] mt-0.5 shrink-0" />
                        <div>
                          <div className="font-medium text-sm md:text-base mb-1">{benefit.title}</div>
                          <div className="text-xs md:text-sm text-gray-300">
                            {benefit.subtitle}
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
