import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
// DatePicker package
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// custom components
import NoteList from '../../components/NoteList';
import ContactList from '../../components/ContactList';
import InlineEdit from '../../components/InlineEdit';
import Row from '../../components/Flexbox/Row';
import Col from '../../components/Flexbox/Col';
import AbsoluteMenu from '../../components/AbsoluteMenu';
// page styling
import styles from '../../styles/UserPage.module.css'
// icons
import { TiDelete } from 'react-icons/ti';

//capitalize only the first letter of the string. 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/* difference between date1 and date2 in days (date2 - date1) */
/* date1 and date 2 are already javascript date objects */
function dateDifference(date2, date1) {
  const _MS_PER_DAY = 1000 * 60 * 60 * 24;

  // Discard the time and time-zone information.
  const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

const UserNotFound = ({ uuid }) => (
  <div>
    <Head>
      <title>User Not Found | Installer Site</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main>
      <h1>
        User Not Found
      </h1>
      <p>
        You searched for user id: {uuid}
      </p>
    </main>
  </div>
)

export default function UserPage({ userList, setUserList }) {
  // access route parameters (uuid is a string )
  const router = useRouter()
  const { uuid } = router.query

  const user = userList.find(o => o.id === uuid)
  // check if user exists
  if (!user) {
    return <UserNotFound uuid={uuid} />
  }

  // REST API turns dates into strings - I parse string and create date from dateString
  const dateLastTalked = new Date(JSON.parse(user.dateLastTalked))
  const dateMet = new Date(JSON.parse(user.dateMet))

  const updateUserFriendGroup = (newValue) => {
    // searches list for matching ID && on found object - sets key to newValue
    const newUserList = userList.map((tempUser, idx) => {
      if (user.id === tempUser.id) {
        return {
          ...tempUser,
          friendGroup: newValue
        }
      }
      return tempUser
    })
    setUserList(newUserList)
  }
  const updateUserKey = (key, newValue) => {
    // same methodology as updateUserFriendGroup
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, [key]: newValue } : tempUser
    ))
  }
  const updateUserNotes = (newValue) => {
    // same methodology, different key - notesList
    // separate function => to pass to <NotesList />
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, notesList: newValue } : tempUser
    ))
  }
  const updateUserOnlineAccountsList = (newValue) => {
    // same methodology, different key - onlineAccountsList
    // separate function => to pass to <ContactList />
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, onlineAccountsList: newValue } : tempUser
    ))
  }
  const updateDateLastTalked = (newDate) => {
    // same methodology, stringifies newDate for storing
    // separate function => to pass to <DatePicker />
    const newUserList = userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, dateLastTalked: JSON.stringify(newDate) } : tempUser
    )
    setUserList(newUserList)
  }
  const updateUserInfo = (key, newValue) => {
    // gets key in bioObject & sets that key to newValue
    setUserList(userList.map((tempUser, idx) => {
      if (user.id === tempUser.id) {
        const newBioObject = {
          ...tempUser.bioObject,
          [key]: newValue
        }
        return {
          ...tempUser,
          bioObject: newBioObject
        }
      }
      return tempUser
    }))
  }

  return (
    <div>
      <Head>
        <title>{user.name} | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <AbsoluteMenu position="top_right">
          <Link href="/user/delete">
            <span className={styles.vertical_align}><TiDelete style={{ fontSize: '30' }} />Delete Page</span>
          </Link>
          <Link href="/user/delete">
            <span className={styles.vertical_align}><TiDelete style={{ fontSize: '30' }} />Delete Page</span>
          </Link>
          <Link href="/user/delete">
            <span className={styles.vertical_align}><TiDelete style={{ fontSize: '30' }} />Delete Page</span>
          </Link>
        </AbsoluteMenu>
        <h1><InlineEdit text={`${user.name}`} onSetText={text => updateUserKey('name', text)} /></h1>
        <h4>
          "<span><InlineEdit text={`${user.friendGroup}`} onSetText={text => updateUserFriendGroup(text)} /></span>" Friend</h4>
        <h4>Days since Last Talk: {dateDifference(new Date(), dateLastTalked)}</h4>
        <Row>
          <div className={styles.paper_wrapper}>
            <NoteList itemList={user.notesList} setItemList={updateUserNotes} />
          </div>
          <Col>
            <div className={styles.paper_wrapper}>
              <h3>Basic Info</h3>
              <Col>
                {
                  // comma separated list in displayValue - https://stackoverflow.com/questions/47881767/how-to-add-a-comma-in-array-map-after-every-element-except-last-element-in-react
                  Object.keys(user.bioObject).map((key, idx) => {
                    const displayValue = typeof user.bioObject[key] === "object"
                      ? user.bioObject[key].map((item, idx) => <span key={`demo_snap_${idx}`}>{(idx ? ', ' : '') + item}</span>)
                      : user.bioObject[key]

                    return (
                      <div key={`basic_info_${idx}`} style={{ display: 'flex' }}>
                        <span style={{ flexGrow: 1, fontWeight: 'bold' }}>{capitalizeFirstLetter(key)}</span>
                        <span>
                          <InlineEdit
                            text={displayValue === "" ? "N/A" : displayValue}
                            onSetText={text => updateUserInfo(key, text)}
                          />
                        </span>
                      </div>
                    )
                  })
                }
                <div style={{ display: 'flex' }}>
                  <span style={{ flexGrow: 1, fontWeight: 'bold' }}>Date Met</span>
                  <span>{dateMet.toLocaleDateString('us-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
              </Col>
            </div>
            <div className={styles.paper_wrapper}>
              <h3>Contact Info</h3>
              <div style={{ display: 'flex' }}>
                <span style={{ flexGrow: 1 }}>Last Talked</span>
                <DatePicker selected={dateLastTalked} onChange={date => updateDateLastTalked(date)} />
              </div>
              <ContactList itemList={user.onlineAccountsList} setItemList={updateUserOnlineAccountsList} />
            </div>
          </Col>
        </Row>
      </main>
    </div>
  )
}