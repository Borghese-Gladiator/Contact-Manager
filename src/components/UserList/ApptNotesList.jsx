import { useState } from 'react';

import {
  Card, Space, Typography, Row, Col, Input, Modal, DatePicker, Form, Button, Popconfirm, message
} from 'antd';
const { Text } = Typography;
import { DeleteOutlined } from '@ant-design/icons';

import moment from 'moment';

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
  // Form modal
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
    const { location, date } = values;
    setAppointment({
      date: date,
      dateString: date.format('YYYY-MM-DD'),
      location: location
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  // Delete Appointment
  const handleDeleteBtnClick = () => {
    setAppointment(null);
  }

  return (
    <>
      <div>
        {appointment === null
          ?
          <Card hoverable onClick={showModal}>
            <Text>No appointments!</Text>
          </Card>
          :
          <Row justify="center" align="middle">
            <Col xs={22}>
              <Card hoverable onClick={showModal}>
                <Space direction="vertical" style={{ cursor: 'pointer' }}>
                  <Text>Meet Location: <Text strong>{appointment.location}</Text></Text>
                  <Text>Date: <Text strong>{appointment.dateString}</Text></Text>
                </Space>
              </Card>
            </Col>
            <Col xs={2}>
              <Popconfirm
                title={`Are you sure to delete this appointment?`}
                onConfirm={() => { message.success('Deleted successfully'); handleDeleteBtnClick(); }}
                onCancel={() => message.error('Delete cancelled')}
                okText="Yes"
                cancelText="No"
              >
                <Button
                  icon={<DeleteOutlined />}
                  size="small"
                  type="primary"
                  danger
                />
              </Popconfirm>
            </Col>
          </Row>
        }
      </div>
      <Modal
        title="Set Appointment"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{
          style: {
            display: "none",
          },
        }}
      >
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          initialValues={{ location: appointment === null ? "" : appointment.location, date: appointment === null ? "" : moment(appointment.date) }}
          {...formItemLayout}
        >
          <Form.Item
            label="Location"
            name="location"
            rules={[{ required: true, message: 'Please input the location!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: 'Please input the date!' }]}
          >
            <DatePicker style={{ width: '100%' }} showToday />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  )
}

export default ApptNotesList;