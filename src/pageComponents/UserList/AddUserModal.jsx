import { useState } from "react";
import { DatePicker, message, Row, Col, Typography, Card, Space, Tooltip, Button, Modal, Form, Input } from 'antd';
const { Text, Link } = Typography;
import { SearchOutlined } from '@ant-design/icons';

import AddUserForm from "./AddUserForm";

function AddUserModal({ userList, setUserList }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    /*
    const user = {
      id: uuidv4(),
      name: name,
      shortBio: shortBio,
      contactMethod: "Text 777-777-7777",
      notesList: [
        { id: uuidv4(), text: "Fall 2022 - going study abroad in Trinity College in Ireland", done: false },
        { id: uuidv4(), text: "Spring 2021 - peer mentor (not even starting Zoom calls, but paid for like 7~ hours of work a week)", done: false },
      ],
      dateLastTalked: JSON.stringify(new Date()),
      placeLastTalked: "Boston Badminton"
    }
    setUserList(...userList, user)
    */
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };


  return (
    <>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" type="primary" onClick={showModal} />
      </Tooltip>
      <Modal title="Add Users" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <AddUserForm />
      </Modal>
    </>
  );
};

export default AddUserModal;