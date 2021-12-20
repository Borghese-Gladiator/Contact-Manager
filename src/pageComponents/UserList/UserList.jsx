import { useEffect, useState } from 'react';
// Next.js Routing
import Link from 'next/link';
// Ant Design components
import { Row, Col, Typography, Card, Space } from 'antd';
const { Text } = Typography;
// Custom Components
import AddUserModal from "./AddUserModal";
import AbsoluteBtn from "../../components/AbsoluteBtn";
// Utils
import { getMomentText } from "../../utils/utils";
// Icons
import { DeleteOutlined, ExportOutlined } from '@ant-design/icons';
// Styling
import styles from "../../../styles/UserListPage.module.css"

function UserList({ userList, setUserList }) {
  const [selectedUsers, setSelectedUsers] = useState([])
  const addUser = (newUser) => {
    setUserList([...userList, newUser])
  }
  const deleteUser = (id) => {
    setUserList(userList.filter((t) => t.id !== id))
  }
  const deleteUserList = (idList) => {
    setUserList(userList.filter((user) => !idList.includes(user.id)))
  }
  const handleCardClick = (id) => {
    setSelectedUsers([...selectedUsers, id])
  }
  const handleDeleteBtnClick = () => {
    setSelectedUsers([])
    deleteUserList(selectedUsers)
  }
  return (
    <>
      <Row gutter={[8, 8]}>
        {
          userList.map(({ id, name, dateLastTalked, placeLastTalked, contactMethod }, idx) => {
            const dateText = getMomentText(dateLastTalked);
            const placeText = `${placeLastTalked}`
            return (
              <Col key={`user-card-${idx}`} md={6} onClick={() => handleCardClick(id)}>
                <Card
                  title={name}
                  bordered={false}
                  extra={<a href={`/user/${id}`}><ExportOutlined style={{fontSize:20}} /></a>}
                  className={`${selectedUsers.includes(id) ? styles.active_card : ""}`}
                >
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
      : <AbsoluteBtn position="bottom_right" onClick={handleDeleteBtnClick}>
          <DeleteOutlined style={{ fontSize: 20 }} />
        </AbsoluteBtn>
      }
    </>
  )
}

export default UserList;