import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";

import "./Home.scss";
import Equipment from "../../components/Equipments/Equipments";
import Industries from "../../components/Industries/Industries";
import ArgentinaMap from "../../components/ArgentinaMap/ArgentinaMap";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      {/*<ValueProposition />*/}
      <Industries />
      <Equipment />
      <ArgentinaMap />
      {/*<Testimonials />*/}
      {/*<AfterSales />*/}
      <FAQ />
      {/*<CTA />*/}
      <Footer />
    </main>
  );
};

export default Home;