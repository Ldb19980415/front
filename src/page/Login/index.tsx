import React from "react";
import { inject, observer } from "mobx-react";
import { createBrowserHistory } from "history";
import { Button } from "antd";
import Show from "./Show";
const browserHistory = createBrowserHistory();
@inject("user")
@observer
export default class Login extends React.Component<any, any> {
  // 发送登录请求，请求成功就把user里面的islogin置为true
  // 并且使用browserHistory进行页面跳转browserHistory.push("/home");
  goToHome = () => {
    this.props.user.login();
  };
  render() {
    return (
      <div>
        <div>这里是登录界面</div>
        <Button onClick={this.goToHome}>登录</Button>
      </div>
    );
  }
}
