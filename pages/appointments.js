import {
  Card, Space, Typography
} from 'antd';
const { Title, Text } = Typography;
import { getMetaWithTitle } from "../src/utils/utils";

export default function AppointmentsPage({ userList = [], setUserList }) {
  const apptList = userList.filter(({ appointment }) => appointment !== null)
  return (
    <div>
      {getMetaWithTitle("View All Appointments | Contact Manager")}
      <main>
        <Title>Appointment List</Title>
        <Space direction="vertical" style={{width: "100%"}}>
          {apptList.length <= 0 && <Text>No Appointments</Text>}
          {
            apptList.map(({ appointment }, idx) => {
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