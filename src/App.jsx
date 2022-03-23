import { Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import { Home } from "./Pages/Home/index";
import { ProductDetail } from "./Pages/ProductDetail/ProductDetail";
import Register from "./Pages/Register/Register";
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./Components/temaConfig";
import { CssBaseline, Container } from "@material-ui/core";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productDetail/:productId" element={<ProductDetail />} />
        </Routes>
        <ToastContainer />
      </Container>
    </ThemeProvider>
  );
};

export default App;
