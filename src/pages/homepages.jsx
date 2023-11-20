import Contact from "../Components/Contact";

const HomePages = () => {
  return (
    <div>
      <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="row">
            {/* Brand and toggle get grouped for better mobile display */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle collapsed"
                data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1"
              >
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand" href="#">
                Universitas Klabat
              </a>
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
                    PRICING
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
            {/* /.navbar-collapse */}
          </div>
        </div>
        {/* /.container-fluid */}
      </nav>
      {/* <section id="top" className="starter_container bg">
            <div className="follow_container">
            <div className="col-md-6 col-md-offset-3">
                <h2 className="top-title"> Restaurant</h2>
                <h2 className="white second-title">" Best in the city "</h2>
                <hr />
            </div>
            </div>
        </section> */}
      <section id="top" className="description_content">
        <div className="pricing background_content">
          <h1>U-Canteen</h1>
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
      <section id="pricing" className="description_content">
        <div className="pricing background_content">
          <h1>
            <span>Affordable</span> pricing
          </h1>
        </div>
        <div className="text-content container">
          <div className="container">
            <div className="row">
              <div id="w">
                <ul id="filter-list" className="clearfix">
                  <li className="filter" data-filter="all">
                    All
                  </li>
                  <li className="filter" data-filter="breakfast">
                    Breakfast
                  </li>
                  <li className="filter" data-filter="special">
                    Special
                  </li>
                  <li className="filter" data-filter="desert">
                    Desert
                  </li>
                  <li className="filter" data-filter="dinner">
                    Dinner
                  </li>
                </ul>
                {/* @end #filter-list */}
                <ul id="portfolio">
                  <li className="item breakfast">
                    <img src="images/food_icon01.jpg" alt="Food" />
                    <h2 className="white">$20</h2>
                  </li>
                  <li className="item dinner special">
                    <img src="images/food_icon02.jpg" alt="Food" />
                    <h2 className="white">$20</h2>
                  </li>
                  <li className="item dinner breakfast">
                    <img src="images/food_icon03.jpg" alt="Food" />
                    <h2 className="white">$18</h2>
                  </li>
                  <li className="item special">
                    <img src="images/food_icon04.jpg" alt="Food" />
                    <h2 className="white">$15</h2>
                  </li>
                  <li className="item dinner">
                    <img src="images/food_icon05.jpg" alt="Food" />
                    <h2 className="white">$20</h2>
                  </li>
                  <li className="item special">
                    <img src="images/food_icon06.jpg" alt="Food" />
                    <h2 className="white">$22</h2>
                  </li>
                  <li className="item desert">
                    <img src="images/food_icon07.jpg" alt="Food" />
                    <h2 className="white">$32</h2>
                  </li>
                  <li className="item desert breakfast">
                    <img src="images/food_icon08.jpg" alt="Food" />
                    <h2 className="white">$38</h2>
                  </li>
                </ul>
                {/* @end #portfolio */}
              </div>
              {/* @end #w */}
            </div>
          </div>
        </div>
      </section>

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
      <section id="reservation" className="description_content">
        <div className="featured background_content">
          <h1>Reserve a Table!</h1>
        </div>
        <div className="text-content container">
          <div className="inner contact">
            {/* Form Area */}
            <div className="contact-form">
              {/* Form */}
              <form id="contact-us" method="post" action="reserve.php">
                {/* Left Inputs */}
                <div className="container">
                  <div className="row">
                    <div className="col-lg-8 col-md-6 col-xs-12">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-6">
                          {/* Name */}
                          <input
                            type="text"
                            name="first_name"
                            id="first_name"
                            required="required"
                            className="form"
                            placeholder="First Name"
                          />
                          <input
                            type="text"
                            name="last_name"
                            id="last_name"
                            required="required"
                            className="form"
                            placeholder="Last Name"
                          />
                          <input
                            type="text"
                            name="state"
                            id="state"
                            required="required"
                            className="form"
                            placeholder="State"
                          />
                          <input
                            type="text"
                            name="datepicker"
                            id="datepicker"
                            required="required"
                            className="form"
                            placeholder="Reservation Date"
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-xs-6">
                          {/* Name */}
                          <input
                            type="text"
                            name="phone"
                            id="phone"
                            required="required"
                            className="form"
                            placeholder="Phone"
                          />
                          <input
                            type="text"
                            name="guest"
                            id="guest"
                            required="required"
                            className="form"
                            placeholder="Guest Number"
                          />
                          <input
                            type="email"
                            name="email"
                            id="email"
                            required="required"
                            className="form"
                            placeholder="Email"
                          />
                          <input
                            type="text"
                            name="subject"
                            id="subject"
                            required="required"
                            className="form"
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-xs-6 ">
                          {/* Send Button */}
                          <button
                            type="submit"
                            id="submit"
                            name="submit"
                            className="text-center form-btn form-btn"
                          >
                            Reserve
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-xs-12">
                      {/* Message */}
                      <div className="right-text">
                        <h2>Hours</h2>
                        <hr />
                        <p>Monday to Friday: 7:30 AM - 11:30 AM</p>
                        <p>Saturday &amp; Sunday: 8:00 AM - 9:00 AM</p>
                        <p>Monday to Friday: 12:00 PM - 5:00 PM</p>
                        <p>Monday to Saturday: 6:00 PM - 1:00 AM</p>
                        <p>Sunday to Monday: 5:30 PM - 12:00 AM</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Clear */}
                <div className="clear" />
              </form>
            </div>
            {/* End Contact Form Area */}
          </div>
          {/* End Inner */}
        </div>
      </section>

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
      <footer className="sub_footer">
        <div className="container">
          <div className="col-md-4">
            <p className="sub-footer-text text-center">
              © Restaurant 2014, Theme by{" "}
              <a href="https://themewagon.com/">ThemeWagon</a>
            </p>
          </div>
          <div className="col-md-4">
            <p className="sub-footer-text text-center">
              Back to <a href="#top">TOP</a>
            </p>
          </div>
          <div className="col-md-4">
            <p className="sub-footer-text text-center">
              Built With Care By{" "}
              <a href="#" target="_blank">
                Us
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePages;
