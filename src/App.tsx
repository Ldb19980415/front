import React from "react";
import LoginPage from "./page/Login";
import LayoutPage from "./page";
import { inject, observer } from "mobx-react";
// import { InjectedIntlProps } from 'umi'
import "./App.scss";

interface Iprops {
  user?:any
} 
@inject("user")
@observer
export default class App extends React.Component<Iprops , any> {
  render() {
    console.log(this.props);
    
    return (
      <div>{this.props.user.isLogin ? <LayoutPage /> : <LoginPage />}</div>
    );
  }
}
