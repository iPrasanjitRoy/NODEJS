import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState(1); /* Track Current Page */
  const [currentField, setCurrentField] = useState(null);

  /*  Function To Fetch All Products From The Server */
  const getProducts = async () => {
    const res = await axios.get('/products/');
    console.log(res.data);
    setProducts(res.data);
    const totalCount = parseInt(res.headers['X-Total-Count']);
    if (!isNaN(totalCount)) {
      setTotal(totalCount);
    } else {
      console.error('Invalid X-Total-Count header value:', res.headers['X-Total-Count']);
    }

    console.log(totalCount); /* Nothing Coming */
    // setTotal(res.data.length) /* Updating Total State With The Length Of Fetched Data */
  };

  /* Function To Handle Product Deletion By ID */
  const handleClick = async (id) => {
    const res = await axios.delete(`/products/${id}`);
    console.log(res.data);
    /* This Checks If The Response (Res) From The Server After Deleting A Product Contains An _id Property In Its Data */
    if (res.data._id) {
      /* If Product Was Successfully Deleted, Update Products State To Remove It */
      setProducts(products.filter((p) => p._id !== res.data._id));
    }
  };

  /* Function To Handle Pagination */
  const handlePage = async (page) => {
    setCurrentPage(page); /* Update Current Page State */
    // const res = await axios.get(`/products?page=${page}`);
    const res = await axios.get(`/products?sort=${currentField.sort}&order=${currentField.order}&page=${page}`);
    console.log(res.data);
    setProducts(res.data);

  };

  const handleSort = async (e) => {
    const field = e.target.value.split('.');
    setCurrentField({ sort: field[0], order: field[1] });
    const res = await axios.get(`/products?sort=${field[0]}&order=${field[1]}&page=${currentPage}`);
    console.log(res.data);
    setProducts(res.data);
  };

  /* Useeffect Hook To Fetch Products When The Component Mounts */
  useEffect(() => {
    getProducts();
    handlePage();
    handleSort();
  }, []);

  return (
    <>
      <select onChange={handleSort}>
        <option value="price.desc">Price High To Low</option>
        <option value="price.asc">Price Low To High</option>
        <option value="rating.desc">Rating High To Low</option>
        <option value="rating.asc">Rating Low To High</option>
      </select>

      {/* Pagination Buttons */}
      {/* This Part Creates A New Array With A Length Determined By Math.ceil(Total / 4). */}
      {/*  For Instance, If Total Is 10, Math.ceil(10 / 4) Equals 3, So The Array Will Have 3 Elements. */}
      {/* .map((e, i) => ...) Iterates Over Each Element (e) And Its Index (i) In The Array.  */}
      {/* e Represents Each Element In The Array, Which In This Case Is 0. */}
      {/* i Is The Index Of The Current Element In The Array */}
      {/* For Each Iteration , It Generates A <button> Element. */}
      {/* */}
      {/* {Array(Math.ceil(total / 4))
        .fill(0)
        .map((e, i) => (
          <button onClick={() => handlePage(i + 1)}>{i + 1}</button>
        ))} */}

      {total > 0 &&
        Array(Math.ceil(total / 4))
          .fill(0)
          .map((e, i) => (
            <button key={i} onClick={() => handlePage(i + 1)}>{i + 1}</button>
          ))
      }

      {/* Mapping Over The Array Of Products To Render Product Component For Each Product */}
      {products.map((product, index) => {
        console.log("Rendering Product With index:", index);
        return (
          <Product {...product} key={index} handleClick={handleClick}></Product>
        );
      })}
    </>
  );
};

export default ProductList;