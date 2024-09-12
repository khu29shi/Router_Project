import { BrowseRouter, Routes, Route, Link } from "react-router-dom"

//pages
import Home from "./pages/Home/Home"
import About from "./pages/About/About"


function App() {
  return (
    <BrowseRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
        </Routes>
      </main>
    </BrowseRouter>
  )
}

export default App
