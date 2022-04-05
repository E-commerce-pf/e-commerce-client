import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../../Redux/Actions/userActions";
import { Link, useNavigate } from "react-router-dom";
import everylogopf_gris from "../../Assets/Images/Everylogopf_gris.png";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import styles from "./Login.module.scss";

//COMPONENTES
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseConfing from "../../config/firebase";
import { notifyError, notifySuccess } from "../../Utils/notifications";
import axios from "axios";


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  firebaseConfing();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");
  gitHubProvider.addScope("repo");

  const currentUser = useSelector((state) => state.userReducer.currentUser);
  useEffect(() => {
    if (currentUser) {
      navigate("/viewClient");
    }
  }, [currentUser, navigate])

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const displayName = result.user.displayName.split(" ");
        const user = {
          email: result.user.email,
          name: displayName[0],
          lastName: displayName[1],
          password: result.user.uid,
          loginWithSocial: true,
          isAdmin: false
        }
        //Enviamos los datos a la api
        axios.post('/api/user/login', { ...user })
          .then((res) => {
            notifySuccess(res.data.success);
            dispatch(getUser(res.data.user));

            setTimeout(()=>{
              navigate("/viewClient");
            },3500)
          })
          .catch((err) => {
            notifyError(err.response.data.error);
          });
      });
  };

  const signInGitHub = () => {
    signInWithPopup(auth, gitHubProvider)
      .then((result) => {
        console.log(result);
        const user = {
          email: result._tokenResponse.email,
          name: result._tokenResponse.screenName,
          lastName: "",
          password: result.user.uid,
          loginWithSocial: true,
          isAdmin: false
        }
        axios.post('/api/user/login', { ...user })
          .then((res) => {
            notifySuccess(res.data.success);
            dispatch(getUser(res.data.user));
            
            setTimeout(()=>{
              navigate("/viewClient");
            },3500)
          })
          .catch((err) => {
            notifyError(err.response.data.error);
          });
      })
      .catch((err) => {
        const error = err.message.split(" ");
        notifyError(error[2]);
      });
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    axios.post('/api/user/login', { email, password, isAdmin: false })
      .then(res => {
        dispatch(getUser(res.data.user))
        navigate("/viewClient");
        notifySuccess(`Welcome ${res.data.user.name}`);
      })
      .catch(err => notifyError(err.response.data.error))
  }

  return (
    <div className={styles.containerLogin}>
      <div className={styles.cardButton}>
        <button onClick={() => navigate("/")} className={styles.btnLogin}>
          <IoIosArrowBack /> Back
        </button>
      </div>
      <div className={styles.contenedor}>

      <div className={styles.cardLogin}>
        <div className={styles.login1}>
          {/* <img src={everylogopf_gris} alt="logo" width="124px" height="78px" /> */}
          <h1 className={styles.title2}>Log In</h1>
        </div>
        <form className={styles.login2} onSubmit={handlerSubmit}>
          <h4>Email</h4>
          <input
            className={styles.titleInput}
            type="email"
            placeholder="example@example.com"
            id='email'
            autoComplete="off"
          />
          <h4>Password</h4>
          <input
            className={styles.titleInput}
            type="password"
            placeholder="password"
            id='password'
          />
          <button>Sign in</button>
          <Link to="/register" className={styles.link}>
          You still don't have an account? Create new account
          </Link>
        </form>
        <div className={styles.login3}>
          <button onClick={signInGoogle}>
            {" "}
            <FcGoogle className={styles.span} />
            Sign in with Google
          </button>
          <button onClick={signInGitHub}>
            <BsGithub className={styles.span} />
            Sign in with GitHub
          </button>
        </div>
      </div>
      </div>
    </div>
  );
};
export default Login;
