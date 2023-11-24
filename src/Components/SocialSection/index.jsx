
const SocialSection = () => {
  return (
    <section className="social_connect">
        <div className="text-content container">
          <div className="col-md-6">
            <span className="social_heading">FOLLOW</span>
            <ul className="social_icons">
              <li>
                <a
                  className="icon-twitter color_animation"
                  href="#"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  className="icon-github color_animation"
                  href="#"
                  target="_blank"
                />
              </li>
              <li>
                <a
                  className="icon-linkedin color_animation"
                  href="#"
                  target="_blank"
                />
              </li>
              <li>
                <a className="icon-mail color_animation" href="#" />
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <span className="social_heading">HUBUNGI</span>
            <span className="social_info">
              <a className="color_animation" href="tel:895-4120-83030">
                (+62) 895-4120-83030
              </a>
            </span>
          </div>
        </div>
      </section>
  )
}

export default SocialSection