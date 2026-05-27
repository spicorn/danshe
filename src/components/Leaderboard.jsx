import { motion } from "motion/react";
import { Trophy, Flame, Medal, Star, Crown } from "lucide-react";
import { useState, useEffect } from "react";

// Mock tournament data
const mockTournamentData = [
  {
    id: 1,
    name: "spicorn",
    points: 2850,
    weeklyPoints: 450,
    rank: 1,
    tournaments: 12,
    streak: 8,
    level: "Platinum",
    avatar: "🎮",
  },
  {
    id: 2,
    name: "Jack",
    points: 2650,
    weeklyPoints: 420,
    rank: 2,
    tournaments: 11,
    streak: 6,
    level: "Gold",
    avatar: "👻",
  },
  {
    id: 3,
    name: "Kelvin",
    points: 2420,
    weeklyPoints: 390,
    rank: 3,
    tournaments: 10,
    streak: 5,
    level: "Gold",
    avatar: "⚡",
  },
  {
    id: 4,
    name: "Rasta",
    points: 2180,
    weeklyPoints: 360,
    rank: 4,
    tournaments: 9,
    streak: 4,
    level: "Silver",
    avatar: "❄️",
  },
  {
    id: 5,
    name: "Babavawo",
    points: 1950,
    weeklyPoints: 330,
    rank: 5,
    tournaments: 8,
    streak: 3,
    level: "Silver",
    avatar: "🔥",
  },
  {
    id: 6,
    name: "Mukoma",
    points: 1820,
    weeklyPoints: 300,
    rank: 6,
    tournaments: 7,
    streak: 2,
    level: "Bronze",
    avatar: "⚙️",
  },
  {
    id: 7,
    name: "Chibaba",
    points: 1650,
    weeklyPoints: 280,
    rank: 7,
    tournaments: 6,
    streak: 2,
    level: "Bronze",
    avatar: "🌟",
  },
  {
    id: 8,
    name: "Huruyadzo",
    points: 1480,
    weeklyPoints: 250,
    rank: 8,
    tournaments: 5,
    streak: 1,
    level: "Bronze",
    avatar: "🐍",
  },
];

// Weekly top 5
const weeklyTopPlayers = mockTournamentData
  .sort((a, b) => b.weeklyPoints - a.weeklyPoints)
  .slice(0, 5);

const getRankColor = (rank) => {
  switch (rank) {
    case 1:
      return "from-purple-500 to-purple-700";
    case 2:
      return "from-cyan-400 to-cyan-600";
    case 3:
      return "from-purple-400 to-purple-600";
    default:
      return "from-slate-700 to-slate-900";
  }
};

const getLevelColor = (level) => {
  switch (level) {
    case "Platinum":
      return "bg-cyan-500/20 border-cyan-500 text-cyan-400";
    case "Gold":
      return "bg-purple-500/20 border-purple-500 text-purple-400";
    case "Silver":
      return "bg-slate-400/20 border-slate-400 text-slate-300";
    case "Bronze":
      return "bg-cyan-500/20 border-cyan-500 text-cyan-400";
    default:
      return "bg-slate-600/20 border-slate-600 text-slate-300";
  }
};

const RankBadge = ({ rank }) => {
  if (rank === 1)
    return (
      <div className="relative">
        <Trophy className="w-8 h-8 text-purple-400 drop-shadow-lg" />
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          1
        </span>
      </div>
    );
  if (rank === 2)
    return (
      <div className="relative">
        <Medal className="w-8 h-8 text-cyan-400 drop-shadow-lg" />
        <span className="absolute -top-2 -right-2 bg-cyan-500 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          2
        </span>
      </div>
    );
  if (rank === 3)
    return (
      <div className="relative">
        <Medal className="w-8 h-8 text-purple-400 drop-shadow-lg" />
        <span className="absolute -top-2 -right-2 bg-purple-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          3
        </span>
      </div>
    );
  return (
    <div className="text-slate-400 text-lg font-bold w-8 h-8 flex items-center justify-center">
      #{rank}
    </div>
  );
};

export function Leaderboard() {
  const [displayPoints, setDisplayPoints] = useState({});
  const [hoveredRank, setHoveredRank] = useState(null);

  // Animate point counters on mount
  useEffect(() => {
    mockTournamentData.forEach((player) => {
      setTimeout(() => {
        setDisplayPoints((prev) => ({
          ...prev,
          [player.id]: player.points,
        }));
      }, player.id * 100);
    });
  }, []);

  return (
    <section id="leaderboard" className="relative w-full py-20 px-4 md:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-b from-slate-900/50 via-slate-900/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Crown className="w-8 h-8 text-purple-400" />
            <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-purple-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Champion Leaderboard
            </h2>
            <Crown className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-slate-400 text-lg">
            Master the games, dominate the rankings, and claim your legendary
            status
          </p>
        </motion.div>

        {/* Stats Overview */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            {
              label: "Total Players",
              value: mockTournamentData.length,
              icon: "👥",
            },
            { label: "Tournaments", value: "24", icon: "🏆" },
            { label: "Weekly Winners", value: "5", icon: "⭐" },
            { label: "Total Points", value: "16.2K", icon: "💎" },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 p-4 text-center backdrop-blur-sm"
              whileHover={{ scale: 1.05, borderColor: "#cbd5e1" }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-slate-400 text-sm font-medium">
                {stat.label}
              </div>
              <div className="text-white text-2xl font-bold">{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Main Leaderboard */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700 backdrop-blur-sm overflow-hidden">
              <div className="bg-linear-to-r from-purple-600/20 to-cyan-600/20 px-6 py-4 border-b border-slate-700">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-purple-400" />
                  Tournament Rankings
                </h3>
              </div>

              <div className="divide-y divide-slate-700">
                {mockTournamentData.map((player, idx) => (
                  <motion.div
                    key={player.id}
                    className="relative group"
                    onMouseEnter={() => setHoveredRank(player.rank)}
                    onMouseLeave={() => setHoveredRank(null)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                  >
                    <div
                      className={`px-6 py-4 flex items-center gap-4 transition-all duration-300 ${
                        hoveredRank === player.rank
                          ? "bg-slate-700/50"
                          : "hover:bg-slate-800/30"
                      }`}
                    >
                      {/* Rank Badge */}
                      <div className="shrink-0 w-10 h-10 flex items-center justify-center">
                        <RankBadge rank={player.rank} />
                      </div>

                      {/* Player Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-2xl">{player.avatar}</span>
                          <h4 className="text-white font-bold truncate">
                            {player.name}
                          </h4>
                          {player.streak >= 5 && (
                            <Flame className="w-4 h-4 text-purple-400 shrink-0" />
                          )}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full border ${getLevelColor(
                              player.level,
                            )}`}
                          >
                            {player.level}
                          </span>
                          <span className="text-xs text-slate-400">
                            {player.tournaments} tournaments
                          </span>
                        </div>
                      </div>

                      {/* Points and Streak */}
                      <div className="shrink-0 text-right">
                        <div className="text-white font-bold text-lg">
                          {displayPoints[player.id] || 0}
                          <span className="text-xs text-purple-400 ml-1">
                            pts
                          </span>
                        </div>
                        <div className="flex items-center justify-end gap-1 text-xs text-purple-400 mt-1">
                          <Flame className="w-3 h-3" />
                          {player.streak} streak
                        </div>
                      </div>
                    </div>

                    {/* Hover highlight for top 3 */}
                    {player.rank <= 3 && hoveredRank === player.rank && (
                      <motion.div
                        className={`absolute inset-0 bg-linear-to-r ${getRankColor(
                          player.rank,
                        )} opacity-10 pointer-events-none`}
                        layoutId={`rank-${player.rank}`}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Weekly Winners Sidebar */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="sticky top-24">
              <div className="bg-linear-to-br from-slate-800/50 to-slate-900/50 rounded-xl border border-slate-700 backdrop-blur-sm overflow-hidden">
                <div className="bg-linear-to-r from-purple-600/20 to-cyan-600/20 px-6 py-4 border-b border-slate-700">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Star className="w-5 h-5 text-purple-400" />
                    Weekly Top 5
                  </h3>
                </div>

                <div className="p-4 space-y-3">
                  {weeklyTopPlayers.map((player, idx) => (
                    <motion.div
                      key={player.id}
                      className="bg-linear-to-r from-slate-700/30 to-slate-800/30 rounded-lg p-3 border border-slate-600 hover:border-slate-500 transition-all cursor-pointer group"
                      whileHover={{ scale: 1.05 }}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.1 }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="text-lg font-bold text-purple-400 w-6">
                          #{idx + 1}
                        </div>
                        <span className="text-xl">{player.avatar}</span>
                        <h4 className="text-white font-semibold flex-1 truncate">
                          {player.name}
                        </h4>
                      </div>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-slate-400">Weekly</span>
                        <span className="text-purple-400 font-bold">
                          {player.weeklyPoints} pts
                        </span>
                      </div>
                      <motion.div
                        className="w-full bg-slate-700 rounded-full h-1.5 mt-2 overflow-hidden"
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="h-full bg-linear-to-r from-purple-400 to-cyan-400"
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${
                              (player.weeklyPoints /
                                weeklyTopPlayers[0].weeklyPoints) *
                              100
                            }%`,
                          }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + idx * 0.1 }}
                        />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Achievement Badge */}
                <div className="px-4 py-3 border-t border-slate-700 bg-slate-900/30">
                  <div className="text-center">
                    <p className="text-slate-400 text-xs mb-2">
                      Achievement Unlocked
                    </p>
                    <div className="inline-block bg-linear-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500 rounded-lg px-3 py-2">
                      <span className="text-purple-300 text-sm font-bold flex items-center gap-1 justify-center">
                        <Star className="w-4 h-4" />
                        Rank Champion
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Join CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-slate-400 mb-4">
            Ready to climb the rankings and become a legend?
          </p>
          <motion.a
            href="#contact"
            className="inline-block px-8 py-3 bg-linear-to-r from-purple-500 to-cyan-500 text-white font-bold rounded-lg transition-all"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Join the Arena
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

export default Leaderboard;
