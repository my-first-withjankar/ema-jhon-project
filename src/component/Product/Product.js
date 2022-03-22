import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import React from 'react';
import './Product.css'
const Product = (props) => {
    const { handleAdd, product } = props;
    const { img, name, price, ratings, seller } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <p className='product-name'>{name}</p>
            <div className="product-info">
                <p>Price: ${price}</p>
                <p><small>Manufacturer: {seller}</small></p>
                <p><small>Ratings:{ratings}</small></p>
            </div>
            <button onClick={() => handleAdd(product)} className='btn-cart'><p>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></p></button>

        </div>
    );
};

export default Product;