import NavBar from "./components/Nav";
import Hero from "./components/Hero";
import AboutScholarship from "./components/AboutScholarhip";

const App = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <AboutScholarship />
    </div>
  );
};

export default App;
