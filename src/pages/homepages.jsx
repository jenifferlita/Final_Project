import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import FeaturedMenu from "../Components/FeaturedMenu";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import Reservation from "../Components/Reservation";
import Navigation from "../Components/Navigation";
import SocialSection from "../Components/SocialSection";

const HomePages = () => {
  return (
    <div>
      <Navigation />
      <section id="top" className="description_content">
        <div className="kantin background_content">
          <a className="judul-utama" href="#">
            U-Canteen
          </a>
        </div>
        <div className="text-content container"></div>
      </section>

      {/* ============ About Us ============= */}
     <AboutUs />


      {/* ============ Pricing  ============= */}
      <Pricing/>

      {/* ============ Featured Dish  ============= */}

     <FeaturedMenu />
  
      {/* ============ Reservation  ============= */}
      <Reservation />

      {/* ============ Social Section  ============= */}
      <SocialSection />

      {/* ============ Contact Section  ============= */}
      <Contact />

      {/* ============ Footer Section  ============= */}
      <Footer />
    </div>
  );
};

export default HomePages;
