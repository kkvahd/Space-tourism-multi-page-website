import { useState } from 'react'
import './App.css'

import { NavbarComponent } from './components/NavbarComponent'
import { HomeView } from './components/HomeView'

import homeBackground from './assets/home/background-home-desktop.jpg'

function App() {
  const [view, setView] = useState(0);

  return (
    <>
      <div id='mainContainer' style={{
        backgroundImage: `url(${homeBackground})`,
        width: '100%',
        height: '100%',  
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <NavbarComponent />
        <HomeView />
      </div>
    </>
  )
}

export default App
