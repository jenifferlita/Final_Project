import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import FeaturedMenu from "../Components/FeaturedMenu";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import Reservation from "../Components/Reservation";
import Navigation from "../Components/Navigation";
import SocialSection from "../Components/SocialSection";
import Judul from "../Components/JudulBesar";

const HomePages = () => {
  return (
    <div>
      <Navigation />
      <Judul />
      <AboutUs />
      <Pricing />
      <FeaturedMenu />
      <Reservation />
      <SocialSection />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePages;
