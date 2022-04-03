import axios from "axios";
import { removeToLocalStorageIds } from "./shoppingBag";

export const createTransaction = (userId,description)=> {
    return axios({
      method:"POST",
      url: `/api/payment/create`,
      data:{userId,description}
    }).then(async ({data})=>{
        removeToLocalStorageIds();
        window.location.href=data.links[1].href;
    })
  };