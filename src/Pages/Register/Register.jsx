import React, { useState } from "react";
import style from "./Register.module.scss";
import axios from "axios";
import { countries } from "../../Utils/countries";

//COMPONENTES
import { TextField, InputLabel } from '@mui/material' 
import { ToastContainer} from 'react-toastify'
import { notifyError, notifySuccess } from "../../Utils/notifications";
//SOLO TEMPORAL
const baseUrl = "http://localhost:3001/api/";

const validateData = (input, error, name) => {

  if(input.email === input.email2 && input.password === input.password2 && input.name && input.lastName && (input.email2.length && input.password2.length)){
    document.querySelector('#submit').classList.add(style.enable)
  } else {
    document.querySelector('#submit').classList.remove(style.enable)
  }

  if (name === "email" || name === "email2") {
    return {
      ...error,
      email: input.email !== input.email2 ? "Los correos deben coincidir" : "",
    };
  }

  if (name === "password" || name === "password2") {
      return {
        ...error,
        password: input.password !== input.password2 ? "Las contraseñas deben coincidir" : "",
      };
    }

  return error;
};

const Register = () => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    email2: "",
    password: "",
    password2: "",
    country: "",
  });

  const [error, setError] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    country: "",
  });


  const handlerChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setError(
      validateData(
        {
          ...userData,
          [event.target.name]: event.target.value,
        },
        error,
        event.target.name
      )
    );
  };

  //Funcion encargada de enviar la informacion del formulario para crear un usuario
  const handlerSubmit = async (e) => {
    e.preventDefault();
    const { password2, email2, ...newUser } = userData;
    console.log(newUser);

    if(!userData.country) notifyError('Alto! aún no sabemos de que país eres');

    await axios.post(baseUrl + "register", { ...userData })
      .then((res) => {
        notifySuccess(res.data.success)
      })
      .catch((err) => {
        notifyError( err.response.data.error )
      });
  };

  return (
    <div className={style.container}>
      <ToastContainer/> 
      <form onSubmit={(e) => handlerSubmit(e)} className={style.formContainer}>
        <div className={style.personalData}>

          <div className={style.container}>
            <TextField 
              name='name' 
              value={userData.name} 
              onChange={handlerChange} 
              variant="outlined" 
              label='Name'
            />
          </div>

          <div className={style.container}>
            <TextField 
              name='lastName' 
              value={userData.lastName} 
              onChange={handlerChange} 
              variant="outlined" 
              label='Last name'
            />
          </div>

        </div>

        <TextField 
          type="email" 
          name='email' 
          placeholder="example@example.com" 
          value={userData.email} 
          onChange={handlerChange} 
          variant="outlined" 
          label='Email'
          color={error.email ? 'error' : 'success' }

        />

        <TextField 
          type="email" 
          name='email2' 
          placeholder="example@example.com" 
          value={userData.email2} 
          onChange={handlerChange} 
          variant="outlined" 
          label='Repeat Email'
          color={error.email ? 'error' : 'success'}
        />

        {error.email && <p className={style.warning}>{error.email}</p>}
  
        <TextField 
          type="password" 
          name='password' 
          value={userData.password} 
          onChange={handlerChange} 
          variant="outlined"
          label='Password'
          color={error.password ? 'error' : 'success'}
        />

        <TextField 
          type="password" 
          name='password2' 
          value={userData.password2} 
          onChange={handlerChange} 
          variant="outlined" 
          label='Repeat password'
          color={error.password ? 'error' : 'success'}
        />
        {error.password && <p className={style.warning}>{error.password}</p>}

        <InputLabel id='pais-label'>Pais</InputLabel>
        <select name="country" onChange={handlerChange}>
          {countries.map((country, index) => {
            return (
              <option key={index} name={country.value}>
                {country.value}
              </option>
            );
          })}
        </select>

        <input
          type="submit"
          value="Crear cuenta"
          id="submit"
          className={style.disable}
        />

      </form>
    </div>
  );
};

export default Register;