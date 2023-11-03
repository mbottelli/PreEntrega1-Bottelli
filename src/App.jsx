import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import NavComponent from './components/NavComponent/NavComponent'
import ItemListComponent from './components/ItemListComponent/ItemListComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <NavComponent/>
        <ItemListComponent greeting="El contenedor que contiene contenidos y da la bienvenida!" />
    </div>
  )
}

export default App
