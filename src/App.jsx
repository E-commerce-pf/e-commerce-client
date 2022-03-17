import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreateProduct from "./Pages/CreateProduct/CreateProduct";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </>
  );
};

export default App;
