import { DatePicker, Button, Form, Input, Space, message } from 'antd';
import moment from 'moment';
import { generateUserObject } from "../../utils/utils";

function AddUserForm({ createUser }) {
  const [form] = Form.useForm();
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
    const { name, placeLastTalked, dateLastTalked, bio, contact } = values;
    const newUser = generateUserObject(values)
    createUser(newUser)
    message.info(`"${name}" was added`)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    message.error(`Failed to add - ${errorInfo}`)
  };
  return (
    <Form
      name="basic"
      form={form}
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
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button onClick={() => form.resetFields()}>
            Clear
          </Button>
        </Space>
      </Form.Item>
    </Form >
  )
}

export default AddUserForm;