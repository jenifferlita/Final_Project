const FeaturedMenu = () => {
  return (
    <section id="featured" className="description_content">
      <div className="pricing background_content">
        <a className="judul-reservation">Menu Andalan Kami</a>
      </div>
      <div className="text-content container">
        <div className="col-md-6">
          <h1>Cek Menu Makanan Kita!</h1>
          <div className="icon-hotdog fa-2x" />
          <p className="desc-text">
            Nikmati kelezatan istimewa dengan menu andalan kami! Hidangan
            pilihan, cita rasa luar biasa. Dari hidangan klasik hingga kreasi
            inovatif, setiap sajian memikat lidah Anda. Ayam Geprek, sumber
            kelezatan yang meledak di lidah. Tinutuan, semangkuk kehangatan dari
            Sulawesi Utara. Dan Nasi Campur Ayam, paduan sempurna cita rasa.
            Hadirkan kelezatan dalam setiap suapan, hanya untuk Anda yang
            mencari pengalaman kuliner tak terlupakan! Jelajahi sensasi baru
            dalam setiap gigitan. Selera tak terlupakan, hanya di sini!
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
                <li data-target="#carousel-example-generic" data-slide-to={1} />
                <li data-target="#carousel-example-generic" data-slide-to={2} />
              </ol>
              {/* Wrapper for slides */}
              <div className="carousel-inner">
                <div className="size item active">
                  <img src="public\images\TInutuan.png" alt="..." />
                  <div className="carousel-caption"></div>
                </div>
                <div className="size item">
                  <img src="public\images\AyamGeprek.png" alt="..." />
                  <div className="carousel-caption"></div>
                </div>
                <div className="size item">
                  <img src="images/NasiCampurAyam.png" alt="..." />
                  <div className="carousel-caption"></div>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturedMenu;
