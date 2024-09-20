import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Tbdel from "./sections/tbdel";

const App = () => {
  return (
    <main>
      <Header />
      <div className="img" id="home"></div>
      <Hero />
      <Services />
      <div id="contact" />
      <Contact />
      <Tbdel />
      <Footer />
      <div className="h-[200vh] bg-white"></div>
      <a href="#home">gth</a>
    </main>
  );
};

export default App;
