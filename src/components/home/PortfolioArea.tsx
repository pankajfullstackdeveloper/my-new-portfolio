import { useState } from "react";
import ImagePopup from "../../modals/ImagePopup";
import "react-18-image-lightbox/style.css";

import portfolio_img_1 from "../../../public/assets/images/projects/work1.jpg";
import portfolio_img_2 from "../../../public/assets/images/projects/work2.jpg";
import portfolio_img_3 from "../../../public/assets/images/projects/work3.jpg";
import portfolio_img_4 from "../../../public/assets/images/projects/work4.jpg";
import portfolio_img_5 from "../../../public/assets/images/projects/work5.jpg"; 

interface DataType {
  id: number;
  col: string;
  image: string;
  title: string;
  category: string;
  url: string;
}

const portfolio_data: DataType[] = [
  {
    id: 1,
    col: "6",
    image: portfolio_img_1,
    title: "GenAI Studio",
    category: "AI",
    url: "https://genai-studio-dev.infiniit.ai/"
  },
  {
    id: 2,
    col: "6",
    image: portfolio_img_2,
    title: "NIIT DIGITAL",
    category: "Eduction",
    url: "https://www.niit.com/india/"
  },
  {
    id: 3,
    col: "4",
    image: portfolio_img_3,
    title: "Bee Recruiter",
    category: "JOB PORTAL",
    url: "http://brecruiter.vayuz.com/"
  },
  {
    id: 4,
    col: "4",
    image: portfolio_img_4,
    title: "Resume Analyzer",
    category: "ATS",
    url: "https://resume-match-frontend.vercel.app/"
  },
  {
    id: 5,
    col: "4",
    image: portfolio_img_5,
    title: "Frammer AI",
    category: "AI",
    url: "https://www.frammer.com/"
  },
];

export default function PortfolioArea() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };

  const image = portfolio_data.map((item) => item.image);

  return (
    <>
      <div className="projects-area" id="portfolio">
        <div className="custom-icon">
          <img src="assets/images/custom/work-scribble.svg" alt="custom" />
        </div>
        <div className="container-fluid">
          <div className="row g-4 portfolio-grid">
            {portfolio_data.map((item, i) => (
              <div key={i} className={`col-md-6 col-xl-${item.col} portfolio-item category-1`}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="work-popup">
                  <div className="portfolio-box">
                    <img src={item.image} alt="" style={{ height: "auto" }} data-rjs="2" />
                    <span className="portfolio-category">{item.category}</span>
                    <div className="portfolio-caption">
                      <h1>{item.title}</h1>
                    </div>
                  </div>
                </a>
              </div>
            ))} 
          </div>
        </div>
      </div>

      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
    </>
  );
}
