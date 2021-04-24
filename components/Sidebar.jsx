// Next.js routing
import Link from 'next/link';
// react-pro-sidebar components
// code demo reference: https://github.com/azouaoui-med/react-pro-sidebar/blob/master/demo/src/Aside.js
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// Icons
import { CgProfile } from 'react-icons/cg';
// generate IDs (unique keys for React rendering)
import { v4 as uuidv4 } from 'uuid';

const getDefaultUser = ({ name, shortBio, friendGroup }) => ({
  id: uuidv4(),
  name: name,
  shortBio: shortBio,
  bioObject: {
    age: "25",
    location: "Belmont, MA, USA",
    gender: "Male",
    languages: ["Cantonese", "Mandarin"],
    occupation: "Student (Master's)",
    major: "CS (Reinforcement Learning)"
  },
  friendGroup: friendGroup,
  notesList: [
    { id: uuidv4(), text: "Fall 2022 - going study abroad in Trinity College in Ireland", done: false },
    { id: uuidv4(), text: "Spring 2021 - peer mentor (not even starting Zoom calls, but paid for like 7~ hours of work a week)", done: false },
  ],
  onlineAccountsList: [
    { id: uuidv4(), text: "Discord - BoxedCube#1111" }
  ],
  dateLastTalked: JSON.stringify(new Date()),
  dateMet: JSON.stringify(new Date())
})

const tempObj = {
  name: "Chunlok Lo",
  shortBio: "Master's CS, Reinforcement Learning specialist",
  friendGroup: "League of Legends",
}

function Sidebar({ userList, setUserList }) {
  const createUser = () => {
    const newUser = getDefaultUser(tempObj)
    setUserList(oldArray => [...oldArray, newUser]);
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
            onClick={createUser}
            style={{
              backgroundColor: '#3c415c',
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