import styles from './index.less';
import { history } from 'umi';

export default function IndexPage() {
  console.log('app1lsit');
  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          history.push('/add');
        }}
      >
        Page app1 list
      </h1>
    </div>
  );
}
