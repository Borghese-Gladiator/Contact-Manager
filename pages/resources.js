import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function ResourcesPage() {
  return (
    <div>
      <Head>
        <title>Resources | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Resources
        </h1>
        <p className={styles.description}>
          Source code repository is available on GitHub: <a href="https://github.com/Borghese-Gladiator/next-installer-site" target="_blank" rel="noopener noreferrer">https://github.com/Borghese-Gladiator/next-installer-site</a>
        </p>
        <p className={styles.description}>
          Your pull requests will be welcome. However, they are not always accepted for diverse reasons. Here are the guidelines for your pull requests: <a href="https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/CONTRIBUTING.md" target="_blank" rel="noopener noreferrer">https://github.com/notepad-plus-plus/notepad-plus-plus/blob/master/CONTRIBUTING.md</a>
        </p>
      </main>

    </div>
  )
}
