import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./Pages/Home/Home"
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import "./App.scss"
function App() {
  return (
    <div className="app">
      <Router>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/products/:id' element={<Products />} />
        <Route exact path='/product/:id' element={<Product />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
