import { useState } from 'react'
import Cards from './Cards'
import Image from './Image/Image'


function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Image />
        <Cards />
      </>
        
        
      
  )
}

export default App
