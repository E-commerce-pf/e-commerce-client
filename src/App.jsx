import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Register from "./Pages/Register/Register";
import AlertModal from "./Components/AlertModal/AlertModa";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={ <Home /> }/>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={ <Register /> }/>
        <Route path="/test" element={ <AlertModal/> } /> 
      </Routes>
    </>
  );
};

export default App;