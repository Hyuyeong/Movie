import { Fragment, useState } from 'react';
import styles from './Header.module.css';

const Header = ({}) => {
  return (
    <Fragment>
      <header>
        <img className={styles.logo} src="imgs/logo.png" alt="t" />
        <nav>
          <ul>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>Recently Added</li>
            <li>My List</li>
          </ul>
        </nav>
      </header>
    </Fragment>
  );
};
export default Header;
