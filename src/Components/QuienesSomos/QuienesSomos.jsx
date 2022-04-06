import React from 'react';
import brayan from './images/brayan.jpeg'
import dairo from './images/dairo.jpg'
import hevert from './images/hevert.jpeg'
import jonathan from './images/jonathan.jpeg'
import marcelo from './images/marcelo.jpg'
import carla from './images/carla.jpg'
import bruno from './images/bruno.jpg'
import dev from './images/desarrollador.png'
import pc from './images/pc.png'
import {Navbar} from '../Navbar/Navbar'
import style from './QuienesSomos.module.css'


export default function QuienesSomos() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className={style.container_quienes}>
        <h1 className={style.title_cuestion}>¿Who are behind Everyone's Store?</h1>
        <div className={style.parrafo1}>
          <img src={dev} alt="developer" className={style.img_dev} />
          <p className={style.style_p}>Everyone's Store is made up of the joint work of a team of students Full Stack Web Developers, during the course of the final project stage at Henry. </p>
        </div>
        <div className={style.parrafo2}>
          <img src={pc} alt="pc-icon" className={style.img_dev} />
        <p className={style.style_p}>
            Everyone's Store is a virtual store specialized in technological products, which prioritizes the comfort of the user when making purchases
        </p>
        </div>
        <h2 className={style.title_cuestion}>Everyone's Store developers</h2>
        <div className={style.container_perfiles}>
          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={brayan} alt="brayan" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Brayan Baquero<br /></h2>
              <a href="https://www.linkedin.com/in/babaquero07/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="brayan_link" height="20" width="40" /></a>

              <a href="https://github.com/babaquero07" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/babaquero07" height="20" width="40" /></a>
            </div>
          </div>
          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={carla} alt="carla" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Carla Faes</h2>
              <a href="https://www.linkedin.com/in/carla-faes/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="www.linkedin.com/in/carla-faes-678454216" height="20" width="40" /></a>

              <a href="https://github.com/carlafaes" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/carlafaes" height="20" width="40" /></a>
            </div>
          </div>
          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={jonathan} alt="jonathan" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Jonathan Osorio</h2>
              <a href="https://www.linkedin.com/in/jonathan-osorio-046043207/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="jonathan_link" height="20" width="40" /></a>

              <a href="https://github.com/jonathan4342" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/jonathan4342" height="20" width="40" /></a>
            </div>

          </div>
          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={hevert} alt="hevert" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Hevert David Gelis Diaz</h2>
              <a href="https://www.linkedin.com/in/hever-gdesing/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="hever_link" height="20" width="40" /></a>

              <a href="https://github.com/HEVERHD" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="https://github.com/HEVERHD" height="20" width="40" /></a>
            </div>

          </div>
          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={dairo} alt="dairo" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Dairo Garcia Naranjo</h2>
              <a href="https://www.linkedin.com/in/dairo-garc%C3%ADa-naranjo/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="dairo_link" height="20" width="30" /></a>

              <a href="https://github.com/Dairo01001" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="dairo_link" height="20" width="30" /></a>
            </div>
          </div>

          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={marcelo} alt="marcelo" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Marcelo Gottardini</h2>
              <a href="https://www.linkedin.com/in/marcelogottardini" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="dairo_link" height="20" width="30" /></a>

              <a href="https://github.com/Galaximar" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="dairo_link" height="20" width="30" /></a>
            </div>
          </div>

          <div className={style.perfil_unit}>
            <img className={style.imagen_perfil} src={bruno} alt="bruno" />
            <div className={style.container_nombreYLinks}>
              <h2 className={style.name_title}>Bruno Amerio</h2>
              <a href="https://www.linkedin.com/in/bruno-amerio/" target="blank">
                <img align="center" src="https://raw.githubusercontent.com/rahuldkjain/github-profile-readme-generator/master/src/images/icons/Social/linked-in-alt.svg" alt="dairo_link" height="20" width="30" /></a>

              <a href="https://github.com/BrunoAmerio" target="blank">
                <img align="center" src="https://logos-marcas.com/wp-content/uploads/2020/11/GitHub-Logo.png" alt="dairo_link" height="20" width="30" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}