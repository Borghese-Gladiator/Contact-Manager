import { useRouter } from 'next/router'
import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function UserPage() {
  const router = useRouter()
  const { uuid } = router.query

  return (
    <div>
      <Head>
        <title>Contact | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={"main-content"}>
        <h1 className={styles.title}>
          {uuid}
        </h1>
        <p className={styles.description}>
          Contact the developers here at email: {`<email_address@gmail.com>`}
        </p>
      </main>

    </div>
  )
}