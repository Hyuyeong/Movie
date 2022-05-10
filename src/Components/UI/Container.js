import { Fragment, useState } from 'react';
import classes from './Container.module.css';

const Container = props => {
  return (
    <div>
      <div className={classes.container}>{props.children}</div>
    </div>
  );
};
export default Container;
