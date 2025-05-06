import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Cart from "../Pages/Cart/Cart";
import NavBar from "../component/NavBar/NavBar";
import Menu from "../Pages/Menu/Menu";
import About from "../Pages/About/About";
import Footer from "../component/Footer/Footer";
import classes from './Layout.module.scss'
import { useEffect, useState } from "react";
import { getMenuData } from "../service/MenuServiceProvider";
import ItemPage from "../Pages/ItemPage/ItemPage";

const Layout = () => {
  const [menuData, setMenuData] = useState([])

  useEffect(() => {
    getMenuData().then((data) => setMenuData(data));
  }, [])

  return (
    <>
      <BrowserRouter>
        <div className={classes.container}>
          <NavBar />

          <Routes>
            <Route path="/" element={<Menu menuData={menuData}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/item/:id" element={<ItemPage />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </>
  );
};

export default Layout;
