import React from 'react'
import Hero from './componenets/Hero.jsx'
import About from './componenets/About.jsx'
import NavBar from './componenets/NavBar.jsx'
import Top from './componenets/Top.jsx'
import All from './componenets/All.jsx'


const App =() =>{
    return (
        <main className="relative min-h-screen min-w-screen overflow-x-hidden">

            <NavBar />

            <Hero />

            <About />

            <Top />

            <All />
        </main>
    )
}
export default App