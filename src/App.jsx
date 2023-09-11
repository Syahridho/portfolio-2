import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Certificate from "./Pages/Certificate";
import Contact from "./Pages/Contact";
import Gallery from "./Pages/Gallery";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/certificate/all" element={<Gallery />} />
      </Routes>
    </Router>
  );
};

export default App;
