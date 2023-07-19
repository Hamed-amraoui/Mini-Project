//edit page 
import React from 'react';
import axios from 'axios';
import { useState } from "react";
import { useParams } from 'react-router-dom';   

const EditProduct = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);

    const editProduct = (id) => {
        axios
          .put(`http://localhost:8000/api/products/update/${id}`, {
            name,
            price,
            quantity,
          })
          .then((res) => {
            console.log(res.data);
            //window.location="/products/";
          })
          .catch((err) => console.log(err));
      };
    return (
        <div>
            <h1>Edit Product</h1>
            <form onSubmit={editProduct}>
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
                <button type="submit">Edit</button>
            </form>
        </div>
    );
}

export default EditProduct;