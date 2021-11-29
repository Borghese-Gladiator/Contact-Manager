import Head from 'next/head'

export default function Dashboard({ userList=[], setUserList }) {
  return (
    <div>
      <Head>
        <title>Dashboard | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main>
        <h1>
          Dashboard
        </h1>
        <p>BLAH</p>
      </main>

    </div>
  )
}
