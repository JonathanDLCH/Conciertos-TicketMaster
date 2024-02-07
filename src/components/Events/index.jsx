import { useState } from "react"
import EventItem from "./components/EventItem"
import eventsJSON from "../../data/events.json"

const Events = ({sValue}) =>{
    const [data, setData] = useState(eventsJSON)
    const {_embedded: {events}} = data

    const handleEventItemClick = (id) => {
        console.log('evento clickeado',id)
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