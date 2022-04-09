import { useEffect, useState } from "react"
import { getStoredCart } from "../utilities/fakedb"

const useCart=(products)=>{
    const[cart, setCart]=useState([])
    useEffect(()=>{
        const storedCart=getStoredCart()
        console.log(storedCart)
        const savedCart=[]
            for(const id in storedCart){
          const addedItem=products.find(product=>product.id===id)
          if(addedItem){

            const quantity=storedCart[id];
addedItem.quantity=quantity;
          savedCart.push(addedItem)
          }
            }
        setCart(savedCart)
    },[ products])
return[cart,setCart]

}
export default useCart