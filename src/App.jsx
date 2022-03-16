import { Routes, Route } from "react-router-dom";
import {Login} from "./Pages/Loginjonathan/Login";
import {Home} from "./Pages/Home/index";

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
