import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import { Login } from "./Pages/Login/Login";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  );
};

export default App;
