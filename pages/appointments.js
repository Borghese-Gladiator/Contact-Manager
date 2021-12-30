import {
  Card, Space, Typography
} from 'antd';
const { Title, Text } = Typography;
import { getMetaWithTitle } from "../src/utils/utils";

export default function AppointmentsPage({ userList = [], setUserList }) {
  return (
    <div>
      {getMetaWithTitle("View All Appointments | Contact Manager")}
      <main>
        <Title>Appointment List</Title>
        <Space direction="vertical" style={{width: "100%"}}>
          {
            userList
              .filter(({ appointment }) => appointment !== null)
              .map(({ appointment }, idx) => {
                return (
                  <Card key={`user-appointment-card-${idx}`} hoverable>
                    <Space direction="vertical" style={{ cursor: 'pointer' }}>
                      <Text>Meet Location: <Text strong>{appointment.location}</Text></Text>
                      <Text>Date: <Text strong>{appointment.dateString}</Text></Text>
                    </Space>
                  </Card>
                )
              })
          }
        </Space>
      </main>
    </div>
  )
}