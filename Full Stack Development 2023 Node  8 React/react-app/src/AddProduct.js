import { useState } from "react";
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";

const AddProduct = () => {

  const [product, setProduct] = useState({});

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    addProduct(product)
  }

  const addProduct = async (product) => {
    const res = await axios.post('/products/create', product);
    console.log(res.data);
  }

  return (
    <form className="form-horizontal" onSubmit={handleSubmit}>
      <fieldset>
        {/* Form Name */}
        <legend> Add Product</legend>
        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="title">
            Title
          </label>
          <div className="col-md-4">
            <input
              id="title"
              name="title"
              type="text"
              placeholder="Title"
              className="form-control input-md"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="thumbnail">
            Thumbnail
          </label>
          <div className="col-md-4">
            <input
              id="thumbnail"
              name="thumbnail"
              type="text"
              placeholder="Thumbnail"
              className="form-control input-md"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="price">
            Price
          </label>
          <div className="col-md-4">
            <input
              id="price"
              name="price"
              type="number"
              placeholder="Price"
              className="form-control input-md"
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Select Basic */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="category">
            Category
          </label>
          <div className="col-md-4">
            <select
              id="category"
              name="category"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="smartphone">SmartPhone</option>
              <option value="laptops">Laptops</option>
            </select>
          </div>
        </div>

        {/* Select Basic */}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="brand">
            Brand
          </label>
          <div className="col-md-4">
            <select
              id="brand"
              name="brand"
              className="form-control"
              onChange={handleChange}
            >
              <option value="">Choose</option>
              <option value="apple">Apple</option>
              <option value="samsung">SamSung</option>
            </select>
          </div>
        </div>

        {/* Text input*/}
        <div className="form-group">
          <label className="col-md-4 control-label" htmlFor="discountPercentage">
            Discount
          </label>
          <div className="col-md-4">
            <input
              id="discountPercentage"
              name="discountPercentage"
              type="number"
              placeholder="Discount Percentage"
              className="form-control input-md"
              onChange={handleChange}
            />

          </div>
        </div>

        {/* Button */}
        <div className="form-group">
          <div className="col-md-4">
            <button
              id="singlebutton"
              name="singlebutton"
              className="btn btn-primary"
            >
              Add
            </button>
          </div>
        </div>

      </fieldset>
    </form>
  );
};

export default AddProduct;
