import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.css';

const DefaultLayout = ({ userList=[], setUserList, children }) => (
  <div className={styles.root_container}>
    <nav className={styles.sidebar}>
      <Sidebar userList={userList} setUserList={setUserList} />
    </nav>
    <div style={{ flexGrow: 1 }}>
      {children}
    </div>
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
