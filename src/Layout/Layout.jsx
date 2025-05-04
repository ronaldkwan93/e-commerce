import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import Product from '../Pages/Product';
import Cart from '../Pages/Cart';


const Layout = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/product' element={<Product/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Layout
