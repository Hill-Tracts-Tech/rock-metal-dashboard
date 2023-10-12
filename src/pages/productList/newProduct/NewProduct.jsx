import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../../firebase";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import Loading from "../../../components/loader/Loading";
import { useHistory } from "react-router-dom";
import { addProduct } from "../serviceApi";
import Multiselect from "multiselect-react-dropdown";

export default function NewProduct() {
  const { isLoading } = useSelector((state) => state.product);
  const [inputs, setInputs] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCat = (e) => {
    setCat([e.target.value]);
  };

  const sizeOptions = ["S", "M", "L", "XL", "XXL", "XXXL"];

  const handleSizes = (selectedList, selectedItem) => {
    setSizes(selectedList);
  };

  const handleColors = (e) => {
    setColors([e.target.value]);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setLoading(true);
    if (!inputs || !file || !cat || !sizes || !colors) {
      Swal.fire({
        icon: "warning",
        title: "Fill the form",
        text: "Please complete the inputs",
      });
      setLoading(false);
      return;
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
        setLoading(false);
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
          setLoading(false);
          Swal.fire({
            icon: "success",
            title: "Product Added Successfully",
            showConfirmButton: true,
          }).then((result) => {
            if (result.isConfirmed) {
              history.push("/products");
            }
          });
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      {isLoading || loading ? (
        <Loading name={"block"} margin={"150px"} />
      ) : (
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
            <label>Category</label>
            <select name="category" onChange={handleCat}>
              <option value="@">Select Category</option>
              <option selected value="shirt">
                Shirt
              </option>
              <option selected value="hoodie">
                Hoodie
              </option>
              <option selected value="cotton">
                Cotton
              </option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Sizes</label>
            <Multiselect
              options={sizeOptions}
              onSelect={handleSizes}
              onRemove={handleSizes}
              selectedValues={sizes}
              displayValue="Select Sizes"
              isObject={false}
            />
          </div>
          <div className="addProductItem">
            <label>Colors</label>
            <select name="colors" onChange={handleColors}>
              <option value="@">Choose your color</option>
              <option value="Black">Black</option>
              <option value="White">White</option>
              <option value="Green">Green</option>
              <option value="Blue">Blue</option>
              <option value="Red">Red</option>
              <option value="Yellow">Yellow</option>
              <option value="Orange">Orange</option>
            </select>
          </div>
          <div className="addProductItem">
            <label>Stock</label>
            <select name="inStock" onChange={handleChange}>
              <option value="false">No</option>
              <option selected value="true">
                Yes
              </option>
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
            disabled={isLoading || loading}
          >
            {isLoading || loading ? "Loading..." : "Add Product"}
          </button>
        </form>
      )}
    </div>
  );
}
