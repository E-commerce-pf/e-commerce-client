import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { ClientHome } from "./Pages/clientInterface/ClientHome";
import { Home } from "./Pages/Home/index";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import Location from "./Pages/Location/Location";
import ViewProducts from "./Pages/ViewProducts";
      <Container>
        <ChatBot
          steps={steps}
          headerTitle={"ChatBot Everyones Store"}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/viewClient" element={<ClientHome />} />
          <Route path="/location" element={<Location />} />
          <Route path="/products/:category" element={<ViewProducts />} />
          <Route path="/order" element={<Order />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ToastContainer />
      </Container>
 
  );
};

export default App;
