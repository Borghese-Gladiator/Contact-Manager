import { Space, Row, Button } from "antd";
import { getMetaWithTitle } from "../src/utils/utils";

export default function DashboardPage({ userList=[], setUserList }) {
  return (
    <div>
      { getMetaWithTitle("Dashboard | Contact Manager")}
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
