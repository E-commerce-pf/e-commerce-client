import React, { useState } from "react";

import style from "./Newletter.module.scss";
import newletterService from "../../Services/newletter";
import { validateEmail } from "../../Utils/isEmail";
import { sendEmail } from "../../Services/sendEmail";
import Swal from "sweetalert2";

export default function Newletter() {
  const [email, setEmail] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      newletterService.registerToNewletter(email).then((data) => {
        sendEmail({
          email: email,
          templete: `<h1>${data.id}</h1>`,
          name: "Newsletter",
        }).then(() => {
          Swal.fire({
            title: "Success",
            text: "You have been subscribed to our newsletter",
            icon: "success",
            confirmButtonText: "Cool",
          });
        });
      });
      setEmail("");
    } else {
      Swal.fire({
        title: "Error",
        text: "Email is not valid",
        icon: "error",
      });
    }
  };

  return (
    <div className={style.container}>
      <h1>¡Subscribe to our newsletter!</h1>
      <form onSubmit={handleOnSubmit}>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Subscribe</button>
      </form>
    </div>
  );
}
