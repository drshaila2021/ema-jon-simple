import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    // console.log(props.product)
    const{img,name,price,ratings,seller}=props.product
 
    return (
        <div className='product'>
           <img src={img} alt="" />
           <div className="product-info">
               <p className='product-name'>{name}</p>
               <p>price:${price}</p>
               <p><small>seller:{seller}</small></p>
               <p><small>rating: {ratings} stars</small></p>
           </div>
           <button  onClick={()=> props.handleAddToCart(props.product)} className='btn-cart'>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> 
           
           </button>

        </div>
    );
};

export default Product;