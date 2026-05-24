import { useState } from "react";
import { Monitor, Gamepad2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import end from "../assets/end.jpg";
import Fifa from "../assets/fifa.jpg";
import Forza from "../assets/Forza.jpg";
import ps from "../assets/ps.jpg";
import xbox from "../assets/xbox.jpg";
import Ghost from "../assets/ghost.jpg";
import room from "../assets/room.jpg";
import setup from "../assets/setup.jpg";
import high from "../assets/high.jpg";

const portfolioItems = [
  {
    id: 1,
    title: "RTX Battle Station",
    category: "pc",
    type: "High-End PC",
    image: high,
    description:
      "Competitive players on our RTX 4090 rigs with 240Hz monitors and pro peripherals.",
    icon: Monitor,
  },
  {
    id: 2,
    title: "FPS Squad Nights",
    category: "pc",
    type: "High-End PC",
    image: end,
    description:
      "Teams grinding ranked matches together on dedicated high-performance PC lanes.",
    icon: Monitor,
  },
  {
    id: 3,
    title: "LAN Party Zone",
    category: "pc",
    type: "High-End PC",
    image: room,
    description:
      "Group sessions on premium gaming PCs — perfect for friends, clans, and tournaments.",
    icon: Monitor,
  },
  {
    id: 4,
    title: "PlayStation Lounge",
    category: "playstation",
    type: "PlayStation",
    image: ps,
    description:
      "Cozy couch setups with PS5 consoles for FIFA, fighting games, and co-op adventures.",
    icon: Gamepad2,
  },
  {
    id: 5,
    title: "Couch Co-Op Sessions",
    category: "playstation",
    type: "PlayStation",
    image: Fifa,
    description:
      "Friends battling it out on PlayStation with big-screen TVs and surround sound.",
    icon: Gamepad2,
  },
  {
    id: 6,
    title: "Console Tournament Night",
    category: "playstation",
    type: "PlayStation",
    image: Forza,
    description:
      "Weekly PlayStation brackets with prizes, spectators, and hype on the big screen.",
    icon: Gamepad2,
  },
  {
    id: 7,
    title: "Xbox Arena",
    category: "xbox",
    type: "Xbox",
    image: xbox,
    description:
      "Xbox Series X stations for Halo, Forza, and Game Pass favorites in premium booths.",
    icon: Gamepad2,
  },
  {
    id: 8,
    title: "Racing & Sports Bar",
    category: "xbox",
    type: "Xbox",
    image: Ghost,
    description:
      "Wheel setups and Xbox lounges for racing sims, sports titles, and party games.",
    icon: Gamepad2,
  },
  {
    id: 9,
    title: "Xbox Community Night",
    category: "xbox",
    type: "Xbox",
    image: setup,
    description:
      "Gamers linking up on Xbox for online nights, local multiplayer, and clan meetups.",
    icon: Gamepad2,
  },
];

const categories = [
  { id: "all", label: "All Platforms" },
  { id: "pc", label: "High-End PC" },
  { id: "playstation", label: "PlayStation" },
  { id: "xbox", label: "Xbox" },
];

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

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
    <section id="portfolio" className="py-12 md:py-24 bg-[#0f0f1e]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ margin: "-100px" }}
        >
          <motion.div
            className="inline-block px-4 py-1.5 bg-[#9333ea]/20 rounded-full mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <span className="text-[#06b6d4] text-xs md:text-sm font-medium">
              See It In Action
            </span>
          </motion.div>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{}}
          >
            Our Playground
          </motion.h2>
          <motion.p
            className="text-base md:text-lg text-gray-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{}}
          >
            Watch gamers dive into high-end PCs, PlayStation lounges, and Xbox
            arenas — this is where the action happens.
          </motion.p>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{}}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded-full font-medium transition-all text-sm md:text-base ${
                activeCategory === category.id
                  ? "bg-[#9333ea] text-white shadow-lg shadow-[#9333ea]/30"
                  : "bg-[#1a1a2e] text-gray-300 hover:text-white border border-[#9333ea]/30 hover:border-[#06b6d4]/50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
          >
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                className="group relative overflow-hidden rounded-2xl bg-[#1a1a2e] border border-[#9333ea]/30 hover:border-[#06b6d4]/50 hover:shadow-lg hover:shadow-[#9333ea]/20 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ y: -8 }}
              >
                <div className="relative h-48 md:h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"
                    initial={{ opacity: 0.6 }}
                    whileHover={{ opacity: 0.8 }}
                  />

                  <motion.div
                    className="absolute top-4 right-4 bg-[#9333ea]/30 backdrop-blur-md px-3 py-1.5 rounded-full"
                    whileHover={{ backgroundColor: "rgba(6, 182, 212, 0.6)" }}
                  >
                    <span className="text-white text-xs font-medium flex items-center gap-1.5">
                      <item.icon className="w-3.5 h-3.5" />
                      {item.type}
                    </span>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3
                    className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-[#06b6d4] transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    {item.title}
                  </motion.h3>
                  <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

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
        </AnimatePresence>
      </div>
    </section>
  );
}
