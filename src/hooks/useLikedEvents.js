import { useState } from "react"

const LIKED_EVENTS_STORAGE_KEY = 'likedEvents'
const checkIsLiked = (eventId) => {
    //funcion fuera del hook para que no se recree
    const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY))|| []
    return likedEvents.includes(eventId)
}

const useLikedEvents = (eventId) => {
    const [isLiked,setIsLiked] = useState(checkIsLiked(eventId))

    const toggleEventLike = () => {
        const likedEvents = JSON.parse(localStorage.getItem(LIKED_EVENTS_STORAGE_KEY))|| []
        const eventIndex = likedEvents.indexOf(eventId)

        if(eventIndex !==-1){
            //si ya se dio like, se debe quitar
            likedEvents.splice(eventIndex,1)
            setIsLiked(false)
        }else{
            //se agrega al localstorage y se pone como likeado
            likedEvents.push(eventId)
            setIsLiked(true)
        }

        localStorage.setItem(LIKED_EVENTS_STORAGE_KEY,JSON.stringify(likedEvents))
    }

    return {isLiked, toggleEventLike}
}

export default useLikedEvents