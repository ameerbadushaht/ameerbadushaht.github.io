// import Product from "./pages/Product";
import Product from "./components/Product";
import Home from "./pages/Home";
import {BrowserRouter as Router , Route, Routes} from 'react-router-dom'

import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

const App = () => {
  return(
  <Router>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Plist" element={<ProductList />} />
      <Route path="/Product" element={<Product />} />
    </Routes>
  </Router>
  )
};

export default App;