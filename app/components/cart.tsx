import { useEffect } from "react";

const Cart = () => {
    useEffect(() => {
        console.log("Cart");
    }, []);

    return (
        <div>
            <h1>Cart</h1>
        </div>
    );
};

export default Cart;