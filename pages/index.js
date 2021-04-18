import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to {`<name>`}
        </h1>

        <p className={styles.description}>
          Notepad++ is a free (as in “free speech” and also as in “free beer”) source code editor and Notepad replacement that supports several languages. Running in the MS Windows environment, its use is governed by GNU General Public License.
        </p>
        <p className={styles.description}>
          Based on the powerful editing component Scintilla, Notepad++ is written in C++ and uses pure Win32 API and STL which ensures a higher execution speed and smaller program size. By optimizing as many routines as possible without losing user friendliness, Notepad++ is trying to reduce the world carbon dioxide emissions. When using less CPU power, the PC can throttle down and reduce power consumption, resulting in a greener environment.
        </p>
        
        {/* USAGE => transform: scale(<percentage of original>) */}
        <img
          src={'/big_brain.png'}
          alt="super big brain"
          style={{
            transform: 'scale(1.0)'
          }}
        />

        <p className={styles.description}>
          I hope you enjoy Notepad++ as much as I enjoy coding it.
        </p>
      </main>

    </div>
  )
}
