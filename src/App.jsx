import { HashRouter, Route, Routes } from "react-router-dom";
import LanguageContextProvider from "../src/store/LanguageContextProvider";
import About from "./pages/About";
import GetInTouch from "./pages/GetInTouch";
import Home from "./pages/Home";

function App() {
  return (
    <LanguageContextProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/get-in-touch" element={<GetInTouch />} />
          <Route path="*" element={<div>No Match</div>} />
        </Routes>
      </HashRouter>
    </LanguageContextProvider>
  );
}

export default App;
