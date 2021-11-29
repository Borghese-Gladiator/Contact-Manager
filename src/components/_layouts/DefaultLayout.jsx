// Routing w/ Next.js
import Link from 'next/link';
import Sidebar from './Sidebar';
import AbsoluteMenu from '../AbsoluteMenu';
// icons
import { TiDelete } from 'react-icons/ti';
import { IoMdPersonAdd } from 'react-icons/io';
// styling
import styles from './DefaultLayout.module.css';

const DefaultLayout = ({ userList=[], setUserList, children }) => (
  <div className={styles.root_container}>
    <nav className={styles.sidebar}>
      <Sidebar userList={userList} setUserList={setUserList} />
    </nav>
    <AbsoluteMenu position="top_right">
      <Link href="/user/create">
        <a className={styles.vertical_align_text}><IoMdPersonAdd style={{ fontSize: '30' }} />Create Page</a>
      </Link>
      <Link href="/user/delete">
        <a className={styles.vertical_align_text}><TiDelete style={{ fontSize: '30' }} />Delete Page</a>
      </Link>
      <Link href="/user/mass_create">
        <a className={styles.vertical_align_text}><IoMdPersonAdd style={{ fontSize: '30' }} />Mass Create</a>
      </Link>
    </AbsoluteMenu>
    <div style={{ flexGrow: 1 }}>
      {children}
    </div>
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
