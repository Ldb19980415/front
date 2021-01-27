import React from "react";
// import worker from "./worker";
import LoginPage from "./page/Login";
import LayoutPage from "./page";
import { Button } from "antd";
import { inject, observer } from "mobx-react";
// import {Provider} from 'mobx-react'
@inject("user")
@observer
export default class App extends React.Component<any, any> {
  render() {
    return (
      <div>{this.props.user.isLogin ? <LayoutPage /> : <LoginPage />}</div>
    );
  }
}
