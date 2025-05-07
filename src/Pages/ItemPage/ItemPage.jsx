import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { addItemToCart, getItemById } from "../../service/MenuServiceProvider";
import classes from "./ItemPage.module.scss";

const ItemPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState(null);
  const [notification, setNotification] = useState(null);
  const [showNotification, setShowNotification] = useState(false);
  const [count, setCount] = useState(1);

  useEffect(() => {
    getItemById(id).then((data) => setData(data));
  }, []);

  const handleAddToCart = async () => {
    try {
      await addItemToCart({
        itemId: data.id,
        title: data.title,
        price: data.price,
        quantity: 1,
        imgUrl: data.imgUrl,
      });
      setNotification("Added Item(s) to cart!");
      setShowNotification(true);
    } catch (err) {
      setNotification("Failed to add item to cart.");
      setShowNotification(true);
    }
  };

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const handleBackBtn = () => {
    navigate("/");
  };

  console.log(data);
  if (!data) return <p>Loading...</p>;
  return (
    <div className={classes.page}>
      <div className={classes.page__back}>
        <button onClick={handleBackBtn}>back</button>
      </div>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <img src={data.imgUrl} alt={data.title} />
      <div>
        <button onClick={decrementCount} disabled={count === 1}>
          -
        </button>
        {count}
        <button onClick={incrementCount}>+</button>
      </div>
      <button onClick={handleAddToCart}>Add to cart</button>
      {showNotification && <p>{notification}</p>}
    </div>
  );
};

export default ItemPage;
