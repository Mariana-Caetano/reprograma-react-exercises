import { useState } from 'react'
import Titulo from './Titulo'
import Paragrafo from './Paragrafo'
import Imagem from './Imagem'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Imagem />
        <Titulo />
        <Paragrafo />
      </div>
      
  )
}

export default App
