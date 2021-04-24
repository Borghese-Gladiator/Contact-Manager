import Head from 'next/head'
import styles from '../../styles/DeletePage.module.css'
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
        <title>Delete Users | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Delete User
        </h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th style={{ flexGrow: 1 }}>ID</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {
              userList.map((user, idx) => {
                return (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.id}</td>
                    <td><button><RiDeleteBin7Line onClick={() => deleteUser(user.id)} /></button></td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </main>

    </div>
  )
}
