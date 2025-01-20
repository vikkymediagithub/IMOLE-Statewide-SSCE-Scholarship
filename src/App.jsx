import NavBar from "./components/Nav";
import Hero from "./components/Hero";
import AboutScholarship from "./components/AboutScholarhip";
import ParticipateSection from "./components/ParticipateSection";
import HowToWinSection from "./components/HowToWinSection";
import ContactSection from "./components/ContactUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutScholarship />
      <ParticipateSection />
      <HowToWinSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default App;
