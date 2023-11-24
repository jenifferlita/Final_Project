import AboutUs from "../Components/AboutUs";
import Contact from "../Components/Contact";
import FeaturedMenu from "../Components/FeaturedMenu";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import Reservation from "../Components/Reservation";
import Navigation from "../Components/Navigation";
import Judul from "../Components/JudulBesar";

const HomePages = () => {
  return (
    <div>
      <Navigation />
      <Judul/>
      <AboutUs />
      <Pricing/>
      <FeaturedMenu />
      <Reservation />
      {/* ============ Social Section  ============= */}
      <section className="social_connect">
        <div className="text-content container">
          <div className="col-md-6">
            <span className="social_heading">FOLLOW</span>
            <ul className="social_icons">
              <li>
                <a
                  className="icon-twitter color_animation"
                  href="#"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  className="icon-github color_animation"
                  href="#"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  className="icon-linkedin color_animation"
                  href="#"
                  target="_blank"
                />
              </li>
              <li>
                <a className="icon-mail color_animation" href="#" />
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="social_heading">OR DIAL</span>
            <span className="social_info">
              <a className="color_animation" href="tel:883-335-6524">
                (941) 883-335-6524
              </a>
            </span>
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePages;
