import "./AddBanner.css";
import { useState } from "react";
import Swal from "sweetalert2";

export default function AddBanner() {
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
    <div className="banner-container">
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
  );
}
