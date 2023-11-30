import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const AboutUs = () => {
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `aboutUs`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTitle(data.title);
          setSubTitle(data.subTitle);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <section id="story" className="description_content">
      <div className="text-content container">
        <div className="col-md-6">
          <h1>{title}</h1>
          <div className="fa fa-cutlery fa-2x" />
          <p className="desc-text">{subTitle}</p>
        </div>
        <div className="col-md-6">
          <div className="img-section">
            <img src="images/aboncakalang.jpg" width={250} height={220} />
            <img src="images/ayamgeprek.jpg" width={250} height={220} />
            <div className="img-section-space" />
            <img src="images/kepalmilo.jpg" width={250} height={220} />
            <img src="images/miecakalang.jpg" width={250} height={220} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
