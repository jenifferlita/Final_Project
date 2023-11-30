import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";

const Judul = () => {
  const [title, setTitle] = useState("");

  useEffect(() => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `JudulBesar`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          setTitle(data.title);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <section id="top" className="description_content">
      <div className="kantin background_content">
        <a className="judul-utama" href="#">
          {title}
        </a>
      </div>
      <div className="text-content container"></div>
    </section>
  );
};

export default Judul;
