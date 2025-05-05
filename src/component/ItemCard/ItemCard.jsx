import classes from "./ItemCard.module.scss";

const ItemCard = ({ item }) => {
  return (
    <div className={classes.card}>
      <p>{item.title}</p>
    </div>
  );
};

export default ItemCard;
