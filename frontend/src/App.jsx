import React from 'react';
import Sidebar from './components/sideBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsList from './pages/ProductsList';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/editProduct';


const App = () => {
  return (
    <>
      <Sidebar />
      <BrowserRouter>
        <Routes>
          <Route path="/Products" element={<ProductsList />} />
          <Route path="/addProduct" element={<CreateProduct />} />
          <Route path="/editProduct" element={<EditProduct />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  );
};

export default App;
