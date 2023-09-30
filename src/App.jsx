import Header from './components/Header/Header'
import MainSection from './components/Sections/SectionAboutMe'
import SectionProject from './components/Sections/SectionProject'
import AboutMe from './pages/AboutMe'
import { Error404 } from './pages/Error404'
import Home from './pages/Home'
import Project from './pages/Project'
import Skills from './pages/Skills'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acercademi" element={<AboutMe />} />
          <Route path="/habilidades" element={<Skills />} />
          <Route path="/projectos" element={<Project />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
