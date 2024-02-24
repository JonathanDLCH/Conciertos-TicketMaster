import { useState, useEffect, forwardRef, useImperativeHandle } from "react"
import { Link } from "react-router-dom"

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
            <div style={{flex:1, display:'flex', alignItems:'center',justifyContent:'space-between'}}>
                <p><b>Tikcet-Master</b> Mi boletera</p>
                <input 
                    placeholder= "Busca tu evento favorito" 
                    onChange={handleInputChange}
                    onKeyDown={handleInputKeyDown}
                    value = {search}
                    style={{
                        fontSize:16,
                        padding: '6px 12px',
                        borderRadius: 8,
                        width:400,
                    }}
                />
                <Link to='/profile/my-info' style={{
                    marginLeft:24,
                    color:'#a6d5ff',
                    textDecoration:'none'
                }}>Mi perfil</Link>
            </div>
        </div>
    )
})

Navbar.displayName = 'Navbar'

export default Navbar