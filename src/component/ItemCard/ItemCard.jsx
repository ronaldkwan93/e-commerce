import classes from "./ItemCard.module.scss";
import { useNavigate } from "react-router-dom";

const ItemCard = ({ item }) => {
  const navigate = useNavigate();

  const handleOnClick = (itemId) => {
    console.log(`clicked ` + itemId);
    navigate(`/item/${itemId}`);
  }
  return (
    <div className={classes.card} onClick={() => handleOnClick(item.id)}>
      <img src={item.imgUrl} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default ItemCard;
