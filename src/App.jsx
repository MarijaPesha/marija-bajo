import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import GetInTouch from "./pages/GetInTouch";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-in-touch" element={<GetInTouch />} />
        <Route path="*" element={<div>No Match</div>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
