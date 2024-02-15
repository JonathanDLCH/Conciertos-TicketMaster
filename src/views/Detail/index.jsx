import { useParams } from "react-router-dom"

const Detail = () => {
    const { eventId } = useParams()
    return (
        <div>
            {eventId}
        </div>
    )
}

export default Detail