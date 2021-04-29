import styles from './index.less';
import { history } from 'umi';

export default function IndexPage() {
  console.log('app1add');
  return (
    <div>
      <h1
        className={styles.title}
        onClick={() => {
          history.push('/');
        }}
      >
        Page app1 add
      </h1>
      index
    </div>
  );
}
