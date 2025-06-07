import "./app.scss"
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Footer from "./components/footer/Footer";
import Myself from "./components/myself/Myself";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Achievements from "./components/achievements/Achievements";
import Test from "./Test";

const App = () => {
  return <div>
    <Cursor />
     {/* <h1>Hello</h1> */}
    <section id="Homepage">
      <Navbar />
      <Myself />
    </section>
    <section id="Services"> <Parallax type="services"/></section>
    <section><Services /></section>
    {/* <section id="Potfolio" ><Parallax type="portfolio"/></section> */}
    <Portfolio />
    <section id="Ach"><Achievements /></section>
    <section id="Contact">

    <Contact />  
    </section> 
        <section className="footer-section">
      <Footer />
    </section>
    
    {/* <section><Test/></section> */}
  </div>;
};

export default App;
