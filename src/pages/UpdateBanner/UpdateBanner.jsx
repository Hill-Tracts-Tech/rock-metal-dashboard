import { useLocation } from "react-router-dom";
import "./UpdateBanner.css";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { Publish } from "@material-ui/icons";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";
import { updateSlider } from "../AddBanner/BannerApi";

export default function UpdateBanner() {
  const location = useLocation();
  const bannerId = location.pathname?.split("/")[2];
  const [slider, setSlider] = useState({});
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const dispatch = useDispatch();

  const history = useHistory();
  useEffect(() => {
    const getSlider = async () => {
      try {
        const res = await userRequest.get(`/sliders/find/${bannerId}`);
        setSlider(res.data.data);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error,
        });
      }
    };
    getSlider();
  }, [bannerId]);

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
    if (file?.name) {
      const fileName = new Date().getTime() + file?.name;
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
          toast.error("May be some issues!!", {
            position: "top-right",
            autoClose: 3000,
          });
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            const updatedInfo = {
              ...inputs,
              img: downloadURL,
              cat: cat[0],
            };
            updateSlider(bannerId, updatedInfo, dispatch);
            toast.success("Slider Updated successfully!", {
              position: "top-right",
              autoClose: 3000,
            });
            history.push("/banners");
          });
        }
      );
    } else {
      const updatedInfo = {
        ...inputs,
        cat: cat[0],
      };
      updateSlider(bannerId, updatedInfo, dispatch);
      toast.success("Slider Updated successfully!", {
        position: "top-right",
        autoClose: 3000,
      });
      history.push("/banners");
    }
  };
  return (
    <div className="whole-wrapper">
      <div className="banner-container"></div>
      <div className="banner-form-container">
        <h1 className="banner-title">Update Banner</h1>
        <form>
          <div className="bannerForm">
            <div className="bannerItem">
              <label>Image</label>
              <img
                src={file?.name ? URL.createObjectURL(file) : slider.img}
                alt=""
                className="productUploadImg"
              />
              <label for="file">
                <Publish />
              </label>
              <input
                defaultValue={slider?.img}
                onChange={(e) => setFile(e.target.files[0])}
                type="file"
                id="file"
                style={{ display: "none" }}
              />
            </div>
            <div className="bannerItem">
              <label>Title</label>
              <input
                name="title"
                type="text"
                placeholder="Apple Airpods"
                defaultValue={slider?.title}
                onChange={handleChange}
              />
            </div>
            <div className="bannerItem">
              <label>Description</label>
              <input
                name="desc"
                type="text"
                placeholder="description..."
                defaultValue={slider?.desc}
                onChange={handleChange}
              />
            </div>
            <div className="bannerItem">
              <label>Background</label>
              <input
                name="bg"
                type="text"
                placeholder="#fff,#ddd,#fddd"
                defaultValue={slider?.bg}
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
                defaultValue={slider?.cat}
                onChange={handleCat}
              />
            </div>
          </div>
          <div className="addBannerBtn">
            <button type="submit" onClick={handleClick}>
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
