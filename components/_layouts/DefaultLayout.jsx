import Sidebar from '../Sidebar';

const DefaultLayout = ({ userList, setUserList, children }) => (
  <div className="root-container">
    <nav className="sidebar">
      <Sidebar userList={userList} setUserList={setUserList} />
    </nav>
    <div style={{flexGrow: 1}}>
      {children}
    </div>
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
