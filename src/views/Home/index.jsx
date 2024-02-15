import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import useEventsData from "../../hooks/useEventsData"
import { useState, useRef, useEffect } from 'react'

const Home = () => {

  const { events, isLoading, error, fetchEvents } = useEventsData()
  const[searchValue, setSearchValue] = useState('')
  const containerRef = useRef()

  useEffect(() =>{
    fetchEvents() //Carga la información la primera vez que se monta el componente
  },[])

  const handleNavarSearch = (term) => {
    setSearchValue(term)
    fetchEvents(`&keyword=${term}`) //Se manda con el valor de busqueda
  }

  return (
    /*
      onSearch llama la funcion handleNS y le pasa el valor que se presiono despues del enter en Navbar
      Despues esta actualiza el valor de search value y lo pasa a Events en su propiedad

      Cuando se actualiza el valor de searchValue se re-renderea Events con el valor
    */
    <>
      <Navbar onSearch={handleNavarSearch} ref={containerRef}/>
      {isLoading ? <div>Cargando resultados...</div> : <Events sValue={searchValue} events={events}/>}
      {!!error && <div>{`Ha ocurrido un error:  ${error}`}</div>}
    </>
  )
}

export default Home