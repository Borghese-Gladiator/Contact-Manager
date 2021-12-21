import { useState } from "react";
import { DatePicker, Button, Form, Input } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

const worker = {
  dateLastTalked: moment()
};

function AddUserForm({ createUser }) {
  // FORM 
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
  const onFinish = (values) => {
    console.log('Success:', values);
    const { name, placeLastTalked, dateLastTalked, bio, contact } = values;
    const newUser = {
      id: uuidv4(),
      name,
      placeLastTalked,
      dateLastTalked,
      notesList: [],
      bio: bio === null ? "": bio,
      contact: contact === null ? "": contact,
    }
    createUser(newUser)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Form
      name="basic"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      initialValues={{ dateLastTalked: moment() }}
      {...formItemLayout}
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please input the name!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Place Last Talked"
        name="placeLastTalked"
        rules={[{ required: true, message: 'Please input the place you last talked!' }]}
      >
        <Input />
      </Form.Item>
      
      <Form.Item label="Date Last Talked" name="dateLastTalked" hasFeedback>
        <DatePicker style={{ width: '100%' }} showToday />
      </Form.Item>

      <Form.Item
        label="Short Bio"
        name="bio"
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Contact Info"
        name="contact"
        rules={[{ required: false }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default AddUserForm;