import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>Contact | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact
        </h1>
        <p className={styles.description}>
          Contact the developers here at email: {`<email_address@gmail.com>`}
        </p>
      </main>

    </div>
  )
}
