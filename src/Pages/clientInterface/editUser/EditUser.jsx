import React, { useState } from "react";
import styles from './EditUser.module.scss'
import {IoSendSharp} from "react-icons/io5"
import { countries } from "../../../Utils/countries";
import userService from "../../../Services/user";
import { toast } from "react-toastify";

export default function EditUser({ user, setUser }) {

  const [info,setInfo]=useState({
    name:'',
    lastName:'',
    country:'',
    city:'',
    phone:'',
    address:''
  })

  const handlePut=async ()=>{
    try {
      await userService.editUser(user.id, info)
      setUser(user => {
          return {
              ...user,
              name: info.name,
              lastName:info.lastName,
              country:info.country
          }
      })
      toast.success('Updated data')
  } catch (error) {
      toast.error("Algo salió mal")
  } 
  }
  return (
    <div className={styles.contEdit}>
      <h2>Data to edit</h2>
      <div className={styles.contInput}>
      <input type="text"
        placeholder={`${user.name}`}
        className={styles.input}
        onChange={(e)=>{
          setInfo({...info,name:e.target.value}) 
        }}/>
      <input type="text"
        placeholder={`${user.lastName}`} 
        className={styles.input}
        onChange={(e)=>{
          setInfo({...info,lastName:e.target.value}) 
        }}/>
      </div>
      <div className={styles.contSelect}>
      <select defaultValue={user.country} onChange={(e)=>{ setInfo({...info,country:e.target.value})}}>
        {
          countries.map((country, index) => {
            return (
              <option key={index} name={country.value}>
                {country.value}
              </option>
            );
          }
          )
        }
      </select>
      <input type="text" 
      placeholder='City'
      onChange={(e)=>{
        setInfo({...info,city:e.target.value}) 
      }}
      className={styles.inputCity}
      />
      </div>
      <div className={styles.contInput}>
      <input type="text"
      placeholder='Phone'
      onChange={(e)=>{
        setInfo({...info,phone:e.target.value}) 
      }}
      className={styles.input}
      />
      <input type="text"
      placeholder='Address'
      onChange={(e)=>{
        setInfo({...info,address:e.target.value}) 
      }}
      className={styles.input}/>
      </div>
      <button className={styles.btnEdit} onClick={handlePut}>  Send <IoSendSharp className={styles.emoticon}/></button>
    </div>

  );
}
