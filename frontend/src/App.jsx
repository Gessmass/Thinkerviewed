import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import QuizzSelon from "./Pages/QuizzSelon"
import QuizzCultureT from "./Pages/QuizzCultureT"
import Categories from "./Pages/Categories"
import "./App.scss"

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
        </Routes>
      </Router>
    </>
  )
}

export default App
