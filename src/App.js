// import "./App.css";
import ArrowTop from "./components/ArrowTop";
import Banner1Section from "./components/Banner1Section";
import Banner2Section from "./components/Banner2Section";
import Banner3Section from "./components/Banner3Section";
import Banner4Section from "./components/Banner4Section";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <Banner1Section />
        <Banner2Section />
        <Banner3Section />
        <Banner4Section />
      </main>
      <Footer />
      <ArrowTop />
    </>
  );
}

export default App;
