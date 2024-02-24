import styles from './EventItem.module.css'
import useLikedEvents from '../../../../hooks/useLikedEvents'

const EventItem = ({id, info, name, image, onEventClick}) => {
    const { isLiked, toggleEventLike } = useLikedEvents(id)
    const handleHeartClick = () =>{
        toggleEventLike()
    }

    return(
        <div onClick={() => console.log('padre clickeado')} className={styles.eventItemContainer}>
            <div className={styles.imageContainer}>
                {
                    isLiked ? <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-heart-fill" className={styles.heartImage} onClick={handleHeartClick} viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"/></svg> :<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="red" class="bi bi-heart" className={styles.heartImage} onClick={handleHeartClick} viewBox="0 0 16 16"><path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15"/></svg>
                }
                
                <img src={image} alt={name} style={{width:300,height:220}} />
            </div>
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