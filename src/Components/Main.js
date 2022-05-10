import { Fragment, useState } from 'react';
import styles from './Main.module.css';

const Main = ({}) => {
  return (
    <Fragment>
      <img
        className={styles.main__image}
        src="https://image.tmdb.org/t/p/original//gFZriCkpJYsApPZEF3jhxL4yLzG.jpg"
        alt=""
      />

      <div className={styles.main__card}>
        <div>
          <img src="imgs/logo-small.png" alt="" />
          <span>Title</span>
        </div>
        <div className={styles.description}>Descrption</div>

        <div className={styles.button}>
          <button className={styles.button_play}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="Hawkins-Icon Hawkins-Icon-Standard"
            >
              <path
                d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z"
                fill="currentColor"
              ></path>
            </svg>
            Play
          </button>
          <button className={styles.button_detail}>Detail</button>
        </div>
      </div>
    </Fragment>
  );
};
export default Main;
