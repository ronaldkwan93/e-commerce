import classes from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
  return (
    <div className={classes.card}>
      <img src={item.imgUrl} alt={item.title} />
      <p>{item.title}</p>
    </div>
  );
};

export default ItemCard;
