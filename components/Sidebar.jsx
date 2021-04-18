import Link from 'next/link';
// react-pro-sidebar components
// code demo reference: https://github.com/azouaoui-med/react-pro-sidebar/blob/master/demo/src/Aside.js
import { ProSidebar, SidebarHeader, SidebarContent, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
// Icons
import { FaGithub, FaDonate } from 'react-icons/fa';
import { IoDocumentOutline } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineHome, AiOutlineDownload } from 'react-icons/ai';
import { BiHelpCircle } from 'react-icons/bi';

function Sidebar() {
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
          EPIC INSTALLER
        </div>
      </SidebarHeader>
      <SidebarContent>
        <Menu iconShape="square">
          <MenuItem icon={<AiOutlineHome />}>
            <Link href="/">Home</Link>
          </MenuItem>
          <MenuItem icon={<AiOutlineDownload />}>
            <Link href="/download">Download</Link>
          </MenuItem>
          <MenuItem icon={<IoDocumentOutline />}>
            <Link href="/resources">Resources</Link>
          </MenuItem>
          <MenuItem icon={<BiHelpCircle />}>
            <Link href="/contact">Contact Developers</Link>
          </MenuItem>
        </Menu>
      </SidebarContent>

      <SidebarFooter style={{ textAlign: 'center' }}>
        <div
          className="sidebar-btn-wrapper"
          style={{
            padding: '20px 24px',
          }}
        >
          <a
            href="https://github.com/Borghese-Gladiator/next-installer-site"
            target="_blank"
            className="sidebar-btn"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <FaGithub />
            <span style={{ paddingLeft: '5px' }}>{"View Source"}</span>
          </a>
        </div>
      </SidebarFooter>
    </ProSidebar>
  )
}

export default Sidebar;