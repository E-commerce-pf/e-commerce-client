import React, { useEffect, useState } from "react";
import style from "./Register.module.scss";
import { countries } from "../../Utils/countries";

//COMPONENTES
import AlertModal from "../../Components/AlertModal/AlertModa";

//SOLO TEMPORAL
import axios from "axios";
const baseUrl = "http://localhost:3001/api/";

/*
      Debo crear los carteles con los errores,
      Pero primero debo acceder al response para tener el mensaje que devuelve la API
*/

const validateData = (input, error, name) => {
  console.log("input", input);
  console.log("error", error);

  if (name === "email" || name === "email2") {
    return {
      ...error,
      email: input.email !== input.email2 ? "Los correos deben coincidir" : "",
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

  const [errorModal, setErrorModal] = useState({ status: false, message: "" });

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

    if (error.email) return alert("Error Form");

    //Recuperamos todos los datos
    /*
    const name = document.querySelector("#name").value;
    const lastName = document.querySelector("#lastName").value;
    const genre = document.querySelector("#genre").value;
    const country = document.querySelector("#country").value;
      */

    console.log(newUser);

    /*
    await axios
      .post(baseUrl + "register")
      .then((res) => {
        setErrorModal({ status: true, message: res.data.success });

        //Comenzamos una cuenta regresiva para ocultar el modal
        setTimeout(() => {
          setErrorModal({ status: false });
        }, 3000);
      })

      .catch((err) => {
        console.log(err);
        setErrorModal({ status: true, message: "Algo salió mal" });
        //Comenzamos una cuenta regresiva para ocultar el modal
        setTimeout(() => {
          setErrorModal({ status: false });
        }, 3000);
      });
      */
  };

  return (
    <div className={style.container}>
      <AlertModal
        status={errorModal.status}
        message={errorModal.message}
        width={250}
      />

      <form onSubmit={(e) => handlerSubmit(e)} className={style.formContainer}>
        <div className={style.personalData}>
          <div className={style.container}>
            <label>Nombre</label>
            <input
              type="text"
              name="name"
              value={userData.name}
              onChange={handlerChange}
            />
          </div>
          <div className={style.container}>
            <label>Apellido</label>
            <input
              type="text"
              name="lastName"
              value={userData.lastName}
              onChange={handlerChange}
            />
          </div>
        </div>

        <label>Email</label>
        <input
          type="email"
          placeholder="example@example.com"
          name="email"
          value={userData.email}
          onChange={handlerChange}
        />
        <label>Repetir email</label>
        <input
          type="email"
          placeholder="example@example.com"
          name="email2"
          value={userData.email2}
          onChange={handlerChange}
        />
        {error.email && <p className={style.warning}>{error.email}</p>}

        <p id="emailCaveat" className={style.warning}></p>

        <label>Contraseña</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          onChange={handlerChange}
        />
        <label>Repetir contraseña</label>
        <input
          type="password"
          name="password2"
          value={userData.password2}
          onChange={handlerChange}
        />
        <p id="passCaveat" className={style.warning}></p>

        <label>Pais</label>
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
          //     className={style.disable}
        />
      </form>
      <div className={style.background}></div>
    </div>
  );
};

export default Register;
