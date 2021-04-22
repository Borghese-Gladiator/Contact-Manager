import Head from 'next/head'
import styles from '../../styles/Home.module.css'
// icons
import { RiDeleteBin7Line } from 'react-icons/ri';

export default function Home({ userList, setUserList }) {
  const deleteUser = (id) => {
    console.log("BLAH")
    setUserList(userList.filter((t) => t.id !== id))
  }

  return (
    <div>
      <Head>
        <title>Home | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Delete Users
        </h1>

        <div>
          {
            userList.map((user, idx) => {
              return (
                <div style={{ display: 'flex' }}>
                  <span>{user.name}</span>
                  <span>{user.id}</span>
                  <button><RiDeleteBin7Line onClick={() => deleteUser(user.id)} /></button>
                </div>
              )
            })
          }
        </div>
      </main>

    </div>
  )
}
