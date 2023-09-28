import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import QuizzSelon from "./pages/QuizzSelon"
import QuizzCultureT from "./pages/QuizzCultureT"
import Categories from "./pages/Categories"
import Register from "./pages/Register"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import React, { createContext, useState } from "react"

export const UserContext = createContext()

function App() {
  const [connectedUser, setConnectedUser] = useState(null)

  return (
    <Router>
      <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
        <Navbar />
        <div className="page-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/About" element={<About />} />
            <Route path="/QuizzSelon" element={<QuizzSelon />} />
            <Route path="/QuizzCultureT" element={<QuizzCultureT />} />
            <Route path="/Categories" element={<Categories />} />
            <Route path="/Register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </UserContext.Provider>
    </Router>
  )
}

export default App
