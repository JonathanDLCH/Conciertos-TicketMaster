import { useState } from "react"

const Navbar = ({onSearch})=> {

    const [search, setSearch] = useState("")

    const handleInputChange=(e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    const handleInputKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSearch(search) //envia el valor al padre en app
        }
    }

    return (
        <div>
            <p>Mi boletera</p>
            <input 
                placeholder= "Busca tu evento favorito" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value = {search}
            />
        </div>
    )
}

export default Navbar