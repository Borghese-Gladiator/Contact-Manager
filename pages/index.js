import { useEffect } from 'react'

import { useRouter } from 'next/router';
import { Row, Button, Space } from "antd"

import styles from '../styles/UserListPage.module.css'
import { getMetaWithTitle } from "../src/utils/utils";

export default function HomePage({ userList=[], setUserList }) {
  const router = useRouter()
  useEffect(() => {
    router.push("/contacts")
  }, []);

  return (
    <div>
      { getMetaWithTitle("Home | Contact Manager") }
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
