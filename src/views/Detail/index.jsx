import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { format } from 'date-fns'
import { es } from 'date-fns/locale'

import styles from './Detail.module.css'

const Detail = () => {
    const { eventId } = useParams()
    const [dataDetail,setDataDetail] = useState({})
    const [error,setError] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=>{
        const fetchEventDetail = async() => {
            try {
                const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events/${eventId}?apikey=${import.meta.env.VITE_TICKETMASTER_API_KEY}`)
                const data = await response.json()
                
                setDataDetail(data)
                setIsLoading(false)
            } catch (error) {
                setDataDetail({})
                setError(error)
                setIsLoading(false)
            }
        }

        fetchEventDetail()
    },[])

    if(isLoading && Object.keys(dataDetail) === 0){
        return <div>Cargando detalles...</div>
    }
    if(Object.keys(error) > 0){
        return <div>Ha ocurrido un error...</div>
    }

    return (
        <div className={styles.container}>
            <div className={styles.mainInfoContainer}>
                <img src={dataDetail.images?.[0].url} alt={dataDetail.name} className={styles.eventImage}/>
                <h4 className={styles.eventName}>{dataDetail.name}</h4>
                <p className={styles.infoParagraph}>{dataDetail.info}</p>
                {dataDetail.dates?.start.dateTime ? <p className={styles.date}>{format(new Date(dataDetail.dates?.start.dateTime), 'd LLLL yyyy h:mm',{locale:es})}hrs</p>: null }
                
            </div>

            <div className={styles.seatInfoContainer}>
                <h6 className={styles.seatMap}>Lugares del evento</h6>
                <img src={dataDetail.seatmap?.staticUrl} alt="Seatmap event" srcset="" />
                <p className={styles.pleaseNoteLegend}>{dataDetail.pleaseNote}</p>
                <p className={styles.priceRangeLegend}>Rango de precios: {dataDetail.priceRanges?.[0].min}-{dataDetail.priceRanges?.[0].max} {dataDetail.priceRanges?.[0].currency}</p>
            </div>
            <a href={dataDetail.url}>Ir por tus boletos</a>
            <Link to='/' className={styles.home}>Inicio</Link>
        </div>
    )
}

export default Detail