import { useState } from 'react';
import Head from 'next/head'
import styles from '../styles/ContactPage.module.css'
import { DatePicker, message, Row, Col, Typography, Card, Space, Tooltip, Button, Modal, Form, Input } from 'antd';
const { Text, Link } = Typography;
// custom components
import UserCardList from '../src/pageComponents/UserCardLIst';
import UserTable from '../src/pageComponents/UserTable';
// utils
import { getDateText } from '../src/utils/utils';
// icons
import { SearchOutlined } from '@ant-design/icons';
import { BiTable } from 'react-icons/bi';
import { BsCardHeading } from 'react-icons/bs';

function AddUserModal({ userList, setUserList }) {
  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };
  // DATE PICKER
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };

  // MODAL UTILS
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

  // INPUT BUTTONS
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <>
      <Tooltip title="search">
        <Button shape="circle" icon={<SearchOutlined />} size="large" type="primary" onClick={showModal} />
      </Tooltip>
      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          {...formItemLayout}
        >
          <Form.Item label="Name">
            <Form.Item
              noStyle
              name="Name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Place Last Talked" >
            <Form.Item
              noStyle
              name="Place"
              rules={[{ required: true, message: 'Please input the place you last talked!' }]}
            >
              <Input />
            </Form.Item>
          </Form.Item>

          <Form.Item label={`Date Last Talked`}>
            <Form.Item
              noStyle
              name="Date"
              rules={[{ required: true, message: 'Please input the date you last talked!' }]}
            >
              <DatePicker onChange={handleChange} />
              <Button type="link" onClick={() => console.log("Changed to today's date")}>Today</Button>
            </Form.Item>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

function MyRows({ userList }) {
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
          <AddUserModal />
        </Col>
      </Row>
    </>
  )
}

export default function ContactsPage({ userList = [], setUserList }) {
  const [isTableView, setIsTableView] = useState(false);
  const toggleTableView = () => setIsTableView(true);
  const toggleCardView = () => setIsTableView(false);
  const deleteUser = (id) => {
    setUserList(userList.filter((t) => t.id !== id))
  }
  const deleteUserList = (idList) => {
    setUserList(userList.filter((user) => !idList.includes(user.id)))
  }

  return (
    <div>
      <Head>
        <title>View Contacts | Contact Manager</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="keywords" content="react, contact, manager" />
        <meta name="author" content="Borghese-Gladiator" />
        <meta name="description" content="Quick utility to track people I talked to and how long ago it was. I built this since existing solutions I found were CRM tools (but I'm just talking to people for fun)." />
        <meta name="audience" content="Everyone" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Contacts
        </h1>
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }} />
          <div style={{ alignSelf: "flex-end" }}>
            <button onClick={toggleTableView}><BiTable />Table</button>
            <button onClick={toggleCardView}><BsCardHeading />Cards</button>
          </div>
        </div>
        <MyRows userList={userList} />
        {
          isTableView
            ? <UserTable userList={userList} deleteUser={deleteUser} />
            : <UserCardList userList={userList} deleteUserList={deleteUserList} />
        }
      </main>
    </div>
  )
}