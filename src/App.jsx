import Tugma from "./components/Tugma"
import Header from "./components/Header"
import Home from "./pages/Home"
import About from "./pages/About"
import { Route, Routes, BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
      <Tugma sarlavha="Assalomu aleykum" rangi="white" bacgrount="red" />
      <Tugma sarlavha="JavaScript" rangi="black" bacgrount="yellow" />
      <Tugma sarlavha={"C++"} rangi={"white"} bacgrount={"blue"} />


      <BrowserRouter>

        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<h1>404 - Topilmadi</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
