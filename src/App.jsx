import { Routes, Route } from "react-router-dom";
import {Login} from "./Pages/Loginjonathan/Login";
import {Home} from "./Pages/Home/index";

import LogIn from "./Pages/LogIn/LogIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>}/>
        <Route path="/logIn" element={<LogIn/>}/>
      </Routes>
    </>
  );
};

export default App;
