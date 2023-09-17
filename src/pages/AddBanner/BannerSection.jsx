import "./BannerSection.css";
import { useState } from "react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { addSlider } from "./BannerApi";
import app from "../../firebase";

export default function BannerSection() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleClick = (e) => {
    console.log("click");
    e.preventDefault();
    if (!inputs || !file || !cat) {
      Swal.fire({
        icon: "warning",
        title: "Fill the form",
        text: "Please complete the inputs",
      });
    }
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const slider = {
            ...inputs,
            img: downloadURL,
            cat: cat[0],
          };
          console.log(slider);
          try {
            addSlider(slider, dispatch);
            Swal.fire({
              icon: "success",
              title: "Product Added Successfully",
              showConfirmButton: true,
            }).then((result) => {
              if (result.isConfirmed) {
                history.push("/sliders");
              }
            });
          } catch (error) {
            console.error("Error adding slider:", error);
          }
        });
      }
    );
  };

  return (
    <div className="whole-wrapper">
      <div className="banner-container"></div>
      <div className="banner-form-container">
        <h1 className="banner-title">Add New Banner</h1>
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
              <label>Background</label>
              <input
                name="bg"
                type="text"
                placeholder="#fff,#ddd,#fddd"
                onChange={handleChange}
                className="price-input"
                required
              />
            </div>
            <div className="bannerItem">
              <label>Categories</label>
              <input
                name="cat"
                type="text"
                placeholder="jeans,skirts"
                onChange={handleCat}
              />
            </div>
          </div>
          <div className="addBannerBtn">
            <button type="submit" onClick={handleClick}>
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
