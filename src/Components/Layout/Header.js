import { Fragment, useState } from 'react';
import Container from '../UI/Container';
import classes from './Header.module.css';

const Header = props => {
  // const menuBtnHandler = () => {
  //   console.log('clicked!!');
  // };

  return (
    <div className={classes.header}>
      <Container>
        <img
          src="https://www.starbucks.co.nz/content/images/starbucks-logo.svg"
          alt=""
        />
        <button onMouseOver={props.onClose} onMouseOut={props.onShow}>
          menu
        </button>
        <button
          onMouseOver={props.onCloseCoffee}
          onMouseOut={props.onShowCoffee}
        >
          coffee at home
        </button>
        <button>rewards</button>
        <button>online store</button>
        <button>carreers</button>
        <button>About us</button>
        <div>Find store</div>
      </Container>
    </div>
  );
};
export default Header;
