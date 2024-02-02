import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Support from "./Components/Support";
import Contact from "./Components/Contact";
import About from "./Components/About";
import NotFound from "./Components/NotFound";
import { Link, NavLink } from "react-router-dom";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/support">Support</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<MainHeader />}>
          {/* Default Route */}
          <Route index element={<Home />} />
          <Route path="/support" element={<Support />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
