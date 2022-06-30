import { useState } from 'react'
import Titulo from './Titulo'
import Paragrafo from './Paragrafo'
import Imagem from './Imagem'
import SayHello from './SayHello'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Imagem />
        <Titulo />
        <Paragrafo />
        <SayHello />
      </div>
      
  )
}

export default App
