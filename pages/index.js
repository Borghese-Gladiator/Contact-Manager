import { useEffect } from 'react'

import { useRouter } from 'next/router';
import { Typography, Row, Button, Space } from "antd"
const { Title, Text } = Typography;

import styles from '../styles/UserListPage.module.css'
import { getMetaWithTitle } from "../src/utils/utils";

export default function HomePage({ userList = [], setUserList }) {
  return (
    <div>
      {getMetaWithTitle("Home | Contact Manager")}
      <main className={styles.main}>
        <Title style={{ textAlign: "center" }}>Contact Manager</Title>
        <Text style={{ textAlign: "center" }}>Personal CRM - Quick utility to track people I talked to and how long ago it was.</Text>
        <Row justify="center">
          <Button type="primary" href="/contacts">Contacts</Button>
          <Button href="/dashboard">Dashboard</Button>
          <Button type="dashed" href="/appointments">Appointments</Button>
        </Row>
        <Space />
      </main>
    </div>
  )
}
