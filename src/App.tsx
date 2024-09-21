import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";

const App = () => {
  return (
    <main>
      <Header />
      <div className="img" id="home"></div>
      <Hero />
      <div id="about" />
      <About />
      <div id="services" />
      <Services />
      <div id="contact" />
      <Contact />
      <Footer />
    </main>
  );
};

export default App;
