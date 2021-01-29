import React from "react";
import LoginPage from "./page/Login";
import LayoutPage from "./page";
import { inject, observer } from "mobx-react";
import "./App.scss";

interface Iprops {
  user?:any
} 
@inject("user")
@observer
export default class App extends React.Component<Iprops , any> {
  render() {
    return (
      <div>{this.props.user.isLogin === 'true' ? <LayoutPage /> : <LoginPage />}</div>
    );
  }
}
