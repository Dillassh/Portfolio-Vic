import React from 'react'
import Header from "./components/header/Header"
import Nav from "./components/nav/Nav"
import Experience from "./components/experience/Experience"
import Services from "./components/services/Services"
import Contact from "./components/contact/Contact"
import Portfolio from "./components/portfolio/Portfolio"
import Footer from "./components/footer/Footer"
import About from "./components/about/About"


const App = () => {
  return (
    <>

        
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
    </>
  )
}

export default App