import Product from './Product';
import { useEffect, useState } from 'react';
import axios from 'axios';
axios.defaults.baseURL = 'http://localhost:8080';


const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  /*  Function To Fetch All Products From The Server */
  const getProducts = async () => {
    const res = await axios.get('/products/getAllProducts');
    console.log(res.data);
    setProducts(res.data);
    setTotal(res.data.length) /* Updating Total State With The Length Of Fetched Data */
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

  /* Useeffect Hook To Fetch Products When The Component Mounts */
  useEffect(() => {
    getProducts();
  }, []);

  {/*
    return (
      <>
        {products.map((product, index) => (
          <Product {...product} key={index} handleClick={handleClick}></Product>
        ))}
      </>
    );
  */}

  return (
    <>
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

/*

🖥️ In Javascript, The Map Function Is Used To Iterate Over An Array And Create A New Array With Transformed Elements.

🖥️ This Callback Function Is Executed For Each Element In The Array, And It Receives Three Arguments:  

👉 CurrentValue: The Current Element Being Processed In The Array. 
👉 Index: The Index Of The Current Element Being Processed. 

*/ 