import { Link, useLocation } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart";
import { Publish } from "@material-ui/icons";
import { useEffect, useMemo, useState } from "react";
import { userRequest } from "../../requestMethods";
import { updateProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";

export default function Product() {
  const location = useLocation();
  const productId = location.pathname.split("/")[2];
  const [pStats, setPStats] = useState([]);
  const [product, setProduct] = useState({});
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState([]);
  const [sizes, setSizes] = useState([]);
  const [colors, setColors] = useState([]);
  const dispatch = useDispatch();

  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Agu",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );
  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get(`/products/find/${productId}`);
        setProduct(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
  }, [productId]);

  // useEffect(() => {
  //   const getStats = async () => {
  //     try {
  //       const res = await userRequest.get("orders/income?pid=" + productId);
  //       const list = res.data.sort((a, b) => {
  //         return a._id - b._id;
  //       });
  //       list.map((item) =>
  //         setPStats((prev) => [
  //           ...prev,
  //           { name: MONTHS[item._id - 1], Sales: item.total },
  //         ])
  //       );
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   getStats();
  // }, [productId, MONTHS]);

  const [updateInput, setUpdate] = useState({});

  // update product
  const handleChange = (e) => {
    setUpdate((prev) => {
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
  // submit button
  const handleSubmit = (e) => {
    e.preventDefault();
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
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const updatedProduct = {
            ...updateInput,
            categories: cat,
            img: downloadURL,
            size: sizes,
            color: colors,
          };
          updateProduct(productId, updatedProduct, dispatch);
        });
      }
    );
  };
  return (
    <div className="product">
      <h1 className="productTitle">Update: {product.title}</h1>
      <div className="productTop">
        <div className="productTopLeft">
          {/* <Chart data={pStats} dataKey="Sales" title="Sales Performance" /> */}
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product?.img} alt="" className="productInfoImg" />
            <span className="productName">{product?.title}</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id:</span>
              <span className="productInfoValue">{product._id}</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">sales:</span>
              <span className="productInfoValue">5123</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">{product.inStock}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form onSubmit={handleSubmit}>
          <div className="productForm">
            <div className="productFormLeft">
              <div className="addProductItem">
                <label>Title</label>
                <input
                  name="title"
                  type="text"
                  placeholder="Products name"
                  defaultValue={product.title}
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Description</label>
                <input
                  name="desc"
                  type="text"
                  placeholder="description..."
                  defaultValue={product.desc}
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Price</label>
                <input
                  name="price"
                  type="number"
                  placeholder="100"
                  className="price-input"
                  pattern="^\d+(\.\d{1,2})?$"
                  defaultValue={product.price}
                  required
                  onChange={handleChange}
                />
              </div>
              <div className="addProductItem">
                <label>Categories</label>
                <input
                  type="text"
                  placeholder="jeans,skirts"
                  defaultValue={product.categories}
                  onChange={handleCat}
                />
              </div>
              <div className="addProductItem">
                <label>Sizes</label>
                <input
                  type="text"
                  placeholder="M,L,XL,XXL"
                  defaultValue={product.size}
                  onChange={handleSizes}
                />
              </div>
              <div className="addProductItem">
                <label>Colors</label>
                <input
                  type="text"
                  placeholder="red,green"
                  defaultValue={product.color}
                  onChange={handleColors}
                />
              </div>
              <div className="addProductItem">
                <label>Stock</label>
                <select name="inStock" onChange={handleChange}>
                  <option defaultValue={true} value="true">
                    Yes
                  </option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="addProductItem">
                <label>Featured</label>
                <select name="isFeatured" onChange={handleChange}>
                  <option defaultChecked value="true">
                    Yes
                  </option>
                  <option value="false">No</option>
                </select>
              </div>
              <div className="addProductItem">
                <label>Trending</label>
                <select name="isTreding" onChange={handleChange}>
                  <option defaultChecked value="true">
                    Yes
                  </option>
                  <option value="false">No</option>
                </select>
              </div>
            </div>

            <div className="productFormRight">
              <div className="productUpload">
                <img src={product.img} alt="" className="productUploadImg" />
                <label for="file">
                  <Publish />
                </label>
                <input
                  defaultValue={product.img}
                  onChange={(e) => setFile(e.target.files[0])}
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="productButton"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
