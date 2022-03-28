import React from 'react'
import { useSelector } from 'react-redux';

export default function EditUser(){
  const currentUser = useSelector((state) => state.userReducer.currentUser);
  console.log(currentUser,'currentUser2')

  return (
    <div>editUser</div>
  )
}

