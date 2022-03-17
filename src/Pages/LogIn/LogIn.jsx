import React, { useState } from "react";
import style from './LogIn.module.scss';
import { countries } from "../../Utils/countries";

//SOLO TEMPORAL
import axios from "axios";
const baseUrl = 'http://localhost:3001/api/';


/*
      Debo crear los carteles con los errores,
      Pero primero debo acceder al response para tener el mensaje que devuelve la API
*/

const LogIn = ()=>{
      const [errorModal, setErrorModal] = useState({state : false, message : ''});



      //Funcion verificadora del formulario
      const handlerChange = target =>{
            const emailInput = document.querySelector('#emailInput').value;
            const emailInput2 = document.querySelector('#emailInput2').value;
            const passInput = document.querySelector('#passInput').value;
            const passInput2 = document.querySelector('#passInput2').value;
            const emailCaveat = document.querySelector('#emailCaveat');
            const passCaveat = document.querySelector('#passCaveat');

            switch (target){
                  case 'emailInput':
                        if(emailInput2.length && emailInput !== emailInput2){
                              emailCaveat.innerHTML = 'Los correos deben ser iguales';
                        } else {
                              emailCaveat.innerHTML = '';
                        }
                        break;

                  case 'emailInput2':
                        //Evaluamos que los correos sean iguales
                        if(emailInput !== emailInput2){
                              emailCaveat.innerHTML = 'Los correos deben ser iguales';
                        } else{
                              console.log('Estoy en el else')
                              emailCaveat.innerHTML = ''
                        }
                        break;

                  case 'passInput':
                        if(passInput2.length && passInput !== passInput2){
                              passCaveat.innerHTML = 'Las contraseñas deben ser iguales';
                        } else {
                              passCaveat.innerHTML = '';
                        }
                        break;

                  case 'passInput2':
                        if(passInput !== passInput2){
                              passCaveat.innerHTML = 'Las contraseñas deben ser iguales';
                        } else {
                              passCaveat.innerHTML = '';
                        }
                        break;

                  default:
                        break;
            }
            if(passInput === passInput2 && emailInput === emailInput2){
                  console.log('Son iguales')
                  document.querySelector('#submit').classList.add(style.enable)
            } else {
                  document.querySelector('#submit').classList.remove(style.enable);
            }
      }
      //Funcion encargada de enviar la informacion del formulario para crear un usuario
      const handlerSubmit = async (e) =>{
            e.preventDefault();

            //Recuperamos todos los datos
            const email = document.querySelector('#emailInput').value;
            const password = document.querySelector('#passInput').value;
            const genre = document.querySelector('#genre').value;
            const country = document.querySelector('#country').value;
            const name = document.querySelector('#name').value;
            const lastName = document.querySelector('#lastName').value;

            //Creamos el objeto del usuario con sus datos
            const userObj = {
                  email,
                  password,
                  genre,
                  country,
                  name,
                  lastName
            }

            await axios.post(baseUrl + 'register', { ...userObj })
            .then(res => {
                  console.log(res.data.success);
            } )
            .catch(err =>{
                  console.log(err)
            })
      }

      return (
            <div>
                  <form onSubmit={ (e) => handlerSubmit(e) }>
                        <label>Nombre</label>
                        <input type='text' id='name'/>

                        <label>Apellido</label>
                        <input type='text' id='lastName'/>


                        <label>Email</label>
                        <input type='email' placeholder="example@example.com" id='emailInput' onChange={ (e) => handlerChange(e.target.id) }/>
                        <label>Repetir email</label>
                        <input type='email' placeholder="example@example.com" id='emailInput2' onChange={ (e) => handlerChange(e.target.id) }/>
                        <p id='emailCaveat'></p>


                        <label>Contraseña</label>
                        <input type='password' id='passInput' onChange={ (e) => handlerChange(e.target.id) }/>
                        <label>Repetir contraseña</label>
                        <input type='password' id='passInput2' onChange={ (e) => handlerChange(e.target.id) }/>
                        <p id='passCaveat'></p>
                        
                        <label>Genero</label>
                              <select id='genre'>
                                    <option> Masculino </option>
                                    <option> Femenino </option>
                                    <option> Otro</option>
                                    <option> Prefiero no decirlo</option>
                              </select>
                        
                        <label>Pais</label>
                              <select id='country'>
                                    {countries.map( country => {
                                          return (
                                                <option>{ country.value }</option>
                                          )
                                    })}
                              </select>



                        <input type='submit' value='Crear cuenta' id='submit' className={style.disable}/>
                  </form>
            </div>
      )
}

export default LogIn;