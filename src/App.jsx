import { Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Loginjonathan/Login";
import { Home } from "./Pages/Home/index";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";
import LogIn from "./Pages/LogIn/LogIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/logIn" element={<LogIn />} />
      </Routes>
    </>
  );
};

export default App;
