import React from 'react'
import { FaHeadphonesAlt } from 'react-icons/fa'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import { IoPersonOutline } from 'react-icons/io5'
import { AiFillHeart } from 'react-icons/ai'
import { BsBag } from 'react-icons/bs'
import Everylogopf from '../../Assets/Images/Everylogopf.png'
import './Navbar.css'

export const Navbar = () => {
    return (
        <>
        <div className="container-info-1">
                <div className='home_img'>
                    <img src={Everylogopf} alt="img" width="150px" height="100px" />
                </div>
                <div className='home_SU'>
                    <h2><FaHeadphonesAlt /> Soporte</h2>
                    <h2><HiOutlineLocationMarker /> Ubicacion</h2>
                </div>
                <div className='home_FLC'>
                    <h2><AiFillHeart /></h2>
                    <h2><IoPersonOutline /></h2>
                    <h2><BsBag /></h2>
                </div>
            </div>
            <div className="container-info-2">
                <div className='select_CP'>
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
                <div className="input_S">
                    <input type="text"
                        placeholder="Buscar producatos, articulos" />
                </div>
            </div>
        </>
    )
}
