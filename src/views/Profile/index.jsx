import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import styles from './Profile.module.css'

const Profile = () => {
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const handleTabClick = (path) => {
        navigate(`/profile/${path}`)    
    }

    return (
        <div>
            <Link to='/' className={styles.home}>Inicio</Link>
            <div className={styles.tabContainer}>
                <span 
                    className={`${pathname.includes('my-info') ? styles.active : ''} ${styles.tab}`}
                    onClick={()=> handleTabClick('my-info')}>
                        Mi información
                </span>
                <span 
                    className={`${pathname.includes('liked-events') ? styles.active : ''} ${styles.tab}`}
                    onClick={()=> handleTabClick('liked-events')}>
                        Eventos Favoritos
                </span>
            </div>
            <Outlet/>
        </div>
    )
}

export default Profile