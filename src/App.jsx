import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { useEffect } from "react"

const ScrollToTopHandler = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopHandler />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
