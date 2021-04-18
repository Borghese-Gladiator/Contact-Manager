import Head from 'next/head'
import styles from '../styles/Download.module.css'

export default function Download() {
  const downloadList = [
    { filename: 'my-electron-app-0.1.0 Setup.exe', text: '<Application_Name> 7.9.5 Release (x64)' },
    { filename: 'my-electron-app-0.1.0 Setup.exe', text: '<Application_Name> 7.9.5 Release (x64)' },
    { filename: 'my-electron-app-0.1.0 Setup.exe', text: '<Application_Name> 7.9.5 Release (x64)' },
    { filename: 'my-electron-app-0.1.0 Setup.exe', text: '<Application_Name> 7.9.5 Release (x64)' },
    { filename: 'my-electron-app-0.1.0 Setup.exe', text: '<Application_Name> 7.9.5 Release (x64)' },
  ]
  return (
    <div>
      <Head>
        <title>Download | Installer Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Downloads
        </h1>
        
        <div className={styles.downloadList}>
          {downloadList.map((val, idx) => {
            // idx at 0 === falsy, so every element afterwards gets a <hr> element - https://stackoverflow.com/questions/47881767/how-to-add-a-comma-in-array-map-after-every-element-except-last-element-in-react
            const { text, filename } = val;
            return (
              <div>
                {idx ? <hr /> : '' }
                <a href={`/${filename}`}><h3>{text}</h3></a>
              </div>
            )
          })}
        </div>
      </main>
    </div>
  )
}
/*
LINK AS BUTTON EXAMPLE

<a href="/TS_Current_Resume.pdf" style={{
  backgroundColor: 'red',
  color: 'white',
  padding: '1em 1.5em',
  textDecoration: 'none',
  textTransform: 'uppercase'
}}>
  Click here for your file</a>
<a href="/my-electron-app-0.1.0-Setup.exe">Click here for your EXE file</a>
*/
