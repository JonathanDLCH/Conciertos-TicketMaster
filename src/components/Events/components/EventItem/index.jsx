import styles from './EventItem.module.css'

const EventItem = ({id, info, name, image, onEventClick}) => {
    return(
        <div onClick={() => console.log('padre clickeado')} className={styles.eventItemContainer}>
            <img src={image} alt={name} />
            <article className={styles.infoContainer}>
                <h4 className={styles.eventName}>{name}</h4>
                <p className={styles.eventInfo}>{info}</p>
                <button 
                onClick={(e) => {
                        e.stopPropagation() //Detenemos que se llame el padre
                        onEventClick(id)
                    }
                } className={styles.btnMore}>
                    {/*<Link to={`/detail/${id}`}>Ver mas</Link>*/}
                    Ver mas
                </button>
            </article>
        </div>
    )
}

export default EventItem