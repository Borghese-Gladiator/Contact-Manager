import Head from 'next/head'
import styles from '../../styles/DeletePage.module.css'
// custom components
import UserTable from '../../components/UserTable';
// icons
import { RiDeleteBin7Line } from 'react-icons/ri';
// utils
import { dateDifference } from '../../utils/utils';

export default function DeletePage({ userList=[], setUserList }) {
  const deleteUser = (id) => {
    setUserList(userList.filter((t) => t.id !== id))
  }

  const headerList = ['name', 'id', 'friendGroup', ]

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
        <UserTable userList={userList} deleteUser={deleteUser} />
      </main>
    </div>
  )
}