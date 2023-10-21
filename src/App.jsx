import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import Portfolio from "./pages/Portfolio/Portfolio";
import Skills from "./pages/Skills/Skills";

function App() {
  return (
    <BrowserRouter>
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
