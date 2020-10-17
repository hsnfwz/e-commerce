import React from 'react';
import '../../styles/app.css';

export default function CartRemoveProductUser({ product, setUserCart }) {
    const handleClick = (e) => {
        e.preventDefault();

        const fetchCart = async () => {
            try {
                const response = await fetch('http://localhost:5000/users/user/cart/remove-item', {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        productId: product._id
                    }),
                    credentials: 'include'
                })

                const data = await response.json();
                
                setUserCart(data.cart);
            } catch (error) {
                console.log(error);
            }
        }

        fetchCart();
    }

    return (
        <div>
            <button className="remove-from-cart-btn" onClick={(e) => handleClick(e)}>Remove from cart</button>
        </div>
    )
}