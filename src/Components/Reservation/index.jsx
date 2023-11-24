import { useState } from "react";

const Reservation = () => {
  const [paymentMethod, setPaymentMethod] = useState("");

  const handlePaymentChange = (e) => {
    setPaymentMethod(e.target.value);
  };

  return (
    <section id="reservation" className="description_content">
      <div className="featured background_content">
        <a className="judul-reservation">Pesan Makanan Anda!</a>
      </div>
      <div className="text-content container">
        <div className="inner contact">
          <div className="contact-form">
            <form id="contact-us" method="post" action="reserve.php">
              <div className="container">
                <div className="row">
                  <div className="col-lg-8 col-md-6 col-xs-12">
                    <div className="row">
                      {/* Name and Contact Inputs */}
                      <div className="col-lg-6 col-md-6 col-xs-6">
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
                        <input
                          type="text"
                          name="alamat"
                          id="alamat"
                          required="required"
                          className="form"
                          placeholder="Alamat"
                        />
                      </div>

                      {/* Payment Method Selection */}
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-xs-12">
                          <select
                            id="payment-method"
                            name="payment_method"
                            className="form"
                            required="required"
                            value={paymentMethod}
                            onChange={handlePaymentChange}
                          >
                            <option value="">Pilih Metode Pembayaran</option>
                            <option value="bank_transfer">Transfer Bank</option>
                            <option value="cash">Cash</option>
                          </select>
                        </div>

                        {/* Upload Bukti Transfer */}
                        {paymentMethod === "bank_transfer" && (
                          <div className="col-lg-6 col-md-6 col-xs-6">
                            <label htmlFor="bukti-transfer">
                              Unggah Bukti Transfer:
                            </label>
                            <input
                              type="file"
                              name="bukti_transfer"
                              id="bukti-transfer"
                              className="form"
                              required={paymentMethod === "bank_transfer"}
                            />
                          </div>
                        )}
                      </div>

                      {/* Submit Button */}
                      <div className="col-xs-6 ">
                        <button
                          type="submit"
                          id="submit"
                          name="submit"
                          className="text-center form-btn form-btn"
                        >
                          Pesan Sekarang
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Business Hours Info */}
                  <div className="col-lg-4 col-md-6 col-xs-12">
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
              <div className="clear" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservation;
