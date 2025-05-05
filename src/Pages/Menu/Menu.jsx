const Menu = ({ menuData }) => {
  if(!menuData) return <p>No menu data</p>
  console.log(menuData);
  return (
    <div>
      {menuData.map((item) => (
        <div>
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
