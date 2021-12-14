import { useRouter } from 'next/router'
import Head from 'next/head'
// DatePicker package
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// custom components
import InlineEdit from '../../src/components/InlineEdit';
import LazyBackgroundImage from '../../src/components/LazyBackgroundImage';
import NoteList from '../../src/pageComponents/NoteList';
import ContactList from '../../src/pageComponents/ContactList';
// page styling
import styles from '../../styles/UserPage.module.css'
// utils
import { capitalizeFirstLetter, dateDifference } from '../../src/utils/utils';

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

  // Dates stored as strings - parse string and create Date object
  const dateLastTalked = new Date(JSON.parse(user.dateLastTalked))
  const updateUserKey = (key, newValue) => {
    // searches list for matching ID && if found, sets key to newValue
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, [key]: newValue } : tempUser
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
      <LazyBackgroundImage src={'/Suisei_Wallpaper.png'} placeholder={"https://via.placeholder.com/1000"}>
        <main className={styles.main}>
          <h1><InlineEdit text={`${user.name}`} onSetText={text => updateUserKey('name', text)} /></h1>
          <h4>Last met at: <InlineEdit text={`${user.placeLastTalked}`} onSetText={text => updateUserKey('placeLastTalked', text)} /></h4>
          <h4>Last met on: <DatePicker selected={dateLastTalked} onChange={date => updateUserKey('dateLastTalked', JSON.stringify(date))} /></h4>

          <div className={styles.paper_wrapper}>
            <NoteList itemList={user.notesList} setItemList={(newVal) => updateUserKey('notesList', newVal)} />
          </div>
          <span>
            Contact Method: <InlineEdit text={`${user.contactMethod}`} onSetText={text => updateUserKey('contactMethod', newVal)} />
          </span>
          <p>
            {shortBio}
          </p>
        </main>
      </LazyBackgroundImage>
    </div >
  )
}