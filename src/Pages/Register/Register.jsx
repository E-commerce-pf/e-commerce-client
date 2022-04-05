import React, { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser } from '../../Redux/Actions/userActions' 
import style from "./Register.module.scss";
import { countries } from "../../Utils/countries";
import { Link } from "react-router-dom";

//COMPONENTES
import { TextField, InputLabel } from "@mui/material";
import { ToastContainer } from "react-toastify";
import { notifyError, notifySuccess } from "../../Utils/notifications";

const validateData = (input, error, name) => {
  if (
    input.email === input.email2 &&
    input.password === input.password2 &&
    input.name &&
    input.lastName &&
    input.email2.length &&
    input.password2.length
  ) {
    document.querySelector("#submit").classList.add(style.enable);
  } else {
    document.querySelector("#submit").classList.remove(style.enable);
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
      password:
        input.password !== input.password2
          ? "Las contraseñas deben coincidir"
          : "",
    };
  }

  return error;
};

let ignorarEstaVariable;

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

    if (!userData.country) return notifyError("Alto! aún no sabemos de que país eres");

    await axios.post('/api/register', { ...userData })
      .then((res) => {
        notifySuccess(res.data.success);
          navigate('/login');
      })
      .catch((err) => {
        notifyError(err.response.data.error);
      });
  };

  return (
    <div className={style.containerGeneral}>

      <div className={style.Backdiv}>
        <Link className={style.Back} to="/login">Go Back</Link>
      </div>
    <div className={style.container}>
      <div className={style.Cont}>
      <ToastContainer />
      <form onSubmit={(e) => handlerSubmit(e)} className={style.formContainer} >
        <div>
          <h2 className={style.titleP}>Sign up</h2>
        </div>
        <div className={style.personalData}>
          <div className={style.container}>
            <TextField
              className={style.textfield}
              name="name"
              value={userData.name}
              onChange={handlerChange}
              variant="outlined"
              label="Name"
            />
          </div>

          <div className={style.container}>
            <TextField
              className={style.textfield}
              name="lastName"
              value={userData.lastName}
              onChange={handlerChange}
              variant="outlined"
              label="Last name"
            />
          </div>
        </div>

        <TextField
          className={style.textfield}
          type="email"
          name="email"
          placeholder="example@example.com"
          value={userData.email}
          onChange={handlerChange}
          variant="outlined"
          label="Email"
          color={error.email ? "error" : "success"}
        />

        <TextField
          className={style.textfield}
          type="email"
          name="email2"
          placeholder="example@example.com"
          value={userData.email2}
          onChange={handlerChange}
          variant="outlined"
          label="Repeat Email"
          color={error.email ? "error" : "success"}
        />

        {error.email && <p className={style.warning}>{error.email}</p>}

        <TextField
          className={style.textfield}
          type="password"
          name="password"
          value={userData.password}
          onChange={handlerChange}
          variant="outlined"
          label="Password"
          color={error.password ? "error" : "success"}
        />

        <TextField
          className={style.textfield}
          type="password"
          name="password2"
          value={userData.password2}
          onChange={handlerChange}
          variant="outlined"
          label="Repeat password"
          color={error.password ? "error" : "success"}
        />
        {error.password && <p className={style.warning}>{error.password}</p>}

        <InputLabel id="pais-label">Country</InputLabel>
        <select className={style.textfield} name="country" onChange={handlerChange}>
          {countries.map((country, index) => {
            return (
              <option className={style.optionC} key={index} name={country.value}>
                {country.value}
              </option>
            );
          })}
        </select>

        <div>
        <input
          type="submit"
          value="Create account"
          id="submit"
          className={style.disable}
        />
        </div>
      </form>
      </div>
    </div>
    </div>
  );
};

export default Register;
