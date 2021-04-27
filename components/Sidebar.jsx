// Next.js routing
import Link from 'next/link';
// react-pro-sidebar components
// code demo reference: https://github.com/azouaoui-med/react-pro-sidebar/blob/master/demo/src/Aside.js
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// custom components
import UploadButton from './UploadButton';
import DownloadButton from './DownloadButton';
// Icons
import { CgProfile } from 'react-icons/cg';
// add type checking for arguments
import PropTypes from 'prop-types';

function Sidebar({ userList = [], setUserList }) {
  return (
    <ProSidebar>
      <SidebarHeader>
        <div
          style={{
            padding: '24px',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: 14,
            letterSpacing: '1px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
        >
          CONTACT MANAGER
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <Menu iconShape="square">
          {
            userList.map((user, idx) => {
              const link = `/user/${user.id}`
              return (
                <MenuItem key={user.id} icon={<CgProfile />}>
                  <Link href={link}>{user.name}</Link>
                </MenuItem>
              )
            })
          }
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            <UploadButton objectList={userList} />
            <DownloadButton objectList={userList} />
          </div>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

Sidebar.propTypes = {
  userList: PropTypes.array,
  setUserList: PropTypes.func,
};

export default Sidebar;