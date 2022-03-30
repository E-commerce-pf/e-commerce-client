import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { ClientHome } from "./Pages/clientInterface/ClientHome";
import { Home } from "./Pages/Home/index";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Components/temaConfig";
import { CssBaseline, Container } from "@material-ui/core";
import Location from "./Pages/Location/Location";
import ViewProducts from "./Pages/ViewProducts";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
          <Route path="/viewClient" element={<ClientHome />} />
          <Route path="/location" element={<Location />} />
          <Route path="/products/:category" element={<ViewProducts />} />
          <Route path="*" element={<Home />} />
        </Routes>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
