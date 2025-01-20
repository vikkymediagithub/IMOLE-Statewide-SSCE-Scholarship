import NavBar from "./components/Nav";
import Hero from "./components/Hero";
import AboutScholarship from "./components/AboutScholarhip";
import ParticipateSection from "./components/ParticipateSection";
import HowToWinSection from "./components/HowToWinSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutScholarship />
      <ParticipateSection />
      <HowToWinSection />
      <Footer />
    </div>
  );
};

export default App;
