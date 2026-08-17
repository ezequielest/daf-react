import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

import "./Home.scss";
import ValueProposition from "../../components/ValueProposition/ValueProposition";
import Equipment from "../../components/Equipments/Equipments";
import Industries from "../../components/Industries/Industries";
import Solutions from "../../components/Solutions/Solutions";
import ArgentinaMap from "../../components/ArgentinaMap/ArgentinaMap";
import Testimonials from "../../components/Testimonials/Testimonials";
import AfterSales from "../../components/AfterSale/AfterSale";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ValueProposition />
      <Equipment />
      <Industries />
      <Solutions />
      <ArgentinaMap />
      <Testimonials />
      <AfterSales />
      <FAQ />
      {/*<CTA />*/}
      <Footer />
    </main>
  );
};

export default Home;