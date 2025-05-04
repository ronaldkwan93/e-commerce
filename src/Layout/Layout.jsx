import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import NavBar from "../component/NavBar/NavBar";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Layout;
