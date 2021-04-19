// Next.js routing
import Link from 'next/link';
// react-pro-sidebar components
// code demo reference: https://github.com/azouaoui-med/react-pro-sidebar/blob/master/demo/src/Aside.js
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// Icons
import { CgProfile } from 'react-icons/cg';

function Sidebar({ userList, setUserList }) {
  const tempObj = {
    name: "Chunlok Lo",
    bio: "Master's CS, Reinforcement Learning specialist",
    metThrough: "Jon Shee's Badminton",
  }
  const fetchCreateUser = () => {
    fetch('/api/createUser', {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(tempObj)
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res)
        setUserList(oldArray => [...oldArray, res]);
      })
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
          }}
        >
          <button
          onClick={fetchCreateUser}
          style={{
            backgroundColor: 'green',
            color: 'white',
            padding: '1em 1.5em',
            textDecoration: 'none',
            textTransform: 'uppercase'
          }}>
            <span>
              Create User
            </span>
          </button>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar;