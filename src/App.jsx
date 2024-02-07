import Navbar from './components/Navbar/index'
import Events from './components/Events/index'
import './App.css'
import { useState } from 'react'

function App() {

  const[searchValue, setSearchValue] = useState('')

  const handleNavarSearch = (term) => {
    setSearchValue(term)
  }

  return (
    /*
      onSearch llama la funcion handleNS y le pasa el valor que se presiono despues del enter en Navbar
      Despues esta actualiza el valor de search value y lo pasa a Events en su propiedad

      Cuando se actualiza el valor de searchValue se re-renderea Events con el valor
    */
    <>
      <Navbar onSearch={handleNavarSearch}/>
      <Events sValue={searchValue}/>
    </>
  )
}

export default App
