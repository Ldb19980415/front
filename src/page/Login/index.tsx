import React from "react";
import { inject, observer } from "mobx-react";
import { observable } from "mobx";
import { Form, Input, Checkbox, Row, Col, Button } from "antd";
import { FormInstance } from "antd/lib/form";
import s from "./index.module.scss";
const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 16 },
};
@inject("user")
@observer
export default class Login extends React.Component<any, any> {
  // 发送登录请求，请求成功就把user里面的islogin置为true
  // 并且使用browserHistory进行页面跳转browserHistory.push("/home");
  @observable loading: boolean = false;

  formRef = React.createRef<FormInstance>();
  clickLogin = async(values: any) => {
    await this.props['user'].login(values)
  };
  render() {
    return (
      <div className={s["container"]}>
        <div className={s["loginBox"]}>
          <h1>登录</h1>
          <Form ref={this.formRef} {...layout} onFinish={this.clickLogin}>
            <Form.Item
              label="用户名"
              name="username"
              rules={[{ required: true, message: "用户名不能为空" }]}
            >
              <Input placeholder="请输入用户名" autoComplete="off" />
            </Form.Item>
            <Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: "密码不能为空" }]}
            >
              <Input.Password placeholder="请输入用户名" autoComplete="off" />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              style={{ marginTop: "40px" }}
            >
              登录
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}
