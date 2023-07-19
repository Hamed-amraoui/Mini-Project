import React from "react";
import axios from "axios";
import { useState } from "react";


const CreateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const createProduct = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/products/create", {
        name,
        price,
        quantity,
      })
      .then((res) => {
        console.log(res.data);
        window.location="/products/";
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Create a Product</h1>
      <form onSubmit={createProduct}>
        <div>
          <label>Product Name: </label>
          <input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          </div>
          <div>
          <label>Product Price: </label>
          <input
            type="number"
            name="price"
            onChange={(e) => setPrice(e.target.value)}
          />
          </div>
          <div>
          <label>Product Quantity: </label>
          <input
            type="number"
            name="quantity"
            onChange={(e) => setQuantity(e.target.value)}
          />
          </div>
          <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateProduct;
