import { ArrowRight, Play } from "lucide-react";
// import { LightRays } from "../layout/Lightrays";
import SplashCursor from "../layout/SplashCursor";
import { Button } from "../layout/MovingBorder";
import ShinyText from "../layout/ShinyText";
import { motion } from "motion/react";

export function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const heroBg =
    "https://images.pexels.com/photos/1174746/pexels-photo-1174746.jpeg?auto=compress&cs=tinysrgb&w=1920";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <img
          src={heroBg}
          alt=""
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-linear-to-br from-[#0f0f1e]/95 via-[#0f0f1e]/88 to-[#1a1a2e]/92" />
        <div className="absolute inset-0 bg-[#9333ea]/15 mix-blend-multiply" />
        <div className="absolute inset-0 bg-linear-to-t from-[#0f0f1e] via-transparent to-[#0f0f1e]/40" />
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none">
        <SplashCursor
          DENSITY_DISSIPATION={3.5}
          VELOCITY_DISSIPATION={2}
          PRESSURE={0.1}
          CURL={3}
          SPLAT_RADIUS={0.2}
          SPLAT_FORCE={6000}
          COLOR_UPDATE_SPEED={10}
          SHADING
          RAINBOW_MODE={false}
          COLOR="#9333ea"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6 md:space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-[#9333ea]/20 rounded-full"
              variants={itemVariants}
            >
              <span className="text-[#06b6d4] text-xs md:text-sm font-medium">
                Ultimate Gaming Paradise
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]"
              variants={itemVariants}
            >
              Join the Ultimate{" "}
              <span className="text-[#06b6d4]">Gaming Arena</span>
            </motion.h1>

            <motion.p
              className="text-base md:text-lg text-gray-200 max-w-xl drop-shadow-[0_1px_8px_rgba(0,0,0,0.7)]"
              variants={itemVariants}
            >
              Experience elite gaming with high-end PCs, tournaments,
              tournaments, competitive gaming, streaming studios, and a vibrant
              community of gamers. Your ultimate destination for gaming
              excellence.
            </motion.p>

            <motion.div className="flex  gap-4" variants={itemVariants}>
              <a href="">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    borderRadius="1.75rem"
                    className="bg-[#9333ea] dark:bg-[#9333ea] text-white dark:text-white border-[#06b6d4] flex items-center gap-2"
                  >
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Get Membership
                  </Button>
                </motion.div>
              </a>

              <a href="">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <Button
                    borderRadius="1.75rem"
                    className="bg-[#1a1a2e] dark:bg-[#1a1a2e] text-[#06b6d4] dark:text-[#06b6d4] border-[#06b6d4] flex items-center gap-2"
                  >
                    <Play className="w-5 h-5" />
                    Book Now
                  </Button>
                </motion.div>
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 md:gap-8 pt-6 md:pt-8 border-t border-[#9333ea]/20"
              variants={containerVariants}
            >
              <motion.div variants={statVariants}>
                <div className="text-2xl md:text-3xl font-bold text-[#06b6d4]">
                  5000+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  Active Gamers
                </div>
              </motion.div>
              <motion.div variants={statVariants}>
                <div className="text-2xl md:text-3xl font-bold text-[#06b6d4]">
                  50+
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  Gaming Stations
                </div>
              </motion.div>
              <motion.div variants={statVariants}>
                <div className="text-2xl md:text-3xl font-bold text-[#06b6d4]">
                  24/7
                </div>
                <div className="text-xs md:text-sm text-gray-400 mt-1">
                  Open Gaming
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
          >
            <div className="relative h-80 md:h-96 lg:h-125 w-full overflow-hidden aspect-square rounded-2xl p-6 md:p-8 flex items-center justify-center bg-transparent backdrop-blur-sm border border-[#9333ea]/30 shadow-xl shadow-black/40">
              <div className="relative z-10 text-center space-y-3 md:space-y-4">
                <motion.div
                  className="flex items-center justify-center gap-2 mb-6 md:mb-8"
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <span className="text-white font-bold text-2xl md:text-4xl">
                    <ShinyText
                      text="GAMING"
                      speed={2}
                      delay={0}
                      color="#ffffff"
                      shineColor="#06b6d4"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </span>
                  <div className="w-1 h-8 md:h-12 bg-[#9333ea]"></div>
                  <span className="text-white font-bold text-2xl md:text-4xl">
                    <ShinyText
                      text="CAFE"
                      speed={2}
                      delay={0}
                      color="#ffffff"
                      shineColor="#06b6d4"
                      spread={120}
                      direction="left"
                      yoyo={false}
                      pauseOnHover={false}
                      disabled={false}
                    />
                  </span>
                </motion.div>
                <motion.div
                  className="grid grid-cols-2 gap-2 md:gap-4 text-black"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  transition={{ staggerChildren: 0.1, delayChildren: 0.4 }}
                  viewport={{}}
                >
                  {[
                    "High-End PCs",
                    "Tournaments",
                    "Food & Drinks",
                    "Streaming Studio",
                  ].map((service, idx) => (
                    <motion.div
                      key={idx}
                      className="bg-white/5 backdrop-blur-sm p-4 md:p-6 rounded-lg hover:bg-[#9333ea]/20 transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05, y: -5 }}
                    >
                      <div className="text-xs uppercase tracking-wide mb-1 md:mb-2">
                        <ShinyText
                          text={service}
                          speed={2}
                          delay={0}
                          color="#e0e0ff"
                          shineColor="#06b6d4"
                          spread={120}
                          direction="left"
                          yoyo={false}
                          pauseOnHover={false}
                          disabled={false}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
              {/* <LightRays /> */}
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-24 h-24 bg-[#9333ea]/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#06b6d4]/10 rounded-full blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
