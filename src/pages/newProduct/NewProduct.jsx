import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function NewProduct() {
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat(e.target.value.split(","));
  };

  const handleSizes = (e) => {
    setSizes(e.target.value.split(","));
  };

  const handleColors = (e) => {
    setColors(e.target.value.split(","));
  };

  const handleClick = (e) => {
    if (!inputs && !file && !cat && !sizes && !colors) {
      Swal.fire({
        icon: "warning",
        title: "Fill the form",
        text: "Please complete the inputs",
      });
      return;
    }
    e.preventDefault();
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
          const product = {
            ...inputs,
            img: downloadURL,
            categories: cat,
            size: sizes,
            color: colors,
          };
          addProduct(product, dispatch);
          Swal.fire({
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            autoComplete=""
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            name="title"
            type="text"
            placeholder="Apple Airpods"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <input
            name="desc"
            type="text"
            placeholder="description..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
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
        <div className="addProductItem">
          <label>Categories</label>
          <input type="text" placeholder="jeans,skirts" onChange={handleCat} />
        </div>
        <div className="addProductItem">
          <label>Sizes</label>
          <input type="text" placeholder="M,L,XL,XXL" onChange={handleSizes} />
        </div>
        <div className="addProductItem">
          <label>Colors</label>
          <input type="text" placeholder="red,green" onChange={handleColors} />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Featured</label>
          <select name="isFeatured" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Trending</label>
          <select name="isTreding" onChange={handleChange}>
            <option value="false">No</option>
            <option value="true">Yes</option>
          </select>
        </div>
        <button
          type="submit"
          onClick={handleClick}
          className="addProductButton"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
