import "./BannerSection.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { data } from "./dammyData";

export default function BannerSection() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (!inputs || !file || !cat) {
      Swal.fire({
        icon: "warning",
        title: "Fill the form",
        text: "Please complete the inputs",
      });
      return;
    }
  };

  return (
    <div className="whole-wrapper">
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
              <button>Update Banner</button>
            </div>
          </div>
        ))}
      </div>
      <div className="banner-form-container">
        <h1 className="banner-title">Update Banner</h1>
        <form>
          <div className="bannerForm">
            <div className="bannerItem">
              <label>Image</label>
              <input
                type="file"
                id="file"
                autoComplete=""
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            <div className="bannerItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="Apple Airpods"
                onChange={handleChange}
              />
            </div>
            <div className="bannerItem">
              <label>Description</label>
              <input
                name="desc"
                type="text"
                placeholder="description..."
                onChange={handleChange}
              />
            </div>
            <div className="bannerItem">
              <label>Price</label>
              <input
                name="price"
                type="number"
                placeholder="100"
                onChange={handleChange}
                className="price-input"
                pattern="^\d+(\.\d{1,2})?$"
                required
              />
            </div>
            <div className="bannerItem">
              <label>Categories</label>
              <input
                type="text"
                placeholder="jeans,skirts"
                onChange={handleCat}
              />
            </div>
          </div>
          <div className="addBannerBtn">
            <button type="submit" onClick={handleClick}>
              Update Banner
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
