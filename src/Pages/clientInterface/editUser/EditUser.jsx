import React, { useState } from "react";
import userService from "../../../Services/user";
import Swal from "sweetalert2";

export default function EditUser({ user }) {
  console.log(user);

  const [input, setInput] = useState({
    name: user.name,
    lastName: user.lastName,
    country: user.country,
  });

  const handleSubmit = (e) => {
    Swal.fire({
      title: "Seguro deseas editar tu info pendejo?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Listo", "", "success");
        userService.editUser(user.id, input).then((res) => {
          setInput({
            name: res.name,
            lastName: res.lastName,
            country: res.country,
          });
        });
      }
    });
  };

  return (
    <>
      <p>{input.name}</p>
      <p>{input.lastName}</p>
      <p>Pais {input.country? input.country : ''}</p>
      <button onClick={handleSubmit}>Sent</button>
    </>
  );
}
