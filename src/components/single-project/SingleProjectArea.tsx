 
import  { useState } from 'react'
import ImagePopup from '../../modals/ImagePopup';

import img_1 from "../../../public/assets/images/projects/work1.jpg";
import img_2 from "../../../public/assets/images/projects/work2.jpg";
import img_3 from "../../../public/assets/images/projects/work3.jpg";
import img_4 from "../../../public/assets/images/projects/work4.jpg"; 

const portfolio_images = [
  {
    id: 1,
    image: img_1,
  },
  {
    id: 2,
    image: img_2,
  },
  {
    id: 3,
    image: img_3,
  },
  {
    id: 4,
    image: img_4,
  },
]

export default function SingleProjectArea() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(null);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: any) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  //  images
  const image = portfolio_images.slice(0, 5).map((item) => item.image);


  return (
    <>
      <div className="single-project-page-design">
        <div className="single-project-image">
          <img src="assets/images/projects/work2.jpg" alt="image" />
        </div>
        <div className="container pt-60 pb-40">
          <div className="row">
            <div className="col-lg-4">

              <div className="single-project-page-left wow fadeInUp delay-0-2s">
                <div className="single-info">
                  <p>Year</p>
                  <h3>2025</h3>
                </div>
                <div className="single-info">
                  <p>Client</p>
                  <h3>____</h3>
                </div>
                {/* <div className="single-info">
                  <p>Services</p>
                  <h3>We</h3>
                </div> */}
                <div className="single-info">
                  <p>Project</p>
                  <h3>Ecommerce website</h3>
                </div>
              </div>

            </div>

            <div className="col-lg-8">
              <div className="single-project-page-right wow fadeInUp delay-0-4s">
                <h2>
                  Description
                </h2>
                <p>An eCommerce website built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled using Tailwind CSS offers a modern, responsive, and scalable shopping experience. With a sleek and user-friendly interface, the website ensures seamless navigation across all devices. It includes essential features such as secure authentication with JWT, allowing users to sign up, log in, and access role-based functionalities. The platform provides a smooth product management system where users can browse, search, and filter products, while admins can efficiently add, update, or remove items. A robust shopping cart and checkout system enable users to manage their orders, update quantities, and make secure payments through integrated gateways like Stripe or PayPal. The website also supports order tracking and management, ensuring a hassle-free experience for both customers and administrators. Built with performance and scalability in mind, React ensures a dynamic UI, while Node.js and MongoDB provide a powerful and efficient backend. This combination makes it an ideal solution for businesses looking to establish a strong online presence with a fast, engaging, and customizable eCommerce platform. 🚀</p>
              </div>
            </div>

          </div>

          <div className="row pt-60">
            {portfolio_images.map((item, i) => (
              <div className="col-lg-6">
                <a style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)} className="work-popup">
                  <div className="single-image wow fadeInUp delay-0-2s">
                    <img src={item.image} style={{ height: "auto" }} alt="gallery" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

    </>
  )
}
