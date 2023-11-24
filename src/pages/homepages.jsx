import Contact from "../Components/Contact";
import Pricing from "../Components/Pricing";
import Footer from "../Components/Footer";
import Reservation from "../Components/Reservation";
import Navigation from "../Components/Navigation";

const HomePages = () => {
  return (
    <div>
      <Navigation />
      {/* <section id="top" className="starter_container bg">
            <div className="follow_container">
            <div className="col-md-6 col-md-offset-3">
                <h2 className="top-title"> Restaurant</h2>
                <h2 className="white second-title">" Best in the city "</h2>
                <hr />
            </div>

            {/* Collect the nav links, forms, and other content for toggling */}
            <div
              className="collapse navbar-collapse"
              id="bs-example-navbar-collapse-1"
            >
              <ul className="nav navbar-nav main-nav  clear navbar-right ">
                <li>
                  <a className="navactive color_animation" href="#top">
                    WELCOME
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="#story">
                    ABOUT
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="#pricing">
                    MENU
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="#featured">
                    FEATURED
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="#reservation">
                    RESERVATION
                  </a>
                </li>
                <li>
                  <a className="color_animation" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
        </section> */}
      <section id="top" className="description_content">
        <div className="kantin background_content">
          <a className="judul-utama" href="#">
            U-Canteen
          </a>
        </div>
        <div className="text-content container"></div>
      </section>

      {/* ============ About Us ============= */}
      <section id="story" className="description_content">
        <div className="text-content container">
          <div className="col-md-6">
            <h1>About us</h1>
            <div className="fa fa-cutlery fa-2x" />
            <p className="desc-text">
              Restaurant is a place for simplicity. Good food, good beer, and
              good service. Simple is the name of the game, and we’re good at
              finding it in all the right places, even in your dining
              experience. We’re a small group from Denver, Colorado who make
              simple food possible. Come join us and see what simplicity tastes
              like.
            </p>
          </div>
          <div className="col-md-6">
            <div className="img-section">
              <img src="images/kabob.jpg" width={250} height={220} />
              <img src="images/limes.jpg" width={250} height={220} />
              <div className="img-section-space" />
              <img src="images/radish.jpg" width={250} height={220} />
              <img src="images/corn.jpg" width={250} height={220} />
            </div>
          </div>
        </div>
      </section>

      {/* ============ Pricing  ============= */}
      <Pricing />

      {/* ============ Featured Dish  ============= */}
      <section id="featured" className="description_content">
        <div className="featured background_content">
          <h1>
            Our Featured Dishes <span>Menu</span>
          </h1>
        </div>
        <div className="text-content container">
          <div className="col-md-6">
            <h1>Have a look to our dishes!</h1>
            <div className="icon-hotdog fa-2x" />
            <p className="desc-text">
              Each food is handmade at the crack of dawn, using only the
              simplest of ingredients to bring out smells and flavors that
              beckon the whole block. Stop by anytime and experience simplicity
              at its finest.
            </p>
          </div>
          <div className="col-md-6">
            <ul className="image_box_story2">
              <div
                id="carousel-example-generic"
                className="carousel slide"
                data-ride="carousel"
              >
                {/* Indicators */}
                <ol className="carousel-indicators">
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={0}
                    className="active"
                  />
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={1}
                  />
                  <li
                    data-target="#carousel-example-generic"
                    data-slide-to={2}
                  />
                </ol>
                {/* Wrapper for slides */}
                <div className="carousel-inner">
                  <div className="item active">
                    <img src="images/slider1.jpg" alt="..." />
                    <div className="carousel-caption"></div>
                  </div>
                  <div className="item">
                    <img src="images/slider2.jpg" alt="..." />
                    <div className="carousel-caption"></div>
                  </div>
                  <div className="item">
                    <img src="images/slider3.JPG" alt="..." />
                    <div className="carousel-caption"></div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </section>

      {/* ============ Reservation  ============= */}
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

      {/* ============ Contact Section  ============= */}
      <Contact />

      {/* ============ Footer Section  ============= */}
      <Footer />
    </div>
  );
};

export default HomePages;
