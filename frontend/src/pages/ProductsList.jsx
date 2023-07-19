import axios from "axios";
import { useEffect, useState } from "react";

const ProductsList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = async() => {
        try {
            const res = await axios.get("http://localhost:8000/api/products");
            console.log(res.data);
            setProducts(res.data);
        } catch (err) {
            console.log(err);
        }
    };

    //delete product
    const deleteProduct = async(id) => {
        try {
            await axios.delete(`http://localhost:8000/api/products/delete/${id}`);
            //console.log(res.data);
            fetchProducts();
        } catch (err) {
            console.log(err);
        }
    };

  return (
    <div>
        <h1>Products List</h1>
        <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Product Quantity</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product) => (
                    <tr key={product._id}>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.quantity}</td>
                        <td>
                            <button><a href='/editProduct'>Edit</a></button>
                            <button onClick={() => deleteProduct(product._id)}>Delete</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};

export default ProductsList;
