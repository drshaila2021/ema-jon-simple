import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './ReviewItem.css'
const ReviewItem = (props) => {
    const{handleRemoveProduct,product}=props;
    const{name,img,price,quantity,shipping}=product
    return (

        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-item-detail-container'>
           <div className="review-item-detail">
               <p className='peoduct-name'title={name}>{name.length>20 ? name.slice (0, 20) +'...': name}</p>
               <p>Price:<span>{price}</span></p>
               <p><small>Shipping:{shipping}</small> </p>
               <p><small>quantity:{quantity}</small></p>

           </div>
           <div className="delete-container">
                   <button className='delete-button' onClick={()=>handleRemoveProduct(product)}>
                       <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} ></FontAwesomeIcon>
                   </button>
           </div>
            </div>
            
        </div>
    );
};

export default ReviewItem;