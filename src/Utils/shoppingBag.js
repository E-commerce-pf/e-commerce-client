import axios from "axios";

export const getToLocalStorageIds = () => {
  return JSON.parse(localStorage.getItem("shoppingBag") || "[]");
};
export const addToLocalStorageIds = (id) => {
  let ids=getToLocalStorageIds();
  let finded=false;
  ids=ids.map(product=>{
    if(product.id===id) {
      product.amount+=1
      finded=true;
    }
    return product;
  })
  if(!finded) ids=[...ids,{id,amount:1}]
  localStorage.setItem("shoppingBag", JSON.stringify(ids));
};
export const removeAmountToLocalStorageId = (id) => {
  let ids=getToLocalStorageIds();
  let amountZero=false;
  ids=ids.map(product=>{
    if(product.id===id) {
      product.amount-=1
      if(product.amount===0) amountZero=true;
    }
    return product;
  })
  if(amountZero) ids=ids.filter(product=>product.id!==id);
  localStorage.setItem("shoppingBag", JSON.stringify(ids));
};
export const removeToLocalStorageId = (id) => {
  let ids=getToLocalStorageIds();
  ids=ids.filter(product=>product.id!==id)
  localStorage.setItem("shoppingBag", JSON.stringify(ids));
};
export const removeToLocalStorageIds = () => {
  localStorage.setItem("shoppingBag", JSON.stringify([]));
};


export const addProductToCartDb = (userId,cart,cartChange)=>{
  if(cartChange){
    return removeProductToCartDb("all",userId).then(async ()=>{
      for(let i=0;i<cart.length;i++){
        await axios({
          method:"POST",
          url: `/api/cart/${cart[i].id}`,
          data:{userId,quantity:cart[i].amount}
        })
      }
  }).then(()=>window.location.href="/order")
  } else window.location.href="/order"
}
export const removeProductToCartDb = (productId,userId)=> {
  return axios({
    method:"PUT",
    url: `/api/cart/${productId}`,
    data:{userId}
  })
};
export const removeAmountProductToCartDb = (productId,userId,quantity)=> {
  return axios({
    method:"PUT",
    url: `/api/cart/${productId}`,
    data:{userId,quantity}
  })
};