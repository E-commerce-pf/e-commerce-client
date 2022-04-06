import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { ClientHome } from "./Pages/clientInterface/ClientHome";
import { Home } from "./Pages/Home/index";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import Location from "./Pages/Location/Location";
import ViewProducts from "./Pages/ViewProducts";
import Order from "./Pages/Order/Order";
import ChatBot from "react-simple-chatbot";
import { steps } from "./Services/chatBot";
import { MyShopping } from "./Pages/clientInterface/miShopping/MyShopping";
import { Paper } from "@mui/material";
import QuienesSomos from './Components/QuienesSomos/QuienesSomos'
import Tecnologias from './Components/Tecnologias/Tecnologias'

const App = () => {
  return (
      <Paper>
        <ChatBot
          steps={steps}
          floating={true}
          headerTitle={"ChatBot Everyones Store"}
          
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/viewClient" element={<ClientHome />} />
          <Route path="/viewClient/myShopping" element={<MyShopping />} />
          <Route path="/location" element={<Location />} />
          <Route path="/products/:category" element={<ViewProducts />} />
          <Route path="/order" element={<Order />} />
          <Route path="/quienessomos" element={<QuienesSomos />} />
          <Route path="/tools" element={<Tecnologias />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ToastContainer />
      </Paper>
  );
};

export default App;