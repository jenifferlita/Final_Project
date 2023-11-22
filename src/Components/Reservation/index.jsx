const Reservation = () => {
  return (
    <section id="reservation" className="description_content">
      <div className="featured background_content">
        <a className="judul-reservation">Pesan Makanan Anda!</a>
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
                          name="nama_lengkap"
                          id="nama_lengkap"
                          required="required"
                          className="form"
                          placeholder="Nama Lengkap"
                        />
                        <input
                          type="text"
                          name="hp"
                          id="hp"
                          required="required"
                          className="form"
                          placeholder="No HP"
                        />
                      </div>
                      <div className="col-lg-6 col-md-6 col-xs-6">
                        {/* Name */}
                        <input
                          type="text"
                          name="alamat"
                          id="alamat"
                          required="required"
                          className="form"
                          placeholder="Alamat"
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
                          Pesan Sekaran
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-xs-12">
                    {/*message*/}
                    <div className="right-text">
                      <h2>Jam Buka</h2>
                      <hr />
                      <p>Senin : 8:00 AM - 6:00 PM</p>
                      <p>Selasa: 8:00 AM - 6:00 PM</p>
                      <p>Rabu : 8:00 AM - 6:00 PM</p>
                      <p>Kamis : 8:00 AM - 6:00 PM</p>
                      <p>Jumat : 8:00 AM - 15:00 PM</p>
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
  );
};

export default Reservation;
