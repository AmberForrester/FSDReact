import "./App.css";
import Home from "./Home";
import Nav from "./Nav";
import About from "./About";
import Contact from "./Contact";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Hello to React Routers</h1>

      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;