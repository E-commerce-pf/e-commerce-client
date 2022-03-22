import React from "react";
import { Link, useNavigate } from "react-router-dom";
import everylogopf_gris from "../../Assets/Images/Everylogopf_gris.png";
import { IoIosArrowBack } from "react-icons/io";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import styles from "./Login.module.css";

//COMPONENTES
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
} from "firebase/auth";
import firebaseConfing from "../../config/firebase";
import axios from "axios";
import { notifyError, notifySuccess } from "../../Utils/notifications";

const baseUrl = "/api/user/login";

const Login = () => {
  const navigate = useNavigate();
  firebaseConfing();
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();

  googleProvider.addScope("https://www.googleapis.com/auth/userinfo.profile");
  gitHubProvider.addScope("repo");

  const signInGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      console.log(result);
      const displayName = result.user.displayName.split(" ");
      //Enviamos los datos a la api
      axios
        .post(baseUrl, {
          email: result.user.email,
          name: displayName[0],
          lastName: displayName[1],
          password: result.user.uid,
          loginWithSocial: true,
        })
        .then((res) => {
          notifySuccess(res.data.success);
          setTimeout(() => {
            navigate("/");
          }, 3500);
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
        axios
          .post(baseUrl, {
            email: result._tokenResponse.email,
            name: result._tokenResponse.screenName,
            lastName: "",
            password: result.user.uid,
            loginWithSocial: true,
          })
          .then((res) => {
            notifySuccess(res.data.success);
            setTimeout(() => {
              navigate("/");
            }, 3500);
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

  return (
    <div className={styles.containerLogin}>
      <div className={styles.cardButton}>
        <button onClick={() => navigate("/")} className={styles.btnLogin}>
          <IoIosArrowBack /> Back
        </button>
      </div>
      <div className={styles.cardLogin}>
        <div className={styles.login1}>
          <h1>Login</h1>
          <img src={everylogopf_gris} alt="logo" width="124px" height="78px" />
        </div>
        <div className={styles.login2}>
          <h4>Email</h4>
          <input type="text" placeholder="Username@gmail.com" />
          <h4>Password</h4>
          <input type="text" placeholder="Password" />
          <button>Sign in</button>
          <Link to="/register" className={styles.link}>
            create new account
          </Link>
        </div>
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
  );
};
export default Login;
