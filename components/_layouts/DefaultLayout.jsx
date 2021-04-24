// Routing w/ Next.js
import Link from 'next/link';
import Sidebar from '../Sidebar';
import AbsoluteMenu from '../AbsoluteMenu';
// icons
import { TiDelete } from 'react-icons/ti';

const DefaultLayout = ({ userList, setUserList, children }) => (
  <div className="root-container">
    <nav className="sidebar">
      <Sidebar userList={userList} setUserList={setUserList} />
    </nav>
    <AbsoluteMenu position="top_right">
      <Link href="/user/delete">
        <span className={"vertical_align"}><TiDelete style={{ fontSize: '30' }} />Delete Page</span>
      </Link>
      <Link href="/user/create">
        <span className={"vertical_align"}><TiDelete style={{ fontSize: '30' }} />Create Page</span>
      </Link>
    </AbsoluteMenu>
    <div style={{ flexGrow: 1, zIndex: -1 }}>
      {children}
    </div>
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
