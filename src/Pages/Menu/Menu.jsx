import { useRef, useState } from "react";
import ItemCard from "../../component/ItemCard/ItemCard";
import classes from "./Menu.module.scss";
import ItemPage from "../ItemPage/ItemPage";

const Menu = ({ menuData }) => {
  const dialogRef = useRef(null);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const openModal = (id) => {
    setSelectedItemId(id);
    dialogRef.current?.showModal();
  };

  const closeModal = () => {
    dialogRef.current?.close();
    setSelectedItemId(null); // Reset after closing
  };

  if (!menuData) return <p>No menu data</p>;

  return (
    <>
      <div className={classes.container}>
        {menuData.map((item) => (
          <div key={item.id} onClick={() => openModal(item.id)}>
            <ItemCard item={item} />
          </div>
        ))}
      </div>
      <dialog ref={dialogRef} className={classes.dialog} >
        {selectedItemId && <ItemPage id={selectedItemId} />}
        <button onClick={closeModal}>Close</button>
      </dialog>
    </>
  );
};

export default Menu;
