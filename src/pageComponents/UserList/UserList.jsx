import { useState } from 'react';
import { Row, Col, Typography, Card, Space } from 'antd';
import AddUserModal from "./AddUserModal";
const { Text, Link } = Typography;
// UTILS
import { getMomentText } from "../../utils/utils";

function UserList({ userList, setUserList }) {
  const [selectedUsers, setSelectedCards] = useState([])
  const addUser = (newUser) => {
    console.log(newUser)
    setUserList([...userList, newUser])
  }
  const deleteUser = (id) => {
    setUserList(userList.filter((t) => t.id !== id))
  }
  const deleteUserList = (idList) => {
    setUserList(userList.filter((user) => !idList.includes(user.id)))
  }
  return (
    <>
      <Row gutter={[8, 8]}>
        {
          userList.map(({ id, name, dateLastTalked, placeLastTalked, contactMethod }, idx) => {
            const dateText = getMomentText(dateLastTalked);
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
        <Col key={`add-user-btn`} md={3} style={{display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AddUserModal addUser={addUser} />
        </Col>
      </Row>
      {selectedUsers.length === 0
      ? <></>
      : <AbsoluteBtn position="bottom_right" onClick={() => deleteUserList(selectedUsers)}>
          <AiFillDelete style={{ fontSize: 20 }} />
        </AbsoluteBtn>
      }
    </>
  )
}

export default UserList;