import React from 'react';
import Product from '../Products/Product';
import './Cart.css'
const Cart = (props) => {
    const{cart}=props
    // console.log(cart)

    let total=0;
    let shipping=0;
    let quantity=0;
    for(const product of cart){ 
        quantity= quantity+product.quantity
        total=total+product.price*product.quantity;
        shipping=shipping + product.shipping;
     }
     const tax= parseFloat((total* 0.1).toFixed(2))
const grandTotal=total+tax+shipping
    return (
        <div className='cart'>
           <h2>cart</h2>
              <p>selected item:{quantity}</p> 
              <p>Total price:${total}</p> 
              <p>Shipping:${shipping}</p>
              <p>Tax:${tax}</p>
              <p> Gradn Total:{grandTotal}</p>
        </div>
    );
};

export default Cart;