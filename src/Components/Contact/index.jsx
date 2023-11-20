const Contact = () => {
  return (
    <section id="contact">
      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5967026912313!2d124.9801809743656!3d1.4178810613546615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870fb08562b233%3A0x39f6f555cdb6eeab!2sStudent%20Canteen%20Universitas%20Klabat!5e0!3m2!1sen!2sid!4v1700488405365!5m2!1sen!2sid"
          width="100%"
          height={450}
          frameBorder={0}
          style={{ border: 0 }}
          allowFullScreen
        />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="inner contact">
              {/* Form Area */}
              <div className="contact-form">
                {/* Form */}
                <form id="contact-us" method="post" action="contact.php">
                  {/* Left Inputs */}
                  <div className="col-md-6 ">
                    {/* Name */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      required="required"
                      className="form"
                      placeholder="Name"
                    />
                    {/* Email */}
                    <input
                      type="email"
                      name="email"
                      id="email"
                      required="required"
                      className="form"
                      placeholder="Email"
                    />
                    {/* Subject */}
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      required="required"
                      className="form"
                      placeholder="Subject"
                    />
                  </div>
                  {/* End Left Inputs */}
                  {/* Right Inputs */}
                  <div className="col-md-6">
                    {/* Message */}
                    <textarea
                      name="message"
                      id="message"
                      className="form textarea"
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                  {/* End Right Inputs */}
                  {/* Bottom Submit */}
                  <div className="relative fullwidth col-xs-12">
                    {/* Send Button */}
                    <button
                      type="submit"
                      id="submit"
                      name="submit"
                      className="form-btn"
                    >
                      Send Message
                    </button>
                  </div>
                  {/* End Bottom Submit */}
                  {/* Clear */}
                  <div className="clear" />
                </form>
              </div>
              {/* End Contact Form Area */}
            </div>
            {/* End Inner */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
