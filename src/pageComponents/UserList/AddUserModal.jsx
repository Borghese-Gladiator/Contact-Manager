import { useState } from "react";
import { DatePicker, message, Row, Col, Typography, Card, Space, Tooltip, Button, Modal, Form, Input } from 'antd';
const { Text, Link } = Typography;
import { PlusCircleOutlined } from '@ant-design/icons';

import AddUserForm from "./AddUserForm";

function AddUserModal({ addUser }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Tooltip title="Add user">
        <Button type="primary" shape="circle" icon={<PlusCircleOutlined style={{ fontSize: 20, color: "white" }} />} onClick={showModal} />
      </Tooltip>
      <Modal
        title="Add Users"
        visible={isModalVisible}
        onCancel={handleCancel}
        okButtonProps={{ style: { display: 'none' } }}
      >
        <AddUserForm addUser={addUser} />
      </Modal>
    </>
  );
};

export default AddUserModal;