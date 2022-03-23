import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoPersonOutline } from 'react-icons/io5'
import Everylogopf from '../../Assets/Images/Everylogopf.png'
import styles from'./Navbar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import SearchBar from '../SearchBar'
import ShoppingBag from '../ShoppingBag'

export const Navbar = ({filter}) => {
    const navigate = useNavigate()
    return (
        <>  <div className={styles.navbar}>

            <div className={styles.containerInfo1}>
                <div className={styles.homeImg}>
                    <Link to='/'>
                        <img src={Everylogopf} alt="img" width="150px" height="100px" />
                    </Link>
                </div>
                <div className={styles.homeSU}>
                    <h2><FaHeadphonesAlt /> Soporte</h2>
                    <h2><HiOutlineLocationMarker /> Ubicacion</h2>
                </div>
                <div className={styles.homeFLC}>
                    <h2><IoPersonOutline onClick={() => (navigate('/login'))} /></h2>
                    <ShoppingBag/>
                </div>
            </div>
            {filter!==false&&<div className={styles.containerInfo2}>
                <div className={styles.selectCP}>
                    <select>
                        <option>categoria</option>
                        <option>categoria</option>
                        <option>categoria</option>
                    </select>
                    <select>
                        <option>Precio</option>
                        <option>Precio</option>
                        <option>Precio</option>
                    </select>
                </div>
                <div className={styles.inputS}>
                    <SearchBar />
                </div>
            </div>}
        </div>
        </>
    )
}
