import { useState } from "react";
import { DatePicker, message, Row, Col, Typography, Card, Space, Tooltip, Button, Modal, Form, Input } from 'antd';

function AddUserForm() {
  // DATE PICKER
  const [date, setDate] = useState(null);
  const handleChange = value => {
    message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };
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
        name="place"
        rules={[{ required: true, message: 'Please input  the place you last talked!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={`Date Last Talked`}
        name="Date"
        rules={[{ required: true, message: 'Please input the date you last talked!' }]}
      >
        <DatePicker onChange={handleChange} />
        <Button type="link" onClick={() => console.log("Changed to today's date")}>Today</Button>
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