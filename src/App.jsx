import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Shop from './pages/shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Cart from './pages/Cart';
import LoginSignup from './pages/LoginSignup';
import Footer from './components/Footer/Footer';
import Success from './pages/Success';                   
import { CartProvider } from './context/ShopContext';   
import { ToastContainer } from 'react-toastify';        
import 'react-toastify/dist/ReactToastify.css';          

const App = () => {
  return (
    <CartProvider> {/* ✅ Provides cart state to entire app */}
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/mens" element={<ShopCategory category="mens" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/success" element={<Success />} />   {/* ✅ Success Route */}
        </Routes>

        <Footer />
        <ToastContainer position="bottom-center" autoClose={2000} />
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
