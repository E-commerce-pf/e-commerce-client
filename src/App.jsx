import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
