import { Target, Users, Award, Zap } from "lucide-react";
import game from "../assets/game.jpg";
import { Badge } from "lucide-react";
import ShinyText from "../layout/ShinyText";
import { motion } from "motion/react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description:
      "Every campaign is designed to deliver measurable ROI and real business impact.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description:
      "We work as an extension of your team, bringing expertise without the overhead.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "From concept to delivery, we maintain the highest standards in every project.",
  },
  {
    icon: Zap,
    title: "Fast & Efficient",
    description:
      "Streamlined workflows and quick turnarounds without compromising quality.",
  },
];

export function About() {
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
    <section id="about" className="py-12 md:py-24 bg-[#0f0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          {/* Left Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ margin: "-100px" }}
          >
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={game}
                alt="Game"
                className="w-full h-96 md:h-125 object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

              {/* Overlay Stats */}
              <motion.div
                className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 grid grid-cols-3 gap-3 md:gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{}}
              >
                {[
                  { value: "500+", label: "Projects" },
                  { value: "100+", label: "Clients" },
                  { value: "2+", label: "Years" },
                ].map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/10 backdrop-blur-md rounded-lg p-3 md:p-4 text-white"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    }}
                  >
                    <div className="text-xl md:text-2xl font-bold">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="absolute -top-6 -right-6 w-32 h-32 bg-[#9333ea]/20 rounded-full blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#06b6d4]/10 rounded-full blur-3xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
            />
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ margin: "-100px" }}
          >
            <motion.div
              className="inline-block px-4 py-1.5 bg-[#9333ea]/20 rounded-full mb-4"
              variants={itemVariants}
            >
              <span className="text-[#06b6d4] text-xs md:text-sm font-medium">
                About Us
              </span>
            </motion.div>
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6"
              variants={itemVariants}
            >
              The Ultimate Gaming Destination
            </motion.h2>
            <motion.div
              className="space-y-4 text-sm md:text-base text-gray-300"
              variants={containerVariants}
            >
              {[
                "GAMING CAFE ARENA is your ultimate destination for immersive gaming experiences. We provide state-of-the-art gaming stations, competitive tournaments, and a vibrant community of passionate gamers.",
                "Our mission is to create a premier gaming space where players of all levels can compete, connect, and celebrate the esports culture. We offer high-end equipment, professional coaching, and unforgettable gaming moments.",
                "From casual gaming sessions to intense tournament competitions, premium food & beverages, and exclusive community events, we have everything you need for your gaming journey.",
              ].map((text, idx) => (
                <motion.p key={idx} variants={itemVariants}>
                  {text}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4"
              variants={containerVariants}
            >
              {["Pro Gaming Setup", "24/7 Open", "Premium Snacks"].map(
                (badge, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 bg-[#1a1a2e] px-4 py-2 rounded-lg border border-[#9333ea]/30"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, borderColor: "#06b6d4" }}
                  >
                    {/* <div className="w-2 h-2 bg-[#9333ea] rounded-full"></div> */}
                    <Badge />
                    <span className="text-xs md:text-sm font-medium">
                      {/* {badge} */}
                      <ShinyText
                        text={badge}
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
                    </span>
                  </motion.div>
                ),
              )}
            </motion.div>
          </motion.div>
        </div>

        {/* Values Grid with Images */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ margin: "-100px" }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl bg-linear-to-br from-[#1a1a2e] to-[#0f0f1e] border border-[#9333ea]/30 hover:border-[#06b6d4]/50 transition-all hover:shadow-lg hover:shadow-[#9333ea]/20"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -8 }}
            >
              <motion.div
                className="w-12 h-12 bg-[#9333ea]/20 rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 10, scale: 1.1 }}
              >
                <value.icon className="w-6 h-6 text-[#06b6d4]" />
              </motion.div>
              <h3 className="font-bold mb-2 text-sm md:text-base">
                {value.title}
              </h3>
              <p className="text-xs md:text-sm text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
