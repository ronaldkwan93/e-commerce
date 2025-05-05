import ItemCard from "../../component/ItemCard/ItemCard";
import classes from './Menu.module.scss'

const Menu = ({ menuData }) => {
  if(!menuData) return <p>No menu data</p>
  console.log(menuData);
  return (
    <div className={classes.container}>
      {menuData.map((item) => (
        <div  key={item.id}>
          <ItemCard item={item} />
        </div>
      ))}
    </div>
  );
};

export default Menu;
