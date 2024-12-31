import { useState } from 'react'
import Header from './Components/Header'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <body>
      <Header/>
    </body>
      
  )
}

export default App
