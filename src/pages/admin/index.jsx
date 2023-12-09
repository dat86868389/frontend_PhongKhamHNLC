import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
// import "antd/dist/antd.css";

const LoginDev = () => {
  const onFinish = (values) => {
    console.log("Received values:", values);
    // Xử lý đăng nhập ở đây
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <Form
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        className="w-64"
      >
        <Form.Item
          name="username"
          rules={[{ required: true, message: "Vui lòng nhập tên đăng nhập!" }]}
        >
          <Input placeholder="Tên đăng nhập" className="mb-4" />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
        >
          <Input.Password placeholder="Mật khẩu" className="mb-4" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>Ghi nhớ mật khẩu</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Đăng nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginDev;
