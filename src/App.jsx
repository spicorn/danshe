import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Playground";
import { Pricing } from "./components/Pricing";
import { Leaderboard } from "./components/Leaderboard";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import Header from "./components/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f1e]">
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Leaderboard />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
