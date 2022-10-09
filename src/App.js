import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Main from './components/Main';
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";
import Signup from "./components/Signup";
import Signin from "./components/Signin";


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />}>
          </Route>
          <Route path="/product/:id" element={<ProductDetails />}>
          </Route>
          <Route path="/cart" element={<Cart />}>
          </Route>
          <Route path="/signup" element={<Signup />}>
          </Route>
          <Route path="/signin" element={<Signin />}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
