import Head from 'next/head'
import styles from '../styles/UserListPage.module.css'
import UserList from '../src/components/UserList';

export default function ContactsPage({ userList = [], setUserList }) {
  return (
    <div>
      <Head>
        <title>View Contacts | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <UserList userList={userList} setUserList={setUserList} />
      </main>
    </div>
  )
}