import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Loginjonathan/Login";
import { Home } from "./Pages/Home/index";
import Register from "./Pages/Register/Register";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-product" element={<CreateProduct />}></Route>
      </Routes>
    </>
  );
};

export default App;
