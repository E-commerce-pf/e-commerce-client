import React, { useEffect, useState } from "react";
import style from './Register.module.scss';
import { countries } from "../../Utils/countries";

//COMPONENTES
import AlertModal from "../../Components/AlertModal/AlertModa";

//SOLO TEMPORAL
import axios from "axios";
const baseUrl = 'http://localhost:3001/api/';


/*
      Debo crear los carteles con los errores,
      Pero primero debo acceder al response para tener el mensaje que devuelve la API
*/

const Register = ()=>{
      const [userData, setUserData] = useState({
            name: '',
            lastName: '',
            email : '',
            password : '',
            genre : '',
            country : ''
      });
      const [emailInput2 , setEmailInput2] = useState('');
      const [passInput2 , setPassInput2] = useState('');
      const [errorModal, setErrorModal] = useState({status : false, message : ''});

      const handlerChange = target =>{
            //Accedemos a las etiquetas para controlar las advertencias
            const emailCaveat = document.querySelector('#emailCaveat');
            const passCaveat = document.querySelector('#passCaveat');


            console.log(userData)
            // switch (target){
            //       case 'emailInput':

            //             if(emailInput.length && emailInput !== emailInput2){
            //                   emailCaveat.innerHTML = 'Los correos deben ser iguales';
            //             } else {
            //                   emailCaveat.innerHTML = '';
            //             }
            //             break;

            //       case 'emailInput2':
            //             //Evaluamos que los correos sean iguales
            //             if(emailInput !== emailInput2){
            //                   emailCaveat.innerHTML = 'Los correos deben ser iguales';
            //             } else{
            //                   console.log('Estoy en el else')
            //                   emailCaveat.innerHTML = ''
            //             }
            //             break;

            //       case 'passInput':
            //             if(passInput2.length && passInput !== passInput2){
            //                   passCaveat.innerHTML = 'Las contraseñas deben ser iguales';
            //             } else {
            //                   passCaveat.innerHTML = '';
            //             }
            //             break;

            //       case 'passInput2':
            //             if(passInput !== passInput2){
            //                   passCaveat.innerHTML = 'Las contraseñas deben ser iguales';
            //             } else {
            //                   passCaveat.innerHTML = '';
            //             }
            //             break;

            //       default:
            //             break;
            // }
            ////Verificamos que los inputs coincidan y que tengan algo
            // if( passInput === passInput2 && emailInput === emailInput2 && (passInput2.length && emailInput2) ){
            //       document.querySelector('#submit').classList.add(style.enable)
            // } else {
            //       document.querySelector('#submit').classList.remove(style.enable);
            // }
      }

      //Funcion encargada de enviar la informacion del formulario para crear un usuario
      const handlerSubmit = async (e) =>{
            e.preventDefault();

            //Recuperamos todos los datos
            const name = document.querySelector('#name').value;
            const lastName = document.querySelector('#lastName').value;
            const genre = document.querySelector('#genre').value;
            const country = document.querySelector('#country').value;

            await axios.post(baseUrl + 'register')
            .then(res => { 
                  setErrorModal( {status:true, message: res.data.success } )

                  //Comenzamos una cuenta regresiva para ocultar el modal
                  setTimeout(()=>{
                        setErrorModal( {status :false} )
                  }, 3000)
            })

            .catch( err => {
                  console.log(err)
                  setErrorModal( {status :true, message : 'Algo salió mal'} )
                  //Comenzamos una cuenta regresiva para ocultar el modal
                  setTimeout(()=>{
                        setErrorModal( {status :false} )

                  }, 3000)
            })
      }

      return (
            <div className={style.container}>
                  <AlertModal status={errorModal.status} message={errorModal.message} width={250}/>

                  <form onSubmit={ (e) => handlerSubmit(e) } onChange={ (e)=> handlerChange(e.target.id) } className={style.formContainer}>
                        <div className={style.personalData}>
                              <div className={style.container}>
                                    <label>Nombre</label>
                                    <input type='text' id='name'/>
                              </div>
                              <div className={style.container}>
                                    <label>Apellido</label>
                                    <input type='text' id='lastName'/>
                              </div>
                        </div>

                        <label>Email</label>
                        <input type='email' placeholder="example@example.com" name='email' onChange={ (e) => setUserData({...userData, [e.target.name] : e.target.value}) }/>
                        <label>Repetir email</label>
                        <input type='email' placeholder="example@example.com" name='email2' onChange={ (e) => setEmailInput2(e.target.value) }/>
                        <p id='emailCaveat' className={style.warning}></p>


                        <label>Contraseña</label>
                        <input type='password' name='password' onChange={ (e) => setUserData({...userData, [e.target.name] : e.target.value}) }/>
                        <label>Repetir contraseña</label>
                        <input type='password' id='passInput2' onChange={ (e) => setPassInput2(e.target.value) }/>
                        <p id='passCaveat' className={style.warning}></p>
                        
                        <label>Genero</label>
                              <select name='genre' onChange={(e) => setUserData({...userData, [e.target.name] : e.target.value}) }>
                                    <option> Masculino </option>
                                    <option> Femenino </option>
                                    <option> Otro</option>
                                    <option> Prefiero no decirlo</option>
                              </select>
                        
                        <label>Pais</label>
                              <select name='country' onChange={(e) => setUserData({...userData, [e.target.name] : e.target.value}) }>
                                    {countries.map( country => {
                                          return (
                                                <option>{ country.value }</option>
                                          )
                                    })}
                              </select>

                        <input type='submit' value='Crear cuenta' id='submit' className={style.disable}/>
                  </form>
                  <div className={style.background}></div>
            </div>
      )
}

export default Register;