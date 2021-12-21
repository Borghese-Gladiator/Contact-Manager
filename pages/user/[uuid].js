import { useRouter } from 'next/router'
import Head from 'next/head'
import { DatePicker, Space, Typography } from 'antd';
const { Title, Text } = Typography;
// Custom components
import InlineEdit from '../../src/components/InlineEdit';
import NoteList from "../../src/components/NoteList";
// Styles
import styles from '../../styles/UserPage.module.css';
// Utils
import moment from 'moment';

const UserNotFound = ({ uuid }) => (
  <div>
    <Head>
      <title>User Not Found | Installer Site</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={styles.main}>
      <h1 className={styles.title}>
        User Not Found
      </h1>
      <p>
        You searched for user id: {uuid}
      </p>
    </main>
  </div>
)

export default function UserPage({ userList = [], setUserList }) {
  // access route parameters (uuid is a string )
  const router = useRouter()
  const { uuid } = router.query

  const user = userList.find(o => o.id === uuid)
  if (!user) {
    return <UserNotFound uuid={uuid} />
  }
  const updateUserKey = (key, newValue) => {
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, [key]: newValue } : tempUser
    ))
  }
  const onChange = (date, dateString) => {
    console.log(date, dateString);
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, dateLastTalked: date } : tempUser
    ))
  }

  return (
    <div>
      <Head>
        <title>Contact Page - {user.name} | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <Title><InlineEdit text={`${user.name}`} onSetText={text => updateUserKey('name', text)} /></Title>
        <Title level={4}>Last met at: <InlineEdit text={`${user.placeLastTalked}`} onSetText={text => updateUserKey('placeLastTalked', text)} /></Title>
        <Title level={4}>Last met on: <DatePicker onChange={onChange} defaultValue={moment(new Date(user.dateLastTalked))} /></Title>

        <div className={styles.paper_wrapper}>
          <NoteList itemList={user.notesList} setItemList={(newVal) => updateUserKey('notesList', newVal)} />
        </div>
        <Space direction="vertical">
          <Text>
            Contact Method: <InlineEdit text={`${user.contactMethod}`} onSetText={text => updateUserKey('contactMethod', newVal)} />
          </Text>
          <Text>
            {user.bio}
          </Text>
        </Space>
      </main>
    </div>
  )
}