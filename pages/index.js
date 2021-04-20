import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home({ userList, setUserList }) {
  return (
    <div>
      <Head>
        <title>Home | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
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
