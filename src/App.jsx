import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Carrousel } from './Carrousel'

function App() {

  const images = [
    { alt: "Apple", url: "http://source.unsplash.com/300x200/?apple" },
    { alt: "Banana", url: "http://source.unsplash.com/300x200/?banana" },
    { alt: "Cherry", url: "http://source.unsplash.com/300x200/?cherry" },
  ];


  return (
    <div className="App">
      <header className="App-header">
        <h2>Carousello</h2>
        <Carrousel images={images} imageWidth={300} />
      </header>
    </div>
  )
}

export default App
