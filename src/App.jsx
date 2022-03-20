import { Auth0Provider } from "@auth0/auth0-react";

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { Home } from "./Pages/Home/index";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;
