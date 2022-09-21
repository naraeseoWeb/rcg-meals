import { Fragment } from 'react';
import classes from './Header.module.css';
import mealsImage from '../../assets/buffet.jpg';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Ordering Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt='Buffet' />
      </div>
    </Fragment>
  );
};

export default Header;
