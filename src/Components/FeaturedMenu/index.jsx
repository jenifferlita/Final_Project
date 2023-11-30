import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const FeaturedMenu = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [judul, setJudul] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `fitur`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTitle(data.title);
          setSubTitle(data.subTitle);
          setJudul(data.judul);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="featured" className="description_content">
      <div className="pricing background_content">
        <a className="judul-reservation">{judul}</a>
      </div>
      <div className="text-content container">
        <div className="col-md-6">
          <h1>{title}</h1>
          <div className="icon-hotdog fa-2x" />
          <p className="desc-text">{subTitle}</p>
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
                  <img src="/images/TInutuan.png" alt="..." />
                  <div className="carousel-caption"></div>
                </div>
                <div className="size item">
                  <img src="/images/AyamGeprek.png" alt="..." />
                  <div className="carousel-caption"></div>
                </div>
                <div className="size item">
                  <img src="/images/NasiCamputIkan.png" alt="..." />
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
