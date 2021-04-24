// Next.js routing
import Link from 'next/link';
// react-pro-sidebar components
// code demo reference: https://github.com/azouaoui-med/react-pro-sidebar/blob/master/demo/src/Aside.js
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// Icons
import { CgProfile } from 'react-icons/cg';

function Sidebar({ userList, setUserList }) {
  const uploadUserList = () => {
    alert("UPLOAD")
  }
  const downloadUserList = () => {
    alert("DOWNLOAD")
  }

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
            padding: '20px 24px',
            display: 'flex'
          }}
        >
          <button
            onClick={uploadUserList}
            style={{
              backgroundColor: '#3c415c',
              color: 'white',
              padding: '1em 1.5em',
              textDecoration: 'none',
              textTransform: 'uppercase'
            }}>
            <span>
              Upload
            </span>
          </button>
          <button
            onClick={downloadUserList}
            style={{
              backgroundColor: '#3c415c',
              color: 'white',
              padding: '1em 1.5em',
              textDecoration: 'none',
              textTransform: 'uppercase'
            }}>
            <span>
              Download
            </span>
          </button>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar;