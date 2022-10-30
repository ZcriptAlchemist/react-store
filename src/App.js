import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>SonicBoom</h1>
        <nav>
          <Link className="nav-option" to="/">
            Home
          </Link>
          <Link className="nav-option" to="/cart">
            Cart
          </Link>
        </nav>
      </header>
      {/* <Home /> */}
      {/* <Cart /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
