import { Fragment, useState } from 'react';
import styles from './Row.module.css';

const Row = props => {
  // console.log(props.movies);

  return <ul className={styles.row}>{props.children}</ul>;
};
export default Row;
