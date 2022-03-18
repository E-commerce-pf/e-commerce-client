import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const config = {
      position: "top-right",
      autoClose: 3500,
      closeOnClick: true,
      draggable: true,
}

export const notifyError = (text)=>{
      toast.error(text,config);
}

export const notifySuccess = (text) =>{
      toast.success(text, config);
}