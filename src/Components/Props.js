import { Fragment, useState } from 'react';
// import styles from './Props.module.css';

const Props = props => {
  return (
    <Fragment>
      <div onClick={props.onclick}>{Props.children}</div>
    </Fragment>
  );
};
export default Props;
