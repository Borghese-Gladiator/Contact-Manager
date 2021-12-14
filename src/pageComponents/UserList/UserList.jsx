import { Row, Col, Typography, Card, Space } from 'antd';
import AddUserModal from "./AddUserModal";
const { Text, Link } = Typography;
// UTILS
import { getDateText } from "../../utils/utils";

function UserList({ userList, setUserList }) {
  return (
    <>
      <Row gutter={[8, 8]}>
        {
          userList.map(({ id, name, dateLastTalked, placeLastTalked, contactMethod }, idx) => {
            const dateText = getDateText(dateLastTalked);
            const placeText = `${placeLastTalked}`
            return (
              <Col key={id} md={6}>
                <Card title={name} bordered={false} extra={<a href="#">More</a>}>
                  <Space direction="vertical">
                    <Text>{dateText}</Text>
                    <Text>{placeText}</Text>
                  </Space>
                </Card>
              </Col>
            )
          })
        }
        <Col key={`add-user-btn`} md={6}>
          <AddUserModal userList={userList} setUserList={setUserList} />
        </Col>
      </Row>
    </>
  )
}

export default UserList;