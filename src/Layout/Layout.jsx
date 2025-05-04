import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import NavBar from "../component/NavBar/NavBar";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import Footer from "../component/Footer/Footer";
import classes from './Layout.module.scss'

const Layout = () => {
  return (
    <>
      <BrowserRouter>
        <div className={classes.container}>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Layout;
