import { useState } from 'react';

import { Typography, Input, Modal, Space } from 'antd';
const { Search } = Input;
const { Text } = Typography;

import { PlusCircleOutlined } from '@ant-design/icons';

import { createNoteItem } from "../../utils/utils";

function NoteList({ itemList, setItemList }) {
  // <Input addonAfter={<DeleteOutlined />} placeholder={item} enterButton />
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
    setItemList([...itemList, createNoteItem("Default text")])
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

  console.log(itemList)

  return (
    <div>
      <Space direction="vertical" onClick={showModal}>
        {itemList.length <= 0 && <Text>No notes here!</Text>}
        {itemList.map(({ id, text }, idx) => {
          return (
            <Text key={`note-item-${id}`}>{text}</Text>
          )
        })}
      </Space>
      <Modal
        title="View Notes"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        {itemList.map(({ id, text }, idx) => {
          return (
            <Input key={`note-item-${id}`} defaultValue={text} onPressEnter={(e) => handleUpdate(e, id)} />
          )
        })}
        <Text onClick={handleAdd}>
          <PlusCircleOutlined /> List Item
        </Text>
      </Modal>
    </div>
  )
}

export default NoteList;