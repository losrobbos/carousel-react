import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { Carrousel } from './Carrousel'

function App() {

  const images = [
    { alt: "Apple", url: "http://source.unsplash.com/300x200/?apples" },
    { alt: "Banana", url: "http://source.unsplash.com/300x200/?bananas" },
    { alt: "Cherry", url: "http://source.unsplash.com/300x200/?cherries" },
    { alt: "Kiwi", url: "http://source.unsplash.com/300x200/?kiwis" },
    { alt: "Rasperry", url: "http://source.unsplash.com/300x200/?raspberries" },
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
