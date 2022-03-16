import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn/LogIn";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/logIn" element={<LogIn/>}/>
      </Routes>
    </>
  );
};

export default App;
