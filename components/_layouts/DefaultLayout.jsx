import Sidebar from '../Sidebar';

const DefaultLayout = ({ children }) => (
  <div className="root-container">
    <nav>
      <Sidebar />
    </nav>
    <div style={{flexGrow: 1}}>
    {children}
    </div>
  </div>
);

export const getLayout = page => <DefaultLayout>{page}</DefaultLayout>;

export default DefaultLayout;
