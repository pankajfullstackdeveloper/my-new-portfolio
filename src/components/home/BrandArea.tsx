 
import  { useEffect } from 'react'

export default function BrandArea() {
  const sizestyle = {
    width:"90px",
    height:'90px'
  }

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      const scrollers = document.querySelectorAll(".scroller");
      scrollers.forEach((scroller) => {
        scroller.setAttribute("data-animated", "true");
        const scrollerInner = scroller.querySelector(".scroller__inner");
        if (!scrollerInner) return;
        const scrollerContent = Array.from(scrollerInner.children);
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute("aria-hidden", "true");
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);

  return (
    <>
      <div className="company-design-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Skills || Worked With</h2>
              <div className="company-list">
                <div className="scroller" data-direction="left" data-speed="slow">
                  <div className="scroller__inner">
                    <img src="assets/images/skills-logos/logo1.webp" alt="Java Script" style={sizestyle}/>
                    <img src="assets/images/skills-logos/logo2.png" alt="CSS"style={sizestyle} />
                    <img src="assets/images/skills-logos/logo3.jpg" alt="HTML" style={sizestyle}/>
                    <img src="assets/images/skills-logos/logo4.png" alt="Node js" style={sizestyle}/>
                    <img src="assets/images/skills-logos/logo5.png" alt="React js" style={sizestyle}/>
                    <img src="assets/images/skills-logos/logo6.png" alt="MongoDb" style={sizestyle}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
