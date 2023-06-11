import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Carrousel } from './Carrousel'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h2>Hello Vite + React!</h2>
        <Carrousel />
      </header>
    </div>
  )
}

export default App
