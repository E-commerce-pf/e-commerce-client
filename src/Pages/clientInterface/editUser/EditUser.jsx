import React, { useState } from "react";
import userService from "../../../Services/user";
import Swal from "sweetalert2";

export default function EditUser({ user ,setUser}) {
  console.log(user);

  

  return (
    <>
    <input type="text" 
    placeholder="Name"/>
      <input type="text" 
    placeholder="Name"/>
      <input type="text" 
    placeholder="Name"/>
      <button>Sent</button>
    </>
  );
}
