
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
              <li className="filter" data-filter="dinner">
                Drink
              </li>
            </ul>
            {/* @end #filter-list */}
            <ul id="portfolio">
              <li className="item dinner special">
                <img src="/images/AyamGeprek.png" alt="Food" />
                <h2 className="white">25k </h2>
                <h2 className="pemesanan" href="#reservation">Ayam Geprek</h2>
              </li>
              <li className="item dinner special">
                <img src="/images/TempePenyet.png" alt="Food" />
                <h2 className="white">15k</h2>
                <h2 className="white" href="#reservation">Tempe Penyet</h2>
              </li>
              <li className="item dinner breakfast">
                <img src="/images/NasiCamputIkan.png" alt="Food" />
                <h2 className="white">15k</h2>
                <h2 className="white" href="#reservation">Nasi Campur Ikan</h2>
              </li>
              <li className="item dinner breakfast">
                <img src="/images/NasiCampurAyam.png" alt="Food" />
                <h2 className="white">20k</h2>
                <h2 className="white" href="#reservation">Nasi Campur Ayam</h2>
              </li>
              <br />
              <li className="item dinner">
                <img src="/images/NasiGorengRoa.png" alt="Food" />
                <h2 className="white">20k</h2>
                <h2 className="white" href="#reservation">Nasi Goreng Roa</h2>
              </li>
              <li className="item special">
                <img src="/images/NasiGorengCakalang.png" alt="Food" />
                <h2 className="white">20k</h2>
                <h2 className="white" href="#reservation">Nasi Goreng Cakalang</h2>
              </li>
              <li className="item dinner special">
                <img src="/images/NasiGorengAyam.png" alt="Food" />
                <h2 className="white">20k</h2>
                <h2 className="white" href="#reservation">Nasi Goreng Ayam</h2>
              </li>
              <li className="item dinner special">
                <img src="/images/Midal.png" alt="Food" />
                <h2 className="white">15k</h2>
                <h2 className="white" href="#reservation">Miedal</h2>
              </li>
              <br />
              <li className="item dinner">
                <img src="/images/TInutuan.png" alt="Food" />
                <h2 className="white">15k</h2>
                <h2 className="white" href="#reservation">Tinutuan</h2>
              </li>
              <li className="item dinner special">
                <img src="/images/MieCakalang.png" alt="Food" />
                <h2 className="white">15k</h2>
                <h2 className="white" href="#reservation">Mie Cakalang</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Milo.png" alt="Food" />
                <h2 className="white">10k</h2>
                <h2 className="white" href="#reservation">Milo</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Chocolatos.png" alt="Food" />
                <h2 className="white">10k</h2>
                <h2 className="white" href="#reservation">Chocolatos</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Benbeng.png" alt="Food" />
                <h2 className="white">10k</h2>
                <h2 className="white" href="#reservation">Bengbeng drink</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/JerukNipis.png" alt="Food" />
                <h2 className="white">10k</h2>
                <h2 className="white" href="#reservation">Jeruk Nipis</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Saraba.png" alt="Food" />
                <h2 className="white">10k</h2>
                <h2 className="white" href="#reservation">Saraba</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Nutrisari.png" alt="Food" />
                <h2 className="white">5k</h2>
                <h2 className="white" href="#reservation">Nutrisari</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Popice.png" alt="Food" />
                <h2 className="white">6k</h2>
                <h2 className="white" href="#reservation">Pop Ice</h2>
              </li>
              <li className="item dinner drink">
                <img src="/images/Aqua.png" alt="Food" />
                <h2 className="white">5k</h2>
                <h2 className="white" href="#reservation">Air Mineral</h2>
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
  )
}

export default Pricing