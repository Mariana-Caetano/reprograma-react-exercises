import { useState } from 'react'
import Card from './Card'
import SayHello from './SayHello'
import Relogio from './Relogio'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Card />
        <SayHello />
        <Relogio />
      </div>
      
  )
}

export default App
