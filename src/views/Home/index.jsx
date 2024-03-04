import Navbar from '../../components/Navbar'
import Events from '../../components/Events'
import useEventsResult from '../../state/events-results'
import { useState, useRef, useEffect, useCallback, useMemo } from 'react'
import ReactPaginate from 'react-paginate'
import styles from './Home.module.css'

const Home = () => {

  //con zustand
  const { data, isLoading, error, fetchEvents } = useEventsResult()
  const events = useMemo(() => data?._embedded?.events || [],[data?._embedded?.events])
  const page = useMemo(() => data?.page || {},[data?.page])


  const[searchValue, setSearchValue] = useState('')
  const containerRef = useRef()

  useEffect(() =>{
    fetchEvents() //Carga la información la primera vez que se monta el componente
  },[])

  const handleNavarSearch = (term) => {
    setSearchValue(term)
    fetchEvents(`&keyword=${term}`) //Se manda con el valor de busqueda
  }

  const handlePageClick = useCallback(({selected}) => {
    fetchEvents(`&keyword=${searchValue}&page=${selected}`)
  },[searchValue,fetchEvents])

  const renderEvents = () => {
    if(isLoading){
      return <div>Cargando resultados...</div>
    }
    if(error){
      return <div>{`Ha ocurrido un error:  ${error}`}</div>
    }

    return (
      <>
        <Events sValue={searchValue} events={events}/>
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.activePage}
          disabledClassName={styles.disabledPage}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    )
  }

  return (
    /*
      onSearch llama la funcion handleNS y le pasa el valor que se presiono despues del enter en Navbar
      Despues esta actualiza el valor de search value y lo pasa a Events en su propiedad

      Cuando se actualiza el valor de searchValue se re-renderea Events con el valor
    */
    <>
      <Navbar onSearch={handleNavarSearch} ref={containerRef}/>
      {renderEvents()}
    </>
  )
}

export default Home