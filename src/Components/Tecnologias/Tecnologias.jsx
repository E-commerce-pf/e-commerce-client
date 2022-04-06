import React from 'react'
import js from './imagenes/js.png';
import auth0 from './imagenes/auth0.png';
import css from './imagenes/css.png';
import express from './imagenes/expressjs.png';
import firebase from './imagenes/firebase.png';
import formik from './imagenes/formik.png';
import jwt from './imagenes/jwt.png';
import materialui from './imagenes/materialui.png';
import node from './imagenes/node.png';
import nodemailer from './imagenes/nodemailer.png';
import Postgresql from './imagenes/Postgresql.png';
import react from './imagenes/react.png'
import redux from './imagenes/redux.png'
import scss from './imagenes/scss.png';
import sequelize from './imagenes/sequelize.png'
import framer from './imagenes/framer-motion.png'
import style from './Tecnologias.module.css';
import Loading from '../Loading/index';
import {Navbar} from '../Navbar/Navbar'
import { motion } from "framer-motion";


const Tools=[
    {name:js, link:'https://www.javascript.com/',description:'Javascript'},
    {name:auth0, link:'https://auth0.com/es',description:'Auth0'},
    {name:css, link:'#',description:'CSS3'},
    {name:express, link:'https://expressjs.com/es/',description:'Express Js'},
    {name:firebase, link:'https://firebase.google.com/?hl=es-419',description:'Firebase'},
    {name:formik, link:'https://formik.org/',description:'Formik'},
    {name:jwt, link:'https://jwt.io/',description:'JWT'},
    {name:materialui, link:'https://mui.com/',description:'Material-UI'},
    {name:node, link:'https://nodejs.org/es/',description:'Node Js'},
    {name:nodemailer, link:'https://nodemailer.com/about/',description:'Nodemailer'},
    {name:Postgresql, link:'https://www.postgresql.org/',description:'PostgreSQL'},
    {name:react, link:'https://es.reactjs.org/',description:'React'},
    {name:redux, link:'https://es.redux.js.org/',description:'Redux'},
    {name:scss, link:'https://sass-lang.com/',description:'SCSS'},
    {name:sequelize, link:'https://sequelize.org/ ',description:'Sequelize'},
    {name:framer, link:'https://www.framer.com/motion/',description:'Framer-Motion'},

]

const Tecnologias = () => {
  return (
    <div >
    <Navbar/>
      <div className={style.Title}>
        <h2 className={style.TitleH2}>
        We use these tools to create Everyone's Store
        </h2>
        </div>
      <div className={style.container}>
        {Tools ? Tools.map((tec,index)=>(
            <motion.div 
            whileHover={{
              scale: [1, 2, 2, 1, 1],
              borderRadius: ["20%", "20%", "40%", "40%", "20%"],
            }}
            whileTap={{ scale: 0.9 }}
            key={Math.random(index)} 
            className={style.item}>
                
                <a href={tec.link} >
                <img src={tec.name} alt='tec' className={style.img}/>
                </a>
                <p className={style.parrafo}>{tec.description}</p>
            </motion.div>
        )):<div>
          <Loading/>
          </div>}
      </div>
    </div>
  )
}

export default Tecnologias