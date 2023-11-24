const Pricing = () => {
  return (
    <section id="pricing" className="description_content">
      <div className="pricing background_content">
        <h1>
          <a className="judul-pricing">Harga Terjangkau</a>
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
                  Snack
                </li>
                <li className="filter" data-filter="drink">
                  Drink
                </li>
              </ul>
              {/* @end #filter-list */}
              <ul id="portfolio">
                {/* Makanan */}
                <li className="item breakfast kotakputih">
                  <img src="/images/TempePenyet.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Tempe Penyet</p>
                    </a>
                  </h2>
                </li>
                <li className="item breakfast kotakputih">
                  <img src="/images/NasiCamputIkan.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Nasi Campur Ikan</p>
                    </a>
                  </h2>
                </li>
                <li className="item breakfast kotakputih">
                  <img src="/images/NasiCampurAyam.png" alt="Food" />
                  <h2 className="white2">20k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Nasi Campur Ayam</p>
                    </a>
                  </h2>
                </li>
                <li className="item special kotakputih">
                  <img src="/images/AyamGeprek.png" alt="Food" />
                  <h2 className="white2">25k </h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Ayam Geprek</p>
                    </a>
                  </h2>
                </li>
                <li className="item special kotakputih">
                  <img src="/images/NasiGorengRoa.png" alt="Food" />
                  <h2 className="white2">20k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Nasi Goreng Roa</p>
                    </a>
                  </h2>
                </li>
                <li className="item special kotakputih">
                  <img src="/images/NasiGorengCakalang.png" alt="Food" />
                  <h2 className="white2">20k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Nasi Goreng Cakalang</p>
                    </a>
                  </h2>
                </li>
                <li className="item special kotakputih">
                  <img src="/images/NasiGorengAyam.png" alt="Food" />
                  <h2 className="white2">20k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Nasi Goreng Ayam</p>
                    </a>
                  </h2>
                </li>
                <li className="item special kotakputih">
                  <img src="/images/Midal.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Miedal</p>
                    </a>
                  </h2>
                </li>
                <li className="item breakfast special kotakputih">
                  <img src="/images/TInutuan.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Tinutuan</p>
                    </a>
                  </h2>
                </li>
                <li className="item special kotakputih">
                  <img src="/images/MieCakalang.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Mie Cakalang</p>
                    </a>
                  </h2>
                </li>

                {/* Minuman */}
                <li className="item drink kotakputih">
                  <img src="/images/Milo.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Milo</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/Chocolatos.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Choco latos</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/Bengbeng.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Bengbeng</p>
                      <p>Drink</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/JerukNipis.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Jeruk Nipis</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/Saraba.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Saraba</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/Nutrisari.png" alt="Food" />
                  <h2 className="white2">5k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>NutriSari</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/Popice.png" alt="Food" />
                  <h2 className="white2">6k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Pop Ice</p>
                    </a>
                  </h2>
                </li>
                <li className="item drink kotakputih">
                  <img src="/images/Aqua.png" alt="Food" />
                  <h2 className="white2">5k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Air Mineral</p>
                    </a>
                  </h2>
                </li>

                {/* Snack */}
                <li className="item desert kotakputih">
                  <img src="/images/KepalMilo.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Es Kepal Milo</p>
                    </a>
                  </h2>
                </li>
                <li className="item desert kotakputih">
                  <img src="/images/KacangSusu.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Es Kacang Susu</p>
                    </a>
                  </h2>
                </li>
                <li className="item desert kotakputih">
                  <img src="/images/PaluButung.png" alt="Food" />
                  <h2 className="white2">15k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Es Palu Butung</p>
                    </a>
                  </h2>
                </li>
                <li className="item desert kotakputih">
                  <img src="/images/PisGorSepatu.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Pisang Goreng Sepatu</p>
                    </a>
                  </h2>
                </li>
                <li className="item desert kotakputih">
                  <img src="/images/GorohoTepung.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Goroho Tepung</p>
                    </a>
                  </h2>
                </li>
                <li className="item desert kotakputih">
                  <img src="/images/GorohoStick.png" alt="Food" />
                  <h2 className="white2">10k</h2>
                  <h2 className="white">
                    <a
                      href="#reservation"
                      onClick={() => this.handleMenuClick("Goroho Stick")}
                    >
                      <p>Goroho Stick</p>
                    </a>
                  </h2>
                </li>
              </ul>
              {/* @end #portfolio */}
            </div>
            {/* @end #w */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
