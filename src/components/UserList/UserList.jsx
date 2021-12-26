import { useEffect, useState } from 'react';
// Next.js Routing
import Link from 'next/link';
// Ant Design components
import { Row, Col, Checkbox, Button, Typography, Card, Space, Collapse, Popconfirm, message } from 'antd';
const { Panel } = Collapse;
const { Text } = Typography;
// Custom Components
import AddUserModal from "./AddUserModal";
import CardNotes from "../CardNotes";
// Utils
import { getMomentText } from "../../utils/utils";
// Icons
import { DeleteOutlined, ExportOutlined, ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
// Styling
import styles from "./UserList.module.css"

function callback(key) {
  console.log(key);
}

function UserList({ userList, setUserList }) {
  // Sort Order
  const [sortDateUp, setSortDateUp] = useState(true);
  const [sortNameUp, setSortNameUp] = useState(true);
  const toggleSortDate = () => setSortDateUp(!sortDateUp);
  const toggleSortName = () => setSortNameUp(!sortNameUp);
  // Selected UserCards for deletion
  const [selectedUserIds, setSelectedUserIds] = useState([])
  // CRUD operations
  const createUser = (newUser) => {
    setUserList([...userList, newUser])
  }
  const updateUserKey = (userId, key, newValue) => {
    setUserList(userList.map((tempUser, idx) =>
      // searches list for matching ID && if found, sets key to newValue
      userId === tempUser.id ? { ...tempUser, [key]: newValue } : tempUser
    ))
  }
  const deleteUser = (id) => {
    setUserList(userList.filter((t) => t.id !== id))
  }
  const deleteUserList = (idList) => {
    setUserList(userList.filter((user) => !idList.includes(user.id)))
  }
  // Handle clicks
  const handleDateSortBtnClick = () => {
    const sortFunc = sortDateUp
      ? (a, b) => new Date(a.dateLastTalked) < new Date(b.dateLastTalked) ? 1 : -1
      : (a, b) => new Date(a.dateLastTalked) > new Date(b.dateLastTalked) ? 1 : -1
    const sortedUserList = [].concat(userList).sort(sortFunc)
    toggleSortDate();
    setUserList(sortedUserList)
  }
  const handleNameSortBtnClick = () => {
    const sortFunc = sortNameUp
      ? (a, b) => a.name.localeCompare(b.name)
      : (a, b) => b.name.localeCompare(a.name)
    const sortedUserList = [].concat(userList).sort(sortFunc)
    toggleSortName();
    setUserList(sortedUserList)
  }
  function handleCheckboxClick(id) {
    if (selectedUserIds.includes(id)) {
      // remove if present
      setSelectedUserIds(selectedUserIds.filter(userId => userId !== id))
    } else {
      // add if not present
      setSelectedUserIds([...selectedUserIds, id])
    }
  }
  const handleDeleteBtnClick = () => {
    setSelectedUserIds([])
    deleteUserList(selectedUserIds)
  }

  return (
    <Space direction="vertical">
      <Row justify="center">
        <Button onClick={handleDateSortBtnClick}>Sort by Date Last Talked {sortDateUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}</Button>
        <Button onClick={handleNameSortBtnClick}>Sort by Name {sortNameUp ? <ArrowUpOutlined /> : <ArrowDownOutlined />}</Button>
      </Row>
      <Row gutter={[8, 8]}>
        {
          userList.map(({ id, name, dateLastTalked, placeLastTalked, contactMethod, notesList }, idx) => {
            const dateText = getMomentText(dateLastTalked);
            const placeText = `${placeLastTalked}`
            return (
              <Col key={`user-card-${idx}`} sm={12} md={8} lg={6} xl={4}>
                <Checkbox onChange={() => handleCheckboxClick(id)} className={styles.my_checkbox} />
                  <Card
                    size="small"
                    title={name}
                    bordered={false}
                    extra={<a href={`/user/${id}`}><ExportOutlined style={{ fontSize: 20 }} /></a>}
                    className={` ${selectedUserIds.includes(id) ? styles.active_card : ""}`}
                  >
                    <Space direction="vertical" size={0}>
                      <Text>{dateText}</Text>
                      <Text>{placeText}</Text>
                    </Space>
                    <Collapse defaultActiveKey={['1']} onChange={callback}>
                      <Panel header="Appointments" key="1">
                        <p>APPOINTMENTS</p>
                      </Panel>
                      <Panel header="Notes" key="2">
                        <CardNotes itemList={notesList} setItemList={(newVal) => updateUserKey(id, 'notesList', newVal)} />
                      </Panel>
                    </Collapse>
                  </Card>
              </Col>
            )
          })
        }
        <Col key={`add-user-btn`} md={4} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <AddUserModal createUser={createUser} />
        </Col>
      </Row>
      {selectedUserIds.length === 0
        ? <></>
        :
        <Popconfirm
          title={`Are you sure to delete ${selectedUserIds.length} task?`}
          onConfirm={() => { message.success('Deleted successfully'); handleDeleteBtnClick(); }}
          onCancel={() => message.error('Delete cancelled')}
          okText="Yes"
          cancelText="No"
        >
          <Button
            icon={<DeleteOutlined style={{ fontSize: 30 }} />}
            size="large"
            type="primary"
            danger
            shape="round"
            style={{
              position: "absolute",
              padding: "1rem",
              height: "auto",
              width: "auto",
              bottom: 30,
              right: 30
            }}
          />
        </Popconfirm>
      }
    </Space>
  )
}

export default UserList;