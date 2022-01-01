import { useState } from 'react';
// Ant Design components
import { Checkbox, Typography, Card, Space, Collapse } from 'antd';
const { Panel } = Collapse;
const { Text } = Typography;
// Custom components
import ApptNotesList from "./ApptNotesList";
import CardNotesList from "./CardNotesList";
// Utils
import { getMomentText, truncateStr } from "../../utils/utils"
// Styles
import styles from "./UserList.module.css"
// Icons
import { ExportOutlined } from '@ant-design/icons';

function UserCard({ user, handleCheckboxClick, updateUserKey, selectedUserIds }) {
  const { id, name, dateLastTalked, placeLastTalked, contactMethod, appointment, notesList } = user;
  
  const [panelOpen, setPanelOpen] = useState(false);
  const handlePanelCollapse = (activeKeys) => {
    if (activeKeys.length > 0) {
      setPanelOpen(true)
    } else {
      setPanelOpen(false)
    }
  }
  
  return (
    <>
      <Checkbox onChange={() => handleCheckboxClick(id)} className={styles.my_checkbox} />
      <Card
        size="small"
        title={name}
        bordered={false}
        extra={<a href={`/user/${id}`}><ExportOutlined style={{ fontSize: 20 }} /></a>}
        className={`${selectedUserIds.includes(id) ? styles.active_card : ""}`}
      >
        {panelOpen
          ?
          <Space direction="vertical" size={0}>
            <Text>{getMomentText(dateLastTalked)}</Text>
            <Text>{placeText}</Text>
          </Space>
          :
          <Space direction="vertical" size={0}>
            <Text>{truncateStr(getMomentText(dateLastTalked), 20)}</Text>
            <Text>{truncateStr(placeLastTalked, 20)}</Text>
          </Space>
        }
        <Collapse defaultActiveKey={[]} onChange={handlePanelCollapse}>
          <Panel header="Appointments" key="1">
            <ApptNotesList appointment={appointment} setAppointment={(newVal) => updateUserKey(id, 'appointment', newVal)} />
          </Panel>
          <Panel header="Notes" key="2">
            <CardNotesList itemList={notesList} setItemList={(newVal) => updateUserKey(id, 'notesList', newVal)} />
          </Panel>
        </Collapse>
      </Card>
    </>
  )
}

export default UserCard;