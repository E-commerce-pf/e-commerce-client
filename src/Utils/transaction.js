import axios from "axios";
import { removeAmountProductToCartDb, removeToLocalStorageIds } from "./shoppingBag";

export const createTransaction = (userId,description,direction)=> {
    return axios({
      method:"POST",
      url: `/api/payment/create`,
      data:{userId,description,...direction}
    }).then(async ({data})=>{
        window.location.href=data.links[1].href;
    })
  };