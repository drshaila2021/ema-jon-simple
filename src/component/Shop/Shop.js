import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Products/Product';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import { Link } from 'react-router-dom';
const Shop = () => {
  const[products,setProducts]=useProducts();
  const[cart,setCart]=useCart(products)
    

    const handleAddToCart=(product)=>{
   const newCart=[...cart,product]
     setCart(newCart);
     addToDb(product.id)
     }
    
     

    
    return (
        <div className='shop-container'>
          <div className="products">
               
               {products.map(product=><Product 
               key={product.id}
               product={product}
               handleAddToCart={handleAddToCart}
               ></Product>
               )

               }

          </div>

          <div className="cart-container">
         <Cart cart={cart}>
           <Link to='/orders'></Link>
           <button>review order</button>
         </Cart>
              </div>  
            
        </div>
    );
};

export default Shop;