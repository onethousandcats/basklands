import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <div id="ccc-tag">
        <img src='/images/ccc.png' alt="CCC" />
        <p>Centre per</p>
        <p>Clairvoyance</p>
        <p>et Control</p>
      </div>
      <h1 className='title'>Basklands</h1>
      <div className='chapters'>
        <div className='chapter'>
          <h2>1.</h2>
          <h2>The Midlands</h2>
        </div>
        <div className='chapter'>
          <h2>2.</h2>
          <h2>Malpays</h2>
        </div>
        <div className='chapter'>
          <h2>3.</h2>
          <h2>The Arclight</h2>
        </div>
      </div>
    </div>
  )
}

export default App
