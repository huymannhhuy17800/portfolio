import React from 'react'
import { NavBar } from './components/NavBar/NavBar'
import { About } from './components/About/About'
import { Hero } from './components/Hero/Hero'
import styles from './App.module.css'

function App() {

  return (
    <div className={styles.App}>
      <NavBar/>
      <Hero/>
    </div>
  )
}

export default App
