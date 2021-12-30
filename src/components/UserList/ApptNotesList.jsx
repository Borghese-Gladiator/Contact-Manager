import { useState } from 'react';

import { Card, Typography, Input, Modal, Space, DatePicker } from 'antd';
const { Text } = Typography;

import moment from 'moment';
import { createApptItem } from "../../utils/utils";

function ApptNotesList({ appointment, setAppointment }) {
  // Modal Visibility
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };
  const handleOk = () => {
    setIsModalVisible(false);
  };
  const handleCancel = () => {
    setIsModalVisible(false);
  };


  // CRUD Notes
  const handleAdd = () => {
    const date = new Date()
    setItemList([...itemList, createApptItem("", date)])
  }
  const handleUpdate = (e, id) => {
    const text = e.target.value
    setItemList(itemList.map((item) => {
      return item.id === id
        ? {
          ...item,
          text: text
        }
        : item
    }))
  }
  const handleLocationChange = (e) => {
    const location = e.target.value
    setAppointment({
      ...appointment,
      location: location
    })
  }
  const handleDateChange = (date, dateString) => {
    console.log(date, dateString);

    setAppointment({
      ...appointment,
      date: date,
      dateString: dateString
    })
  }
  return (
    <>
      <Card hoverable onClick={showModal}>
        <Space direction="vertical" style={{ cursor: 'pointer' }}>
          {appointment === null
            ? <Text>No appointments!</Text>
            : 
            <>
              <Text>Meet Location: {appointment.location}</Text>
              <Text>Date: {appointment.dateString}</Text>
            </>
          }
        </Space>
      </Card>
      <Modal
        title="View Appointment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Input placeholder="Location" onChange={handleLocationChange} />
        <DatePicker defaultPickerValue={moment()} onChange={handleDateChange} />
      </Modal>
    </>
  )
}

export default ApptNotesList;