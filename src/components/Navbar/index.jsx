import { useState, useEffect, forwardRef, useImperativeHandle } from "react"

const Navbar = forwardRef( ({onSearch}, ref)=> {

    const [search, setSearch] = useState('')

    useEffect(()=>{
        console.log('1010useEffect')
    },[search, onSearch])
    
    useImperativeHandle(ref,() => ({
        //Este hook sirve para exponer valores (al padre)
        search,
    }))

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
        <div ref={ref} style={{
            marginBottom: 14,
            width: '100%',
            display: 'flex',
            
        }}>
            <div style={{flex:1, display: 'flex'}}>
                <p>Mi boletera</p>
            </div>
            <input 
                placeholder= "Busca tu evento favorito" 
                onChange={handleInputChange}
                onKeyDown={handleInputKeyDown}
                value = {search}
                style={{flex:1, display:'flex ',justifyContent:'flex-end'}}
            />
        </div>
    )
})

Navbar.displayName = 'Navbar'

export default Navbar