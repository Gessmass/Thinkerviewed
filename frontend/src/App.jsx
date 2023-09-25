import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import QuizzSelon from "./pages/QuizzSelon"
import QuizzCultureT from "./pages/QuizzCultureT"
import Categories from "./pages/Categories"
import Register from "./pages/Register"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          <Route path="/QuizzSelon" element={<QuizzSelon />} />
          <Route path="/QuizzCultureT" element={<QuizzCultureT />} />
          <Route path="/Categories" element={<Categories />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
