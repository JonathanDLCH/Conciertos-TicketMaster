import { useNavigate } from "react-router-dom"
import EventItem from "./components/EventItem"

const Events = ({sValue, events}) =>{

    const navigate = useNavigate()

    const handleEventItemClick = (id) => {
        navigate(`detail/${id}`)
    }

    const renderEventCmpt = () => {
        let updateEvents = events

        if(sValue.length>0){
            updateEvents = updateEvents.filter((item)=>item.name.toLocaleLowerCase().includes(sValue))
        }
        return updateEvents.map((eventItem) => (
            <EventItem //props
                id={eventItem.id}
                key={`event-item-${eventItem.id}`}
                name={eventItem.name}
                info={eventItem.info}
                image={eventItem.images[0].url}
                onEventClick={handleEventItemClick} //Se pasa como propiedad la funcion que ejecutara al ser clickeado
            />
        ))
    }

    return (
        <div>
            Eventos
            {renderEventCmpt()}
        </div>
    )
}

export default Events