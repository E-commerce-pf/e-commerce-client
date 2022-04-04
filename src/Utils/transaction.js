import axios from "axios";
import { removeAmountProductToCartDb, removeToLocalStorageIds } from "./shoppingBag";

export const createTransaction = (userId,description)=> {
    return axios({
      method:"POST",
      url: `/api/payment/create`,
      data:{userId,description}
    }).then(async ({data})=>{
        removeToLocalStorageIds();
        await removeAmountProductToCartDb("all",userId)
        window.location.href=data.links[1].href;
    })
  };