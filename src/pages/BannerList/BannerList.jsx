import { Link } from "react-router-dom/cjs/react-router-dom";
import "./BannerList.css";
import { useState } from "react";
export default function BannerList() {
  const [file, setFile] = useState(null);

  const data = [
    {
      id: 1,
      img: "https://i.ibb.co/wLkr3G4/bag4.jpg",
      title: "Young thoughtful caucasian woman wears yellow scarf and anorak",
      category: "shirt",
      offer: "20%",
    },
    {
      id: 2,
      img: "https://i.ibb.co/wLkr3G4/bag4.jpg",
      title: "Young thoughtful caucasian woman wears yellow scarf and anorak",
      category: "skirt",
      offer: "20%",
    },
    {
      id: 3,
      img: "https://i.ibb.co/wLkr3G4/bag4.jpg",
      title: "Young thoughtful caucasian woman wears yellow scarf and anorak",
      category: "jeans",
      offer: "20%",
    },
    {
      id: 4,
      img: "https://i.ibb.co/wLkr3G4/bag4.jpg",
      title: "Young thoughtful caucasian woman wears yellow scarf and anorak",
      category: "t-shirt",
      offer: "20%",
    },
    {
      id: 5,
      img: "https://i.ibb.co/wLkr3G4/bag4.jpg",
      title: "Young thoughtful caucasian woman wears yellow scarf and anorak",
      category: "sport",
      offer: "20% 50 pics of sport pent",
    },
  ];
  return (
    <div className="banner-container">
      {data.map((banner) => (
        <div className="banner-wrapper">
          <div className="bannerImg">
            <img
              src={file?.name ? URL.createObjectURL(file) : banner.img}
              alt=""
            />
          </div>
          <div className="desc">
            <h2>{banner.title}</h2>
            <p>{banner.category}</p>
            <span>{banner.offer}</span>
          </div>
          <div className="btn">
            <Link to={`/banner/${banner.id}`}>
              <button>Update Banner</button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
