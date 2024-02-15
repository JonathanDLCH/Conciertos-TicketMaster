import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import { useState, useRef } from 'react'

const Home = () => {

  const[searchValue, setSearchValue] = useState('')
  const containerRef = useRef()

  const handleNavarSearch = (term) => {
    console.log(containerRef.current)
    setSearchValue(term)
  }

  return (
    /*
      onSearch llama la funcion handleNS y le pasa el valor que se presiono despues del enter en Navbar
      Despues esta actualiza el valor de search value y lo pasa a Events en su propiedad

      Cuando se actualiza el valor de searchValue se re-renderea Events con el valor
    */
    <>
      <Navbar onSearch={handleNavarSearch} ref={containerRef}/>
      <Events sValue={searchValue}/>
    </>
  )
}

export default Home