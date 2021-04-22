import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
// DatePicker package
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// custom components
import NoteList from '../../components/NoteList';
import ContactList from '../../components/ContactList';
import Row from '../../components/Flexbox/Row';
import Col from '../../components/Flexbox/Col';
// page styling
import styles from '../../styles/UserPage.module.css'
// icons
import { TiDelete } from 'react-icons/ti';

//capitalize only the first letter of the string. 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
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

  // searches list for matching ID && on found object - sets key to newValue
  const updateUserBioList = (newValue) => {
    const newUserList = userList.map((tempUser, idx) => {
      if (user.id === tempUser.id) {
        return {
          ...tempUser,
          bioList: newValue
        }
      }
      return tempUser
    })
    setUserList(newUserList)
  }
  // same methodology as above function with different key (notesList)
  const updateUserNotes = (newValue) => {
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, notesList: newValue } : tempUser
    ))
  }
  const updateUserOnlineAccountsList = (newValue) => {
    setUserList(userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, onlineAccountsList: newValue } : tempUser
    ))
  }
  const updateDateLastTalked = (newDate) => {
    const newUserList = userList.map((tempUser, idx) =>
      user.id === tempUser.id ? { ...tempUser, dateLastTalked: JSON.stringify(newDate) } : tempUser
    )
    setUserList(newUserList)
  }

  return (
    <div>
      <Head>
        <title>{user.name} | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>{user.name}</h1>
        <h4>"{user.friendGroup}" Friend</h4>
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
                        <span>{displayValue === "" ? "N/A" : displayValue}</span>
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
        <div className={styles.absolute_bottom_right}>
          <Link href="/user/delete"><TiDelete className={styles.kc_fab_main_btn} /></Link>
        </div>
      </main>
    </div>
  )
}