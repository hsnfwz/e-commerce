import React from 'react';
import '../styles/item.css';
import CartAddItem from './CartAddItem';

export default function Item({ product, userCart, setUserCart, guestCart, setGuestCart }) {
    const image = `http://localhost:5000/files/images/${product.images[1].filename}`;

    return (
        <div>
            <div className="item-container">    
                <h3 className="item-detail">{product.title}</h3>
                <img className="item-image item-detail" src={image} alt={product.title}/>
                <p className="item-detail">${product.price}</p>
                <CartAddItem product={product} userCart={userCart} setUserCart={setUserCart} guestCart={guestCart} setGuestCart={setGuestCart}/>
            </div>
        </div>
    )
}
