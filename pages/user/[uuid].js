import { useRouter } from 'next/router'
import Head from 'next/head'
import Link from 'next/link';
// custom components
import ItemList from '../../components/ItemList';
// DatePicker package
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";
// page styling
import styles from '../../styles/Home.module.css'
// icons
import { TiDelete } from 'react-icons/ti';

//capitalize only the first letter of the string. 
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const darkTheme = {
  text: "#b4a5a5",
  background: "#151515",
  secondaryBackground: "#301b3f"
}

const FlexGrowBox = ({ children }) => (
  <div style={{
    flexGrow: 1,
    padding: '10px',
    margin: '5px',

    background: darkTheme.secondaryBackground,

    border: '#999 solid 1px',
    borderRadius: '10px',
    boxShadow: '0px 0px 0px 1px #fff inset'
  }}>
    {children}
  </div>
)

const UserNotFound = ({ uuid }) => (
  <div>
    <Head>
      <title>User Not Found | Installer Site</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className={"main-content"}>
      <h1 className={styles.title}>
        User Not Found
      </h1>
      <p className={styles.description}>
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
  // REST API turns dates into strings - I parse string and create date from dateString
  const dateLastTalked = new Date(JSON.parse(user.dateLastTalked))
  const dateMet = new Date(JSON.parse(user.dateMet))

  return (
    <div>
      <Head>
        <title>{user.name} | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main} style={{
        backgroundImage: "url('/Suisei_Wallpaper.png')",
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',

        color: darkTheme.text,

        position: 'relative'
      }}>
        <h1 style={{ marginBottom: 0 }}>{user.name}</h1>
        <h4>"{user.friendGroup}" Friend</h4>
        <br />
        <div className={styles.content_row}>
          <FlexGrowBox>
            <div style={{ display: 'flex' }}>
              <span style={{ flexGrow: 1, fontWeight: 'bold' }}>Last Talked</span>
              <DatePicker selected={dateLastTalked} onChange={date => updateDateLastTalked(date)} />
            </div>
            <ItemList itemList={user.notesList} setItemList={updateUserNotes} />
          </FlexGrowBox>
          <div className={styles.content_col} style={{ flexGrow: 0.5 }}>
            <FlexGrowBox>
              <h3>Basic Info</h3>
              <p style={{ whiteSpace: 'pre' }}>{user.bioDesc}</p>
              <div className={styles.content_col}>
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
              </div>
            </FlexGrowBox>
            <FlexGrowBox>
              <h3>Contact Info</h3>
              <br />
              <ItemList itemList={user.onlineAccountsList} setItemList={updateUserOnlineAccountsList} />
            </FlexGrowBox>
          </div>
        </div>
        <div style={{
          position: 'absolute',
          right: '15px',
          bottom: '15px'
        }}>
          <Link href="/delete"><TiDelete className={styles.kc_fab_main_btn} /></Link>
        </div>
      </main>
    </div>
  )
}