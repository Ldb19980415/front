import React from "react";

import worker from "./worker";
import LoginPage from "./page/Login";
import LayoutPage from "./page";
export default class App extends React.Component {
  render() {
    const { user } = worker;
    return <div>{user?.isLogin ? <LayoutPage /> : <LoginPage />}</div>;
  }
}
