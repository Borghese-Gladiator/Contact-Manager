import { useEffect } from 'react'
import Head from 'next/head';

import { Space, Row, Button } from "antd"

export default function DashboardPage({ userList=[], setUserList }) {
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
