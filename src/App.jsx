import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import video from '../public/video.mp4'
const App = () => {
  return (
    <div>

      <Cursor />
      <section className="homepage" id="Homepage">
        <video src={video} autoPlay muted className="video" />
        <Navbar />
        <Hero className="hero" />
      </section>



      {/* <section id="Services">
        <Parallax type="services" />
      </section> */}

      <section className="zidx" id="Portfolio">
        <Parallax type="portfolio" />
      </section>
      <Portfolio />

      <section className="zidx" id="Contact">
        <Contact />
      </section>
      {/* Framer Motion Crash Course */}
      {/* <Test/>
    <Test/> */}


      <section className="services" id="services">
        <Services />

      </section>


    </div>
  );
};

export default App;
