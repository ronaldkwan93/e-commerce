import classes from './About.module.scss'

const About = () => {
  return (
    <div className={classes.page}>
      <h1 className={classes.header}>About Us!</h1>
      <div>
        <h3>
          Welcome to Cafe on Click! — your cozy online corner for premium coffee
          and delicious treats, delivered straight to your door.
        </h3>
      </div>
      <img src='https://tse4.mm.bing.net/th?id=OIP.98qSkSPZlkO8E4AOmy0zsAHaE_&cb=iwc1&pid=Api' alt="Cafe picture" />
      <div>
        <p>
          Since 2010, we've been serving up more than just brews. We started as
          a small local café with a big passion for quality, community, and
          convenience. Over the years, we’ve grown into an e-commerce hub where
          coffee lovers and sweet tooths alike can find their favorite blends,
          freshly baked goods, and curated gift sets — all just a click away.
        </p>
      </div>
      <div>
        <p>
          We believe great coffee should be simple to order and delightful to
          experience. That’s why we source only the finest beans and freshest
          ingredients, with every product crafted to bring a little joy to your
          day.
        </p>
      </div>
      <div>
        <p>
          Whether you’re stocking up your pantry, sending a care package, or
          just treating yourself, Cafe on Click is here to make every sip and
          bite memorable.
        </p>
      </div>
    </div>
  );
};

export default About;
