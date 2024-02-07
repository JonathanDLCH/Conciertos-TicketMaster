const EventItem = ({id, info, name, image, onEventClick}) => {
    return(
        <div onClick={() => console.log('padre clickeado')}>
            <img src={image} alt={name} />
            <h4>{name}</h4>
            <p>{info}</p>
            <button 
            onClick={(e) => {
                    e.stopPropagation() //Detenemos que se llame el padre
                    onEventClick(id)
                }
            }>Ver mas</button>
        </div>
    )
}

export default EventItem