import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItemById } from "../../service/MenuServiceProvider";
import classes from "./ItemPage.module.scss";

const ItemPage = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getItemById(id).then((data) => setData(data));
  }, []);

  console.log(data);
  if (!data) return <p>Loading...</p>;
  return (
    <div className={classes.page}>
      <p>{data.title}</p>
      <p>{data.description}</p>
      <img src={data.imgUrl} alt={data.title} />
      <button>Add to cart</button>
    </div>
  );
};

export default ItemPage;
