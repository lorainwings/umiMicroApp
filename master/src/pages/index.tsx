import React from 'react';
import styles from './index.less';

export default (props: any) =>{
  return (
    <div>
      <h1 className={styles.title}>Main Page index</h1>
      <div>{props.children}</div>
    </div>
  );
}
