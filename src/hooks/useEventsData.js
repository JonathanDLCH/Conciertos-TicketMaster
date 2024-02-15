import { useEffect, useState } from "react"
import eventsJSON from "../data/events.json"

const useEventsData = () => {
    const [data, setData] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    const [error,setError] = useState()

    useEffect(()=>{
        const fetchEvents = async () =>{
            try {
                const response = await fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=YiqLFvqHYqIGNBLp4SGlAyDBVu4ZIGRn&countryCode=MX')
                const data = await response.json()

                setData(data)
                setIsLoading(false)
            } catch (error) {
                setError(error)
            }
        }

        fetchEvents()
        /*setTimeout(()=>{
            try{
                setData(eventsJSON)
                setIsLoading(false)
            }catch (error){
                setError(error)
            }
        },3000)*/

        //load API Call
    },[])

    return {
        events: data?._embedded?.events || [],
        isLoading,
        error,
    }
}

export default useEventsData