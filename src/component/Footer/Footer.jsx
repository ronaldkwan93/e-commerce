import classes from "./Footer.module.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div>
          <h3>Café on Click!</h3>
          <p>
            Serving quality coffee and delicious food in a cozy atmosphere since
            2010.
          </p>
        </div>
        <div>
          <h3>Contact</h3>
          <ul>
            <li>123 Coffee Lane</li>
            <li>Brewville, CA 94123</li>
            <li>info@cafeonclick.com</li>
          </ul>
        </div>
      </div>
      <div className={classes.copyright}>
        © {year} Café on Click! All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
