// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/Layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = lazy(() => import("./pages/Home"));
const Cart = lazy(() => import("./pages/Cart"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div className="p-4">Loading...</div>}>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/category/:name" element={<Home />} />
            </Route>
          </Routes>
        </Suspense>
      </Router>

      <ToastContainer position="top-center" autoClose={2000} />
    </>
  );
}

export default App;
