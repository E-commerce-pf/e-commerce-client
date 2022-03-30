import React, { useState } from "react";
import styles from './EditUser.module.scss'
import {IoSendSharp} from "react-icons/io5"
export default function EditUser({ user, setUser }) {
  console.log(user);



  return (
    <div className={styles.contEdit}>
      <h2>Data to edit</h2>
      <div className={styles.contInput}>
      <input type="text"
        placeholder="Name" 
        className={styles.input}/>
      <input type="text"
        placeholder="Lastname" 
        className={styles.input}/>
      </div>
        <input type="text" 
        placeholder='Email'
        className={styles.inputEmail}/>
        <div className={styles.contInput}>
      <input type="text"
        placeholder="Password"
        className={styles.input}/>
        <input type="password"
        placeholder="New Password"
        className={styles.input}/>
        </div>
      <button className={styles.btnEdit}>  Send <IoSendSharp className={styles.emoticon}/></button>
    </div>

  );
}
