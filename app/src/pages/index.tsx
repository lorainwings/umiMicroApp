import styles from './index.less';
import { history } from 'umi';

export default ()=> {
  console.log('app1');
  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          history.push('/list');
        }}
      >
        Page app1=====
      </h1>
    </div>
  );
}
