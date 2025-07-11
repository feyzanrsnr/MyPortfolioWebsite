import './assets/scss/main.scss'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { useState, useEffect } from 'react'

function App() {
  
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(()=> {
    localStorage.setItem('theme', theme);
  },[theme]);



  return (
    <div className={`app ${theme}`}>
    <Navbar theme={theme} setTheme={setTheme} />
    <Home />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </div>

  )
}

export default App
