import Zoom from "react-reveal/Zoom";
const Judul = () => {
  return (
    <section id="top" className="description_content">
      <div className="kantin background_content">
        <Zoom bottom delay={100}>
          <a className="judul-utama" href="#">
            U-Canteen
          </a>
        </Zoom>
      </div>
      <div className="text-content container"></div>
    </section>
  );
};

export default Judul;
