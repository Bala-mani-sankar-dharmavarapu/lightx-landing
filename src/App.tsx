import HeroSection from "./components/HeroSection";
import MeetTheAliens from "./components/MeetTheAliens";
import SpaceBackground from "./components/SpaceBackground";
import HamburgerMenu from "./components/HamburgerMenu";

function App() {
  return (
    <div className="h-screen bg-black text-white relative overflow-hidden">
      {/* Space Background Effects */}
      <SpaceBackground />

      {/* Main Content */}
      <main className="relative z-10 h-full flex flex-col">
        {/* Hero Section */}
        <HeroSection />

        {/* Meet the Services Section */}
        <MeetTheAliens />
      </main>

      {/* Hamburger Menu */}
      <HamburgerMenu />
    </div>
  );
}

export default App;
