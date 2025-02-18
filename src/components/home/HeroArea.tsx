 
export default function HeroArea() {
  return (
    <>
      <section id="home" className="main-hero-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">

              <div className="hero-content wow fadeInUp text-center delay-0-2s">
                <h2>Pankaj Kumar</h2>
              </div>

            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 pt-30">

            </div>
            <div className="col-lg-6">
              <div className="hero-image">
                <img src="assets/images/about/me.jpg" alt="" />
              </div>

            </div>
            <div className="col-lg-3 pt-30">
              <div className="hero-content wow fadeInUp delay-0-4s">
                <p>Hi, I’m Pankaj Kumar a passionate Developer dedicated to creating user-friendly digital experiences.</p>
                <a className="theme-btn" href="/my resume.pdf">Download Resume</a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
