import Header from "./sections/Header";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <main>
      <Header />
      <div className="img" id="home"></div>
      <Hero />
      <div className="h-[200vh] bg-white"></div>
      <a href="#home">gth</a>
    </main>
  );
};

export default App;
