import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])
    console.log(cart);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleAdd = (product) => {
        // console.log(product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop'>
            <div className="shop-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAdd={handleAdd}></Product>)
                }
            </div>
            <div className="order-details">
                <h1>order details</h1>
                <p>total:{cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;