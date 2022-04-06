import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

import newletterService from "../../Services/newletter";
import { sendEmail } from "../../Services/sendEmail";
import { unsubscribe } from "../../Templates/newletterSubscribe";
import { SetEmail } from "../../Redux/Actions/actionNewletter";
import style from "./Unsubscribe.module.scss";

export default function Unsubscribe() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleOnClick = (e) => {
    newletterService.removeToNewletter(id).then((res) => {
      if (res) {
        Swal.fire({
          title: "Success",
          text: "You have been unsubscribed to our newsletter",
          icon: "success",
          confirmButtonText: "Cool",
        });
        sendEmail({
          email: res.email,
          template: unsubscribe(),
          name: "Newsletter",
        });
        dispatch(SetEmail(null));
      }
      navigate("/");
    });
  };

  return (
    <div className={style.container}>
      <h1>Unsubscribe</h1>
      <button onClick={handleOnClick}>Unsubscribe</button>
    </div>
  );
}
