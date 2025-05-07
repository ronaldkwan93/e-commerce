import { useEffect, useState } from "react";
import {
  deleteItemFromCard,
  subscribeToCartItems,
} from "../../service/MenuServiceProvider";
import classes from "./Cart.module.scss";
import { useNavigate } from "react-router-dom";

const Cart = ({ data }) => {
  console.log(data);
  const [cartItems, setCartItems] = useState(data);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = subscribeToCartItems((items) => {
      setCartItems(items);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(cartItems);

  const handleContinueShopping = () => {
    navigate("/");
  };

  if (cartItems.length <= 0)
    return (
      <div>
        <p>Your Shopping cart is empty!</p>
        <button onClick={handleContinueShopping}>
          Continue Shopping
        </button>
      </div>
    );

  const handleRemove = (item) => {
    deleteItemFromCard(item.id);
  };
  return (
    <div className={classes.container}>
      {cartItems.map((item) => (
        <div className={classes.container__item} key={item.id}>
          <p>{item.title}</p>
          <p>
            <button onClick={() => handleRemove(item)}>Remove</button>
          </p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
