import classes from "./ItemCard.module.scss";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  const handleOnClick = (itemId) => {
    console.log(`clicked ` + itemId);
    navigate(`/item/${itemId}`);
  };
  return (
    <div
      className={classes.card}
      // onClick={() => handleOnClick(item.id)}
    >
      <img src={item.imgUrl} alt={item.title} />
      <p className={classes.card__title}>{item.title}</p>
      <div className={classes.card__bottom}>
       
        <p className={classes.card__add}>+</p>
      </div>
    </div>
  );
};

export default ItemCard;
