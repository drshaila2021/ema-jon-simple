import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'
const Order = () => {
    const[products,setProducts]=useProducts();
    const[cart,setCart]=useCart(products)
    const handleRemoveProduct=product=>{

       const rest=cart.filter(item=>item.id!==product.id);
       setCart(rest)
       removeFromDb(product.id)
    }
    const navigate=useNavigate()
    return (
        <div className='shop-container'>
        <div className="review-item-container">
            {

                cart.map(product=><ReviewItem
                product={product}
                handleRemoveProduct={handleRemoveProduct}
                ></ReviewItem>)
            }

        </div>
        <div className="cart-container">
            <Cart cart={cart}>
                <button onClick={()=>navigate('/inventory')}>checkout</button>
            </Cart>
        </div>
        </div>
    );
};

export default Order;