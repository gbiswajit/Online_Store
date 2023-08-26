import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import "./App.scss"
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
</style>
function App() {
  return (
    <div className="app">
      <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products' element={<Products />} />
        <Route exact path='/product' element={<Product />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
