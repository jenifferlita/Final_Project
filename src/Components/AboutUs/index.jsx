const AboutUs = () => {
  return (
    <section id="story" className="description_content">
    <div className="text-content container">
      <div className="col-md-6">
        <h1>About us</h1>
        <div className="fa fa-cutlery fa-2x" />
        <p className="desc-text">
         U-Canteen adalah bentuk digital dengan inovasi terkini dari 
         kantin Universitas Klabat.U-Canteen menghadirkan pemesanan
         dan pembayaran yang lebih mudah dan modern di kampus.Dengan
         U-Canteen,mahasiswa dan staff dapat menikmati proses transaksi
         dan pemesanan yang lebih praktis dan tanpa antrian.
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
  )
}

export default AboutUs;