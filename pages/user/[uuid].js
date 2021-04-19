import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'
// custom components
import ItemList from '../../components/ItemList';

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

  const updateUserNotes = (newNotesList) => {
    const newUserList = userList.map((tempUser, idx) => {
      if (user.id === tempUser.id) {
        return {
          ...tempUser,
          notesList: newNotesList
        }
      }
      return tempUser
    })
    setUserList(newUserList)
  }

  return (
    <div>
      <Head>
        <title>Contact | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"main-content"}>
        <h1>{user.name}</h1>
        <h3>Short Bio</h3>
        <p>{user.bio}</p>
        <h3>Date Last Talked</h3>
        <p>{dateLastTalked.toLocaleDateString('us-US', {  year: 'numeric', month: 'short', day: 'numeric' })}</p>
        <h5>Met Through: {user.metThrough}</h5>
        <h5>Date Created: {dateCreated.toLocaleDateString('us-US', {  year: 'numeric', month: 'short', day: 'numeric' })}</h5>
        <h3>Notes</h3>
        <ItemList itemList={user.notesList} setItemList={updateUserNotes} />        
        <h3>Online Accounts</h3>
      </main>
    </div>
  )
}