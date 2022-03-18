import { Auth0Provider } from '@auth0/auth0-react';

import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import {Home} from "./Pages/Home/index";
import Register from './Pages/Register/Register'



const App = () => {
  return (
    <>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register/>}/>
        <Route path='/login' element={<Login/> }/>
      </Routes>
    </>
  );
};

export default App;
