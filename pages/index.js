import { useEffect } from 'react'

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Row, Button, Space } from "antd"

import styles from '../styles/UserListPage.module.css'

export default function HomePage({ userList=[], setUserList }) {
  const router = useRouter()
  useEffect(() => {
    router.push("/contacts")
  }, []);

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
        <Space />
        <Row justify="center">
          <Button type="primary" onClick="location.href='/contacts'">Contacts</Button>
          <Button onClick="location.href='/dashboard'">Dashboard</Button>
        </Row>
        <Space />
      </main>
    </div>
  )
}
