import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

import newletterService from "../../Services/newletter";
import { sendEmail } from "../../Services/sendEmail";
import { unsubscribe } from "../../Templates/newletterSubscribe";

export default function Unsubscribe() {
  const navigate = useNavigate();
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
      }
      navigate("/");
    });
  };

  return (
    <div>
      <h1>Unsubscribe</h1>
      <button onClick={handleOnClick}>Unsubscribe</button>
    </div>
  );
}
