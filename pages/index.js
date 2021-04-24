import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({  userList=[], setUserList }) {
  return (
    <div>
      <Head>
        <title>Home | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Contacts Manager
        </h1>

        <p className={styles.description}>
          Write notes on people after you talk
        </p>
      </main>

    </div>
  )
}
