import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import CreateProperty from "./Pages/CreateProperty/CreateProperty";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/create-product" element={<CreateProperty />} />
      </Routes>
    </>
  );
};

export default App;
